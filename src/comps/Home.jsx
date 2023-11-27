import React, { useRef, useState } from "react";
import "../css/home.css";
import { useSelector } from "react-redux";
import { featuresSelector } from "../store/features/homeFeature";
import { addNewUser, loginUser } from "../utils/fetchData";

import feature_one from "../assets/retro_art/Digital lifestyle-bro.png";
import feature_two from "../assets/retro_art/Digital tools-bro.png";
import feature_three from "../assets/retro_art/retro computer-bro.png";
import logoImg from "../assets/retro_art/retro computer-bro.png";
import heroImg from "../assets/retro_art/Digital personal files-bro.png";
import loginImg from "../assets/retro_art/Computer login-bro.png";
import { Link } from "react-router-dom";

function Home({ startGame, setParkMode }) {
  const features = useSelector(featuresSelector);
  const feature_tab = useRef();
  const [featureMode, setFeatureMode] = useState(0);
  const [signupMode, setsignupMode] = useState(true);
  const [info_message, setInfo_message] = useState("");
  const [loginState, setloginState] = localStorage.getItem("data")
    ? useState(true)
    : useState(false);

  const signup = async (form) => {
    const obj = {};
    Array.from(form).forEach((el) => {
      if (el.id) {
        obj[el.id] = el.value;
      }
      el.value = "";
    });
    const result = await addNewUser(obj);
    setInfo_message(result.message);
    localStorage.setItem("data", result.data);
    setloginState(true);
  };

  const login = async (form) => {
    const obj = {};
    Array.from(form).forEach((el) => {
      if (el.id) {
        obj[el.id] = el.value;
      }
      el.value = "";
    });
    const result = await loginUser(obj);
    setInfo_message(result.message);
    localStorage.setItem("data", result.data);
    setloginState(true);
  };

  const changeActiveFeature = (e) => {
    Array.from(feature_tab.current.children).forEach((e) => {
      e.classList.remove("active-tab");
    });
    e.target.classList.add("active-tab");
  };

  return (
    <div className="home">
      <nav>
        <div class="logo">
          <img src={logoImg} alt="" height={"40px"} />
          <h1>Linking Park</h1>
        </div>
        <div class="menu">
          <a href="#features">Features</a>
          <a href="#faq">FAQs</a>
        </div>
        <div className="buttons">
          <a className="signup" href="#signup">
            Sign Up Free
          </a>
          <Link
            onClick={() => {
              if (loginState) {
                setParkMode(true);
                startGame();
              }
            }}
            className={
              loginState ? "login-button-state" : "logout-button-state"
            }
            to="/dashboard"
          >
            Go to Linking Park
          </Link>
        </div>
      </nav>
      <section className="hero">
        <div class="text-content">
          <h1>A Bookmark Manager with a Twist</h1>
          <p>
            Bringing together immersive retro video game style and productivity
            management. Explore Linking Park to manage all your bookmarks.{" "}
            <br /> 100% free.
          </p>
          <div class="buttons">
            <Link
              onClick={() => {
                if (loginState) {
                  setParkMode(true);
                  startGame();
                }
              }}
              className={
                loginState ? "login-button-state" : "logout-button-state"
              }
              to="/dashboard"
            >
              Go to Linking Park
            </Link>
          </div>
        </div>
        <div class="hero-image">
          <img src={heroImg} alt="" />
        </div>
      </section>
      <section id="features" className="features-section">
        <div class="upper-text">
          <h2>Features</h2>
          <p>
            My aim is to create a cool way to maintain productivity through the
            day, by making changing tabs an active experience. One that requires
            action, rather than habit.
          </p>
        </div>
        <div class="tabs">
          <div ref={feature_tab} class="tab-nav">
            <p
              onClick={(e) => {
                setFeatureMode(0);
                changeActiveFeature(e);
              }}
              className="active-tab"
            >
              Productivity Boost
            </p>
            <p
              onClick={(e) => {
                setFeatureMode(1);
                changeActiveFeature(e);
              }}
            >
              Bookmark Groups
            </p>

            <p
              onClick={(e) => {
                setFeatureMode(2);
                changeActiveFeature(e);
              }}
            >
              Immersive Experience
            </p>
          </div>
          <div class="tab">
            {features.map((f, i) => {
              if (i === featureMode) {
                return (
                  <>
                    <div class="illustration">
                      {i === 0 ? (
                        <img src={feature_one} alt="" />
                      ) : i === 1 ? (
                        <img src={feature_two} alt="" />
                      ) : (
                        <img
                          className="feature_three"
                          src={feature_three}
                          alt=""
                        />
                      )}
                    </div>
                    <div class="text-content">
                      <h2>{f.header}</h2>
                      <p>{f.description}</p>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
      </section>
      <section id="signup" className="sign-up">
        <div class="upper-text">
          <h3>Create an Account</h3>
          <p>
            Sign in, or Sign up for free to save your bookmarks and your custom
            characters in Linking Park.
          </p>
        </div>
        <div class="card">
          <div class="header">
            <img src={loginImg} alt="" />
          </div>
          <form action="">
            <p>{info_message}</p>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />
            </div>
            {signupMode === true ? (
              <div>
                <label htmlFor="confirm">Confirm Password:</label>
                <input type="password" id="confirm" />
              </div>
            ) : (
              <></>
            )}
            <button
              onClick={(e) => {
                e.preventDefault();
                if (signupMode) {
                  signup(e.target.form);
                } else {
                  login(e.target.form);
                }
              }}
              type="submit"
            >
              {signupMode ? "Sign Up" : "Log in"}
            </button>
            <p
              onClick={() => {
                setsignupMode(!signupMode);
              }}
            >
              Switch to Login
            </p>
          </form>
        </div>
      </section>
      <section id="faq" className="faq">
        <div class="upper-text">
          <h3>Frequently Asked Questions</h3>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        <div className="cards">
          <div class="card">
            <div class="header">
              <h4>What is Linking Park</h4>
            </div>
            <p>
              Think of it as a mind palace. You can pop all your bookmarks in a
              'point of interest' and whenever you need them, you can move
              through Linking Park with your digital avatar to open them.
            </p>
          </div>
          <div class="card">
            <div class="header">
              <h4>Why would I use Linking Park?</h4>
            </div>
            <p>
              If you're like me, you have a problem with flicking between
              videos, websites, streaming sites, news sites, etc and still
              wonder how nothing got done. Linking Park attempts to stop that by
              making changing activity a purposeful task that you need to
              complete before you can open your tabs. <br />
              <br /> If that isn't you... then Linking Park might not be for
              you! :D
            </p>
          </div>
          <div class="card">
            <div class="header">
              <h4>Can I customise my character?</h4>
            </div>
            <p>
              COMING SOON. <br />
              Currently, no. But keep a close eye on the Github and on Linking
              Park itself for updates, character customisation and new additions
              to the town are on the way.
            </p>
          </div>
        </div>
      </section>
      <footer>
        <p>850+ already joined</p>
        <h2>Stay up-to-date with what we’re doing</h2>
      </footer>
    </div>
  );
}
export default Home;
