import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo/demo.js';

window.React = React;

class App extends PureComponent {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

ReactDOM.render((
    <App>
        <Demo />
    </App>
), document.body);


