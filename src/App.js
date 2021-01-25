import './App.css';
import Navbar from './Navbar'
import Skills from './Skills'
import Tools from './Tools'
import Glass from './Glass'
import Timeline from './components/Timeline'
import Projects from './Projects'
import Info from './Info'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (



    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Glass} />
          <Route path='/skills' component={Skills} />
          <Route path='/tools' component={Tools} />
          <Route path='/experience' component={Timeline} />
          <Route path='/projects' component={Projects} />
        </Switch>
        <Info />
      </Router>
    </div>





   /* <div className="app">
    <Head/>
    <Glass/>
      <Skills/>
      <Tools/>
    </div>*/
  );
}

export default App;
