import { StrictMode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
// import Fetch from "./Components/Fetch";
// import BesicForm from './Components/BasicForm';
// import { Home } from "./Components/Home";
// import LoginForm from "./Components/LoginForm";
// import TextForm from "./Components/TextForm";
// import Todo from "./Components/Todo";
import CentralLoginForm from "./Components/Mukassar/CentralLoginForm";
import RegisterForm from "./Components/Sadik/RegisterForm";
// import RegisterForm from "./Components/Mukassar/RegisterForm";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Fetching1 from "./Components/Sadik/MultipalApiFetch.jsx/Fetching1";

function App() {
  return (
    <>
      <StrictMode>
        {/* <Home title="TextUtils" AboutText="About Us" /> */}
        <div className="container my-3">
          {/* <TextForm heading="Enter the text to analyze" /> */}
          {/* <Todo /> */}
          {/* <BesicForm/>   */}
        </div>
        {/* <Fetch /> */}
          {/* <BrowserRouter>
           <Routes>
             <Route path="/ragister" element={<RegisterForm/>}/>
             <Route path="/" element={<CentralLoginForm/>}/>
           </Routes>
         </BrowserRouter> */}
        {/* <LoginForm /> */}
        <Fetching1/>
      </StrictMode>
    </>
  );
}
export default App;
