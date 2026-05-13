import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";

export function ContactForm() {
  const { t } = useLang();
  const f = t.contact.form;
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        (e.target as HTMLFormElement).reset();
        window.setTimeout(() => setSent(false), 5000);
      }}
      className="grid gap-4 sm:grid-cols-2"
    >
      <Field label={f.firstName} name="firstName" required />
      <Field label={f.lastName} name="lastName" required />
      <Field label={f.email} name="email" type="email" required />
      <Field label={f.phone} name="phone" type="tel" />
      <div className="sm:col-span-2">
        <label className="block text-[10px] font-display font-bold uppercase tracking-widest text-accent mb-2">
          {f.type}
        </label>
        <select
          name="type"
          required
          className="w-full bg-card border border-border px-4 py-3 text-sm focus:border-primary outline-none"
        >
          {f.types.map((typ) => (
            <option key={typ} value={typ}>{typ}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="block text-[10px] font-display font-bold uppercase tracking-widest text-accent mb-2">
          {f.message}
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full bg-card border border-border px-4 py-3 text-sm focus:border-primary outline-none resize-none"
        />
      </div>
      <div className="sm:col-span-2 flex items-center gap-4 flex-wrap">
        <button
          type="submit"
          className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display text-xs font-bold uppercase tracking-widest clip-diagonal hover:bg-primary/90 transition-colors overflow-hidden"
        >
          <span className="relative z-10">{f.submit}</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </button>
        {sent && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-accent"
          >
            ✓ {f.success}
          </motion.span>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] font-display font-bold uppercase tracking-widest text-accent mb-2">
        {label}{required && " *"}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-card border border-border px-4 py-3 text-sm focus:border-primary outline-none"
      />
    </div>
  );
}
