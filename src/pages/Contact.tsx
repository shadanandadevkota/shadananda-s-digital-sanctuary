import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import Paren from "@/components/Paren";
import { profile } from "@/data/portfolio";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact — Shadananda Devkota";
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Front-end only for now: open mail client with prefilled body
    const body = encodeURIComponent(
      `Hi Shadananda,\n\n${form.message}\n\n— ${form.name}${form.company ? ` (${form.company})` : ""}\nBudget: ${form.budget || "—"}\nReply: ${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("New project inquiry — " + form.name)}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email client…");
      setSubmitting(false);
    }, 400);
  };

  return (
    <article className="pt-32 md:pt-40 pb-20">
      <div className="container-editorial">
        <div className="flex items-start justify-between mb-10 md:mb-16">
          <Paren>Contact — Say hello</Paren>
          <Paren className="hidden md:inline">Replying within 24h</Paren>
        </div>

        <h1 className="h-display text-balance">
          Let&apos;s build<br />
          something <span className="italic">worth keeping</span>.
        </h1>

        <div className="mt-20 md:mt-28 grid md:grid-cols-12 gap-10 md:gap-16">
          <aside className="md:col-span-4 space-y-10">
            <div className="border-t border-foreground/30 pt-5">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">( 01 ) — Direct</p>
              <a href={`mailto:${profile.email}`} className="block font-display text-2xl">{profile.email}</a>
            </div>
            <div className="border-t border-foreground/30 pt-5">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">( 02 ) — Social</p>
              <ul className="space-y-2 text-base">
                <li><a href={profile.github} target="_blank" rel="noreferrer" className="editorial-link">GitHub ↗</a></li>
                <li><a href={profile.linkedin} target="_blank" rel="noreferrer" className="editorial-link">LinkedIn ↗</a></li>
                <li><a href={profile.twitter} target="_blank" rel="noreferrer" className="editorial-link">Twitter ↗</a></li>
              </ul>
            </div>
            <div className="border-t border-foreground/30 pt-5">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">( 03 ) — Based in</p>
              <p className="font-display text-xl">{profile.location}</p>
              <p className="text-foreground/60 text-sm mt-1">Working worldwide · UTC+5:45</p>
            </div>
          </aside>

          <form onSubmit={onSubmit} className="md:col-span-8 space-y-8">
            <Field label="01 — Your name" required>
              <input
                type="text" required value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="contact-input"
                placeholder="Jane Doe"
              />
            </Field>
            <Field label="02 — Email" required>
              <input
                type="email" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="contact-input"
                placeholder="jane@studio.com"
              />
            </Field>
            <div className="grid md:grid-cols-2 gap-8">
              <Field label="03 — Company">
                <input
                  type="text" value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="contact-input"
                  placeholder="Studio (optional)"
                />
              </Field>
              <Field label="04 — Budget">
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="contact-input bg-transparent"
                >
                  <option value="">Select range</option>
                  <option>Under $5k</option>
                  <option>$5k — $15k</option>
                  <option>$15k — $50k</option>
                  <option>$50k +</option>
                </select>
              </Field>
            </div>
            <Field label="05 — Tell me about it" required>
              <textarea
                required rows={6} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="contact-input resize-none"
                placeholder="What are you building? Timeline, goals, links…"
              />
            </Field>

            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex items-center gap-3 text-lg md:text-xl border-b border-foreground pb-1 disabled:opacity-50"
            >
              {submitting ? "Sending…" : "Send inquiry"}
              <ArrowUpRight className="size-5 arrow-shift" />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid hsl(var(--foreground) / 0.25);
          padding: 0.75rem 0;
          font-family: inherit;
          font-size: 1.05rem;
          color: hsl(var(--foreground));
          outline: none;
          transition: border-color 0.3s ease;
        }
        .contact-input:focus {
          border-bottom-color: hsl(var(--foreground));
        }
        .contact-input::placeholder {
          color: hsl(var(--muted-foreground));
        }
      `}</style>
    </article>
  );
};

const Field = ({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
      ( {label} ) {required && <span className="text-accent">*</span>}
    </span>
    <div className="mt-2">{children}</div>
  </label>
);

export default Contact;
