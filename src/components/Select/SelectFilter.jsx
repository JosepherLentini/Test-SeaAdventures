import styles from "./SelectFilter.module.scss";
import { departure } from "@/utils/departure";

const SelectFilter = ({ porto, setPorto}) => {
  


  const onValueOption = (e) => {
    console.log(porto)
    setPorto(e.target.value)
  };

  console.log(porto)
  return (
    <div className={styles.SelectFilter}>
      <select
        name=""
        id=""
        onChange={(e) => onValueOption(e)}
      >
        <option value="Tutti i porti">Tutti i porti</option>
        {departure.map((el) => (
          <option value={el.name} key={el.id}>
            {el.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;
