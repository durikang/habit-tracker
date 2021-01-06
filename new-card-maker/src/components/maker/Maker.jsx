import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';
import styles from './Maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
      1:{
        id: '1',
        name: '강한별',
        company: 'Samsung',
        theme: 'dark',
        title: 'Software Engineer',
        email: 'ellie@gmail.com',
        message: 'go for it',
        fileName: 'ellie',
        fileURL: null,
      },2:{
        id: '2',
        name: '석연우',
        company: 'Samsung',
        theme: 'light',
        title: 'Software Engineer',
        email: 'ellie@gmail.com',
        message: 'go for it',
        fileName: 'ellie',
        fileURL: 'ellie.png',
      },3:
      {
        id: '3',
        name: '조찬희',
        company: 'Samsung',
        theme: 'colorful',
        title: 'Software Engineer',
        email: 'ellie@gmail.com',
        message: 'go for it',
        fileName: 'ellie',
        fileURL: null,
      }




  });


  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });
  const createOrupdateCard = card => {
    setCards(cards =>{
      const updated = {...cards};
      updated[card.id] = card;  
      return updated;
    });
  };
  const deleteCard = card => {
    setCards(cards =>{
      const updated = {...cards};
      delete updated[card.id];  
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={createOrupdateCard} updateCard={createOrupdateCard} deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer/>
    </section>
  );
};

export default Maker;
