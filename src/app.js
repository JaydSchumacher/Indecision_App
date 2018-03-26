class IndecsionApp extends React.Component {
    render() {
        const title = 'Indecsion';
        const subtitle = 'Put your life in the hands of a computer';
        const options = [342, 2432, 2434];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}> What should I do </button>
            </div>
        )
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        
    }
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
                <button onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>ß
            </div>
        )
    }
}


        

ReactDOM.render(<IndecsionApp />, document.getElementById('app'))
