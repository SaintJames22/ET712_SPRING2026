import './App.css'
import married from '/workspaces/ET712_SPRING2026/lab11/src/married.jpg'
function App(){
  return (
    <div>
     <h1 style={{ color: 'blue', textAlign: 'center' }}>Jordain James</h1>
     <h2 className='subtitile'>Javascript XML</h2>
     <p>There is two types of components in ReactJS</p>
      <ul>
        <li>Function</li>
        <li>class</li>
      </ul>
      <figure className='introimg'>
        <img src={married} alt="Marriage" />
      </figure>
      <footer className='footer'>
        introduction to ReactJS
      </footer>
    </div>
  );
}

export default App;
