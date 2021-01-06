import React from 'react';
import Button from '../button/Button';
import ImageFileInput from '../imageFileInput/ImageFileInput';
import styles from './CardEditForm.module.css';
const CardEditForm = ({card}) => {
    const {
        name,
        company,
        title,
        email,
        message,
        theme,
        fileName,
        fileURL
        } = card;
    const onsubmit=()=>{
        
    }
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name}/>
            <input className={styles.input} type="text" name="company" value={company}/>
            <select className={styles.select} name="theme" value={theme}>
                <option value="light">Light</option>
                <option value="dark">dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="title" value={title}/>
            <input className={styles.input} type="text" name="email" value={email}/>
            <textarea className={styles.textarea} name="message" value={message}></textarea>
            <div className={styles.fileInput}>
                <ImageFileInput />
                <Button name='Delete' onClick={onsubmit}/>
            </div>
        </form>
    
    );
};

export default CardEditForm;