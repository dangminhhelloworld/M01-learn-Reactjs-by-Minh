
const jsx  = (
    <React.Fragment>
    <h2>
        Hello
    </h2>
    <h3>
        Hello
    </h3>
    </React.Fragment>


);

const parent = document.querySelector('#hello');
const rootParent = ReactDOM.createRoot(parent);
rootParent.render(jsx);