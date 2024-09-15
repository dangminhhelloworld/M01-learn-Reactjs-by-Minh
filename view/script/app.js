const div = document.querySelector('.hello');
const p = document.createElement('p');
p.textContent = "Hello javascript DOM";

div.appendChild(p);

// create elemet React
//! divByReact = React.createElement(type(element) ,{props},child)
// ? element  = h1 , p , div , ....
// {props} =  {class , id , style , child }
const divByReact = React.createElement('h1',{
    class : 'helloReact',
    id : "React",
    style : color = "red"
}, "Hello React");

console.log(divByReact);