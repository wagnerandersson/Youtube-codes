import { Router } from 'express';
import ClientsRepository from '../repositories/ClientsRepository';
import CreateClientsService from '../services/CreateClientsService';
import Clients from '../models/Clients';

const clientRouter = Router();
const clientRepository = new ClientsRepository();

clientRouter.get('/', (request, response) => {
  response.json(clientRepository.findAll());
});

clientRouter.post('/', (request, response) => {
  try {
    const service = new CreateClientsService(clientRepository);
    const { name, cgccpf, tipodoc, dtnasc, endereco } = request.body;
    const cliente = service.execute({
      name,
      cgccpf,
      tipodoc,
      dtnasc,
      endereco,
    });
    return response.status(201).json(cliente);
  } catch (error) {
    return response.status(400).json({ Erro: error.message });
  }
});

export default clientRouter;
