import React from 'react';
import style from './Title.css';

class Title extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={style.Title}>
                <h1>My to do list app</h1>
                <h4>You have now {} tasks on your to do list</h4>
            </div>
        );
    }
}

export default Title;