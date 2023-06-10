interface CustomerProps {
    name: string;
    lastName: string;
    email: string;
    telefone: string;
    senha: string;
}

export class Customer {
    private props: CustomerProps;

    get name(): string{
        return this.props.name;
    }

    get lastName(): string {
        return this.props.lastName;
    }

    get email(): string {
        return this.props.email;
    }
    get telefone(): string {
        return this.props.telefone;
    }
    get senha(): string {
        return this.props.senha;
    }
    constructor(props: CustomerProps) {
        this.props = props;
    }
}