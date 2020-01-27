import * as React from "react";

import { ReactComponent as C_BACK } from "./svgs/back.svg";
import { ReactComponent as C_10C } from "./svgs/10C.svg";
import { ReactComponent as C_10D } from "./svgs/10D.svg";
import { ReactComponent as C_10H } from "./svgs/10H.svg";
import { ReactComponent as C_10S } from "./svgs/10S.svg";
import { ReactComponent as C_2C } from "./svgs/2C.svg";
import { ReactComponent as C_2D } from "./svgs/2D.svg";
import { ReactComponent as C_2H } from "./svgs/2H.svg";
import { ReactComponent as C_2S } from "./svgs/2S.svg";
import { ReactComponent as C_3C } from "./svgs/3C.svg";
import { ReactComponent as C_3D } from "./svgs/3D.svg";
import { ReactComponent as C_3H } from "./svgs/3H.svg";
import { ReactComponent as C_3S } from "./svgs/3S.svg";
import { ReactComponent as C_4C } from "./svgs/4C.svg";
import { ReactComponent as C_4D } from "./svgs/4D.svg";
import { ReactComponent as C_4H } from "./svgs/4H.svg";
import { ReactComponent as C_4S } from "./svgs/4S.svg";
import { ReactComponent as C_5C } from "./svgs/5C.svg";
import { ReactComponent as C_5D } from "./svgs/5D.svg";
import { ReactComponent as C_5H } from "./svgs/5H.svg";
import { ReactComponent as C_5S } from "./svgs/5S.svg";
import { ReactComponent as C_6C } from "./svgs/6C.svg";
import { ReactComponent as C_6D } from "./svgs/6D.svg";
import { ReactComponent as C_6H } from "./svgs/6H.svg";
import { ReactComponent as C_6S } from "./svgs/6S.svg";
import { ReactComponent as C_7C } from "./svgs/7C.svg";
import { ReactComponent as C_7D } from "./svgs/7D.svg";
import { ReactComponent as C_7H } from "./svgs/7H.svg";
import { ReactComponent as C_7S } from "./svgs/7S.svg";
import { ReactComponent as C_8C } from "./svgs/8C.svg";
import { ReactComponent as C_8D } from "./svgs/8D.svg";
import { ReactComponent as C_8H } from "./svgs/8H.svg";
import { ReactComponent as C_8S } from "./svgs/8S.svg";
import { ReactComponent as C_9C } from "./svgs/9C.svg";
import { ReactComponent as C_9D } from "./svgs/9D.svg";
import { ReactComponent as C_9H } from "./svgs/9H.svg";
import { ReactComponent as C_9S } from "./svgs/9S.svg";
import { ReactComponent as C_AC } from "./svgs/AC.svg";
import { ReactComponent as C_AD } from "./svgs/AD.svg";
import { ReactComponent as C_AH } from "./svgs/AH.svg";
import { ReactComponent as C_AS } from "./svgs/AS.svg";
import { ReactComponent as C_JC } from "./svgs/JC.svg";
import { ReactComponent as C_JD } from "./svgs/JD.svg";
import { ReactComponent as C_JH } from "./svgs/JH.svg";
import { ReactComponent as C_JS } from "./svgs/JS.svg";
import { ReactComponent as C_KC } from "./svgs/KC.svg";
import { ReactComponent as C_KD } from "./svgs/KD.svg";
import { ReactComponent as C_KH } from "./svgs/KH.svg";
import { ReactComponent as C_KS } from "./svgs/KS.svg";
import { ReactComponent as C_QC } from "./svgs/QC.svg";
import { ReactComponent as C_QD } from "./svgs/QD.svg";
import { ReactComponent as C_QH } from "./svgs/QH.svg";
import { ReactComponent as C_QS } from "./svgs/QS.svg";
import styles from "./card.module.css";

export type CardSuit = "C" | "D" | "H" | "S";
export const AllSuits: CardSuit[] = ["C", "D", "H", "S"];
export type CardValue = {
  suit: CardSuit;
  value: number;
};

const CardView: React.SFC<{card: CardValue, shift?: number}> = ({
   card: {suit, value} , shift = 0
}) => {
  const picture = value.toString() + ((suit as unknown) as string);
  const Component = getCardComponent(picture);
  return (
    <div className={styles.card} style={{left: shift + 'px'}}>
      <Component width={"100px"} height={"150px"} />
    </div>
  );
};

export const CardsView: React.SFC<{cards: CardValue[]}> = ({ cards }) => {
  return (
    <div className={styles.cards}>
      {cards.map((card, idx) => (<CardView card={card} shift={idx * 20} key={idx}/>))}
    </div>
  );
};

export const fromString = (cardString: string): CardValue => {
  let suit: CardSuit;
  switch (cardString[0]) {
    case 'C':
      suit = "C";
      break;
    case 'D':
      suit = "D";
      break;
    case 'H':
      suit = "H";
      break;
    case 'S':
      suit = "S";
      break;
    default:
      suit = "C";
  };
  let value: number;
  switch (cardString[1]) {
    case 'A':
        value = 1;
        break;
    case 'K':
      value = 13;
      break;
    case 'Q':
      value = 12;
      break;
    case 'J':
      value = 11;
      break;
    case 'X':
      value = 10;
      break;
    default:
      value = parseInt(cardString[1]);
  }
  return {suit, value};
}

const getCardComponent = (picture: string) => {
  switch (picture) {
    case "10C":
      return C_10C;
    case "10D":
      return C_10D;
    case "10H":
      return C_10H;
    case "10S":
      return C_10S;
    case "2C":
      return C_2C;
    case "2D":
      return C_2D;
    case "2H":
      return C_2H;
    case "2S":
      return C_2S;
    case "3C":
      return C_3C;
    case "3D":
      return C_3D;
    case "3H":
      return C_3H;
    case "3S":
      return C_3S;
    case "4C":
      return C_4C;
    case "4D":
      return C_4D;
    case "4H":
      return C_4H;
    case "4S":
      return C_4S;
    case "5C":
      return C_5C;
    case "5D":
      return C_5D;
    case "5H":
      return C_5H;
    case "5S":
      return C_5S;
    case "6C":
      return C_6C;
    case "6D":
      return C_6D;
    case "6H":
      return C_6H;
    case "6S":
      return C_6S;
    case "7C":
      return C_7C;
    case "7D":
      return C_7D;
    case "7H":
      return C_7H;
    case "7S":
      return C_7S;
    case "8C":
      return C_8C;
    case "8D":
      return C_8D;
    case "8H":
      return C_8H;
    case "8S":
      return C_8S;
    case "9C":
      return C_9C;
    case "9D":
      return C_9D;
    case "9H":
      return C_9H;
    case "9S":
      return C_9S;
    case "1C":
      return C_AC;
    case "1D":
      return C_AD;
    case "1H":
      return C_AH;
    case "1S":
      return C_AS;
    case "11C":
      return C_JC;
    case "11D":
      return C_JD;
    case "11H":
      return C_JH;
    case "11S":
      return C_JS;
    case "13C":
      return C_KC;
    case "13D":
      return C_KD;
    case "13H":
      return C_KH;
    case "13S":
      return C_KS;
    case "12C":
      return C_QC;
    case "12D":
      return C_QD;
    case "12H":
      return C_QH;
    case "12S":
      return C_QS;
    default:
      return C_BACK;
  }
};
