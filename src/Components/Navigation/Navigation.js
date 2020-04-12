import React from 'react';
import styles from './Navigation.module.css';

const Navigation = (props) => {

    const getInput = () => {
        let userInput = document.getElementsByTagName('input')[0].value;
        props.input(userInput);
    }

    return (
        <nav className={styles.Navigation}>
            <h1>Lurker</h1>
            <input value={props.searchTerm} onChange={getInput} placeholder="Search"></input>
            <button onClick={props.clicked}>Search</button>
        </nav>
    );
}

export default Navigation;