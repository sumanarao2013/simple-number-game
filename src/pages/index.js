import { useState } from "react";

export default function Home() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const handleGuess = () => {
    const guessNumber = parseInt(guess, 10);
    if (guessNumber > number) {
      setMessage("Too high! Try again.");
    } else if (guessNumber < number) {
      setMessage("Too low! Try again.");
    } else {
      setMessage("Congratulations! You guessed it!");
    }
  };

  const resetGame = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 and 100:</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        style={{ padding: "5px", fontSize: "16px" }}
      />
      <button onClick={handleGuess} style={{ marginLeft: "10px", padding: "5px 10px" }}>
        Guess
      </button>
      <p>{message}</p>
      <button onClick={resetGame} style={{ marginTop: "20px", padding: "5px 10px" }}>
        Reset Game
      </button>
    </div>
  );
}
