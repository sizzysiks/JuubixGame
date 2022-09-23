import './pop-ups.css'

import {IoIosArrowBack} from 'react-icons/io'

import quiz from '../../../resources/quiz.svg'

import PopUpQuestions from './PopUpQuestions'

const PopUpSolving = ({setQuizOpen}) =>
{
    return(
        <div className="pop-up-solving">
            <div className="pop-up-top">
                <button onClick={()=>{setQuizOpen(false)}}><IoIosArrowBack /></button>
                <h3>Problem Solving Quiz</h3>
            </div>

            <PopUpQuestions question="How much doeas an aasd uuqwe qwe lklkasd eqwehqwehqwke?" img={quiz} option1="2" option2="10" option3="20" option4="0" />
        </div>
    )
}

export default PopUpSolving