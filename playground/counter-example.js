const user = {
    name: 'Tom',
    age: 30,
    location: 'La Crosse'
}

let count = 0;
const addOne = () => {
    count ++;
    renderCounterApp()
}
const subOne = () => {
    count--;
    renderCounterApp()
}
const reset = () => {
    count = 0;
    renderCounterApp()
}



const renderCounterApp = () => {

    const templateTwo = (
        <div> 
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
