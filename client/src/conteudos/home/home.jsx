import styles from './css/Home.module.css';
import axi from './js/home'


export default function Conteudo(){

    return(
    <>
<article>
    <div className={styles.div}>
<label for="insert">Buscador: </label>
<input id="insert" name="insert" className={styles.insert}></input>
<button className={styles.botao} onClick={axi}> Buscar </button>
</div>


<hr className={styles.hr4}></hr>
<div className={styles.div}>
<label for="caixalink">Links</label>
<ul id="links" name="caixalink" className={styles.conteudo}></ul>
<label for="caixatextos">Significados</label>
<ul id="textos" name="caixatextos" className={styles.conteudo}></ul>
</div>
</article>

</>
    )

}