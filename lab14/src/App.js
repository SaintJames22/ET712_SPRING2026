import { useState } from 'react';
import './App.css';

//list of three messages
const messages = [
  "Nah id win",
  "Throughout heaven and earth i alone am the honored one",
  "I am inevitable",
  "I am vengeance, i am the night, i am Batman"
];
// open and close button
const openLabel = "Open";
const closeLabel = "Close";
function App() {
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <h1 className="title">Slide card by Jordain James</h1>

      <section className="slicewrapper">
        <div className="numberwrapper">
          <div className={count === 1 ? "active" : ""} onClick={() => setCount(1)}><p>1</p></div>
          <div className={count === 2 ? "active" : ""} onClick={() => setCount(2)}><p>2</p></div>
          <div className={count === 3 ? "active" : ""} onClick={() => setCount(3)}><p>3</p></div>
          <div className={count === 4 ? "active" : ""} onClick={() => setCount(4)}><p>4</p></div>
        </div>

        <div className="btngroup">
          <button disabled={count <= 1} onClick={() => count > 1 && setCount(count - 1)}>Previous</button>
          <button disabled={count >= messages.length} onClick={() => count < messages.length && setCount(count + 1)}>Next</button>
        </div>

        <div className="messagecard">
          <div className="slideheader">Message {count} of {messages.length}</div>
          <p className="msg">{messages[count - 1]}</p>
          <div className="progress">
            <div className="progress-fill" style={{ width: `${(count / messages.length) * 100}%` }} />
          </div>
        </div>
      </section>
      <h2>Open and Close Button</h2>
      <div className="info">
        <p>
          <b>Batman (The Dark Knight)</b>, a mysterious vigilante who fights crime in Gotham City.
        </p>
        <button className="toggle" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? closeLabel : openLabel}
        </button>
      </div>
      <section>
        {isOpen && (
          <div className="readmore">
            <p>
              The Dark Knight is a 2008 superhero film directed by Christopher Nolan. It is the second installment in Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
