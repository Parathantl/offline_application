import './App.css';
import Grade from './components/Grade'
import Grade1 from './components/Grade1'

import { history } from './history';
import { HashRouter  as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router history={history}>
          <Routes>
            <Route path="/" element={<Grade/>} />
            <Route path="/grade1" element={<Grade1/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;