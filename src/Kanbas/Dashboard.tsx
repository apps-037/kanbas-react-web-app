import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            
            <div id="wd-dashboard-courses">
                {/* First row */}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="wd-dashboard-course" style={{ marginRight: '50px' }}>
                        <img src="/images/SE.png" width={200} />
                        <div>
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/1234/Home">
                                CS1234 React JS
                            </Link>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course">
                        <img src="/images/ML.png" width={200} />
                        <div>
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/1234/Home">
                                CS1234 React JS
                            </Link>
                            <p className="wd-dashboard-course-title">
                                Machine Learning
                            </p>
                            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                        </div>
                    </div>
                </div>

                {/* Second row */}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: '20px' }}>
                    <div className="wd-dashboard-course">
                        <img src="/images/AI.png" width={200} />
                        <div>
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/1234/Home">
                                CS1234 React JS
                            </Link>
                            <p className="wd-dashboard-course-title">
                                Artificial Intelligence
                            </p>
                            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course">
                        <img src="/images/CV.png" width={200} />
                        <div>
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/1234/Home">
                                CS1234 React JS
                            </Link>
                            <p className="wd-dashboard-course-title">
                                Computer Vision
                            </p>
                            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
