import React, { useState, useEffect } from "react";
import Data1 from "./data/sample_db_0km.json";
import Data2 from "./data/sample_db_5km.json";
import Data4 from "./data/sample_db_15km.json";
import Data6 from "./data/sample_db_25km.json";
import Data5 from "./data/sample_db_20km.json";
import Data3 from "./data/sample_db_10km.json";
import Cookies from "js-cookie";
import "./Page2.css";
import Table from "./table";
import { ColorRing } from "react-loader-spinner";

function Page2() {
  // console.log(radio2);
  const [list, setList] = useState({});

  const waitBeforeShow = 1000;

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  // Use switch statements to determine which file to load
  let radio2 = Cookies.get("radio2");
  let radio1 = Cookies.get("radio1");
  // console.log(radio1, radio2);
  useEffect(() => {
    switch (radio2) {
      case "<5km":
        console.log("5");

        setList(Data1);
        break;
      case "5-10km":
        console.log("10");

        setList(Data2);

        break;
      case "10-15km":
        console.log("15");

        setList(Data3);

        break;
      case "15-20km":
        console.log("20");

        setList(Data4);

        break;
      case "20-25km":
        console.log("25");

        setList(Data5);

        break;
      case ">25km":
        console.log("30");

        setList(Data6);

        break;
      default:
        console.log("Invalid input. Please try again.");
    }
  }, [list]);
  // console.log("is", list);

  return (
    <>
      {/* {isShown && <Table list={list} />} */}

      {isShown ? (
        <table>
          <tbody>
            <tr>
              <td>{list?.Data[0].mode_1}</td>
              <td>{list?.Data[0].mode_2}</td>
              <td>{list?.Data[0].mode_4}</td>
              {radio1 == "Own Car" ? (
                <td>Own Car</td>
              ) : radio1 == "Own Two Wheeler" ? (
                <td>Own Two Wheeler</td>
              ) : (
                <td>
                  {
                    [list?.Data[0].mode_8, list?.Data[0].mode_9][
                      Math.floor(Math.random() * 2)
                    ]
                  }
                </td>
              )}
              <td>{list?.Data[0].mode_5}</td>
            </tr>
            <tr>
              <td>{list?.Data[0]["mode_1.ivtt"]} min</td>
              <td>{list?.Data[0]["mode_2.ivtt"]} min</td>
              <td>{list?.Data[0]["mode_4.ivtt"]} min</td>
              <td>{list?.Data[0]["mode_8.ivtt"]} min</td>
              <td>{list?.Data[0]["mode_5.ivtt"]} min</td>
            </tr>

            <tr>
              <td>{list?.Data[0]["mode_1.waittime"]} min</td>
              <td>{list?.Data[0]["mode_2.waittime"]} min</td>
              <td>{list?.Data[0]["mode_4.waittime"]} min</td>
              <td>{list?.Data[0]["mode_8.waittime"]} min</td>
              <td>{list?.Data[0]["mode_5.waittime"]} min</td>
            </tr>

            <tr>
              <td>{list?.Data[0]["mode_1.tvariab"]} min more</td>
              <td>{list?.Data[0]["mode_2.tvariab"]} min more</td>
              <td>{list?.Data[0]["mode_4.tvariab"]} min more</td>
              <td>{list?.Data[0]["mode_8.tvariab"]} min more</td>
              <td>{list?.Data[0]["mode_5.tvariab"]} min more</td>
            </tr>

            <tr>
              <td>Rs.{list?.Data[0]["mode_1.tcost"]}</td>
              <td>Rs. {list?.Data[0]["mode_2.tcost"]}</td>
              <td>Rs. {list?.Data[0]["mode_4.tcost"]}</td>
              <td>Rs. {list?.Data[0]["mode_8.tcost"]}</td>
              <td>Rs. {list?.Data[0]["mode_5.tcost"]}</td>
            </tr>

            <tr>
              {list?.Data[0]["mode_1.crowd"] == "1" ? (
                <td>Many Seats Available</td>
              ) : list?.Data[0]["mode_1.crowd"] == "2" ? (
                <td>Some Seats Available</td>
              ) : list?.Data[0]["mode_1.crowd"] == "3" ? (
                <td>All Seats Occupied</td>
              ) : list?.Data[0]["mode_1.crowd"] == "4" ? (
                <td>Fully Packed or Crowded</td>
              ) : (
                <td></td>
              )}
              {list?.Data[0]["mode_2.crowd"] == "1" ? (
                <td>Many Seats Available</td>
              ) : list?.Data[0]["mode_2.crowd"] == "2" ? (
                <td>Some Seats Available</td>
              ) : list?.Data[0]["mode_2.crowd"] == "3" ? (
                <td>All Seats Occupied</td>
              ) : list?.Data[0]["mode_2.crowd"] == "4" ? (
                <td>Fully Packed or Crowded</td>
              ) : (
                <td></td>
              )}

              {list?.Data[0]["mode_4.crowd"] == "1" ? (
                <td>Many Seats Available</td>
              ) : list?.Data[0]["mode_4.crowd"] == "2" ? (
                <td>Some Seats Available</td>
              ) : list?.Data[0]["mode_4.crowd"] == "3" ? (
                <td>All Seats Occupied</td>
              ) : list?.Data[0]["mode_4.crowd"] == "4" ? (
                <td>Fully Packed or Crowded</td>
              ) : (
                <td></td>
              )}
              <td></td>
              <td></td>
            </tr>
            <tr>
              {list?.Data[0]["mode_1.serv"] == "1" ? (
                <td>Ordinary</td>
              ) : list?.Data[0]["mode_1.serv"] == "2" ? (
                <td>Express Non-AC</td>
              ) : list?.Data[0]["mode_1.serv"] == "3" ? (
                <td>Express AC</td>
              ) : (
                <td></td>
              )}
              <td></td>
              <td></td>

              {list?.Data[0]["mode_4.serv"] == "1" ? (
                <td>Ordinary</td>
              ) : list?.Data[0]["mode_4.serv"] == "2" ? (
                <td>Express Non-AC</td>
              ) : list?.Data[0]["mode_4.serv"] == "3" ? (
                <td>Express AC</td>
              ) : (
                <td></td>
              )}
              <td></td>
            </tr>
          </tbody>
        </table>
      ) : (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
    </>
  );
}

export default Page2;
