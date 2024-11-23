import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import "./styles.css";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import * as db from "./Database";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useDispatch, useSelector } from "react-redux";
import { addEnrollment } from "./Courses/People/reducer";

// export default function Kanbas() {
//     const [courses, setCourses] = useState<any[]>(db.courses);
//     const [course, setCourse] = useState<any>({
//         _id: "1234", name: "New Course", number: "New Number",
//         startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
//     });
//     const addNewCourse = () => {
//         setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
//     };
//     const deleteCourse = (courseId: any) => {
//         setCourses(courses.filter((course) => course._id !== courseId));
//     };
//     const updateCourse = () => {
//         setCourses(
//             courses.map((c) => {
//                 if (c._id === course._id) {
//                     return course;
//                 } else {
//                     return c;
//                 }
//             })
//         );
//     };
//     return (
//         <Session>
//         <div id="wd-kanbas">
//             <KanbasNavigation />
//             <div className="wd-main-content-offset p-3">
//                 <Routes>
//                     <Route path="/" element={<Navigate to="Account" />} />
//                     <Route path="/Account/*" element={<Account />} />
//                     <Route path="/Dashboard" element={<ProtectedRoute>
//                         <Dashboard
//                             courses={courses}
//                             course={course}
//                             setCourse={setCourse}
//                             addNewCourse={addNewCourse}
//                             deleteCourse={deleteCourse}
//                             updateCourse={updateCourse} /></ProtectedRoute>
//                     }
//                     />
//                     <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
//                     <Route path="/Calendar" element={<h1>Calendar</h1>} />
//                     <Route path="/Inbox" element={<h1>Inbox</h1>} />
//                 </Routes>
//             </div>
//         </div>
//         </Session>
//     );
// }


export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
      let courses = [];
      try {
        //courses = await userClient.findMyCourses();
        courses = await courseClient.fetchAllCourses();
      } catch (error) {
        console.error(error);
      }
      setCourses(courses);
    };
    useEffect(() => {
      fetchCourses();
    }, [currentUser]);
    const [course, setCourse] = useState<any>({
      _id: "0", name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
      image: "course.jpg", description: "New Description"
    });
  
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    const dispatch = useDispatch();
  
    const addNewCourse = async () => {
      const newCourse = await userClient.createCourse(course);
      setCourses([...courses, newCourse]);
      dispatch(addEnrollment({ user: currentUser._id, course: newCourse._id }))
    };
  
    const deleteCourse = async (courseId: string) => {
      const status = await courseClient.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    };
  
    const updateCourse = async () => {
      await courseClient.updateCourse(course);
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
    };
  
    return (
      <Session>
        <div id="wd-kanbas">
          <KanbasNavigation />
          <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="/Kanbas/Dashboard" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse} />
                </ProtectedRoute>} />
              <Route path="/Courses/:cid/*" element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>} />
              <Route path="/Calendar" element={<h1 className="text-danger">Calendar</h1>} />
              <Route path="/Inbox" element={<h1 className="text-danger">Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </Session>
    );
  }