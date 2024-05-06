import React, { Component } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type Props = {
  product: Product;
}

class ChildComponent extends Component<Props> {
  render() {
    const { product } = this.props;
    return (
      <div>
        <h3>
          <b>Exercises05</b> <br />
          Child Component</h3>
        <p>ID: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>
      </div>
    );
  }
}

export default ChildComponent;
