import { before } from "node:test";

interface UserProps {
    name: string;
    lastName: string;
    key: string;
    password: string;
}

export class User {
    private props: UserProps;

    get name(): string {
        return this.props.name;
    }

    get lastName(): string {
        return this.props.lastName;
    }

    get key(): string {
        return this.props.key;
    }

    get password(): string {
        return this.props.password;
    }



    constructor(props: UserProps){
        this.props = props;
    }
}