import cheers from './cheers.jpeg';
import StepA from './components/StepA';
import StepB from './components/StepB';
import StepC from './components/StepC';
import StepD from './components/StepD';
import './App.css';
import React, { useState } from 'react'
import MultiStepProgressBar from './components/MultiStepProgressBar'

function App() {
  const [ page, setPage] = useState('stepa')
  const nextPage = (page)=> {
    setPage(page)
  }
  const nextStep =(step)=> {
    switch(step){
      case "1":
        setPage('stepa');
        break;
        case "2":
          setPage('stepb');
          break;
          case "3":
            setPage('stepc');
            break;
            case "4":
              alert('make sure you filled out the right fields')
              // setPage('stepd');
              break;
              default:
                setPage('1')

    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <MultiStepProgressBar page={page} onPageNumberClick ={nextStep} />


        <img src={cheers} className="App-logo" alt="logo" />

        <div className='container'>

        {
        {
          stepa: <StepA onButtonClick={nextPage} />,
          stepb: <StepB onButtonClick={nextPage} />,
          stepc: <StepC onButtonClick={nextPage} />,
          stepd: <StepD />,
        }[page]
      }

        {/* <StepA onButtonClick={nextPage} />
        <StepB onButtonClick={nextPage} />
        <StepC onButtonClick={nextPage} />
        <StepD onButtonClick={nextPage} /> */}

        </div>

      </header>
    </div>
  );
}

export default App;
