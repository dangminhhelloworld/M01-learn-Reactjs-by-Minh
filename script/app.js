
const div = React.createElement(
    "div",
    {
      className: 'title-class',  // className sẽ nhận giá trị "header-title"
      id: "title",       // id của phần tử sẽ là "title"
    },
    React.createElement(
        "h2",{
className: 'h2-class'
        },
       " Đây là h2"
        
    )           // Nội dung của thẻ h1 sẽ là "Hello"
);

const parent = document.querySelector('#hello');
const rootParent = ReactDOM.createRoot(parent);
rootParent.render(div);