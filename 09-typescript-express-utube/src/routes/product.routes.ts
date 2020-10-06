import { Router } from 'express';
import ProductRepository from '../repositories/ProductRepository';
import CreateProductService from '../services/CreateProductService';
import Product from '../models/Product';

const productRouter = Router();
const productRepository = new ProductRepository();

productRouter.get('/', (request, response) => {
  response.json(productRepository.findAll());
});

productRouter.post('/', (request, response) => {
  try {
    const service = new CreateProductService(productRepository);
    const {
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      //  id,
    } = request.body;
    const produto = service.execute({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      // id,
    });
    return response.status(201).json(produto);
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

productRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const { buyPrice, code, description, lovers, sellPrice, tags } = request.body;
  try {
    const product = new Product({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
    });
    product.id = id;
    const updatedProduct = productRepository.update(product);
    response.status(200).json(updatedProduct);
  } catch (error) {
    response.status(400).json({ Erro: error.message });
  }
});

productRouter.delete('/:id', (request, response) => {
  const { id } = request.params;
  try {
    const deletedProduct = productRepository.delete(id);
    response.status(204).json(deletedProduct);
  } catch (error) {
    response.status(400).json({ Erro: error.message });
  }
});

productRouter.get('/:code', (request, response) => {
  const { code } = request.params;
  try {
    const findin = productRepository.findByCode(+code);
    response.status(200).json(findin);
  } catch (error) {
    response.status(400).send(`Produto ${code} não encontrado!`);
  }
});

export default productRouter;
