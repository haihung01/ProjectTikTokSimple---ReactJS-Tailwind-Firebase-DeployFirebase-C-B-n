import { useEffect } from 'react';
import './App.css';
import Video from './components/Video';

function App() {
  useEffect(() => {
    document.getElementById("focus").focus();
  }, []);
  return (
    <div 
    id='focus' 
    tabIndex="1" 
    className="flex flex-col items-center snap-y snap-mandatory overflow-scroll h-screen overflow-x-hidden"
    >
  <Video />
  <Video />
  <Video />
  <Video />
  <Video />
  <Video />
  <Video />
    </div>
  );
}

export default App;
