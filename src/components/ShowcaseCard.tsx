import { Clock, ImageOff } from 'lucide-react';
import type { CategoryShowcase } from '@/types';
import { getBrandById, getCategoryById } from '@/data';
import { PREPARING_MESSAGE, ILLUSTRATIVE_IMAGE_NOTE } from '@/types';

export function ShowcaseCard({ showcase }: { showcase: CategoryShowcase }) {
  const brand = getBrandById(showcase.brandId);
  const category = getCategoryById(showcase.categoryId);
  const pending = showcase.status === 'pending';

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={showcase.image}
          alt={showcase.altText}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-600 backdrop-blur">
          <ImageOff className="h-3.5 w-3.5" /> Illustrative
        </span>
        {pending && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50/95 px-2.5 py-1 text-xs font-medium text-amber-700 backdrop-blur">
            <Clock className="h-3.5 w-3.5" /> Coming soon
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-brand-600">
          {brand?.name ?? ''}
        </p>
        <h3 className="mt-1 font-display text-base font-semibold text-slate-900">
          {category?.name ?? ''}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-sm text-slate-600">
          {showcase.description}
        </p>

        {pending && (
          <div className="mt-4 border-t border-slate-100 pt-3">
            <p className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700">
              <Clock className="h-3.5 w-3.5" /> Product details coming soon
            </p>
            <p className="mt-1 text-xs text-slate-500">{PREPARING_MESSAGE}</p>
          </div>
        )}

        <p className="mt-3 text-[11px] text-slate-400">{ILLUSTRATIVE_IMAGE_NOTE}</p>
      </div>
    </article>
  );
}
