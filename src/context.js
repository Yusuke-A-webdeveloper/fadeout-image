import React, { useState, useEffect, useContext } from 'react';
import { productList, mainImgList } from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState([]);
  const [value, setValue] = useState(0);
  const [mainImg, setMainImg] = useState(mainImgList[0]);

  const openModal = (id) => {
    setModalOpen(true);
    const newList = productList.filter((product) => product.id === id);
    setModalItem(newList[0]);
  };
  const closeModal = () => {
    return setModalOpen(false);
  };

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setValue((oldvalue) => {
        const curNum = oldvalue + 1;
        if (curNum > mainImgList.length - 1) {
          setMainImg(mainImgList[0]);
          return 0;
        }
        setMainImg(mainImgList[curNum]);
        return curNum;
      });
    }, 3000);
    return () => clearInterval(imgInterval);
  }, [value, mainImg]);

  return (
    <AppContext.Provider
      value={{
        modalOpen,
        closeModal,
        openModal,
        modalItem,
        value,
        mainImg,
        setMainImg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
