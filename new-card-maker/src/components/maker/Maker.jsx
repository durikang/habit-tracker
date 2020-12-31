import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/Editor';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Preview from '../preview/Preview';
import styles from './Maker.module.css';
const Maker = ({authService}) => {
    const [cards,setCards] = useState([
        {
            id : '1',
            name : 'Duri',
            company: 'ZesInc',
            theme: 'colorful',
            title: 'SoftWare Engineer',
            email: 'kooda21@naver.com',
            message:'go for it',
            fileName: 'etc',
            fileURL: null
        },
        {
            id : '2',
            name : 'Hanbuyl',
            company: 'Animal Shop',
            theme: 'light',
            title: 'SoftWare Engineer',
            email: 'kooda21@naver.com',
            message:'go for it',
            fileName: 'etc',
            fileURL: 'duri.png'
        },
        {
            id : '3',
            name : 'Yeonw',
            company: 'SoftCompany',
            theme: 'dark',
            title: 'SoftWare Engineer',
            email: 'kooda21@naver.com',
            message:'go for it',
            fileName: 'etc',
            fileURL: 'duri.png'
        }
    ])
    const history = useHistory();
    const onLogout =()=>{
        authService.logout();
    };

useEffect(()=>{
    authService.onAuthChange(user =>{
        if(!user){
            history.push('/');
        }
    });
})

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards = {cards}/>
                <Preview cards = {cards}/>
            </div>
            <Footer/>
        </section>
    )

};

export default Maker;