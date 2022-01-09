import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var userDictionary = {
    "😀": "Happy",
    "😁": "Beaming face",
    "😂": "Laughing",
    "🤣": "Hard laughing",
    "😃": "Happy with big eyes",
    "😄": "Very happy",
    "😅": "Grinning face with sweat",
    "🥰": "Feeling loved and cared",
    "😘": "Kissing",
    "🤩": "Amused",
    "🤔": "Thinking",
    "😥": "Sad",
    "😣": "Stressed",
    "😴": "Sleepy",
    "😛": "Naughty",
    "🙄": "Rolling eyes",
    "🙈": "See-No-Evil Monkey",
    "🙉": "Hear-No-Evil Monkey",
    "🙊": "Speak-No-Evil Monkey",
    "💥": "Collision",
    "💫": "Dizzy",
    "💦": "Sweat Droplets",
    "💨": "Dashing Away",
    "🐵": "Monkey Face",
    "🐒": "Monkey",
    "🦍": "Gorilla",
    "🦧": "Orangutan",
    "🐶": "Dog Face",
    "🐕": "Dog",
    "🦮": "Guide Dog",
    "🐕‍🦺": "Service Dog",
    "🐩": "Poodle",
    "🐺": "Wolf",
    "🦊": "Fox",
    "🦝": "Raccoon",
    "🐱": "Cat Face",
    "🐑": "Ewe",
    "🐐": "Goat",
    "🐪": "Camel",
    "🐫": "Two-Hump Camel",
    "🦙": "Llama",
    "🦒": "Giraffe",
    "🦏": "Rhinoceros",
    "🦛": "Hippopotamus",
    "🐼": "Panda",
    "🦥": "Sloth",
    "🦦": "Otter",
    "🦨": "Skunk",
    "🦘": "Kangaroo",
    "🦡": "Badger",
    "🐾": "Paw Prints",
    "🦃": "Turkey",
    "🐔": "Chicken",
    "🐓": "Rooster",
    "🐣": "Hatching Chick",
    "🐤": "Baby Chick",
    "🐥": "Front-Facing Baby Chick",
    "🐦": "Bird",
    "🐧": "Penguin",
    "🦆": "Duck",
    "🦢": "Swan",
    "🦉": "Owl",
    "🦩": "Flamingo",
    "🦚": "Peacock",
    "🦜": "Parrot",
    "🐸": "Frog",
    "🐊": "Crocodile",
    "🐢": "Turtle",
    "🦎": "Lizard",
    "🐍": "Snake",
    "🐲": "Dragon Face",
    "🐉": "Dragon",
    "🦕": "Sauropod",
    "🦖": "T-Rex",
    "🐳": "Spouting Whale",
    "🐋": "Whale",
    "💐": "Bouquet",
    "🌸": "Cherry Blossom",
    "💮": "White Flower",
    "🌹": "Rose",
    "🥀": "Wilted Flower",
    "🌺": "Hibiscus",
    "🌻": "Sunflower",
    "🌼": "Blossom",
    "🌷": "Tulip",
    "🌱": "Seedling",
    "🌲": "Evergreen Tree",
    "🌳": "Deciduous Tree",
    "🌴": "Palm Tree",
    "🌵": "Cactus",
    "🌾": "Sheaf of Rice",
    "🌿": "Herb",
    "🍀": "Four Leaf Clover",
    "🌑": "New Moon",
    "🌒": "Waxing Crescent Moon",
    "🌓": "First Quarter Moon",
    "🌔": "Waxing Gibbous Moon",
    "🌕": "Full Moon",
    "🌖": "Waning Gibbous Moon",
    "🌗": "Last Quarter Moon",
    "🌘": "Waning Crescent Moon",
    "🌙": "Crescent Moon",
    "🌚": "New Moon Face",
    "🌛": "First Quarter Moon Face",
    "🌜": "Last Quarter Moon Face",
    "☀️": "Sun",
    "🌝": "Full Moon Face",
    "🌞": "Sun with Face",
    "⭐": "Star",
    "🌟": "Glowing Star"
  };
  let emojisWeHave = Object.keys(userDictionary);
  let [meaning, setMeaning] = useState("");
  const changeHandler = event => {
    userInput = event.target.value;
    let pickEmoji = userDictionary[userInput];
    if (pickEmoji === undefined) pickEmoji = "We don't have this emoji";
    setMeaning(pickEmoji);
  }
  const emojiClickHandler = item => {
    let pickEmoji = userDictionary[item];
    setMeaning(pickEmoji);
  }
  return (
    <div className="App">
      <div style={{ fontSize: "50px", padding: "30px" }}>
        Smiley Interpreter
      </div>
      <h3>
        Enter the emoji you want to find the meaning of, or click on the below
        emojis to get their meaning
      </h3>
      <input className="input-box" onChange={changeHandler} />
      <h1>{meaning}</h1>
      <div style={{ padding: "0 100px" }}>
        {emojisWeHave.map((item) => {
          return (
            <span key={item} onClick={() => emojiClickHandler(item)}>
              {item}
            </span>
          );
        })}
      </div>
      <footer>
        Also visit my portfolio{" "}
        <a href="https://sakshamak.netlify.app/">Saksham</a>
      </footer>
    </div>
  );
}
