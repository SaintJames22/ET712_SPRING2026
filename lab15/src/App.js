
import './App.css';
import { useState } from 'react';
export default App;  

function App() {
  //set a a state to handle on input value
  //const[name, setName] = useState("");
  //set a state to handle multiple input values
const [inputs, setInputs] = useState({});
  //function to handle form submission
const submitForm = function(e) {
  e.preventDefault();
  // Handle form submission logic here
  alert(`Form submitted with name: ${inputs.name}, age: ${inputs.age}, gender: ${gender}, comment: ${textcomment}, password: ${password}`);
};
 //function to collect the key:value pair from all input controls

 const handleinputs = function(e) {
  const name = e.target.name
  const age = e.target.value
  setInputs(values => ({...values, [name]: age}))
 }
 //fcuntion to textarea
 const [textcomment,setTextcomment] = useState("");
 const submitComment = function(e) {
  e.preventDefault();


 }
 //SELECT
 const [gender, selectGender] = useState("");
 const selectedgender = function(e) {
  selectGender(e.target.value);
 }

 
  const [password, setPassword] = useState("");
  const handlePasswordChange = function(e) {
    setPassword(e.target.value);





    
 }
  return (
    <div className="App">
      <form>
        <fieldset>
          <legend>Forms in ReactJS</legend>
          <label for="name">Enter your name:</label>
          <input type="text" id="name" name="name" value={inputs.name} onChange={handleinputs} />
          <div>
          <label for="age">Enter your age:</label>
          <input type="number" id="age" name="age" value={inputs.age} onChange={handleinputs} />
          </div>

      <div classname='formcontrol'>
        <select value={gender} onChange={selectedgender}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
          <div classname='formcontrol'>
            <label for="password">Enter your password:</label>
            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
          </div>
          <div classname='formcontrol'>
            <label for="comment">Enter your comment:</label>
            <textarea id="comment" name="comment" value={textcomment} onChange={(e) => setTextcomment(e.target.value)} />
          </div>

        </fieldset>
    
          
    

        {/* submit button */}
        <div className='formcontrol'>
          <button type="submit" onClick={submitForm}>Submit Form</button> 
        </div>
        
      </form>
      {/* test data in the form */}
      <p>Your name is {inputs.name}</p>
      <p>Your age is {inputs.age}</p>
        <p>Your comment is {textcomment}</p>
        <p>Your gender is {gender}</p>
    </div>
  );
}


