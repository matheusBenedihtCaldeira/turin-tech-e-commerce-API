interface IPhoto {
  originalname: string;
  fileName: string;
  productId: string;
}

export class Photo {
  static() {}
  private props: IPhoto;

  get originalname(): string {
    return this.props.originalname;
  }

  get fileName(): string {
    return this.props.fileName;
  }

  get productId(): string {
    return this.props.productId;
  }

  constructor(props: IPhoto) {
    this.props = props;
  }
}
