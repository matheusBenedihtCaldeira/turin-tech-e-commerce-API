interface ProductProps {
  name: string;
  description: any;
  price: number;
  quantity: number;
  barCode: string;
}
export class Product {
  private props: ProductProps;

  get name(): string {
    return this.props.name;
  }
  get description(): string {
    return this.props.description;
  }
  get price(): number {
    return this.props.price;
  }
  get quantity(): number {
    return this.props.quantity;
  }
  get barCode(): string {
    return this.props.barCode;
  }
  constructor(props: ProductProps) {
    this.props = props;
  }
}
