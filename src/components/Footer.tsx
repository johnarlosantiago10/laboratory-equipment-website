import { FlaskConical, Mail, Phone, MapPin } from 'lucide-react';
import { useRouter, type RouteState } from '@/router';

const links: { label: string; route: RouteState }[] = [
  { label: 'Home', route: { name: 'home' } },
  { label: 'Products', route: { name: 'products' } },
  { label: 'Services', route: { name: 'services' } },
  { label: 'About', route: { name: 'about' } },
  { label: 'Contact', route: { name: 'contact' } },
];

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-white">
            <FlaskConical className="h-7 w-7 text-brand-400" />
            <span className="font-display text-lg font-bold">
              LabEquip<span className="text-brand-400">PH</span>
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
            A demo laboratory equipment supplier website. Products, brands, and
            specifications shown here are illustrative sample data.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => navigate(l.route)}
                  className="text-slate-400 hover:text-brand-400"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Get in touch</h3>
          <ul className="mt-3 space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-400" />
              <span>demo&#64;labequipph.example</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-400" />
              <span>+63 (0) 000 000 0000</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-400" />
              <span>Sample address, Metro Manila, Philippines</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} LabEquipPH (demo). Not a real business.</p>
          <p>Built for demonstration purposes.</p>
        </div>
      </div>
    </footer>
  );
}
