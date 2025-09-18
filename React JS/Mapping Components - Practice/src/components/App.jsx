import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(emojiItem) {
  return (
    <Card
      key={emojiItem.id}
      id={emojiItem.id}
      emoji={emojiItem.emoji}
      name={emojiItem.name}
      meaning={emojiItem.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
