export default function Research() {
  return (
    <section className="space-y-10">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">Research & Projects</h1>
        <p className="muted">Selected research directions, collaborations, and technical projects.</p>
      </header>

      {/* Research Experience */}
      <div className="grid gap-6">
        <article className="card p-6">
          <h2 className="font-semibold">Combinatorial Minimal Free Resolutions (Duke, 2023-present)</h2>
          <p className="prose mt-2">
            Under Prof. Ezra Miller, I work on developing the theory of{" "}
            <a href="https://arxiv.org/abs/1906.08837" className="hover:underline" target="_blank" rel="noopener noreferrer">
              sylvan resolutions
            </a>: explicit closed forms for combinatorial minimal free resolutions
            of monomial ideals. This includes leading a reading group on combinatorial commutative algebra and mentoring
            a high school student in advanced algebra topics.
          </p>
        </article>

        <article className="card p-6">
          <h2 className="font-semibold">Sum-of-norms Clustering (Duke, 2024-present)</h2>
          <p className="prose mt-2">
            With Prof. Alex Dunlap, I analyze {" "}
            <a href="https://arxiv.org/abs/2104.13753" className="hover:underline" target="_blank" rel="noopener noreferrer">
              sum-of-norms clustering
            </a>
            {" "}using techniques from measure theory and partial differential
            equations. Our work improves theoretical bounds—achieving a 76% improvement in existing estimates—and
            studies algorithmic behavior on continuous and discrete distributions, mirroring machine learning datasets.
          </p>
        </article>

        <article className="card p-6">
          <h2 className="font-semibold">Data-Driven Community Detection (Duke, Summer 2025)</h2>
          <p className="prose mt-2">
            In collaboration with Profs. Ranthony Clark, Greg Herschlag, and Jonathan Mattingly, I designed a framework for assessing community
            membership from demographic and geospatial data. This included developing graph diffusion algorithms,
            applying weighted clustering techniques, and incorporating machine learning to evaluate demographic
            importance.
          </p>
        </article>
      </div>

      {/* Papers in Progress */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Papers in Development</h3>
        <ul className="list-disc pl-6 prose">
          <li><em>Several Applications of Sum-of-Norms Clustering</em> (with K. McLaughlin, S. Yu, A. Dunlap)</li>
          <li><em>Who's My Neighbor: Data-Driven Community Detection</em> (with L. James, A. Shen, R. Clark, G. Herschlag, J. Mattingly)</li>
        </ul>
      </div>

      {/* Technical Projects */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Select Technical Projects</h3>
        <ul className="list-disc pl-6 prose">
          <li>
            <a href="https://github.com/greeneb/wiedemann" className="hover:underline" target="_blank" rel="noopener noreferrer">
              Efficient solver for sparse linear equations over finite fields
            </a>{" "}(Python, NumPy, galois)
          </li>
          <li>
            <a href="https://github.com/greeneb/volsurfacetrading" className="hover:underline" target="_blank" rel="noopener noreferrer">
              Volatility surface momentum trading strategy
            </a>{" "}(QuantConnect, pandas, Scikit-learn)
          </li>
          <li>Expository paper & lecture on multiparameter persistent homology</li>
          <li>Fast Fourier Transform app in Java & gave lectures on Fourier Analysis</li>
        </ul>
      </div>
    </section>
  );
}