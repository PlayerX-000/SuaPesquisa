import styles from './css/Footer.module.css';
import { FaHeart } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



export default function Footer(){

return(
<footer className={styles.footer}>
      <div className={styles.social}>
        <a href="https://www.instagram.com/">
          <FaInstagram size="40"  color="#007cff"/>
        </a>
        <a href="https://www.youtube.com/">
          <FaYoutube size="40"  color="#007cff"/>
        </a>  
      </div>
      <p className={styles.copyright}>Desenvolvido por Kauãn.H  <FaHeart color="#B51942"/> Estudante de Programação</p>
    </footer>
)
    
}