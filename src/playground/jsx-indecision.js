console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
    title: 'My First React App',
    subtitle: 'I am trying out React and so far I am liking it!',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const clearList = () => {
    app.options = [];
    render();

}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');


const render = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p> {app.subtitle} </p>}
            <p>{(app.options.length > 0) ? 'Here are your options' : 'No options available'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clearList}>Remove All</button>
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();

