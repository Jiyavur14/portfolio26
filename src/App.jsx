import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="nav-bar flex justify-between">
        <h3 className="nav-logo text-[var(--text)] ">Jiyavur Rahman</h3>
        <div className="nav-links flex gap-[2.5rem]">
          <ul className="flex gap-[2.5rem]">
            <ol>
              <a href="">Skills</a>
            </ol>
            <ol>
              <a href="">Projects</a>
            </ol>
            <ol>
              <a href="">Github</a>
            </ol>
            <ol>
              <a href="" className="con">
                Contact
              </a>
            </ol>
          </ul>
        </div>
      </div>

      <div className="status">
        <span className="dot"></span>
        <h4>Available For Work</h4>
      </div>

      <div className="hero-body">
        <div className="hero-head">
          <span>Crafting </span>
          <span>digital </span>
          <span className="outlin">experiences</span>
          <span>That
            <span className="accent"> matter.</span>
            </span> 
        </div>

        <div className="hero-intro">
          <p>FrontEnd Developer specializing in building </p>
          <p>performant, accessible and beautiful web applications.</p>
          <p>I turn complex problems into elegant solutions.</p>
        </div>

        <div className="hero-buttons">
          <button>View Projects</button>
          <button>Github Activity</button>
        </div>

      </div>
    </>
  );
}

export default App;
