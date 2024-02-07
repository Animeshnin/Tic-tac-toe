import '../src/css/App.css'
import React from "react";
import GameInfo from "./component/gameInfo";
import GameCell from "./component/GameCell";
import useGameState from "./useGameState";



function App() {


    const {cells,
        currentStep,
        winnerSequence,
        handleCellClick,
        resetClick,
        winnerSymbol,
        isDraw,
        renderSymbol} = useGameState()


    return (
        <div className="game">
            <GameInfo isDraw={isDraw}
                      winnerSequence={winnerSequence}
                      winnerSymbol={winnerSymbol}
                      currentStep={currentStep}
                      renderSymbol={renderSymbol}/>
            <GameCell cells={cells}
                      winnerSequence={winnerSequence}
                      handleCellClick={handleCellClick}
                      renderSymbol={renderSymbol}/>
            <div className={'button__two'}>
                <button className={'reset'} onClick={() => resetClick()}>Начать заново</button>
            </div>
        </div>
    );




}




export default App;
