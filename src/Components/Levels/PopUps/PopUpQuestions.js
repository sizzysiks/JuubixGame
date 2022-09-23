const PopUpQuestions = ({question, img, option1, option2, option3, option4}) =>
{
    return(
        <div className="pop-up-questions">
            <p>{question}</p>

            <div className="pop-up-img">
                <img src={img} alt="quiz" />
            </div>

            <div className="pop-up-answers">
                <div>{option1}</div>
                <div className="pop-up-answers-active">{option2}</div>
                <div>{option3}</div>
                <div>{option4}</div>
            </div>
        </div>
    )
}

export default PopUpQuestions