import React, { useState, useEffect } from "react";

import Cookies from "js-cookie";

function Table({ list }) {
  let radio2 = Cookies.get("radio2");
  let radio1 = Cookies.get("radio1");
  return (
    <div>
      {list?.Data[0] && (
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
      )}
    </div>
  );
}

export default Table;
