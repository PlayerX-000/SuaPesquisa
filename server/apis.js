const axios = require("axios")



 
exports.noticias = async (req , res) => {

  
  const respon = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1f83585fb9fc4eb39729fddc0192ef76')
  const DadoRetornado = respon.data.articles;
  console.log(DadoRetornado)
  return (res.status(200).send(DadoRetornado))


}