import { useEffect, useState } from "react";
import "./css/App.css";
import { main } from "./game-utils/gameManager";
import Nav from "./comps/Nav";
import Link from "./comps/Link";
import User from "./comps/User";
import {
  linkSelector,
  setLinksFromDatabase,
} from "./store/features/linkFeature";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllLinkData } from "./utils/fetchData";
import Home from "./comps/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  // variables
  const [activeMode, setActiveMode] = useState(0);
  const [parkMode, setParkMode] = useState(false);
  const links = useSelector(linkSelector);
  const dispatch = useDispatch();

  // util functions
  const setMode = (mode) => {
    if (activeMode === mode) {
      setActiveMode(0);
      return;
    }
    setActiveMode(mode);
  };
  const openLinks = (currentPoint) => {
    console.log(currentPoint);
    links.forEach((e) => {
      if (e.point_of_interest === currentPoint) {
        console.log(e.url);
        window.open(`https://${e.url}`);
      }
    });
  };
  const fetch = async () => {
    const data = await fetchAllLinkData(localStorage.getItem("data"));
    dispatch(setLinksFromDatabase(data));
  };
  const startGame = () => {
    main(window.innerHeight * 0.9, window.innerWidth * 0.9, openLinks);
    document.getElementById("root").style.height = 0;
    document.getElementById("root").style.width = 0;
  };

  useEffect(() => {
    fetch();
  }, []);

  const game = (
    <div id="container">
      <div className="game-content">
        <canvas></canvas>
      </div>
      <Nav setMode={setMode} />
      {activeMode === 1 ? (
        <Link links={links} />
      ) : activeMode === 2 ? (
        <User setParkMode={setParkMode} />
      ) : (
        <></>
      )}
    </div>
  );

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home startGame={startGame} setParkMode={setParkMode} />}
          />
          <Route path="/dashboard" element={game} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
