import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing"
};

export default function App() {
  function justEmoji() {
    return Object.keys(emojiDictionary).map((li) => {
      return (
        <span key={li}>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => displayEmojiInfo(emojiDictionary, li)}
          >
            {li}
          </span>
          <span>&nbsp;</span>
        </span>
      );
    });
  }

  function displayEmojiInfo(emojiDictionary, li) {
    infoUpdate(emojiDictionary[li]);
  }

  function emojiInput(event) {
    if (emojiDictionary[event.target.value]) {
      emojiMsg = emojiDictionary[event.target.value];
    } else {
      emojiMsg = "This emoticon does not exist in our list";
    }
    emojiMsgSetter(emojiMsg);
  }
  let [info, infoUpdate] = useState("");
  let [emojiMsg, emojiMsgSetter] = useState("Translation will be here");
  return (
    <div className="App">
      <h1>Inside Out!!!</h1>
      <input onChange={(event) => emojiInput(event)}></input>
      <h3>{emojiMsg}</h3>
      <h2>{justEmoji()}</h2>
      <h3>{info}</h3>
    </div>
  );
}
