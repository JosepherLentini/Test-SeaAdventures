import styles from "./Banner.module.scss";
import bannerimage from "../../assets/images/banner.jpeg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={styles.Banner}>
      <div className={styles.imageWrapper}>
        <Image src={bannerimage} className={styles.bannerImage} />
        <div className={styles.overlay}>
          <h1>
            <p>+20</p>
            <span>Destinazioni</span>
          </h1>
          <h1>
            <p>+15</p>
            <span>Imbarcazioni</span>
          </h1>
          <h1>
            <p> +40 </p>
            <span> Itinerari</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
