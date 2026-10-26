import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

export function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="max-w-2xl">
        <h1 className="section-title">Contact & Request a Quote</h1>
        <p className="mt-2 text-slate-600">
          Send us a message or a quote request. This is a demo form — nothing is actually
          sent or stored.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-1">
          <ContactItem
            icon={Mail}
            title="Email"
            value="demo&#64;labequipph.example"
          />
          <ContactItem icon={Phone} title="Phone" value="+63 (0) 000 000 0000" />
          <ContactItem
            icon={MapPin}
            title="Address"
            value="Sample address, Metro Manila, Philippines"
          />
          <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Contact details are sample placeholders.
          </div>
        </div>

        <div className="lg:col-span-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Full name
                </label>
                <input required className="field" placeholder="Juan Dela Cruz" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="field"
                  placeholder="you&#64;example.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Organization
                </label>
                <input className="field" placeholder="Lab / institution" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Phone (optional)
                </label>
                <input className="field" placeholder="+63 ..." />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Product or requirement
              </label>
              <textarea
                required
                rows={5}
                className="field"
                placeholder="Tell us what equipment you need..."
              />
            </div>

            {sent ? (
              <div className="mt-5 flex items-center gap-2 rounded-xl border border-accent-200 bg-accent-50 px-4 py-3 text-accent-800">
                <Check className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Thank you! Your demo message has been recorded locally only.
                </span>
              </div>
            ) : (
              <button type="submit" className="btn-primary mt-5">
                <Send className="h-4 w-4" /> Send request
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  title,
  value,
}: {
  icon: typeof Mail;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {title}
        </p>
        <p className="mt-0.5 text-sm font-medium text-slate-800">{value}</p>
      </div>
    </div>
  );
}
