import React, { Component } from 'react';
import { Post } from './B7_post';

interface PostData {
  id: number;
  title: string;
  content: string;
  author: string;
}



export default class B7_ListPost extends Component<any, { posts: PostData[] }> {
  constructor(props: PostData) {
    super(props);
    this.state = {
      posts: [
        { id: 1, title: 'ádasda', content: 'ZCXZCXX', author: 'A' },
        { id: 2, title: 'ádasdasda', content: 'DSDSDSD', author: 'B' },
        { id: 3, title: '123131231', content: 'QƯEQWQW', author: 'C' },
      ],
    };
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>B7</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}
