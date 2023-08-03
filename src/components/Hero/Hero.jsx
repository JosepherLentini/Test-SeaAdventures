import styles from "./Hero.module.scss";
import heroimage from "../../assets/images/hero.jpeg";
import Image from "next/image";

const Hero = () => {
    return (
      <div className={styles.Hero}>
        <Image src={heroimage} className={styles.heroimg} />
        <div className={styles.overlayHero}>
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>
    );
}

export default Hero