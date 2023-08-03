import styles from "./DefaultLAyout.module.scss"
import Logo from "@/assets/images/logo";

const Header = ({children}) => {
    return (
      <>
        <div className={styles.Header}>
            <Logo className={styles.logo}/>
        </div>
        {children}
      </>
    );
}

export default Header