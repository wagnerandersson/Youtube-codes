import { response } from 'express';
import Clients from '../models/Clients';

export default class ClientsRepository {
  private clients: Array<Clients>;

  constructor() {
    this.clients = [];
  }

  public findAll(): Array<Clients> {
    return this.clients;
  }

  public save({ name, cgccpf, tipodoc, dtnasc, endereco }: Clients): Clients {
    const client = new Clients({
      name,
      cgccpf,
      tipodoc,
      dtnasc,
      endereco,
    });
    this.clients.push(client);
    return client;
  }
}
