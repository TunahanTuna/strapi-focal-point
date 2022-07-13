import React from "react";
import { Typography } from "@strapi/design-system/Typography";
import FocusPicker from "../../components/FocusPicker";
import FocusedImage from "../../components/FocusedImage";
import PropTypes from "prop-types";
import "./style.css";

export const FocusItems = ({ src, setFocus, focus, files }) => {
  const clickHandler = async () => {
    const postData = new FormData();
    const data = {
      focal_x: focus.x,
      focal_y: focus.y,
    };
    postData.append("data", JSON.stringify(data));
    postData.append(`files.file`, files, files.name);
    await fetch("http://localhost:1337/focal/create", {
      method: "POST",
      body: postData,
    })
      .then((res) => res.json())
      .then(location.reload());
  };

  return (
    <div className="app">
      <Typography variant="beta">Focused Image Picker</Typography>
      <div className="container">
        <div className="focus-picker-container">
          <FocusPicker imageSrc={src} onFocusChanged={setFocus} />
        </div>
        <hr className="spacer" />
        <div className="typography">
          <Typography variant="alpha">
            {focus.x} {focus.y}
          </Typography>
        </div>
        <button className="button" onClick={clickHandler}>
          <Typography variant="beta" textColor="secondary">
            Kaydet
          </Typography>
        </button>
        <hr className="spacer" />
        <div className="test-container">
          <div className="test-container2">
            <div className="test1">
              <FocusedImage imageSrc={src} x={focus.x} y={focus.y} />
            </div>
            <div className="test2">
              <FocusedImage imageSrc={src} x={focus.x} y={focus.y} />
            </div>
            <div className="test3">
              <FocusedImage imageSrc={src} x={focus.x} y={focus.y} />
            </div>
          </div>{" "}
          <div className="test">
            <FocusedImage imageSrc={src} x={focus.x} y={focus.y} />
          </div>
        </div>
      </div>
    </div>
  );
};
FocusItems.propTypes = {
  focus: PropTypes.object,
  src: PropTypes.string,
  setFocus: PropTypes.func,
};
