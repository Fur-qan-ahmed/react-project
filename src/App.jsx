import './App.scss'
import Quiz from './Component/Quiz'
import { jsQuizz } from './Component/constants'
import { useState } from 'react';
function App() {
  const [showComponent, setShowComponent] = useState(true);
  const handleClick = event => {
    setShowComponent(false);
  };
  return (
    <>
    {showComponent ? (
      <div className='Start-Quiz'>
        <button  onClick={handleClick}>
          Start Quiz
        </button>
        <p>Wellcome To Our Quiz Test Project</p>
      </div>) :
      <h1><Quiz questions={jsQuizz.questions} /></h1>
    }
      
    </>
  )
}
export default App
