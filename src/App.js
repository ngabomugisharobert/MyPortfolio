import './App.css';
import Head from './Head'
import Profile from './Profile'
import Skills from './Skills'
import Tools from './Tools'
import Glass from './Glass'

function App() {
  return (
    <div className="app">
    <Head/>
    <Glass/>
      <Skills/>
      <Tools/>
    </div>
  );
}

export default App;
