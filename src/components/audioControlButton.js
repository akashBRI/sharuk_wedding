import React, { useState, useEffect } from "react";

const AudioControlButton = ({ isPlaying, onTogglePlay }) => {
  return (
    <div className="grid_position__gg+Eo grid_position--bottom-right__2rWHR grid_position--fixed__Uvo5V">
      <div className="grid_space--around-2px__KgnSP">
        <button
          className="button_button__XEZgT button_button--size-md__NIOGh text_text--size-7__+ECec button_button--style-lite__pmbft"
          type="button"
          onClick={onTogglePlay}
        >
          <ul className="loading_music-playing-loader__ru3oV loading_music-playing-loader--play__04l2L">
            <li
              className="loading_music-playing-loader__item__5HJYR"
              style={{'--line-index': 1}}
            ></li>
            <li
              className="loading_music-playing-loader__item__5HJYR"
              style={{'--line-index': 4}}
            ></li>
            <li
              className="loading_music-playing-loader__item__5HJYR"
              style={{'--line-index': 3}}
            ></li>
            <li
              className="loading_music-playing-loader__item__5HJYR"
              style={{'--line-index': 4}}
            ></li>
          </ul>{" "}
          <div className="grid_space__48fD1 grid_space--1px__oowyC"></div>
          <span className="icon_icon__S8qvc icon_icon--size-sm__TgOx3">
          <img src={isPlaying?"./pause.svg":"./play.svg"}/>
          </span>
        </button>
      </div>
    </div>
  );
};

export default AudioControlButton;
