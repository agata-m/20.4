<<<<<<< HEAD
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
=======
const Title = props => <h1>{props.title}</h1>
>>>>>>> ce70a97b9b2df8eb213c9ad6a8d7bc95b90ee901
