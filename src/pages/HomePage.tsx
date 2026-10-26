import {
  ArrowRight,
  Beaker,
  ShieldCheck,
  Truck,
  Wrench,
  FlaskConical,
  Info,
} from 'lucide-react';
import { useRouter } from '@/router';
import { brands, products } from '@/data';
import { ProductCard } from '@/components/ProductCard';
import { PREPARING_MESSAGE } from '@/types';

export function HomePage() {
  const { navigate } = useRouter();
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/11703173/pexels-photo-11703173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative container-page py-20 sm:py-28">
          <div className="max-w-2xl">
            <span className="chip border border-brand-400/40 bg-brand-500/10 text-brand-100">
              Authorized supplier brands · Details coming soon
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Laboratory equipment for Philippine labs
            </h1>
            <p className="mt-4 text-lg text-brand-100">
              We supply equipment from manufacturers such as ZenithLab, Sysmex, and BIOBASE.
              Product details are being prepared and will be published once verified.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate({ name: 'products' })}
                className="btn bg-white px-5 py-3 text-brand-800 hover:bg-brand-50"
              >
                Browse Catalog <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate({ name: 'contact' })}
                className="btn border border-brand-400/50 bg-transparent px-5 py-3 text-white hover:bg-brand-500/20"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
        <div className="relative border-t border-white/10 bg-brand-950/40">
          <div className="container-page grid grid-cols-2 gap-6 py-6 text-white sm:grid-cols-4">
            {[
              { icon: Truck, label: 'Nationwide delivery' },
              { icon: Wrench, label: 'Installation & setup' },
              { icon: ShieldCheck, label: 'Service & warranty' },
              { icon: Beaker, label: 'Verified products only' },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-sm">
                <f.icon className="h-5 w-5 text-brand-300" />
                <span className="text-brand-100">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="section-title">Manufacturers</h2>
            <p className="mt-2 text-slate-600">
              Brands we carry. Product listings are being prepared.
            </p>
          </div>
          <button
            onClick={() => navigate({ name: 'products' })}
            className="hidden items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-800 sm:inline-flex"
          >
            View catalog <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <button
              key={b.id}
              onClick={() => navigate({ name: 'products' })}
              className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 text-left shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-300"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-100">
                <FlaskConical className="h-5 w-5" />
              </span>
              <span>
                <span className="flex items-center gap-2">
                  <span className="block font-display font-semibold text-slate-900">
                    {b.name}
                  </span>
                  <span className="chip bg-brand-50 text-brand-700">{b.tagline}</span>
                </span>
                <span className="mt-1 block text-sm text-slate-600">{b.description}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {featured.length > 0 && (
        <section className="bg-white py-16">
          <div className="container-page">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="section-title">Featured products</h2>
                <p className="mt-2 text-slate-600">Selected verified products.</p>
              </div>
              <button
                onClick={() => navigate({ name: 'products' })}
                className="hidden items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-800 sm:inline-flex"
              >
                All products <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-page py-16">
        <div className="rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 px-6 py-12 text-center text-white sm:px-12">
          <FlaskConical className="mx-auto h-10 w-10 text-brand-300" />
          <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
            Looking for something specific?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-brand-100">
            Send us your requirements and we'll prepare a quotation. (Demo form — no real
            request is sent.)
          </p>
          <button
            onClick={() => navigate({ name: 'contact' })}
            className="mt-6 btn bg-white px-6 py-3 text-brand-800 hover:bg-brand-50"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-6 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{PREPARING_MESSAGE}</span>
        </div>
      </section>
    </div>
  );
}
