import React from 'react';

function GameCell({cells, winnerSequence, handleCellClick, renderSymbol}) {
    return (
        <div className={'game-field'}>
            {cells.map((symbol, index) => {

                const isWinner = winnerSequence?.includes(index);
                // console.log('index', )
                // console.log(isWinner, 'index', index, winnerSequence )

                return <button
                    key={index}
                    className={`cell ${isWinner ? 'cell--win' : ''}`}
                    onClick={() => handleCellClick(index)}>{
                    symbol ? renderSymbol(symbol) : null
                }</button>
            })}

        </div>
    );
}

export default GameCell;