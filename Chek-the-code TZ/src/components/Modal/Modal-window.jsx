import { useState } from "react";

export default function Modal({ onClose, onSave }) {
    const [imageURL, setImageURL] = useState('');
    const [id, setId] = useState('');
    const [productName, setProductName] = useState('');
    const [productCount, setProductCount] = useState('');
    const [productWidth, setProductWidth] = useState('');
    const [productHeight, setProductHeight] = useState('');
    const [productWeight, setProductWeight] = useState('');

    const handleSave = () => {
        if (!id || !productName || !productCount || !productWidth || !productHeight || !productWeight || !imageURL) {
            alert('Please fill all of the fields!');
            return;
        }

        const dataObject = { id, productName, productCount, productWidth, productHeight, productWeight, imageURL };
        onSave(dataObject); // Передаем новый объект данных обратно в компонент App
        // onClose();
        setImageURL('')
        setId('')
        setProductName('')
        setProductCount('')
        setProductWidth('')
        setProductHeight('')
        setProductWeight('')
    };

    return (
        <div className="modal">
            <button onClick={() => onClose()} className="modal__close-btn">X</button>

            <input
                value={imageURL}
                type="text"
                placeholder="Image URL..."
                onChange={(e) => setImageURL(e.target.value)}
            />
            <input
                value={id}
                className="modal__id modal-input"
                type="number"
                placeholder="Type product id..."
                onChange={(e) => setId(e.target.value)}
            />
            <input
                value={productName}
                className="modal__name modal-input"
                type="text"
                placeholder="Type product name..."
                onChange={(e) => setProductName(e.target.value)}
            />
            <input
                value={productCount}
                className="modal__count modal-input"
                type="text"
                placeholder="Type count of products..."
                onChange={(e) => setProductCount(e.target.value)}
            />
            <input
                value={productWidth}
                className="modal__weight modal-input"
                type="text"
                placeholder="Type product weight..."
                onChange={(e) => setProductWidth(e.target.value)}
            />
            <input
                value={productHeight}
                className="modal__h modal-input"
                type="text"
                placeholder="Type product height..."
                onChange={(e) => setProductHeight(e.target.value)}
            />
            <input
                value={productWeight}
                className="modal__w modal-input"
                type="text"
                placeholder="Type product width..."
                onChange={(e) => setProductWeight(e.target.value)}
            />
            <button onClick={handleSave} className="add-btn">Add</button>
        </div>
    );
}