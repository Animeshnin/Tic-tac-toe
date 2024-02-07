import React, {useState} from 'react';

function UseGameState() {
    const SYMBOL__X = 'X'
    const SYMBOL__O = 'O'

    const computeWinner = (cells) =>{


        // Короче, функция крутая. Для чего она нужна: мы получаем массив из введеных символов. УСловно говоря после нажатия на первую клеточку
        // теперь она не равна null, а "O". Затем заспускается цикл, где мы узнаем, что записано в трех символах по их index
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

            if (
                cells[a] &&
                cells[a] === cells[b] &&
                cells[a] === cells[c]){
                return [a, b, c]
            }


        }
        console.log('_______________')
    }

    const [cells, setCells] =  useState([null, null, null, null, null, null, null, null, null])
    const [currentStep, setCurrentStep] = useState(SYMBOL__O)
    const [winnerSequence, setWinnerSequence ] = useState(undefined);

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
        // console.log(cellsCopy)
        setCells(cellsCopy)
        setCurrentStep(currentStep === SYMBOL__O ? SYMBOL__X : SYMBOL__O);
    }
    // Сейчас используется способо по проще
    const resetClick = () => {
        // Как делают крутые программисты. Ладно я изучил и понял, что это не так круто
        setCells(Array.from({length: 9}, () => null))


        // <<Это наверное самый простой способ>>
        // const clearCells = cells.slice()
        // setCells([null, null, null, null, null, null, null, null, null])

        // Тут ничего сложного, копирую нынешнию игру и с помощью цикла каждому элементу задаю null
        // <<А это самый замудренный>>
        // for (let i = 0; i < cells.length; i++){
        //     clearCells[i] = null
        // }
        // setCells(clearCells)
        setWinnerSequence(undefined)
    }

    const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined
    // Этого я не знал и никогда не видел. Суть в том, что переменная isDraw вноситтся данные если - winnerSymbol ничего нет И количество непустых элементов в массиве равна 9
    const isDraw = !winnerSymbol && cells.filter(value => value).length === 9

    return{
        cells,
        currentStep,
        winnerSequence,
        renderSymbol,
        handleCellClick,
        resetClick,
        winnerSymbol,
        isDraw

    }
}

export default UseGameState;