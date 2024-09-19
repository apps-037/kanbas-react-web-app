export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a><br></br>
            <a>
            Multiple Modules | <b>Not Available until</b> May 20 6:00 PM |<br></br>
            Due May 25 3:00 PM | 100 pts
            </a>
          </li>
          <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - CSS + BOOTSTRAP
            </a><br></br>
            <a>
            Multiple Modules | <b>Not Available until</b> May 26 6:00 PM |<br></br>
            Due May 31 3:00 PM | 100 pts
            </a>
          </li>
          <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3 - JAVASCRIPT + REACT
            </a><br></br>
            <a>
            Multiple Modules | <b>Not Available until</b> June 2 6:00 PM |<br></br>
            Due June 25 3:00 PM | 100 pts
            </a>
          </li>
        </ul>
      </div>
  );}
  