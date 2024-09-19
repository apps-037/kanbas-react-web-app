export default function Modules() {
  return (
    <div>
      <div style={{display: "inline"}}>
      <button>Collapse All</button>
      <button>View Progress</button>
      <select id="wd-select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option value="SCIFI">
              Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
            <option selected value="PUBLISH_ALL">Publish All</option>
          </select>
          <button>+Module</button>
    </div>

      {/* Modules List */}
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 1 - Course Syllabus, Agenda and Objectives</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full Stack Development - Introduction</li>
                <li className="wd-content-item">Full Stack Development - Creating a User</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to web development</li>
                <li className="wd-content-item">Creating HTTP server with NodeJS</li>
                <li className="wd-content-item">Creating a React Application</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2, Lecture 2 - Formatting User Interfaces with HTML</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
              <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
              <li className="wd-content-item">Deploy the assignment to netifly</li>
              </ul>
            </li>
            <li className="wd-lesson">
            <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to HTML and DOM</li>
                <li className="wd-content-item">Formatting web content with Headings</li>
                <li className="wd-content-item">Formatting web content with Lists and Tables</li>
              </ul>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  );
}