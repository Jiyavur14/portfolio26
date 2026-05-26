import "./index.css";
import "./App.css";
import profileImg from "./assets/singam.jpeg";
import { useState, useEffect } from "react";
import {GitHubCalendar} from "react-github-calendar";

function App() {
  const [username, setusername] = useState("");
  const [profile, setprofile] = useState(null);
  const [events, setEvents] = useState([]);
  const [displayName, setDisplayName] = useState("");

  async function loadActivity() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();
      setprofile(data);

      const eventResponse = await fetch(
        `https://api.github.com/users/${username}/events`,
      );

      if (!response.ok) {
        throw new Error("User not found");
      }

      const eventdata = await eventResponse.json();
      setEvents(eventdata);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  useEffect(() => {
    if (!profile) return;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayName(
        profile.name
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return profile.name[index];
            }

            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join(""),
      );

      if (iteration >= profile.name.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 60);

    return () => clearInterval(interval);
  }, [profile]);

  return (
    <>
      <div className="nav-bar flex justify-between">
        <h3 className="nav-logo text-[var(--text)] ">Jiyavur Rahman S</h3>
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
            <span>
              That
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
              <p>
                <span className="sno">01</span>{" "}
                <span className="var-name text-fuchsia-300">const</span>{" "}
                <span className="varia">developer</span>
                <span className="text-[white] ml-2">= {"{"}</span>
              </p>
              <p>
                <span className="sno">02</span>{" "}
                <span className="objkey ml-6 mr-2">
                  name <span className="colon">:</span>
                </span>
                <span className="objval">
                  "JIYAVUR RAHMAN S"<span className="comma">,</span>
                </span>
              </p>
              <p>
                <span className="sno">03</span>{" "}
                <span className="objkey ml-6 mr-2">
                  role <span className="colon">:</span>
                </span>
                <span className="objval">
                  "Frontend Developer"<span className="comma">,</span>
                </span>
              </p>
              <p>
                <span className="sno">04</span>{" "}
                <span className="objkey ml-6 mr-2">
                  passion <span className="colon">:</span>
                </span>
                <span className="objval">
                  "Problem Solving"<span className="comma">,</span>
                </span>
              </p>
              <p>
                <span className="sno">05</span>{" "}
                <span className="objkey ml-6 mr-2">
                  skills <span className="colon">:</span>
                </span>
                <span className="objval">
                  <span className="squareb">{"["}</span>"React","Tailwind css"
                  <span className="squareb">{"]"}</span>
                  <span className="comma">,</span>
                </span>
              </p>
              <p>
                <span className="sno">06</span>{" "}
                <span className="objkey ml-6 mr-2">
                  available <span className="colon">:</span>
                </span>
                <span className="objval">
                  <span className="tru text-fuchsia-300">true</span>
                  <span className="comma">,</span>
                </span>
              </p>
              <p>
                <span className="sno">07</span> {"}"};
              </p>
              <p>
                <span className="sno">08</span>
              </p>
              <p>
                <span className="sno">09</span>{" "}
                <span className="commentt text-[var(--muted)]">
                  // Let's build something 📈
                </span>
              </p>
              <p>
                <span className="sno">10</span>{" "}
                <span className="commentt text-[var(--muted)]">
                  // incredible together! 🚀
                </span>
              </p>
              <p>
                <span className="sno">11</span>{" "}
                <span className="commentt text-[var(--muted)]">
                  // Building interfaces with React ⚛️
                </span>
              </p>
              <p>
                <span className="sno">12</span>{" "}
                <span className="commentt text-[var(--muted)]">
                  // Consistency builds Phenomenal 🛠️
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="tools-tech flex flex-col">
        <div className="tthead1 flex gap-2 items-center">
          <p className="gline"></p>
          <p className="gtext">Expertise</p>
        </div>

        <div className="tthead2">
          <p className="ttp1">Tools &</p>
          <p className="ttp2">Technologies</p>
        </div>

        <div className="ttbody flex flex-wrap mt-12">
          <div className="skill-box">
            <span className="bg-sky-400"></span>
            React
          </div>

          <div className="skill-box">
            <span className="bg-yellow-300"></span>
            Javascript
          </div>

          <div className="skill-box">
            <span className="bg-fuchsia-400"></span>
            Tailwind
          </div>

          <div className="skill-box">
            <span className="bg-green-400"></span>
            HTML
          </div>

          <div className="skill-box">
            <span className="bg-rose-500"></span>
            Github
          </div>

          <div className="skill-box">
            <span className="bg-teal-200"></span>
            REST API
          </div>
        </div>
      </div>

      <div className="projects ">
        <div className="phead flex items-center gap-2">
          <p className="pline"></p>
          <p className="port">PORTFOLIO</p>
        </div>

        <div className="pbody">
          <p>Selected</p>
          <p>Projects</p>
        </div>

        <div className="pcont flex flex-row gap-6">
          <div className="pcon1 ppp">
            <div className="phead flex justify-between items-center mb-1">
              <p className="symbol"></p>
              <div className="links flex justify-around gap-4">
                <a
                  className="link1"
                  title="Github"
                  href="https://github.com/Jiyavur14/online-room-booking-system/"
                  target="_blank"
                >
                  💻
                </a>
                <a
                  className="link1"
                  title="Live"
                  href="https://online-room-booking-system.vercel.app/"
                  target="_blank"
                >
                  🔗
                </a>
              </div>
            </div>
            <h2>ONLINE ROOM BOOKING SYSTEM</h2>
            <p>
              The Online Room Booking System is a smart web application that
              enables users to easily check room availability, make secure
              bookings, and manage reservations through a simple and
              user-friendly interface.
            </p>
            <div className="techbuttons flex gap-4">
              <p className="tb1">React</p>
              <p className="tb2">Node Js</p>
              <p className="tb3">MongoDB</p>
            </div>
          </div>

          <div className="pcon2 ppp1">
            <div className="phead flex justify-between items-center mb-1">
              <p className="symbol"></p>
              <div className="links flex justify-around gap-4">
                <a
                  className="link1"
                  title="Github"
                  href="https://github.com/Jiyavur14/Finance-Expense-Tracker"
                  target="_blank"
                >
                  💻
                </a>
                <a
                  className="link1"
                  title="Live"
                  href="https://jiyavur14.github.io/Finance-Expense-Tracker/"
                  target="_blank"
                >
                  🔗
                </a>
              </div>
            </div>
            <h2>EXPENSE TRACKING SYSTEM</h2>
            <p className="exptt">
              An intuitive Expense Tracker application that helps users
              efficiently manage, categorize, and monitor their daily expenses
              through a clean and user-friendly interface
            </p>
            <div className="techbuttons2 flex gap-4">
              <p className="tb1">React</p>
              <p className="tb2">Tailwind</p>
              <p className="tb3">piechart</p>
            </div>
          </div>

          <div className="pcon3 ppp2">
            <div className="phead flex justify-between items-center mb-1">
              <p className="symbol"></p>
              <div className="links flex justify-around gap-4">
                <a
                  className="link1"
                  title="Github"
                  href="https://github.com/Jiyavur14/Notes_Website"
                  target="_blank"
                >
                  💻
                </a>
                <a
                  className="link1"
                  title="Live"
                  href="https://jiyavur14.github.io/Notes_Website/"
                  target="_blank"
                >
                  🔗
                </a>
              </div>
            </div>
            <h2>NOTES WEB APPLICATION</h2>
            <p>
              A responsive Notes Web Application designed to help users create,
              organize, and manage notes efficiently with a simple and
              user-friendly interface.
            </p>
            <div className="techbuttons3 flex gap-4">
              <p className="tb1">React</p>
              <p className="tb2">CSS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="github-section">
        <div className="phead flex items-center gap-2">
          <p className="pline"></p>
          <p className="port">LIVE FEED</p>
        </div>

        <div className="pbody">
          <p>GitHub</p>
          <p>Activity</p>
        </div>

        <div className="github-body pt-8">
          <div className="gb-1 flex gap-4">
            <input
              type="text"
              className="inp1"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
            <button onClick={() => loadActivity()}>Load Activity</button>
          </div>

          <div className="gb-2 flex gap-5 pt-4 items-start">
            <div className="gh-body h-[580px]">
              <div className="gb-commit flex justify-between gap-4">
                <p>Recent Events</p>
                <p className="g-live flex gap-2">
                  <span className="dot"></span>
                  Live
                </p>
              </div>

              {events
                .filter((event) => event.type === "PushEvent")
                .slice(0, 8)
                .map((event) => {
                  console.log(event);
                  return (
                    <div
                      className="commit-feed flex flex-row gap-6"
                      key={event.id}
                    >
                      <p className="arrow flex items-center justify-center">
                        ↑
                      </p>
                      <div className="cf-2 flex flex-col">
                        <p className="cf-msg">
                          Pushed to <span>{event.repo.name}</span> on{" "}
                          <span>{event.payload.ref.split("/").pop()}</span>
                        </p>
                        <p className="cf-time">
                          {new Date(event.created_at).toLocaleString("en-GB", {
                            timeZone: "Asia/Kolkata",
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>

            {profile && (
              <div className="gb-profile">
                <div className="banner">
                  <h2 className="matrix-text">{displayName}</h2>
                </div>
                <img src={profile.avatar_url} alt="profile_image" />
                <div className="profile-body pt-12 pl-8">
                  <p className="pb1 ">{profile.login}</p>
                  <p className="pb2 pb-1">{profile.name}</p>
                  <p className="pb3 pr-3">{profile.bio}</p>

                  <div className="folo flex flex-row justify-between gap-4 w-[100%] mt-3 mb-5 pr-9">
                    <div className="fbox flex flex-col justify-center items-center">
                      <p className="f1">{profile.public_repos}</p>
                      <p className="f2">Repos</p>
                    </div>

                    <div className="fbox flex flex-col justify-center items-center">
                      <p className="f1">{profile.followers}</p>
                      <p className="f2">Followers</p>
                    </div>

                    <div className="fbox flex flex-col justify-center items-center">
                      <p className="f1">{profile.following}</p>
                      <p className="f2">Following</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="gb-3 mt-5 flex flex-col">
            <p className="pt-4 pl-5 pb-1 m-[0]">
              Contribution Activity — Last 12 months (simulated)
            </p>
            <div className="calendar-box pt-3 pl-5 pr-5 pb-4 m-[0]">
              <div className="cb1">
              <GitHubCalendar
                username={username || "Jiyavur14"}
                colorScheme="dark"
                fontSize={14}
                blockSize={14}
                blockMargin={5}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
