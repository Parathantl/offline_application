import './App.css';
import Grade from './components/Grade'
import Grade1 from './components/Grade1'
import PDFReader from './components/pdfcomponents/PDFReader';
import Audio from './components/audio'

import { history } from './history';
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div style={{marginTop: 20}}>
      Nav bar Position
      </div>
        <Router history={history}>
          <Routes>
            <Route path="/pdf" element={<PDFReader/>}/>
            <Route path="/audio" element={<Audio/>}/>
            <Route path="/grade1" element={<Grade1/>}/>
            <Route exact path="/" element={<Grade/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;