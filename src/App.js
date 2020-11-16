import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner/Banner';
import FormSection from './Components/FormSection/FormSection';
import Body from './Components/Body/Body';
import Foot from './Components/Foot/Foot';

function App() {
  return (
    <div className="App">
     <Banner/>
     <FormSection/>
     <Body/>
     <Foot/>
    </div>
  );
}

export default App;
