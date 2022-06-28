import { Home } from './Components/Home';
import TextForm from './Components/TextForm';

function App() {
  
  
  return (
    <>
      <Home title="TextUtils" AboutText="About Us"/>

      <div className="container my-3" >

      <TextForm heading="Enter the text to analyze"/>

      </div>
    </>
  );
}

export default App;
