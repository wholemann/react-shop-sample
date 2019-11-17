const DEFAULT_IMAGE = '/static/images/detail-default.jpg';

export const CATEGORIES = {
  0: '디지털/가전',
  1: '가구/인테리어',
  2: '의류',
  3: '뷰티/미용',
  4: '생활/가공식품',
}

const productStore = {
  _products: [
    { id: 1, title: '가디건', category: '의류', price: 15000, description: '구려', imageUrl: DEFAULT_IMAGE },
    { id: 2, title: '노트북', category: '디지털/가전', price: 15000, description: '구려', imageUrl: DEFAULT_IMAGE },
    { id: 3, title: '스마트폰', category: '디지털/가전', price: 15000, description: '구려', imageUrl: DEFAULT_IMAGE },
    { id: 4, title: '청바지', category: '의류', price: 15000, description: '구려', imageUrl: DEFAULT_IMAGE },
    { id: 5, title: '물티슈', category: '생활/가공식품', price: 15000, description: '구려', imageUrl: DEFAULT_IMAGE },
  ],

  get products() {
    return this._products;
  },

  getProduct(id) {
    return this.products.find(product => product.id == id);
  },

  createProduct({ title, category, price, description, image }) {
    this._products = [...this.products, {
      id: this._products.length + 1,
      title,
      category,
      price,
      description,
      imageUrl: DEFAULT_IMAGE,
    }];
  },
};

export default productStore;
