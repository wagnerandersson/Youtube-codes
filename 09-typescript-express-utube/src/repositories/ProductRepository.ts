import { response } from 'express';
import Product from '../models/Product';

export default class ProductRepository {
  private products: Array<Product>;

  constructor() {
    this.products = [];
  }

  public findAll(): Array<Product> {
    return this.products;
  }

  public findByCode(code: number): Product[] | undefined {
    return this.products.filter(v => v.code === code);
  }

  public findById(id: string): Product | undefined {
    return this.products.find(v => v.id === id);
  }

  public save({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Product): Product {
    const product = new Product({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
    });
    this.products.push(product);
    return product;
  }

  public update({
    buyPrice,
    code,
    lovers,
    description,
    sellPrice,
    tags,
    id,
  }: Product): Product {
    const foundProduct = this.findById(id);
    if (!foundProduct) {
      throw Error(`Produto ${id} não cadastrado!`);
    } else {
      foundProduct.buyPrice = buyPrice;
      foundProduct.code = code;
      foundProduct.description = description;
      foundProduct.sellPrice = sellPrice;
      foundProduct.tags = tags;
      return foundProduct;
    }
  }

  public delete(id: string): Product {
    const deletedProduct = this.findById(id);

    if (!deletedProduct) {
      throw Error(`Produto ${id} não encontrado!`);
    } else {
      const pos = this.products.findIndex(v => v.id === id);
      this.products.splice(pos, 1);
      return deletedProduct;
    }
  }
}
