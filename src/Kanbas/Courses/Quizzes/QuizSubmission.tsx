import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./QuizSubmission.css";
import * as quizClient from "./client";
 
function QuizSubmission() {
    const { quizId } = useParams();
    const [quizData, setQuizData] = useState<any>(null);
    const [submission, setSubmissionData] = useState<any[]>([]);
    const [selectedAttempt, setSelectedAttempt] = useState<number>(0);
    const [totalScore, setTotalScore] = useState<number>(0);
 
    // Fetch Quiz Data
    useEffect(() => {
        quizClient
            .findQuizById(quizId)
            .then((data) => setQuizData(data[0]))
            .catch((error) => console.error("Error fetching quiz:", error));
    }, [quizId]);
 
    // Fetch Submissions
    useEffect(() => {
        quizClient
            .findQuizSubmissionById(quizId)
            .then((data) => {
                const sortedSubmissions =
                    data[0]?.attempts?.sort(
                        (a: any, b: any) =>
                            new Date(b.submittedAt).getTime() -
                            new Date(a.submittedAt).getTime()
                    ) || [];
                setSubmissionData(sortedSubmissions);
                setSelectedAttempt(0); // Default to latest attempt
            })
            .catch((error) =>
                console.error("Error fetching quiz submissions:", error)
            );
    }, [quizId]);
 
    useEffect(() => {
        if (submission[selectedAttempt]) {
            calculateScore(submission[selectedAttempt]);
        }
    }, [selectedAttempt, submission]);
 
    const calculateScore = (attempt: any) => {
        if (!attempt || !quizData) return;
 
        let score = 0;
 
        attempt.answers.forEach((answer: any) => {
            const question = quizData.questions.find(
                (q: any) => q._id === answer.questionId
            );
 
            if (question) {
                const userAnswerIndex = parseInt(answer.answer, 10);
                if (userAnswerIndex === question.correctOptionIndex) {
                    score += question.points || 0; // Add question points to score
                }
            }
        });
 
        setTotalScore(score);
    };
 
    const handleAttemptSelection = (attemptIndex: number) => {
        setSelectedAttempt(attemptIndex);
    };
 
    const renderQuestion = (question: any, answer: any, index: number) => {
        const userAnswerIndex = parseInt(answer.answer, 10);
        const correctOptionIndex = question.correctOptionIndex;
 
        return (
            <div key={question._id} className="question-card">
                <h4>
                    Question {index + 1}: {question.title}
                </h4>
                <p>{question.questionText}</p>
                <ul>
                    {question.options.map((option: any, idx: number) => {
                        const isCorrect = idx === correctOptionIndex;
                        const isUserAnswer = idx === userAnswerIndex;
 
                        return (
                            <li
                                key={option._id}
                                className={`option ${isCorrect
                                        ? "correct"
                                        : isUserAnswer
                                            ? "incorrect"
                                            : ""
                                    }`}
                            >
                                {option.option}
                                {isCorrect && (
                                    <span className="badge">Correct Answer</span>
                                )}
                                {isUserAnswer && (
                                    <span className="badge incorrect">Your Answer</span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };
 
    const renderAttemptResult = (attempt: any) => {
        if (!attempt || !quizData) return <p>No submission data available.</p>;
 
        return (
            <div>
                <h3>
                    Submitted At: {new Date(attempt.submittedAt).toLocaleString()}
                </h3>
                {attempt.answers.map((answer: any, index: number) => {
                    const question = quizData.questions.find(
                        (q: any) => q._id === answer.questionId
                    );
                    return question ? (
                        renderQuestion(question, answer, index)
                    ) : (
                        <p key={answer._id}>Question not found</p>
                    );
                })}
            </div>
        );
    };
 
    return (
        <div className="quiz-container">
            {/* Quiz Header */}
            <h1 className="quiz-title">{quizData?.title}</h1>
            <div className="quiz-details">
                <p>
                    <strong>Total Score:</strong> {totalScore}/
                    {quizData?.points || "N/A"}
                </p>
                <p>
                    <strong>Due:</strong>{" "}
                    {quizData?.dueDate
                        ? new Date(quizData.dueDate).toLocaleString()
                        : "N/A"}
                </p>
                <p>
                    <strong>Points:</strong> {quizData?.points || "N/A"}
                </p>
            </div>
 
            {/* Attempt Selection */}
            <div className="attempt-history">
                <h2>Attempt History</h2>
                {submission.length > 0 ? (
                    <div>
                        {submission.map((attempt, index) => (
                            <button
                                key={index}
                                className={`attempt-button ${selectedAttempt === index ? "selected" : ""
                                    }`}
                                onClick={() => handleAttemptSelection(index)}
                            >
                                Attempt {submission.length - index}
                            </button>
                        ))}
                    </div>
                ) : (
                    <p>No attempts available.</p>
                )}
            </div>
 
            {/* Attempt Results */}
            <div className="questions-section">
                {renderAttemptResult(submission[selectedAttempt])}
            </div>
        </div>
    );
}
 
export default QuizSubmission;