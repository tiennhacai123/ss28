import React, { Component } from 'react';
import Ex05Children from './Ex05Children';

interface User {
    id: string;
    name: string;
    address: string;
    email: string;
}

type Props = {
    users: User[];
}

export default class Ex05Parent extends Component<any,Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
            users: [
                { id: '1', name: 'tien1', address: 'HN', email: 'sada@gmai.com' },
                { id: '2', name: 'tien2', address: 'HN', email: 'dsadasdsada@gmail.com' },
            ]
        };
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                <b>Exercises06</b>
                <h4>Parent Component</h4>
                <Ex05Children users={users} />
            </div>
        );
    }
}
