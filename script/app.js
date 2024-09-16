function Header(props) {
    return(
       <div>
        <h1 className = {props.src}>{props.title}</h1>
        <label htmlFor=""></label>
       </div> 

    )
}

const jsx = (

  <React.Fragment>
  <Header 
    src = "đây là ảnh"
    className = "ClassOk"
    title = "Tôi test header"

  />
  
    <h3>Hello</h3>
    <h3>Hello</h3>
  </React.Fragment>
);

const parent = document.querySelector("#hello");
const rootParent = ReactDOM.createRoot(parent);
rootParent.render(jsx);
