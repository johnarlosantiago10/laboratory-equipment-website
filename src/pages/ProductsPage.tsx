import { useEffect, useMemo, useState } from 'react';
import { Search, SlidersHorizontal, Info, PackageOpen } from 'lucide-react';
import {
  brands,
  categories,
  products,
  productsForBrandCategory,
  showcaseForBrandCategory,
  getBrandById,
  getCategoryById,
} from '@/data';
import type { Product } from '@/types';
import { ProductCard } from '@/components/ProductCard';
import { ShowcaseCard } from '@/components/ShowcaseCard';
import { PREPARING_MESSAGE } from '@/types';

export function ProductsPage() {
  const [query, setQuery] = useState('');
  const [activeBrand, setActiveBrand] = useState<string>('all');
  const [activeCat, setActiveCat] = useState<string>('all');

  const visibleBrands = useMemo(
    () => (activeBrand === 'all' ? brands : brands.filter((b) => b.id === activeBrand)),
    [activeBrand],
  );

  const availableCategoryIds = useMemo(
    () => new Set(visibleBrands.flatMap((b) => b.categoryIds)),
    [visibleBrands],
  );

  const visibleCategories = useMemo(
    () => categories.filter((c) => availableCategoryIds.has(c.id)),
    [availableCategoryIds],
  );

  // When the active brand changes, a previously selected category may no longer
  // be offered by any visible brand. Reset it to "all" so the user never sees a
  // false "No products found" caused by stale category state.
  useEffect(() => {
    if (activeCat !== 'all' && !availableCategoryIds.has(activeCat)) {
      setActiveCat('all');
    }
  }, [activeCat, availableCategoryIds]);

  const q = query.trim().replace(/\s+/g, ' ').toLowerCase();
  const matchesQuery = (text: string) =>
    !q || text.toLowerCase().replace(/\s+/g, ' ').includes(q);

  // Single derived pass from the original product list + current filter values.
  // Never filters an already-filtered list, so there is no stale accumulation.
  const results = useMemo<Product[]>(() => {
    return products.filter((p) => {
      const brand = getBrandById(p.brandId);
      const cat = getCategoryById(p.categoryId);
      const matchesBrand = activeBrand === 'all' || p.brandId === activeBrand;
      const matchesCat = activeCat === 'all' || p.categoryId === activeCat;
      const matchesSearch =
        matchesQuery(p.name) ||
        matchesQuery(p.model) ||
        matchesQuery(p.summary) ||
        matchesQuery(brand?.name ?? '') ||
        matchesQuery(cat?.name ?? '');
      return matchesBrand && matchesCat && matchesSearch;
    });
  }, [activeBrand, activeCat, q]);

  // Group results by brand then category for display.
  const grouped = useMemo(() => {
    return visibleBrands
      .map((brand) => {
        const cats = visibleCategories.filter(
          (c) =>
            brand.categoryIds.includes(c.id) &&
            (activeCat === 'all' || c.id === activeCat),
        );
        return {
          brand,
          cats: cats.map((cat) => ({
            cat,
            items: results.filter(
              (p) => p.brandId === brand.id && p.categoryId === cat.id,
            ),
          })),
        };
      })
      .filter((g) => g.cats.length > 0);
  }, [visibleBrands, visibleCategories, activeCat, results]);

  const isFiltering = q.length > 0 || activeBrand !== 'all' || activeCat !== 'all';

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="flex flex-col gap-2">
        <h1 className="section-title">Product Catalog</h1>
        <p className="text-slate-600">
          Browse laboratory equipment organized by manufacturer and category. Product
          details will be published as soon as they are verified.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search product, brand, or model..."
            className="field pl-9"
            aria-label="Search products"
          />
        </div>

        <div className="flex flex-col gap-3">
          <FilterRow
            label="Brand"
            icon={<SlidersHorizontal className="h-4 w-4 shrink-0 text-slate-500" />}
            options={[{ id: 'all', name: 'All' }, ...brands.map((b) => ({ id: b.id, name: b.name }))]}
            active={activeBrand}
            onChange={setActiveBrand}
          />
          {visibleCategories.length > 0 && (
            <FilterRow
              label="Category"
              icon={null}
              options={[{ id: 'all', name: 'All' }, ...visibleCategories.map((c) => ({ id: c.id, name: c.name }))]}
              active={activeCat}
              onChange={setActiveCat}
            />
          )}
        </div>
      </div>

      {isFiltering && (
        <p className="mt-6 text-sm text-slate-500">
          {results.length} {results.length === 1 ? 'product' : 'products'} found
        </p>
      )}

      {results.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <p className="font-medium text-slate-700">No products match your search.</p>
          <p className="mt-1 text-sm text-slate-500">
            Try a different keyword, or clear the brand and category filters.
          </p>
        </div>
      ) : (
        <div className="mt-10 space-y-12">
          {grouped.map(({ brand, cats }) => (
            <section key={brand.id}>
              <BrandHeader
                name={brand.name}
                tagline={brand.tagline}
                description={brand.description}
              />

              <div className="mt-6 space-y-10">
                {cats.map(({ cat, items }) => {
                  const showcase = showcaseForBrandCategory(brand.id, cat.id);
                  const showShowcase =
                    items.length === 0 &&
                    showcase &&
                    (matchesQuery(brand.name) || matchesQuery(cat.name));

                  return (
                    <div key={cat.id}>
                      <h3 className="font-display text-lg font-semibold text-slate-900">
                        {brand.name} · {cat.name}
                      </h3>

                      {items.length > 0 ? (
                        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                          {items.map((p) => (
                            <ProductCard key={p.id} product={p} />
                          ))}
                        </div>
                      ) : showShowcase && showcase ? (
                        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                          <ShowcaseCard showcase={showcase} />
                        </div>
                      ) : items.length === 0 ? (
                        <PreparingNotice
                          brandName={brand.name}
                          categoryName={cat.name}
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

function BrandHeader({
  name,
  tagline,
  description,
}: {
  name: string;
  tagline: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <h2 className="font-display text-xl font-bold text-slate-900">{name}</h2>
        <span className="chip bg-brand-50 text-brand-700">{tagline}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}

function PreparingNotice({
  brandName,
  categoryName,
}: {
  brandName: string;
  categoryName: string;
}) {
  return (
    <div className="mt-4 flex flex-col items-start gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 sm:flex-row sm:items-center">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
        <PackageOpen className="h-5 w-5" />
      </span>
      <div>
        <p className="font-medium text-slate-800">
          {brandName} · {categoryName} — details being prepared
        </p>
        <p className="mt-1 flex items-start gap-1.5 text-sm text-slate-600">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
          {PREPARING_MESSAGE}
        </p>
      </div>
    </div>
  );
}

function FilterRow({
  label,
  icon,
  options,
  active,
  onChange,
}: {
  label: string;
  icon: React.ReactNode;
  options: { id: string; name: string }[];
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1">
      {icon}
      <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </span>
      {options.map((o) => (
        <button
          key={o.id}
          onClick={() => onChange(o.id)}
          className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
            active === o.id
              ? 'bg-brand-600 text-white'
              : 'border border-slate-300 bg-white text-slate-600 hover:border-brand-400 hover:text-brand-700'
          }`}
        >
          {o.name}
        </button>
      ))}
    </div>
  );
}

export { getBrandById, getCategoryById, productsForBrandCategory };
