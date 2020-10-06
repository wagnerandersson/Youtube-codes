import ClientsRepository from '../repositories/ClientsRepository';
import Clients from '../models/Clients';

export default class CreateClientsService {
  private repository: ClientsRepository;

  constructor(repository: ClientsRepository) {
    this.repository = repository;
  }

  public execute({
    name,
    cgccpf,
    tipodoc,
    dtnasc,
    endereco,
  }: Clients): Clients {
    const c = new Clients({
      name,
      cgccpf,
      tipodoc,
      dtnasc,
      endereco,
    });
    this.repository.save(c);
    return c;
  }
}
