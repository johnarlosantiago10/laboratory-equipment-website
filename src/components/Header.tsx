import { useEffect, useState } from 'react';
import { Menu, X, FlaskConical, ChevronRight } from 'lucide-react';
import { useRouter, type RouteState } from '@/router';

const links: { label: string; route: RouteState }[] = [
  { label: 'Home', route: { name: 'home' } },
  { label: 'Products', route: { name: 'products' } },
  { label: 'Services', route: { name: 'services' } },
  { label: 'About', route: { name: 'about' } },
  { label: 'Contact', route: { name: 'contact' } },
];

export function Header() {
  const { route, navigate } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (r: RouteState) => r.name === route.name;

  const go = (r: RouteState) => {
    navigate(r);
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-white'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <button
          onClick={() => go({ name: 'home' })}
          className="flex items-center gap-2 text-brand-700"
        >
          <FlaskConical className="h-7 w-7" />
          <span className="font-display text-lg font-bold tracking-tight text-slate-900">
            LabEquip<span className="text-brand-500">PH</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.route)}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(l.route)
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go({ name: 'contact' })}
            className="btn-primary ml-2 px-4 py-2 text-sm"
          >
            Request a Quote
            <ChevronRight className="h-4 w-4" />
          </button>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-page flex flex-col py-3">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => go(l.route)}
                className={`rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                  isActive(l.route)
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
