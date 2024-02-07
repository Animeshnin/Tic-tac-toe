import React from 'react';

function GameInfo({isDraw, winnerSequence, winnerSymbol, currentStep, renderSymbol}) {
    return (
        <div className='game-info'>
            {isDraw ? "Ничья" : winnerSequence ? 'Победитель' : 'Ход:' } {isDraw? '': renderSymbol(winnerSymbol?.[0] ?? currentStep)}
        </div>

    );
}
export default GameInfo;