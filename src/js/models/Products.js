export default class Products {
  constructor() {
    this.items = [];
  }

  addItem(id, title, info, img, type) {
    const item = {
      id,
      title,
      info,
      img,
      type,
    };
    this.items.push(item);
  }
}