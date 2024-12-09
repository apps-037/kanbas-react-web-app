import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { KanbasState } from '../../store';
import { findQuizForCourse } from './client';
import { getAllQuestions } from './QuizEditor/Questions/client';
import './QuizSubmission.css'; // Add a CSS file for more refined styling.
import * as quizClient from "./client";
import { findQuizSubmissionById } from './client';

interface Answer {
    questionId: string;
    answer: string;
}

interface Submission {
    answers: Answer[];
}

function QuizSubmission() {
    const { quizId, cid } = useParams();
    const dispatch = useDispatch();
    const [question, setQuestion] = useState<any | null>(null);
    const [questionList, setQuestionList] = useState<any | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [quizData, setQuizData] = useState<any>(null);
    const [submission, setSubmissionData] = useState<Submission[]>([]);
    const [correctAnswers, setCorrectAnswers] = useState<Map<string, any>>(new Map());
    const [incorrectAnswers, setIncorrectAnswers] = useState<Map<string, any>>(new Map());


    useEffect(() => {
        // Fetch questions
        getAllQuestions(quizId)
            .then((questions) => {
                if (questions.length > 0) {
                    setQuestionList(questions);
                    setQuestion(questions[0]);
                }
            })
            .catch((error) => console.error("Error fetching quiz questions:", error));
    }, [quizId]);

    useEffect(() => {
        quizClient.findQuizById(quizId).then((data) => {
            setQuizData(data[0]);
        }).catch((error) => {
            console.error("Error fetching quiz:", error);
        });
    }, [quizId]);

    // const jogs = quizClient.findQuizSubmissionById(quizId);
    useEffect(() => {
        findQuizSubmissionById(quizId).then((data) => {
            setSubmissionData(data);
        }).catch((error) => {
            console.error("Error fetching quiz:", error);
        });
    }, [quizId]);

    console.log(submission);
    if (!quizData) {
        return <div>No quiz data available</div>;
    }

    // if (questionList.length > 0 && submission.length > 0) {
    //     const correct = new Map();
    //     const incorrect = new Map();

    //     submission.answers.forEach((userAnswer) => {
    //         const question = questionList.find(
    //             (q: { _id: any; }) => 
    //             q._id === userAnswer.questionId
    //         );
    //         if (question) {
    //             const correctOption = question.options[question.correctOptionIndex].option;
    //             if (userAnswer.answer === correctOption) {
    //                 correct.set(userAnswer.questionId.$oid, question);
    //             } else {
    //                 incorrect.set(userAnswer.questionId.$oid, question);
    //             }
    //         }
    //     });

    //     setCorrectAnswers(correct);
    //     setIncorrectAnswers(incorrect);
    // }

    console.log(correctAnswers);
   
    return (
        <div className="quiz-container">
            {/* Quiz Header */}
            <h1 className="quiz-title">Q1</h1>
            <div className="quiz-details">
                <p><strong>Due:</strong>{quizData.dueDate}</p>
                <p><strong>Points:</strong>{quizData.points}</p>
                <p><strong>Questions:</strong> {quizData.questions.length}</p>
                <p><strong>Available:</strong> {quizData.availableFromDate} - {quizData.dueDate}</p>
                <p><strong>Time Limit:</strong> {quizData.timeLimit}</p>
            </div>

            {/* Attempt History */}
            <div className="attempt-history">
                <h2>Attempt History</h2>
                <div className="attempt-row">
                    <div><strong>Attempt:</strong> Attempt 1</div>
                    <div><strong>Time:</strong> 11 minutes</div>
                    <div><strong>Score:</strong> 29 out of 29</div>
                </div>
                <p>Submitted Sep 19 at 10:14pm</p>
                <p>This attempt took 11 minutes.</p>
            </div>

            {/* Questions Section */}
            <div className="questions-section">
                <h3 className="question-title">Question 1</h3>
                <p>
                    An HTML <strong>label</strong> element can be associated with an HTML <strong>input</strong> element
                    by setting their <strong>id</strong> attributes to the same value.
                </p>
                <p>
                    The resulting effect is that when you click on the <strong>label</strong> text, the input element
                    receives focus as if you had clicked on the <strong>input</strong> element itself.
                </p>
                <div className="answers">
                    <label>
                        <input type="radio" name="q1" value="true" />
                        True
                    </label>
                    <label>
                        <input type="radio" name="q1" value="false" />
                        False
                    </label>
                </div>
                <div className="correct-label">Correct!</div>
            </div>

            {/* Add Comment Section */}
            <div className="comment-section">
                <h3>Add a Comment:</h3>
                <textarea className="comment-box" placeholder="Type your comment here..."></textarea>
                <button className="save-button">Save</button>
            </div>
        </div>
    );
};

export default QuizSubmission;

