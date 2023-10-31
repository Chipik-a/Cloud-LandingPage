import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Stack from './Components/Stack';
import Switch from './Components/Switch';
import Growth from './Components/Growth';
import Companies from './Components/Companies';
import Hub from './Components/Hub';
import Simple from './Components/Simple';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Stack />
      <Switch />
      <Growth />
      <Companies />
      <Hub />
      <Simple />
      <Footer />
    </div>
  );
}

export default App;
