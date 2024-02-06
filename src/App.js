import '../src/css/App.css'
import React, {useState} from "react";


const SYMBOL__X = 'X'
const SYMBOL__O = 'O'

const computeWinner = (cells) =>{


    // Короче, функция крутая. Для чего она нужна: мы получаем массив из введеных символов. УСловно говоря после нажатия на первую клеточку
    // что теперь она не равна null, а "O". Затем заспускается цикл, где мы узнаем, что записано в трех символах по их index
    // Что у нас находится под индексу 0, там находится символ "O", ага. Затем идет у нас условие, которая при первой итерации сравнивает
    // строго ли равны символы по их индексу, если да, то возвращаем массив [a, b, c]. На 79 строчке продолжение
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i<lines.length; i++){

        const [a, b, c] = lines[i]
        console.log(cells,'--',cells[a],cells[b], cells[c],'--', [a,b, c], '--', lines[i])

        if (
            cells[a] &&
            cells[a] === cells[b] &&
            cells[a] === cells[c]){
            console.log([a,b,c])
            return [a, b, c]
        }

    }
    console.log('_______________')
}
function App() {
    const [cells, setCells] =  useState([null, null, null, null, null, null, null, null, null])
    const [currentStep, setCurrentStep] = useState(SYMBOL__O)
    const [winnerSequence, setWinnerSequence ] = useState(undefined)
    const getSymbolClassName = (symbol) => {
        if (symbol === SYMBOL__X) return 'symbol--x'
        if (symbol === SYMBOL__O) return 'symbol--o'
        return '';

    }

    const renderSymbol = (symbol) => <span className={`symbol  ${getSymbolClassName(symbol)}`}>{symbol}</span>

// создаем функцую getSymbolClassName, которая получает из вне данные. Если X, то меняет цвет у

    const handleCellClick = (index) => {
        if(cells[index] || winnerSequence) {
            return;
        }

        const cellsCopy = cells.slice()
        cellsCopy[index] = currentStep

        const winner = computeWinner(cellsCopy);
        setWinnerSequence(winner)

        setCells(cellsCopy)
        setCurrentStep(currentStep === SYMBOL__O ? SYMBOL__X : SYMBOL__O);
    }

    const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined

    return (
        <div className="game">
            <div className='game-info'>
                {winnerSequence? 'Победитель' : 'Ход:'} {renderSymbol(winnerSymbol?.[0] ??currentStep)}
            </div>
            <div className={'game-field'}>
                {cells.map((symbol, index) => {
                    //
                    console.log('index =',index)
                    const isWinner = winnerSequence?.includes(index);
                    return <button
                        key={index}
                        className={`cell ${isWinner ? 'cell--win' :''}`}
                        onClick={() => handleCellClick(index)}>{
                        symbol ? renderSymbol(symbol) : null
                    }</button>
                })}
            </div>
        </div>
    );
}


export default App;
