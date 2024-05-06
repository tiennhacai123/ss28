import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type State = {
  product: Product;
}

class ParentComponent extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      product: {
        id: 1,
        name: 'Product 1',
        price: 10,
        quantity: 5
      }
    };
  }

  render() {
    return (
      <div>
        <ChildComponent product={this.state.product} />
      </div>
    );
  }
}

export default ParentComponent;
