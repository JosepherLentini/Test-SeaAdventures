import styles from "./Groups.module.scss";
import { data } from "@/utils/data";
import SelectFilter from "../Select";
import Card from "../Card";

import { useState } from "react";

const Groups = () => {
  const [porto, setPorto] = useState("Tutti i porti");

  const [show, setShow] = useState(8);
  const [btn, setBtn] = useState(true);

  const onHandleClick = () => {
    console.log(data.length);
    setShow(show + 8);
    if (data.length - show < 8) {
      setShow(data.length);
    }
    if (show === data.length) {
      setBtn(false);
    }
  };

  return (
    <div className={styles.Groups} onClick={() => console.log(data.length)}>
      <div className={styles.groupHeader}>
        {/* <div className={styles.groupTitle}>
          <p>{porto}</p>
        </div> */}
        <div className={styles.filterSelect}>
          <SelectFilter porto={porto} setPorto={setPorto} />
        </div>
      </div>
      <div className={styles.departureWrapper}>
        {porto !== "Tutti i porti"
          ? data
              .filter((pt) => pt.departure.Port.includes(porto))
              .map((mock) => <Card mock={mock} />)
          : data.slice(0, show).map((mock) => <Card mock={mock} />)}
      </div>
      {btn && porto === "Tutti i porti" && (
        <div className={styles.show}>
          <button onClick={onHandleClick}>mostra altri</button>
        </div>
      )}
    </div>
  );
};

export default Groups;
