export default function Home() {
  // Inline photo swap component
  function HoverSwapPhoto() {
    return (
      <div className="relative w-40 h-40 md:w-[220px] md:h-[220px] rounded-xl overflow-hidden group shadow-sm border border-black/5">
        {/* Default headshot (desktop hover) */}
        <img
          src="/headshot.jpg"
          className="hidden md:block absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
        />

        {/* Chalkboard photo (hover on desktop, always on mobile) */}
        <img
          src="/writing_math.jpg"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 md:opacity-0 md:group-hover:opacity-100"
        />
      </div>
    );
  }

  return (
    <section className="space-y-8">
      {/* Intro box */}
      <div className="card p-6 md:p-8 flex flex-col gap-6">
        {/* Top row: text + headshot side-by-side */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Text block */}
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Welcome</h2>
            <div className="prose">
              <p>
                I'm <strong>Benjamin Greene</strong>, an undergraduate studying mathematics at Duke University.
                I'm broadly interested in <em>combinatorial commutative algebra</em> and its intersection with algebraic geometry
                and topology. I also enjoy thinking about stochastic systems, especially from a geometric perspective.
              </p>
            </div>
          </div>

          {/* Headshot */}
          <div className="order-1 md:order-2 shrink-0 self-center md:self-start">
            <HoverSwapPhoto />
          </div>
        </div>

        {/* Second row: full-width paragraph */}
        <div className="prose mt-2">
          <p className="muted">
            Here you'll find my research notes and projects, as well as links to my resume/CV.
          </p>
        </div>
      </div>

      {/* Content below intro */}
      <div className="space-y-8">
        {/* Course notes + Resume cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <section className="card p-6">
            <h3 className="text-lg md:text-xl font-semibold">Course Notes</h3>
            <p className="prose mt-2">
              I digitally handwrite notes for many of my courses. Access them{" "}
              <a
                href="/notes"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                here
              </a>.
            </p>
          </section>

          <section className="card p-6">
            <h3 className="text-lg md:text-xl font-semibold">Resume & CV</h3>
            <p className="prose mt-2">
              Download my one-page{" "}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                resume
              </a>{" "}
              or extended{" "}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                CV
              </a>.
            </p>
          </section>
        </div>

        {/* Recent highlights (commented out) */}
        {/* 
        <section>
          <h3 className="text-xl font-semibold mb-3">Recent highlights</h3>
          <ul className="list-disc pl-6 space-y-1 prose">
            <li>Closed forms for combinatorial minimal free resolutions</li>
            <li>Behavior of sum-of-norms clustering on measures with high symmetry</li>
            <li>Graph diffusion for community detection in geospatial networks</li>
          </ul>
        </section> 
        */}

        {/* Current activities */}
        <section>
          <h3 className="text-xl font-semibold mb-3">What am I up to?</h3>
          <p className="prose mt-2">
            This semester, I'm taking{" "}
            <a
              href="https://pi.math.cornell.edu/~hatcher/AT/ATpage.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium"
            >
              algebraic topology
            </a>
            ,{" "}
            <a
              href="https://www.routledge.com/Introduction-to-Stochastic-Processes/Lawler/p/book/9781584886518"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium"
            >
              applied stochastic processes
            </a>
            , and doing an independent study on{" "}
            <a
              href="https://arxiv.org/abs/1212.3351"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium"
            >
              integrable probability
            </a>. I'm also attending minicourses on boundedness results in algebraic geometry and{" "}
            <a
              href="https://sites.duke.edu/quantifyinggerrymandering/quantifying-gerrymandering/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium"
            >
              the practice and mathematics of quantifying gerrymandering
            </a>. 
            Outside of classes, I am continuing research on minimal free resolutions of monomial ideals and sum-of-norms clustering.
            Perhaps most importantly, I am serving as the president of the{" "}
            <a
              href="https://math.duke.edu/duke-university-math-union-dumu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium"
            >
              Duke University Math Union
            </a>, where I aim to foster an inclusive mathematical community.
          </p>
        </section>
      </div>
    </section>
  );
}
