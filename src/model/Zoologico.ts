import { Atracao } from "./Atracao";

export class Zoologico{

    private nome: string;
    private listaAtracoes: Array<Atracao>

    constructor(_nome: string, _listaAtracoes: Array<Atracao>,) {
        this.nome = _nome;
        this.listaAtracoes = _listaAtracoes;
    }

     // Método setter para modificar o valor da propriedade 'nome'
     public setNome(Nome: string): void {
        this.nome = Nome;
    }

    // Método getter para obter o valor da propriedade 'nome'
    public getNome(): string {
        return this.nome;
    }

    // Método setter para modificar o valor da propriedade 'listaAtracoes'
    public setListaAtracoes(ListaAtracoes: Array<Atracao>): void {
        this.listaAtracoes = ListaAtracoes;
    }

    // Método getter para obter o valor da propriedade 'listaAtracoes'
    public getListaAtracoes(): Array<Atracao> {
        return this.listaAtracoes;
    }
}