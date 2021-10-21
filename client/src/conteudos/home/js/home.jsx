import axios from 'axios';
import styles from '../css/Home.module.css';





export default function axi(){
  
   let elemento_resultado_link = document.getElementById("links");
   let elemento_resultado_texto = document.getElementById("textos");




elemento_resultado_link.innerHTML = null
elemento_resultado_texto.innerHTML = null




let DadoDoUsuario = document.getElementById("insert").value
    axios.post('http://localhost:2021/pesquisa',

    {data:DadoDoUsuario})

    .then(response=>{
console.log(response)


for (var a = 0; a < response.data.link.length; ++a){
      let link = response.data.link[a]
      if(link!=''){
        elemento_resultado_link.innerHTML+='<li class='+styles.links+' color=blue>'+'<a href='+link+'>'+link+'></a>'+'</li>'+'<br></br>' 
}}


elemento_resultado_texto.innerText=response.data.texto

    })
    }