import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.counter.value
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>
            return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    /*
    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    */

    handleIncrement = (product) => {
        console.log(product);
        this.setState({count: this.state.count + 1})
    };

    doHandleIncrement = () => {
        this.handleIncrement({id : 1})
    }

    render() {
        console.log('props', this.props)

        return (
        <div>
            <button 
            onClick={this.handleReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={ () => this.doHandleIncrement({id: 1})} className = "btn btn-secondary btn-sm">
                Increment
            </button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;