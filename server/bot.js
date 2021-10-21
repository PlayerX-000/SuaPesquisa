
    const puppeteer = require('puppeteer')

    
      
    
    exports.run = async (req , res) => {
    
        const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const pesquisa = req.body.data;

  const qualquerUrl = `https://www.google.com/search?q=${pesquisa}&sxsrf=AOaemvKpMA8Gosiw71mI2ZNn7Y9YyO0wrA%3A1633704370082&ei=sllgYeyuBJbX1sQP6rqQ4A8&ved=0ahUKEwjsz5WFh7vzAhWWq5UCHWodBPwQ4dUDCA4&oq=${pesquisa}&gs_lcp=Cgdnd3Mtd2l6EAxKBAhBGABQAFgAYIkkaABwAngAgAEAiAEAkgEAmAEA&sclient=gws-wiz`;

  await page.goto(qualquerUrl);
  // await page.screenshot({path: 'example.png'});

  const resultado = await page.evaluate(() => {
let link = [];
let texto = '';


let res = document.getElementsByClassName('g');
for(var a = 0;a<res.length;++a){
link.push(res[a].querySelector("a").href)
}

const arg = document.querySelectorAll('body ol')
texto = arg[1].innerText


 return {link,texto}
  });

 
  await res.status(200).send(resultado)
  await browser.close();


    }
