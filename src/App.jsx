import Student from "./Student"; 
function App() { 
  return ( 
    <div> 
      <h1>Student Information</h1> 
      <Student 
        name="Sanskriti" 
        course="Computer Science" 
        marks="92" /> 
      <Student 
        name="Sujal Pandey" 
        course="Information Technology" 
        marks="90"  /> 
      <Student 
        name="Bhavya Pandey" 
        course="Electronics" 
        marks="89"  /> 
    </div> 
  ); 
} 
export default App;