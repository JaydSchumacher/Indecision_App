const app = {
    title: 'Visibility Toggle',
    message: 'This is now visible',
    show: false
}

const showDetail = () => {
    if (app.show === false){
        app.show = true;
        console.log("Should be true")
        render();
    }
    else{
        app.show = false;
        render();
    }
}

const appRoot = document.getElementById('app');

const render = () => {
    
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={showDetail}>Show Details</button>
            {(app.show === true) && <p> {app.message} </p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();