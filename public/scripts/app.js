'use strict';

var app = {
    title: 'Visibility Toggle',
    message: 'This is now visible',
    show: false
};

var showDetail = function showDetail() {
    if (app.show === false) {
        app.show = true;
        console.log("Should be true");
        render();
    } else {
        app.show = false;
        render();
    }
};

var appRoot = document.getElementById('app');

var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: showDetail },
            'Show Details'
        ),
        app.show === true && React.createElement(
            'p',
            null,
            ' ',
            app.message,
            ' '
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
