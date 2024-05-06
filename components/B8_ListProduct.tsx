import React, { Component } from 'react';
import { Post } from './B8_Product';

interface ProductData {
  id: number;
  name: string;
  price: string;
  quantity: number;
}



export default class B7_ListPost extends Component<any, { posts: ProductData[] }> {
  constructor(props: ProductData) {
    super(props);
    this.state = {
      posts: [
        { id: 1, name: 'tien1', price: 'ZCXZCXX', quantity: 1 },
        { id: 2, name: 'tien2', price: 'DSDSDSD', quantity: 2 },
        { id: 3, name: 'tien3', price: 'QƯEQWQW', quantity: 4 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>B8</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}
