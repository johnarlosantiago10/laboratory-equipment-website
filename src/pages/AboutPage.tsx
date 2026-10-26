import { FlaskConical, Target, HeartHandshake, Building2 } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Our goal (demo)',
    description:
      'To make quality laboratory equipment accessible to research, clinical, and academic labs across the Philippines.',
  },
  {
    icon: HeartHandshake,
    title: 'How we work (demo)',
    description:
      'We aim to support labs from selection through installation and ongoing service.',
  },
  {
    icon: Building2,
    title: 'Who we serve (demo)',
    description:
      'Hospitals, universities, research institutes, and industrial laboratories.',
  },
];

export function AboutPage() {
  return (
    <div className="container-page py-10 sm:py-14">
      <div className="max-w-2xl">
        <h1 className="section-title">About LabEquipPH</h1>
        <p className="mt-2 text-slate-600">
          This is a demonstration website. The company, history, and details below are
          illustrative sample content.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <img
          src="https://images.pexels.com/photos/5953827/pexels-photo-5953827.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Laboratory"
          className="h-56 w-full object-cover sm:h-72"
        />
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-card"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <p.icon className="h-5 w-5" />
            </span>
            <h2 className="mt-4 font-display text-lg font-semibold text-slate-900">
              {p.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
        <FlaskConical className="mt-0.5 h-5 w-5 shrink-0" />
        <p>
          LabEquipPH is a fictional brand created for this demonstration. No real company,
          certifications, or affiliations are represented here.
        </p>
      </div>
    </div>
  );
}
