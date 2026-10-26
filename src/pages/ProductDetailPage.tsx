import { useState } from 'react';
import { ArrowLeft, FileText, Check, Info } from 'lucide-react';
import { useRouter } from '@/router';
import { getProductById, getCategoryById, getBrandById } from '@/data';
import { PREPARING_MESSAGE } from '@/types';

export function ProductDetailPage({ id }: { id: string }) {
  const { navigate } = useRouter();
  const [sent, setSent] = useState(false);
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="section-title">Product not found</h1>
        <p className="mt-2 text-slate-600">
          This product is not yet listed. Product details are being prepared for verified
          manufacturer items.
        </p>
        <button
          onClick={() => navigate({ name: 'products' })}
          className="btn-primary mt-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to catalog
        </button>
      </div>
    );
  }

  const category = getCategoryById(product.categoryId);
  const brand = getBrandById(product.brandId);

  return (
    <div className="container-page py-10 sm:py-14">
      <button
        onClick={() => navigate({ name: 'products' })}
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-700"
      >
        <ArrowLeft className="h-4 w-4" /> Back to catalog
      </button>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="relative aspect-[4/3] bg-slate-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-brand-600">
            {brand?.name} · {category?.name}
          </p>
          <h1 className="mt-1 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
            {product.name}
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Brand: <span className="font-medium text-slate-800">{brand?.name}</span>
            <span className="mx-2 text-slate-300">|</span>
            Model: <span className="font-medium text-slate-800">{product.model}</span>
          </p>

          <p className="mt-4 leading-relaxed text-slate-700">{product.description}</p>

          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="flex items-center gap-2 font-display font-semibold text-slate-900">
              <FileText className="h-4 w-4 text-brand-600" /> Specifications
            </h2>
            <dl className="mt-3 divide-y divide-slate-100">
              {product.specifications.map((s) => (
                <div key={s.label} className="grid grid-cols-2 gap-2 py-2 text-sm">
                  <dt className="text-slate-500">{s.label}</dt>
                  <dd className="font-medium text-slate-800">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6">
            {sent ? (
              <div className="flex items-center gap-2 rounded-xl border border-accent-200 bg-accent-50 px-4 py-3 text-accent-800">
                <Check className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Your quote request has been noted. (Demo — no real request is sent.)
                </span>
              </div>
            ) : (
              <button
                onClick={() => setSent(true)}
                className="btn-primary w-full sm:w-auto"
              >
                Request a Quote
              </button>
            )}
            <p className="mt-2 flex items-start gap-1.5 text-xs text-slate-500">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              {PREPARING_MESSAGE}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
