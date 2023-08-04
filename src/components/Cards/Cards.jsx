//HOOKS
import { useState } from "react";
// MOCK
import { data } from "@/utils/data";
// COMPONENTS
import Card from "../Card/Card";
import Select from "../Select";
// STYLE
import styles from "./Cards.module.scss";

const Cards = () => {
  const [show, setShow] = useState(8);
  const [btn, setBtn] = useState(true);

  console.log(data.length);

  const onHandleClick = () => {
    setShow(show + 8);
    if (data.length - show < 8) {
      setShow(data.length);
    }
    if (show === data.length) {
      setBtn(false);
    }
  };

  
  return (
    <div className={styles.Cards}>
        
      <div className={styles.cardsWrapper}>
        {data.slice(0, show).map((mock) => (
          <Card mock={mock}  key={mock.id}/>
        ))}
      </div>
      {btn && (
        <div className={styles.show}>
          <button onClick={onHandleClick}>mostra altri</button>
        </div>
      )}
    </div>
  );
};

export default Cards;
