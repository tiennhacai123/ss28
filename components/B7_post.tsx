import React, { Component } from 'react';

interface PostProps {
  id: number;
  title: string;
  content: string;
  author: string;
}

export class Post extends Component<PostProps> {
    render() {
        const { id, title, content, author } = this.props;
    return (
      <div className="post">
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Author: {author}</p>
      </div>
    );
  }
}
