import axios from 'axios';
import styles from '../css/Noticias.module.css';


 
export default async function BuscaNoticia(){






    let elemento_container = document.getElementById("containers");

    
  
    const noticia = await axios.get('http://localhost:2021/api/noticia');
    const NoticiasRetorno = noticia.data;

    console.log(NoticiasRetorno);

    for(var a = 0;a<NoticiasRetorno.length;++a){

    if(NoticiasRetorno[a].title!=null){

elemento_container.innerHTML+=`
<nav class=`+styles.navcard+`>
<div class=`+styles.campos+`><h5>`+NoticiasRetorno[a].title+`</h5></div>
<img src=`+NoticiasRetorno[a].urlToImage+` class=`+styles.img+` alt=img`+a+`>
<div class=`+styles.campos+`><p>`+NoticiasRetorno[a].description+`</p></div>
<a href=`+NoticiasRetorno[a].url+`><p  class=`+styles.link+` >Visitar Noticia</p></a>
</nav>`;

    }else{
elemento_container.innerHTML+=`
<nav class=`+styles.navcard+`>
<div class=`+styles.campos+`><h5>Sem Titulo</h5></div>
<img src=`+NoticiasRetorno[a].urlToImage+` class=`+styles.img+` alt=img`+a+`>
<div class=`+styles.campos+`><p>`+NoticiasRetorno[a].description+`</p></div>
<a href=`+NoticiasRetorno[a].url+`><p  class=`+styles.link+` >Visitar Noticia</p></a>
</nav>`;
    }
    }
    }

    BuscaNoticia()
