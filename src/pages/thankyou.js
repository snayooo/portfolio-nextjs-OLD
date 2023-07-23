import Navbar from "../components/global/navbar";
import styles from '../../styles/thankyou.module.css'

export default function ThankYou() {
    return(
        <>
            <Navbar />
            <div className={styles.thanks}>
                <h1>Thank you for contacting me!</h1>
            </div>
        </>
    )
}