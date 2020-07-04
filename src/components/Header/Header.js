import React from "react";
import Style from "./header.module.css";
import NavBar from "../Navbar/Navbar";
const Header = () => {
  return (
    <div>
      <div className={Style.heroBg}>
        <NavBar />
        <div className={`${Style.heroText} text-center`}>
          <h1 className={`${Style.heroHeader} font-weight-bold`}>
            Unlimited movies, TV shows, and more.
          </h1>
          <p className={Style.heroSub}>Watch anywhere. Cancel anytime.</p>
          <div
            className="form form-group"
            style={{
              textAlign: "center",
              marginLef: "auto",
              marginRight: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <form style={{ display: "inlilne-block" }}>
              <input
                type="text"
                className={`${Style.nfTextField} input-group align-self-center `}
              />
              <button type="submit" className={Style.Btn}>
                TRY 30 DAYS FOR FREE
              </button>
            </form>
          </div>
          <p className={Style.heroSub}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
