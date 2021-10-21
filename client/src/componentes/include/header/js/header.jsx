

let control = false

export default function alerti(){
    
    let menu = document.getElementById('menu')


if(control){
    menu.style.display = 'none'
    control = !control
   
}else{
    menu.style.display = 'flex'
    control = !control
    
}
    }