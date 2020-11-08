import React, { Component } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="social-container">
          <div>
            <h1 className="social-header">Social Follow</h1>
          </div>
          <div className="row social">
            <a className="social" href="">
              <AiFillFacebook
                size={50}
                style={{
                  color: "#4968ad",
                }}
              />
            </a>

            <a className="social" href="">
              <AiFillInstagram
                size={50}
                style={{
                  color: "black",
                }}
              />
            </a>
            <a className="social">
              <AiFillTwitterSquare
                size={50}
                style={{
                  color: "#49a1eb",
                }}
              />
            </a>

            <a className="social" href="">
              <AiFillLinkedin
                size={50}
                style={{
                  color: "blue",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
