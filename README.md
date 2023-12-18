If I want to add a progress bar to my image-gallery app, the first step is to go through the files and iso
late the functions that do this, nothing else.

```
import MultiStepProgressBar from './components/MultiStepProgressBar'
```

```
const [ question, setQuestion ] = useState('questiona')
const nextQuestion = (question) => {
     setQuestion(question)
}
const nextStep =(step)=> {
     switch(step){
          case "1":
          setQuestion('questiona);
          break;
          case "2":
          setQuestion('questionb);
          break;
          case "3":
          setQuestion('questionc);
          break;
          case "4":
          alert('make sure you completed all fields')
          setPage('questiond');
          break;
          default: 
          setQuestion('1')
     }
}

// also within the header is the progress bar 
// component, which takes in where you are at and where you go next when you activate the app
        <MultiStepProgressBar question={question} onQuestionNumberClick ={nextStep} />
```

### Multi Step Progress Bar using the npm package **react-step-progress-bar** 

1. import *ProgressBar & Step* from react-step-progress-bar.

2. Create a progress bar component called **MultiStepProgressBar** that takes **question & onQuestionNumberClick** from App.js setting percentages of progress based on the number of questions answered, meaning the more questions answered, the closer to complete the user is, hence, more progress. 

3. Next, and still within the **MultiStepProgressBar** return the imported **ProgressBar and Step** components. 

It looks like this...

```
import React from "react";
import "./MultiStepProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

 MultiStepProgressBar = ({ question, onQuestionNumberClick }) => {
  var stepPercentage = 0;
  if (question === "questiona") {
    stepPercentage = 16;
  } else if (question === "questionb") {
    stepPercentage = 49.5;
  } else if (question === "questionc") {
    stepPercentage = 82.5;
  } else if (question === "questiond") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onQuestionNumberClick("1")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onQuestionNumberClick("2")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onQuestionNumberClick("3")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onQuestionNumberClick("4")}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};
```
4. Each step component, which takes in the **onButtonClick** defined in the App.js file, which brings the user to the next question.


### React Bootstrap Progress Bar

[Progress bar link](https://react-bootstrap.netlify.app/docs/components/progress/)
 This seems considerably easier, so maybe a great place to start. 