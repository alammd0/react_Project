import Testomonial from "./components/Testomonial"
import { reviewers } from "./data"
import "./App.css"

function App() {

  return (
    <>

      <div className="testomonial_wrapper">
        <Testomonial reviewers = {reviewers}/>
      </div>

    </>
  )
}

export default App
