import style from './styles/404.module.css';
import Image from 'next/image';
import Head from 'next/head';
 

export default function Custom404() {


  
    return (
    <>
<Head>
  <title>Error 404</title>
</Head>
<div>
<article>
<div className={style.fulltela}>
<div className={style.alert}>ERRO 404. Pagina Não Encontrada</div>
<div className={style.article}>
<div className={style.pai}>

<Image src="/img1.png" width={680} height={780} />
<Image src="/img2.png" width={680} height={780} />
<Image src="/img3.png" width={680} height={780} />
<Image src="/img4.png" width={680} height={780} />
<Image src="/img5.png" width={680} height={780} />

</div>

<div className={style.opaco}></div>

</div>
</div>
</article>
</div>
</>
    )
  }