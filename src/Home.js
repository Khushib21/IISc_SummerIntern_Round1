import React from "react";
import "./Home.css";
// import Page2 from "./Page2";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
export default function Home() {
  const [radioResponse1, setRadioResponse1] = useState("");
  const [radioResponse2, setRadioResponse2] = useState("");
  // console.log(radioResponse1, radioResponse2);
  Cookies.set("radio2", radioResponse2);
  Cookies.set("radio1", radioResponse1);
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">
            <Link to="/">
              Travel<span>.com</span>
            </Link>
          </a>
        </nav>
      </div>
      <div className="main">
        Respondent <span>Travel</span> Profile
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            What is your most frequently used means of travel from your home to
            work location?
          </h5>
          <ul className="options">
            <li>
              <input
                type="radio"
                id="radiobutton1"
                name="transport"
                value="bus"
                checked={radioResponse1 === "bus"}
                onChange={() => setRadioResponse1("bus")}
              />
              <label htmlFor="bus">Bus</label>{" "}
            </li>
            <li>
              <input
                type="radio"
                id="radiobutton1"
                name="transport"
                value="Metro"
                checked={radioResponse1 === "Metro"}
                onChange={() => setRadioResponse1("Metro")}
              />
              <label htmlFor="Metro">Metro</label>
            </li>
            <li>
              <input
                type="radio"
                id="radiobutton1"
                name="transport"
                value="twowheeler"
                checked={radioResponse1 === "twowheeler"}
                onChange={() => setRadioResponse1("twowheeler")}
              />
              <label htmlFor="twowheeler">Own Two-wheeler</label>
            </li>
            <li>
              <input
                type="radio"
                id="radiobutton1"
                name="transport"
                value="owncar"
                checked={radioResponse1 === "owncar"}
                onChange={() => setRadioResponse1("owncar")}
              />
              <label htmlFor="owncar">Own Car</label>
            </li>
            <li>
              <input
                type="radio"
                id="radiobutton1"
                name="transport"
                value="walk/bicycle"
                checked={radioResponse1 === "walk/bicycle"}
                onChange={() => setRadioResponse1("walk/bicycle")}
              />
              <label htmlFor="walk/bicycle">Walk / Bicycle</label>{" "}
            </li>
            <li>
              <input
                type="radio"
                id="radiobutton1"
                name="transport"
                value="auto"
                checked={radioResponse1 === "auto"}
                onChange={() => setRadioResponse1("auto")}
              />
              <label htmlFor="auto">Auto</label>{" "}
            </li>
            <li>
              <input
                type="radio"
                id="radiobutton1"
                name="transport"
                value="ola/uber"
                checked={radioResponse1 === "ola/uber"}
                onChange={() => setRadioResponse1("ola/uber")}
              />
              <label htmlFor="ola/uber">
                App based ride hailing cab services including Ola / Uber
              </label>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            What is the total distance between your home and workplace?
            <br />
            <br />
          </h5>
          <ul className="options">
            <li>
              <input
                type="radio"
                id="radiobutton2"
                name="distance"
                value="<5km"
                checked={radioResponse2 === "<5km"}
                onChange={() => setRadioResponse2("<5km")}
              />
              <label htmlFor="<5km">&lt;5 km</label>{" "}
            </li>
            <li>
              <input
                type="radio"
                id="radiobutton2"
                name="distance"
                value="5-10km"
                checked={radioResponse2 === "5-10km"}
                onChange={() => setRadioResponse2("5-10km")}
              />
              <label htmlFor="5-10 km">5 - 10 km</label>
            </li>
            <li>
              <input
                type="radio"
                id="radiobutton2"
                name="distance"
                value="10-15km"
                checked={radioResponse2 === "10-15km"}
                onChange={() => setRadioResponse2("10-15km")}
              />
              <label htmlFor="10-15km">10- 15 km</label>
            </li>
            <li>
              <input
                type="radio"
                id="radiobutton2"
                name="distance"
                value="15-20km"
                checked={radioResponse2 === "15-20km"}
                onChange={() => setRadioResponse2("15-20km")}
              />
              <label htmlFor="15-20km">15- 20 km</label>
            </li>
            <li>
              <input
                type="radio"
                id="radiobutton2"
                name="distance"
                value="20-25km"
                checked={radioResponse2 === "20-25km"}
                onChange={() => setRadioResponse2("20-25km")}
              />
              <label htmlFor="20-25km">20- 25 km</label>{" "}
            </li>
            <li>
              <input
                type="radio"
                id="radiobutton2"
                name="distance"
                value=">25km"
                checked={radioResponse2 === ">25km"}
                onChange={() => setRadioResponse2(">25km")}
              />
              <label htmlFor=">25km">&gt; 25 km</label>{" "}
            </li>
          </ul>
          <br />
          <br />
        </div>
      </div>
      <div className="button">
        <button type="submit">
          <Link className="nextBtn" to="page2">
            Next
          </Link>
        </button>
      </div>
    </div>
  );
}
