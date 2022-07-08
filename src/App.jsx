import { StrictMode } from "react";
// import Fetch from "./Components/Fetch";
// import BesicForm from './Components/BasicForm';
import { Home } from "./Components/Home";

import TextForm from "./Components/TextForm";
import Todo from "./Components/Todo";

function App() {
  return (
    <>
      <StrictMode>
        <Home title="TextUtils" AboutText="About Us" />

        <div className="container my-3">
          <TextForm heading="Enter the text to analyze" />
          <Todo />
          {/* <BesicForm/>   */}
          
        </div>
        {/* <Fetch /> */}
      </StrictMode>
    </>
  );
}

export default App;
