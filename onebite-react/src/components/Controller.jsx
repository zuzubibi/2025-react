const Controller = ({ onClickButton }) => {
    const buttonValues = [-1, -10, -100, 100, 10, 1];

    return <div>
        {buttonValues.map((value) => (
            <button 
                key={value} 
                onClick={() => onClickButton(value)}
            >
                {value > 0 ? `+${value}` : value}
            </button>
        ))}
    </div>
}

export default Controller;