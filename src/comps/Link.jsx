import React, { useState } from "react";
import edit from "../assets/edit.png";
import del from "../assets/delete.png";
import blue_medium from "../assets/game/blue_medium.png";
import brown_large from "../assets/game/brown_large.png";
import brown_small from "../assets/game/brown_small.png";
import glass_house from "../assets/game/glass_house.png";
import green_small from "../assets/game/green_small.png";
import rainbow from "../assets/game/rainbow.png";
import windmill from "../assets/game/windmill.png";
import { addNewLink, fetchAllLinkData } from "../utils/fetchData";
import { useDispatch } from "react-redux";
import { setLinksFromDatabase } from "../store/features/linkFeature";

function Link({ links }) {
  const [currentPoint, setCurrentPoint] = useState("blue_medium");
  const dispatch = useDispatch();

  const addNew = async (e) => {
    const obj = {
      url: e.target.form[0].value,
      id: localStorage.getItem("data"),
      point: currentPoint,
    };

    if (!obj.url) {
      console.log("Empty String offered");
    } else {
      await addNewLink(obj);
      const data = await fetchAllLinkData(localStorage.getItem("data"));
      dispatch(setLinksFromDatabase(data));
    }
  };
  return (
    <div className="link-container">
      <div className="header">
        <h2>Link Manager</h2>
      </div>
      <div className="links">
        <div className="link-nav">
          <img
            onClick={() => {
              setCurrentPoint("blue_medium");
            }}
            src={blue_medium}
            alt=""
          />
          <img
            onClick={() => {
              setCurrentPoint("brown_large");
            }}
            src={brown_large}
            alt=""
          />
          <img
            onClick={() => {
              setCurrentPoint("brown_small");
            }}
            src={brown_small}
            alt=""
          />
          <img
            onClick={() => {
              setCurrentPoint("glass_house");
            }}
            src={glass_house}
            alt=""
          />
          <img
            onClick={() => {
              setCurrentPoint("green_small");
            }}
            src={green_small}
            alt=""
          />
          <img
            onClick={() => {
              setCurrentPoint("rainbow");
            }}
            src={rainbow}
            alt=""
          />
          <img
            onClick={() => {
              setCurrentPoint("windmill");
            }}
            src={windmill}
            alt=""
          />
        </div>
        <div className="link-cards">
          {links.map((e) => {
            if (e.point_of_interest === currentPoint) {
              return (
                <div className="card">
                  <p className="name">{e.url}</p>
                  <div className="changes">
                    <button>
                      <img src={edit} alt="" />
                    </button>
                    <button>
                      <img src={del} alt="" />
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <form className="submit-new">
        <input
          type="text"
          name=""
          id=""
          placeholder="https://www.kierancroft.com"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addNew(e);
          }}
          type="submit"
        >
          Add New Link
        </button>
      </form>
    </div>
  );
}

export default Link;
