import {
  HashRouter as Router,
  Route
} from "react-router-dom";


import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
import schedule from './pages/schedule'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={NotesListPage} />
          <Route path="/note/:id" component={NotePage} />
          <Route path="/schedule" component={schedule} />
        </div>
      </div>
    </Router>
  );
}

export default App;
