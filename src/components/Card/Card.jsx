import styles from "./Card.module.scss";



function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const Card = ({mock}) => {


  return (
    <div className={styles.Card}>
      <div className={styles.price}>
        <p>{mock.budget.value + mock.budget.currencyCode}</p>
        <span>{mock.budget.costType}</span>
      </div>
      <div className={styles.title}>
        <p>{mock.title}</p>
      </div>
      <div className={styles.info}>
        <div className={styles.departure}>
          <p>partenza da</p>
          <span>{mock.departure.Port}</span>
        </div>
        <div className={styles.otherInfo}>
          <p>{mock.boatType}</p>
          <span>{`${mock.numberOfDays} giorni`}</span>
        </div>
      </div>

      <div className={styles.dateHour}>
        <div className={styles.start}>
          {mock.departureDate.split(" ").map((el) => (
            <>
              <p>{el}</p>
            </>
          ))}
        </div>
        <div className={styles.end}>
          {mock.arrivalDate.split(" ").map((el) => (
            <>
              <p>{el}</p>
            </>
          ))}
        </div>
      </div>
      <div className={styles.disponibility}>
        <p>
          {mock.reservations +
            " " +
            capitalizeFirstLetter(mock.reservationsType)}
        </p>
        <span>
          <p className={styles.available}>Disponibilità</p>
          <p>{" " + mock.reservationsAvailable}</p>
        </span>
      </div>
      <div className={styles.book}>
        <button>prenota</button>
      </div>
    </div>
  );
};

export default Card;
