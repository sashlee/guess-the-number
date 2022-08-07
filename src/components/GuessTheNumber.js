import React, { useState } from "react";

const GuessTheNumber = () => {
  const randInt = (lower, upper) => {
    var range = upper - lower;
    return Math.trunc(Math.random() * range + lower);
  };
  const [guess, setGuess] = useState(0);
  const [lower, setLower] = useState(1);
  const [upper, setUpper] = useState(10);
  const [prevGuess, setPrevGuess] = useState(0);

  const [randomNumber, setRandomNumber] = useState(randInt(lower, upper));
  const [msg, setMsg] = useState("");
  console.log(randomNumber);
  const handleGuess = (e) => {
    e.preventDefault();
    setPrevGuess(guess);
    let message = "";

    if (randomNumber > guess) {
      message = "Nah, that's too low. Try again champ!";
    } else if (randomNumber < guess) {
      message = "Nah, that's too high. Try again champ!";
    } else {
      message = "Awesome!. You're correct rockstar!";
    }
    setMsg(message);
    // console.log(msg);
  };

  const handleReset = (e) => {
    e.preventDefault();
    console.log("The new lower is", lower);
    console.log("The new Upper is", upper);

    const newRan = randInt(lower, upper);
    setRandomNumber(newRan);
    console.log("The new random number is", randomNumber);
    setMsg("Ready to try again?. Try now!");
  };

  return (
    <div className="container">
      <div className="card-container">
        <h1>Game Time!</h1>

        <section>
          <p>
            Instructions: Guess numbers between {lower} and {upper}
          </p>

          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <p
              style={
                msg === "Awesome!. You're correct rockstar!"
                  ? {
                      backgroundColor: "#D1E7DD",
                      color: "#157347",
                      width: "330px",
                      padding: "10px",
                      textAlign: "center",
                      margin: "auto",
                      borderRadius: "5px",
                    }
                  : {
                      backgroundColor: "#F8D7DA",
                      color: "#843D62",
                      width: "330px",
                      padding: "10px",
                      textAlign: "center",
                      margin: "auto",
                      borderRadius: "5px",
                    }
              }
            >
              {msg}
            </p>
          </div>

          <form onSubmit={handleGuess}>
            <label htmlFor="guess-input">Guess: </label>
            <input
              type="text"
              className="guess-input"
              placeholder="Enter a number"
              id="guess-input"
              onChange={(e) => setGuess(e.target.value)}
            />
            <button
              type="submit"
              className="guess-button"
              onClick={handleGuess}
            >
              Guess
            </button>
          </form>
          {/* <form onSubmit={handleGuess}>
            <label htmlFor="guess-input">Guess: </label>
            <input
              type="number"
              id="guess-input"
              onChange={(e) => setGuess(e.target.value)}
            />
            <input type="submit" value="Make Guess" />
          </form> */}
          <div style={{ marginTop: "20px" }}>
            <p className="previous-guess">Previous Guess: {prevGuess}</p>
          </div>
        </section>

        <section>
          <h3>Game Config</h3>
          <form onSubmit={handleReset}>
            <input
              type="lower"
              placeholder="Enter lower bound"
              id="lower"
              className="bound-input"
              onChange={(e) => setLower(e.target.value)}
            />
            <br />
            <input
              type="upper"
              id="upper"
              placeholder="Enter upper bound"
              className="bound-input"
              onChange={(e) => setUpper(e.target.value)}
            />{" "}
            <br />
            <button
              type="submit"
              className="reset-button"
              onClick={handleReset}
            >
              Reset
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default GuessTheNumber;
