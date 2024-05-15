import React from 'react'

export default function Product({ item, onDelete }) {
    return (
        <div className="product">
            <img src={item.imageURL} alt="" />
            <p className='product__item'>
                Product name:
                <span className='product__info'> {item.productName}</span>
            </p>
            <p className='product__item'>
                Product count:
                <span className='product__info'> {item.productCount}</span>
            </p>
            <p className='product__item'>
                Product weight:
                <span className='product__info'> {item.productWeight} g</span>
            </p>
            <p className='product__item'>
                Product height:
                <span className='product__info'> {item.productHeight} cm</span>
            </p>
            <p className='product__item'>
                Product width:
                <span className='product__info'> {item.productWidth} cm</span>
            </p>
            <button className='delete-btn' onClick={onDelete}>Delete</button>
        </div>
    )
}