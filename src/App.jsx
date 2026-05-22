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

      <div className="hero-body flex justify-between align-center">
        <div className="hero-left">
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

        <div className="hero-buttons flex gap-6">
          <button className="b1">View Projects</button>
          <button className="b2">Github Activity ↓</button>
        </div>
        </div>
        
        <div className="hero-right pr-[3rem] pt-[3.5rem]">
          <div className="code-card flex flex-col align-center gap-3">

           <div className="cchead flex gap-2">
            <span className="cch1"></span>
            <span className="cch2"></span>
            <span className="cch3"></span>
           </div>

           <div className="ccbody">
            <p><span className="sno">01</span>     <span className="var-name text-fuchsia-300">const</span> <span className="varia">developer</span><span className="text-[white]">= {"{"}</span></p>
            <p><span className="sno">02</span>     <span className="objkey">name:</span><span className="objval">"Your name",</span></p>
            <p><span className="sno">03</span>     <span className="objkey">role:</span><span className="objval">"Frontend Developer",</span></p>
            <p><span className="sno">04</span>     <span className="objkey">passion:</span><span className="objval">"Problem Solving",</span></p>
            <p><span className="sno">05</span>     <span className="objkey">skills:</span><span className="objval">["React","Tailwins css"],</span></p>
            <p><span className="sno">06</span>     <span className="objkey">available:</span><span className="objval">true,</span></p>
            <p><span className="sno">07</span>    {"}"};</p>
            <p><span className="sno">08</span></p>
            <p><span className="sno">09</span>     <span className="commentt text-[var(--muted)]">// Let's build something</span></p>
            <p><span className="sno">10</span>     <span className="commentt text-[var(--muted)]">// incredible together! 🚀</span></p>
           </div>

           <div className="cctail">

           </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default App;
