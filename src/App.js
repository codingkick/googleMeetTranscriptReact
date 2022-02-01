import { Home } from "./components/Home";
import {Alert} from "react-bootstrap";


function App() {
  return (
    <div className="App">
      <Alert variant='danger'><center><b>Class Caption</b></center></Alert>
      <hr/>
      <Home/>
    </div>
  );
}

export default App;
