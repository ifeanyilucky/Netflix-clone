import React from "react";
import { Container } from "reactstrap";
import Style from "./Body.module.css";
import tv from "../../assets/image/tv.png";
import mobile from "../../assets/image/mobile-0819.jpg";
import devicePile from "../../assets/image/device-pile.png";
import { Link } from "react-router-dom";
import boxShot from "../../assets/image/boxshot.png";
import downloadIcon from "../../assets/image/download-icon.gif";
import videoDevice from "../../assets/image/video-devices.m4v";

import { Accordion, Card } from "react-bootstrap";
const Body = () => {
  return (
    <React.Fragment>
      <hr className={Style.hrLine} />
      <div style={{ background: "#000000" }}>
        <section className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={Style.colText}>
                <h1 className={Style.tle}>Enjoy on your TV.</h1>
                <p className={Style.subtle}>
                  Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                  Blu-ray players, and more.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="img-fluid">
                <img src={tv} className={Style.nfImg} />
              </div>
            </div>
          </div>
        </section>

        <hr className={Style.hrLine} />
        <section className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6" style={{ textAlign: "left" }}>
              <div>
                <img src={mobile} className={Style.nfImg} />
                <div className={Style.box}>
                  <div className="row">
                    <div className="col-3">
                      <img src={boxShot} height="60" />
                    </div>
                    <div className="col-6">
                      <span className="font-weight-bold">Stranger Things</span>
                      <br />
                      <span style={{ color: "#0071eb" }}>Downloading...</span>
                    </div>
                    <div className="col-2">
                      <div>
                        <img src={downloadIcon} className={Style.nfImgGif} />
                        <video
                          src={videoDevice}
                          autoPlay
                          playsInline
                          muted
                          loop
                          className={Style.video}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={Style.colText}>
                <h1 className={Style.tle}>
                  Download your shows to watch offline.
                </h1>
                <p className={Style.subtle}>
                  Save your favorites easily and always have something to watch.
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr className={Style.hrLine} />
        <section className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={Style.colText}>
                <h1 className={Style.tle}>Watch everywhere.</h1>
                <p className={Style.subtle}>
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV without paying more.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6" style={{ textAlign: "left" }}>
              <div className={Style.nfImg}>
                <img src={devicePile} className={Style.nfImg} />
              </div>
            </div>
          </div>
        </section>
        <hr className={Style.hrLine} />
        <section className="container">
          <div className="row">
            <div className="col-10">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Click me!
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Click me!
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </section>
        <hr className={Style.hrLine} />
        <section className={`${Style.footerBg} container`}>
          <a
            href="#"
            className="lead ml-5"
            style={{
              paddingBottom: "10px",
              paddingLeft: "12px",
              color: "#757575",
            }}
          >
            Question? Contact us
          </a>
          <div className=" ml-5 mr-5 row">
            <div className="col-sm-3 col-6">
              <ul className="list-unstyled">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Speed Test</a>
                </li>
                <li className="my-5">
                  <a href="#">Netflix Nigeria</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-6">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
                <li>
                  <a href="#">Legal Noices</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-6">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Ways to Watch</a>
                </li>
                <li>
                  <a href="#">Corporate Information</a>
                </li>
                <li>
                  <a href="#">Netflix Originals</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-6">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Media Center</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Body;
