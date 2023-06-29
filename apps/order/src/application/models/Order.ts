interface IOrderProps {
  customerId: string;
  items: {
    productId: string;
    quantity: number;
  };
}

export class Order {
  private props: IOrderProps;

  get customerId(): string {
    return this.props.customerId;
  }
  get items(): { productId: string; quantity: number } {
    return this.props.items;
  }
  constructor(props: IOrderProps) {
    this.props = props;
  }
}
