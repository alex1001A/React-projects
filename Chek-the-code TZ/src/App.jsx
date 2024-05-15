//React comp
import { useState, useEffect  } from 'react';

//Components
import Modal from './components/Modal/Modal-window'
import Product from './components/Product/Product'

//Styles
import './App.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [dataArray, setDataArray] = useState(
    JSON.parse(localStorage.getItem('data')) || []
  );

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSave = (dataObject) => {
    
    const updatedArray = [...dataArray, dataObject].sort((a, b) => a.productName.localeCompare(b.productName));    setDataArray(updatedArray);
    localStorage.setItem('data', JSON.stringify(updatedArray));
  };

  const handleDelete = (index) => {
    const updatedArray = [...dataArray];
    updatedArray.splice(index, 1); // Удаляем элемент из массива по индексу
    setDataArray(updatedArray);
    localStorage.setItem('data', JSON.stringify(updatedArray));
  };

  return (
    <>
      <header className='header'>
        <h1 className='header__title'><b>SHOP</b>.com</h1>
        <button className='open-modal-btn' onClick={openModal}>Add new product</button>
        {isOpen && <Modal onClose={closeModal} onSave={handleSave} />}
      </header>
      <div className='container'>
        {/* <Modal onSave={handleSave}/> */}
        {dataArray.map((item, index) => (
          <Product key={index} item={item} onDelete={() => handleDelete(index)} />
        ))}
      </div>
    </>
  );
};