import React from "react";
import Header from "../components/Header.jsx";
import "../styles/Profile.scss";

export default function Login() {
  return (
    <>
      <Header active="profile" />
      <div className="general">
        <h1>Profile Page</h1>
        <form className="information">
          <div className="generalInfo">
            <h2>General Information</h2>
            <div className="generalData">
              <article>
                <label htmlFor="">First Name</label>
                <input type="text" name="" id="" />
              </article>
              <article>
                <label htmlFor="">Last Name</label>
                <input type="text" name="" id="" />
              </article>
              <article>
                <label htmlFor="">Phone</label>
                <input type="text" name="" id="" />
              </article>
              <article>
                <label htmlFor="">Email</label>
                <input type="text" name="" id="" />
              </article>
              <article>
                <label htmlFor="">Age</label>
                <input type="text" name="" id="" />
              </article>
              <article>
                <label htmlFor="">Lead Status</label>
                <select type="text" name="" id="" />
              </article>
            </div>
          </div>
          <div className="additionalInfo">
            <h2>Address</h2>
            <div className="additionalData">
              <article>
                <label htmlFor="">Street</label>
                <input type="text" />
              </article>
              <article>
                <label htmlFor="">Additional Info</label>
                <input type="text" />
              </article>
              <article>
                <label htmlFor="">City</label>
                <input type="text" />
              </article>
              <article>
                <label htmlFor="">State/Province</label>
                <input type="text" />
              </article>
              <article>
                <label htmlFor="">ZIP/Postal Code</label>
                <input type="text" />
              </article>
              <article>
                <label htmlFor="">Country</label>
                <input type="text" />
              </article>
            </div>
          </div>
          <div className="saveButton">
            <button>Save</button>
          </div>
        </form>
      </div>
    </>
  );
}
