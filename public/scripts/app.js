'use strict';

var app = {
    title: 'Visibility Toggle',
    message: 'This is now visible',
    show: false
};

var toggleDetail = function toggleDetail() {
    app.show = !app.show;
    render();
};

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
            { onClick: toggleDetail },
            app.show ? 'Hide Details' : 'Show Details'
        ),
        app.show && React.createElement(
            'div',
            null,
            app.message
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();
