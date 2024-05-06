import React, { Component } from 'react';

interface User {
  id: number;
  name: string;
  address: string;
}

type Props = {
  users: User[];
};

export default class Exercises03 extends Component<any,Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: 'tien1',
          address: 'HN'
        },
        {
          id: 2,
          name: 'tien2',
          address: 'HN'
        },
      ]
    };
  }

  render() {
    return (
      <div>
        <b>Exercises03</b>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              <div>id: {user.id}</div>
              <div>Ho va ten: {user.name}</div>
              <div>Dia chi: {user.address}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
