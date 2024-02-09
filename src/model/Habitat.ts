import { Animal } from "./Animal";

export class Habitat {

    private nome: string;
    private listaAnimais: Array<Animal>;

    constructor(_nome: string, _listaAnimais: Array<Animal>,) {
        this.nome = _nome;
        this.listaAnimais = _listaAnimais;
    }

     // Método setter para atualizar o valor da propriedade 'nome'
     public setNome(novoNome: string): void {
        this.nome = novoNome;
    }

    // Método getter para recuperar o valor da propriedade 'nome'
    public getNome(): string {
        return this.nome;
    }

    // Método setter para modificar a lista de animais associada a esta instância
    public setListaAnimais(novaLista: Array<Animal>): void {
        this.listaAnimais = novaLista;
    }

    // Método getter para obter a lista de animais associada a esta instância
    public getListaAnimais(): Array<Animal> {
        return this.listaAnimais;
    }
}



