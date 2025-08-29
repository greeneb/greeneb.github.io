import { useId, useState } from "react";

function FileIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--muted)]">
      <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm1 7V3.5L19.5 8H15Z"/>
    </svg>
  );
}

function NoteItem({ title, href, size }) {
  return (
    <li className="group">
      <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 p-3 rounded-lg no-underline hover:bg-black/5">
        <span className="flex items-center gap-3">
          <FileIcon />
          <span className="font-medium text-[var(--ink)] group-hover:underline">{title}</span>
        </span>
        <span className="flex items-center gap-2 text-xs">
          {size ? <span className="muted">{size}</span> : null}
          <span className="px-2 py-0.5 rounded-full border border-black/10 bg-white/70">PDF</span>
        </span>
      </a>
    </li>
  );
}

import notesData from "../data/notes.json";

function Chevron({ open }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}>
      <path fill="currentColor" d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
    </svg>
  );
}

function Section({ section }) {
  const panelId = `${useId()}-panel`;
  const [open, setOpen] = useState(true);
  return (
    <div className="space-y-3">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 bg-transparent p-0 hover:no-underline"
      >
        <span className="flex items-baseline gap-3">
          <span className="text-xs tracking-wide uppercase px-2 py-0.5 rounded border border-black/10 bg-white/70 text-[var(--muted)]">{section.code}</span>
          <span className="text-lg font-semibold text-left">{section.title}</span>
        </span>
        <Chevron open={open} />
      </button>
      {open && (
        <div className="card" id={panelId}>
          <ul className="divide-y divide-black/5">
            {(section.items || []).map((item) => (
              <NoteItem key={item.title} {...item} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Notes() {
  const sections = notesData.sections.map((s) => ({
    ...s,
    items: (s.items || []).map((it) => {
      const href = it.href?.startsWith("/") ? it.href : `/notes/${it.href}`;
      const size = it.size;
      return { ...it, href, size };
    }),
  }));

  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">Lecture Notes</h1>
        <p className="muted">Some notes I've accumulated over time.</p>
      </header>

      <div className="space-y-10">
        {sections.map((section) => (
          <Section key={section.title} section={section} />
        ))}
      </div>
    </section>
  );
}
