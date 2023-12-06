import React from 'react';
import styles from './Button.module.css';

const Button:React.FC<any> = ({children,className,onClick}) => {
  return (
    <button className={`${styles.buttons} ${className}`} onClick={onClick}>{children}</button>
  )
}

export default Button;