import { uuid } from 'uuidv4';

export default class Clients {
  id: string;

  name: string;

  cgccpf: string;

  tipodoc: string;

  dtnasc: string;

  endereco: string;

  constructor({
    name,
    cgccpf,
    tipodoc,
    dtnasc,
    endereco,
  }: Omit<Clients, 'id'>) {
    this.name = name;
    this.cgccpf = cgccpf;
    this.tipodoc = tipodoc;
    this.dtnasc = dtnasc;
    this.endereco = endereco;
    this.id = uuid();
  }
}
