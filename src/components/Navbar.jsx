  import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-narrow py-6 md:py-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          
          {/* Left side: photo + name */}
          <div className="flex items-center gap-3">
            <div>
              <Link to="/" className="no-underline">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--ink)]">
                  Benjamin Greene
                </h1>
              </Link>
              <p className="muted mt-1">Mathematics @ Duke University</p>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="flex items-center gap-4 md:gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "underline" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/research"
              className={({ isActive }) =>
                `nav-link ${isActive ? "underline" : ""}`
              }
            >
              Research
            </NavLink>
            <NavLink
              to="/notes"
              className={({ isActive }) =>
                `nav-link ${isActive ? "underline" : ""}`
              }
            >
              Course Notes
            </NavLink>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
