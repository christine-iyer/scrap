import {useState} from 'react'


import moon from "../moon.jpeg";
import cheers from "../cheers.jpeg";


export default function StepC ({onButtonClick})   {

  const [singleUser, setSingleUser] = useState(false)
  
  const onClickSingleUser = () => {
    setSingleUser(prevSingleUser => !prevSingleUser)
  }

  const [multiUser, setMultiUser] = useState(false)
  
  const onClickMultiUser = () => {
    setMultiUser(prevMultiUser => !prevMultiUser)
  }

    return (
      <main
        className="pt5 black-80"
        style={{ maxWidth: "2%", maxHeight: "2%", margin: "auto" }}
      >
        <h2>How are you planning to use Eden?</h2>
        <p style={{ color: "#C0C0C0" }}>
          We'll streamline your setup experience accordingly.
        </p>
        <div
          className="center ph4 selectionDiv"
          style={{ maxHeighteight: "6%", maxWidthidth: "6%" }}
        >
          <div className="mw5 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked"
            style={{borderColor: singleUser? '#664DE5' : '#EAEEF5' }}
            onClick={onClickSingleUser} 
          >
            <img
             style={{ maxHeighteight: "6%", maxWidthidth: "6%" }}
              src={moon}
              className="h2 w2"
              title="single user icon"
              alt="user-icon"
            />
            <h1 className="f4 pl2 pr2">For myself</h1>
            <p className="lh-copy f6 black-70 pl2 pr2">
              Write better. Think more clearly. Stay organized.
            </p>
          </div>
          <div className="mw5 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked"
           style={{borderColor: multiUser? '#664DE5' : '#EAEEF5' }}
           onClick={onClickMultiUser}
            >
            <img
              src={cheers}
              className="h2 w2"
              title="multi user icon"
              alt="cheers-icon"
            />
            <h1 className="f4 pl2 pr2">With my team</h1>
            <p className="lh-copy  f6 black-70 pl2 pr2 desc">
              Wikis, docs, tasks and projects, all in one place.
            </p>
          </div>
        </div>
        <input
          className="f6 grow br2 ph3 pv2 mb2 dib white submitButton"
          style={{
            borderStyle: "none",
            width: "6%",
            backgroundColor: "#664DE5",
          }}
          type="submit"
          value="Create Workspace"
          onClick={() => onButtonClick("stepd")}
        />
      </main>
    );
}

