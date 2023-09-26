import React, { useState } from "react";
import edit from "../assets/edit.png";
import del from "../assets/delete.png";
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
            src="../../public/blue_medium.png"
            alt=""
          />
          <img
            onClick={() => {
              setCurrentPoint("brown_large");
            }}
            src="../../public/brown_large.png"
            alt=""
          />
          <img
            onClick={() => {
              setCurrentPoint("brown_small");
            }}
            src="../../public/brown_small.png"
            alt=""
          />
          <img
            onClick={() => {
              setCurrentPoint("glass_house");
            }}
            src="../../public/glass_house.png"
            alt=""
          />
          <img
            onClick={() => {
              setCurrentPoint("green_small");
            }}
            src="../../public/green_small.png"
            alt=""
          />
          <img
            onClick={() => {
              setCurrentPoint("rainbow");
            }}
            src="../../public/rainbow.png"
            alt=""
          />
          <img
            onClick={() => {
              setCurrentPoint("windmill");
            }}
            src="../../public/windmill.png"
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
