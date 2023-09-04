import { Square } from "./Square";

// eslint-disable-next-line react/prop-types
export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null;
  const winnerText = winner === false ? "Empate" : "Ha ganado";

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>

        <footer>
          <button onClick={resetGame}>Comenzar</button>
        </footer>
      </div>
    </section>
  );
};
