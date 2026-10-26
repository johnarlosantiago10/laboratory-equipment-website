import {
  Wrench,
  ShieldCheck,
  Truck,
  GraduationCap,
  ClipboardCheck,
  Settings,
} from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Delivery & Logistics',
    description:
      'Coordinated delivery of equipment to laboratories across the Philippines. (Demo)',
  },
  {
    icon: Wrench,
    title: 'Installation & Setup',
    description:
      'On-site installation, calibration assistance, and operational setup. (Demo)',
  },
  {
    icon: Settings,
    title: 'Preventive Maintenance',
    description:
      'Scheduled maintenance to keep instruments performing reliably. (Demo)',
  },
  {
    icon: ShieldCheck,
    title: 'Service & Warranty Support',
    description:
      'Troubleshooting, repair coordination, and warranty claims. (Demo)',
  },
  {
    icon: GraduationCap,
    title: 'Training & Demo Sessions',
    description:
      'Product orientation and hands-on training for lab staff. (Demo)',
  },
  {
    icon: ClipboardCheck,
    title: 'Procurement Consultation',
    description:
      'Help selecting the right equipment for your application and budget. (Demo)',
  },
];

export function ServicesPage() {
  return (
    <div className="container-page py-10 sm:py-14">
      <div className="max-w-2xl">
        <h1 className="section-title">Services</h1>
        <p className="mt-2 text-slate-600">
          A sample list of support services a laboratory equipment supplier might offer.
          These are illustrative only.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-300"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <s.icon className="h-5 w-5" />
            </span>
            <h2 className="mt-4 font-display text-lg font-semibold text-slate-900">
              {s.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
        All services listed above are sample content for demonstration purposes.
      </div>
    </div>
  );
}
