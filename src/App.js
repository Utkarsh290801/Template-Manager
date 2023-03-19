import logo from './logo.svg';
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Template from './component/Template';

function App() {
  return (
    <div>
  <BrowserRouter>
          <Routes>
            <Route path="template" element={<Template />} />
            </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;