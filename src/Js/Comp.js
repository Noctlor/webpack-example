import "../Css/comp.css";
import wbpl from '../Assets/img/webpack-logo.png';

export const saludar = (nombre) =>{
    console.log("asdas");
    const h1 = document.createElement('h1');
    h1.innerText = `has ${nombre}as`;
    document.body.append(h1);

    const img = document.createElement('img');
    img.src = wbpl;
    document.body.append(img);
}