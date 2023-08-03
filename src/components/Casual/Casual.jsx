import styles from "./Casual.module.scss"
import { data } from "@/utils/data"
import Card from "../Card"
import { useState, useEffect } from "react"

const Casual = () => {

    const [casual1, setCasual1] = useState(0);


    useEffect(()=>{
        setCasual1(Math.floor(Math.random() * data.length/2));
    },[])

         

    return (
      <div className={styles.Casual}>
        <div className={styles.title}>
          <p>Avventure da scoprire</p>
        </div>
        <div className={styles.casualWrapper}>
          {data.slice(casual1, casual1 + 8).map((mock) => (
            <Card mock={mock} key={mock.id} />
          ))}
        </div>
      </div>
    );
}

export default Casual