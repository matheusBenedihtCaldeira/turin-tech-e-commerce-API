interface IOrderProps {
  customerId: string;
  items: {
    productId: string;
    quantity: number;
    price: any;
  };
  total: number;
}

export class Order {
  private props: IOrderProps;

  get customerId(): string {
    return this.props.customerId;
  }
  get items(): { productId: string; quantity: number } {
    return this.props.items;
  }
  get total(): number {
    return this.props.items.price * this.props.items.quantity;
  }
  constructor(props: IOrderProps) {
    this.props = props;
  }
}
