const app = {
    title: 'Visibility Toggle',
    message: 'This is now visible',
    show: false
}

const toggleDetail = () => {
        app.show = !app.show;
        render();
}

const render = () => {
    
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleDetail}>{app.show ? 'Hide Details' : 'Show Details'}</button>
            {app.show && (
                <div>{app.message}</div>
            )}
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
}

render();