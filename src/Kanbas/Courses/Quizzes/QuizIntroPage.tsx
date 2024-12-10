// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Button, Modal, Form } from "react-bootstrap";
// import * as client from "./client";
// import { useDispatch } from "react-redux";

// function QuizIntroPage() {
//     const { cid, quizId } = useParams(); // Get quizId from URL
//     const navigate = useNavigate();
//     const [quizData, setQuizData] = useState<any>(null); // State to store quiz data
//     const [showModal, setShowModal] = useState(false); // State to control the modal
//     const [inputCode, setInputCode] = useState(""); // State to store user input
//     const [error, setError] = useState<string | null>(null); // Error message if access code is incorrect

//     useEffect(() => {
//         client.findQuizById(quizId).then((data) => {
//             setQuizData(data);
//         }).catch((error) => {
//             console.error("Error fetching quiz:", error);
//         });
//     }, [quizId]);

//     const verifyAccessCode = () => {
//         if (!quizData) {
//             setError("Quiz not loaded yet.");
//             return;
//         }

//         if (inputCode.length > 0 && inputCode === quizData[0].accessCode) {
//             navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizData[0]._id}/QuizPreview`);
//         } else if (inputCode.length > 0){
//             setError("Invalid access code. Please try again.");
//         }
//     };

//     const handleStartQuiz = () => {
//         setShowModal(true);
//         if (quizData[0].accessCode !== null) {
//             verifyAccessCode();
//         } else {
//             navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizData[0]._id}/QuizPreview`);
//         }
//     }

// return (

//     <div style={{ padding: "20px", maxWidth: "1600px", margin: "0 auto" }}>
//         <h1>{}</h1>

//         {/* Quiz Details */}
//         {/* <div style={{ marginBottom: "20px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
//                 <p>
//                     <strong>Due:</strong> {new Date(quizData[0]?.dueDate).toLocaleString()} <br />
//                     <strong>Questions:</strong> {quizData[0].questions.length || 0} <br />
//                     <strong>Time Limit:</strong> {quizData[0].timeLimit || "None"}
//                     <strong>Allowed Attempts:</strong> {quizData[0].allowedAttempts || "Unlimited"}
//                 </p>
//             </div> */}

//         {/* Instructions */}
//         <h3>Instructions</h3>
//         {/* <p>{quizData[0]?.description}</p> */}

//         {/* Centered Button */}
//         <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
//             <Button
//                 variant="danger"
//                 onClick={handleStartQuiz}
//                 style={{ padding: "10px 20px", fontSize: "16px" }}
//             >
//                 Start Quiz
//             </Button>
//         </div>

//         {/* Modal for Access Code */}
//         <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//             <Modal.Header closeButton>
//                 <Modal.Title>Enter Access Code</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Form>
//                     <Form.Group controlId="accessCode">
//                         <Form.Label>Access Code</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Enter your access code"
//                             value={inputCode}
//                             onChange={(e) => {
//                                 setInputCode(e.target.value);
//                                 setError(null); // Reset error on input change
//                             }}
//                         />
//                         {error && <Form.Text style={{ color: "red" }}>{error}</Form.Text>}
//                     </Form.Group>
//                 </Form>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={() => setShowModal(false)}>
//                     Cancel
//                 </Button>
//                 <Button
//                     variant="danger"
//                     onClick={() => verifyAccessCode()}
//                 >
//                     Submit
//                 </Button>

//             </Modal.Footer>
//         </Modal>
//     </div>
// );
// }

// export default QuizIntroPage;



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import * as client from "./client";
import { useSelector } from "react-redux";
import axios from "axios";
import QuizSubmission from "./QuizSubmission";
 
function QuizIntroPage() {
    const { cid, quizId } = useParams();
    const navigate = useNavigate();
    const [quizData, setQuizData] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    const [inputCode, setInputCode] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [submissionData, setSubmissionData] = useState<any>(null);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
 
    useEffect(() => {
        // Fetch Quiz Data
        client.findQuizById(quizId)
            .then((data) => {
                setQuizData(data);
            })
            .catch((error) => {
                console.error("Error fetching quiz:", error);
            });
    }, [quizId]);
 
    useEffect(() => {
        // Fetch Quiz Submission Data for the current user to check attempts
        if (currentUser && currentUser._id && quizId) {
            axios.get(`${process.env.REACT_APP_REMOTE_SERVER}/api/quizzes/${quizId}/submission`)
                .then((response) => {
                    // Filter the submissions to find the one for the current user
                    const userSubmission = response.data.find((s: any) => s.studentId === currentUser._id);
                    setSubmissionData(userSubmission || null);
                })
                .catch((error) => {
                    console.error("Error fetching submissions:", error);
                });
        }
    }, [quizId, currentUser]);
 
    const verifyAccessCode = () => {
        if (!quizData) {
            setError("Quiz not loaded yet.");
            return;
        }
 
        const quiz = quizData[0];
        if (inputCode.length > 0 && inputCode === quiz.accessCode) {
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/QuizPreview`);
        } else if (inputCode.length > 0) {
            setError("Invalid access code. Please try again.");
        }
    };
 
    const handleStartQuiz = () => {
        const quiz = quizData && quizData[0];
        if (!quiz) return;
 
        // If no access code required, or it's empty, directly navigate
        if (!quiz.accessCode || quiz.accessCode.trim() === "") {
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/QuizPreview`);
        } else {
            // If access code is required, show modal to enter code
            setShowModal(true);
        }
    };
 
    // Check if the user has attempts remaining
    const quiz = quizData && quizData[0];
    const attemptsAllowed = quiz?.numberOfAttempts || 1;
    const attemptsUsed = submissionData?.attempts?.length || 0;
    const attemptsRemaining = attemptsAllowed - attemptsUsed;
 
    return (
        <div style={{ padding: "20px", maxWidth: "1600px", margin: "0 auto" }}>
            {quiz && (
                <>
                    <h1>{quiz.title}</h1>
                    {attemptsRemaining <= 0 ? (
                        <div style={{ color: "red", marginTop: "20px" }}>
                            <strong>You have reached the maximum number of attempts for this quiz ({attemptsAllowed} attempts).</strong>
                            <p>You cannot attempt this quiz again.</p>
                            <QuizSubmission />
                        </div>
                    ) : (
                        <>
                            {/* Quiz Details and Instructions can be added here */}
                            {/* Start Quiz Button if attempts are remaining */}
                            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                                <Button
                                    variant="danger"
                                    onClick={handleStartQuiz}
                                    style={{ padding: "10px 20px", fontSize: "16px" }}
                                >
                                    Start Quiz
                                </Button>
                            </div>
                        </>
                    )}
                </>
            )}
 
            {/* Modal for Access Code */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Access Code</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="accessCode">
                            <Form.Label>Access Code</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your access code"
                                value={inputCode}
                                onChange={(e) => {
                                    setInputCode(e.target.value);
                                    setError(null);
                                }}
                            />
                            {error && <Form.Text style={{ color: "red" }}>{error}</Form.Text>}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => verifyAccessCode()}
                    >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
 
export default QuizIntroPage;