import User from './card.js';
import mario_img from './mario.png';
import star_img from './star.png';
import supermario_img from './super-mario.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="apptitle">Jordain James</h1>  
      <section className="cards-container">
        <User image={mario_img} name="Mario" date="28/4/2026" message="Nah, I'd win" />
        <User image={star_img} name="Star" date="28/4/2026" message="Nah, I'd win!" />
        <User image={supermario_img} name="Super Mario" date="28/4/2026" message="Nah, I'd win!" />
      </section>
    </div>
  );
}

export default App;

