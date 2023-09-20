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

function App() {
  // variables
  const [activeMode, setActiveMode] = useState(0);
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
    console.log(links);
    links.forEach((e) => {
      if (e.point_of_interest === currentPoint) {
        window.open(e.url);
      }
    });
  };
  const fetch = async () => {
    const data = await fetchAllLinkData(1);
    dispatch(setLinksFromDatabase(data));
  };

  useEffect(() => {
    fetch();
  }, []);
  useEffect(() => {
    main(window.innerHeight, window.innerWidth, openLinks);
  }, []);

  console.log(window.innerHeight, window.innerWidth);
  return (
    <>
      <div id="container">
        <Nav setMode={setMode} />
        {activeMode === 1 ? (
          <Link links={links} />
        ) : activeMode === 2 ? (
          <User />
        ) : (
          <></>
        )}
        <div className="game-content">
          <canvas></canvas>
        </div>
      </div>
    </>
  );
}

export default App;
