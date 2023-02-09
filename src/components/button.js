import React from "react";
import styles from '../components/style.module.css';
import {getClasses} from './getCLasses';

const Btt = ({variant})=>{
    const ButtonTypes = {
        wrap1: 'wrap1',
        wrap2: 'wrap2',
        wrap3: 'wrap3',
    }
    return(
        <button 
        className = {getClasses(
           [styles.button, styles[`button-${ButtonTypes[variant]}`]]
        )}>
        </button>
    );
};
export default Btt;