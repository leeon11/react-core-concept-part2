
import './App.css'
import Counter from './counter'
import Users from './Users'

function App() {

  function handleClick(){
   alert('btn click')
  }
  const addToFive =(num) =>{
      alert(num + 3)
  }
  

  return (
    <>
    
    <Users></Users>
      <Counter></Counter>
      <h3>React core concept2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() =>(alert ('btn click'))}>Click Me2</button>
      <button onClick={() => addToFive(3)}>Four</button>
      
      
    </>
  )
}

export default App
