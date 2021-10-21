import styles from './css/Header.module.css';
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai';
import alerti from './js/header';


export default function Header() {
 


    return (
    <>

<header className={styles.header}>
<div id={styles.divpai}>



   <nav>
   <p className={styles.p}>Informe.com</p>
   </nav>
   
         <nav className={styles.nav}>
   <button className={styles.botao}> <Link href="/">               Pesquisa </Link></button>
   <a href='/views/noticia/'><button className={styles.botao}>Noticias </button></a>
   <button className={styles.botao}> <Link href="/views/novidade/">Novidades</Link></button>
   <button className={styles.botao}> <Link href="/views/suport/">  Suport   </Link></button>
   </nav>

<nav onClick={alerti} className={styles.min}><AiOutlineMenu size={30} /></nav>
</div>

<article id='menu' className={styles.menu}>
    <div id='containernavs'>
    <nav>
       <a><Link href="/"> Home </Link></a>
    </nav>
    <nav>
    <a href='/views/noticia/'>Noticias</a>
    </nav>
    <nav>
       <a><Link href="/views/novidade/"> Novidades </Link></a>
    </nav>
    <nav>
    <a><Link href="/views/suport/">  Suport </Link></a>
    </nav>
    </div>
</article>
</header>


</>
    )
}    