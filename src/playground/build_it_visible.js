class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.title = 'Visibility Toggle';
        this.message = 'This is now visible';
        this.toggleDetail = this.toggleDetail.bind(this);
        this.state = {
            show: false
        }
    }

    toggleDetail() {
        this.setState((prevState) => {
            return {
                show: !prevState.show             
            };
            
        });        
    }

    render() {        
        return (
            <div>
                <h1>{this.title}</h1>
                <button onClick={this.toggleDetail}>{this.state.show ? 'Hide Details' : 'Show Details'}</button>
                {this.state.show && (
                    <div>{this.message}</div>
                )}            
            </div>
        )
    }
}


ReactDOM.render(<Visibility />, document.getElementById('app'));


