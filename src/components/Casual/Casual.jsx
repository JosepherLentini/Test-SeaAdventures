import styles from "./Casual.module.scss"
import { data } from "@/utils/data"
import Card from "../Card"

const Casual = () => {
    return (
      <div className={styles.Casual}>
        {data.slice(0, 32).map((mock) => (
          <Card mock={mock} />
        ))}
      </div>
    );
}

export default Casual