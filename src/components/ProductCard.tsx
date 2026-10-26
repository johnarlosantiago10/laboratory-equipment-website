import { ArrowRight, PackageOpen } from 'lucide-react';
import type { Product } from '@/types';
import { useRouter } from '@/router';
import { getBrandById } from '@/data';
import { PREPARING_MESSAGE } from '@/types';

export function ProductCard({ product }: { product: Product }) {
  const { navigate } = useRouter();
  const brand = getBrandById(product.brandId);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300">
      <button
        onClick={() => navigate({ name: 'product', id: product.id })}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-slate-100"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </button>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-brand-600">
          {brand?.name ?? ''} · {product.model}
        </p>
        <h3 className="mt-1 font-display text-base font-semibold text-slate-900">
          {product.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-slate-600">{product.summary}</p>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
          <span>Quote on request</span>
          <button
            onClick={() => navigate({ name: 'product', id: product.id })}
            className="inline-flex items-center gap-1 font-medium text-brand-700 hover:text-brand-800"
          >
            Details <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export function PendingCard({
  brandName,
  categoryName,
}: {
  brandName: string;
  categoryName: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5">
      <div>
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
          <PackageOpen className="h-5 w-5" />
        </span>
        <p className="mt-3 font-display text-base font-semibold text-slate-800">
          {brandName} · {categoryName}
        </p>
        <p className="mt-1 text-sm text-slate-600">{PREPARING_MESSAGE}</p>
      </div>
    </div>
  );
}
