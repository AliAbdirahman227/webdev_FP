import {
  HashRouter as Router,
  Route
} from "react-router-dom";


import './styles.css';
import Header from './components/Header'
import EntrysListPage from './pages/EntrysListPage'
import EntryPage from './pages/EntryPage'
import schedule from './pages/schedule'
import Login from './pages/Login'
import Registeration from './pages/Registeration'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Registeration} />
          <Route path="/note" exact component={EntrysListPage} />
          <Route path="/note/:id" component={EntryPage} />
          <Route path="/schedule" component={schedule} />
        </div>
      </div>
    </Router>
  );
}

export default App;
