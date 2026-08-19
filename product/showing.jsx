// Product.js
import React from 'react';
import styles from './Product.module.css';

function Product({ name, price, description }) {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p className={styles.price}>${price}</p>
    </div>
  );
}

export default Product;
