import React, { Component } from 'react';

interface PostProps {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

export class Post extends Component<PostProps> {
    render() {
        const { id, name, price, quantity } = this.props;
    return (
      <div className="post">
        <h2>{name}</h2>
        <p>{price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    );
  }
}
