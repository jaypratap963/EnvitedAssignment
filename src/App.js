import './App.css';
import SnapchatEvents from './ComponentsLandingPage/SnapchatEvents';
import SnapchatEventsIpad from './ComponentsLandingPage/SnapchatEventsIpad';
import SnapchatEventsMobile from './ComponentsLandingPage/SnapchatMobile';
import BirthdayEventPC from './ComponentsEventsPage/BirthdayEventPC';
import BirthdayEventIpad from './ComponentsEventsPage/BirthdayEventIpad';
import BirthdayEventMobile from './ComponentsEventsPage/BirthdayEventMobile';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
function getWindowWidth() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}
function App() {
  const { width } = useWindowWidth();
  const [LandingPageComponents, setLandingPageComponents] = useState(SnapchatEvents)
  const [EventPageComponents, setEventPageComponents] = useState(BirthdayEventPC)
  useEffect(() => {
    if (width > 834) {
      console.log(width)
      setLandingPageComponents(SnapchatEvents)
      setEventPageComponents(BirthdayEventPC)
    } else if(width<834 && width>350){
      setLandingPageComponents(SnapchatEventsIpad)
      setEventPageComponents(BirthdayEventIpad)
    }else{
      setLandingPageComponents(SnapchatEventsMobile)
      setEventPageComponents(BirthdayEventMobile)
    }
  }, [width]);
  console.log(LandingPageComponents)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SnapchatEvents />} />
          <Route path="create" element={<BirthdayEventPC />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
