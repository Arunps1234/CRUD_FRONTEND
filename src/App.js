import './App.css';
import Read from "./Components/read"
import Create from './Components/create';
import Edit from './Components/Edit';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">


<BrowserRouter>

<Routes>
<Route path="/" element={<Read/>} />
<Route path='/create' element={<Create/>} />
<Route path="/Edit/:id" element={<Edit/>} />


</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
