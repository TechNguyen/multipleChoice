import classNames from 'classnames/bind'
import Style from './counter.module.scss'
import { useState } from 'react'
const cx = classNames.bind(Style)
const questions = [
    {
        curentNumber: 1,
        questionText: 'What is the capital of France ?',
        anserquestion: [
            { anserText: 'London', isCorrect: false },
            { anserText: 'New York', isCorrect: false },
            { anserText: 'Paris', isCorrect: true },
            { anserText: 'Berlin', isCorrect: false },
        ],
    },
    {
        curentNumber: 2,
        questionText: 'What is Ronaldo from ?',
        anserquestion: [
            { anserText: 'Argentina', isCorrect: false },
            { anserText: 'USA', isCorrect: false },
            { anserText: 'Portugal', isCorrect: true },
            { anserText: 'Germany', isCorrect: false },
        ],
    },
    {
        curentNumber: 3,
        questionText: 'What is Messi from ?',
        anserquestion: [
            { anserText: 'Argentina', isCorrect: true },
            { anserText: 'New York', isCorrect: false },
            { anserText: 'Canada', isCorrect: false },
            { anserText: 'Brazil', isCorrect: false },
        ],
    },
    {
        curentNumber: 4,
        questionText: 'Who is the CEO of Facebook ?',
        anserquestion: [
            { anserText: 'Putin', isCorrect: false },
            { anserText: 'D.Trump', isCorrect: false },
            { anserText: 'Bill Gates', isCorrect: false },
            { anserText: 'Mark Zuckerberg', isCorrect: true },
        ],
    },
]

function Counter() {
    const [curentquestion, setCurentQuestion] = useState(0)
    const [notifString, setNotifString] = useState('')
    const handleSubmit = (e) => {
        if (e.isCorrect) {
            setNotifString('')
            setCurentQuestion((curentquestion) => {
                return curentquestion + 1
            })
        } else {
            setNotifString('Incorrect!!! Let choose again')
            return
        }
    }
    return (
        <div className={cx('multiple-choice')}>
            <div className={cx('question-wrapper')}>
                <span>{`Question ${questions[curentquestion].curentNumber}`}</span>/
                {questions.length}
                <p className={cx('text-question')}>
                    {questions[curentquestion].questionText}
                </p>
                <span className={cx('notif')}>{notifString}</span>
            </div>
            <div className={cx('question-wrapper')}>
                <ul className={cx('question-items')}>
                    {questions[curentquestion].anserquestion.map((qItem, index) => (
                        <li
                            key={index}
                            className={cx('item-question')}
                            onClick={() => handleSubmit(qItem)}
                        >
                            {qItem.anserText}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Counter
