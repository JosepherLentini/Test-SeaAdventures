import { data } from "@/utils/data"
import Card from "../Card/Card"

import styles from "./Cards.module.scss"

const Cards = () => {
    return (
        <div className={styles.Cards}>
            {
                data.map((mock)=> <Card mock={mock}/>)
            }
        </div>
    )
}

export default Cards