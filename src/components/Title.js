import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>My to do list app</h1>
                <h4>You have now {this.props.count} tasks on your to do list</h4>
            </div>
        );
    }
}


export default Title;