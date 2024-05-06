import React, { Component } from 'react';

interface User {
    id: string;
    name: string;
    address: string;
    email: string;
}

type Props = {
    users: User[];
}

export default class Ex05Children extends Component<Props> {
    render() {
        const { users } = this.props;
        return (
            <div>
                <h2>User List</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <div>ID: {user.id}</div>
                            <div>Name: {user.name}</div>
                            <div>Address: {user.address}</div>
                            <div>Email: {user.email}</div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
