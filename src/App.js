import './App.css';
import Grade from './components/Grade'
import Grade1 from './components/Grade1'
import PDFReader from './components/pdfcomponents/PDFReader';

import { history } from './history';
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router history={history}>
          <Routes>
            <Route path="/check" element={<PDFReader/>}/>
            <Route path="/grade1" element={<Grade1/>}/>
            <Route exact path="/" element={<Grade/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;