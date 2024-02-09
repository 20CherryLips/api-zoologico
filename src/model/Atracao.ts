import { Habitat } from "./Habitat";

export class Atracao{

    private nome: string;
    private listaHabitat: Array<Habitat>

    constructor(_nome: string, _listaHabitat: Array<Habitat>,) {
        this.nome = _nome;
        this.listaHabitat = _listaHabitat;
    }

     // Método setter para modificar o valor da propriedade 'nome'
     public setNome(Nome: string): void {
        this.nome = Nome;
    }

    // Método getter para obter o valor da propriedade 'nome'
    public getNome(): string {
        return this.nome;
    }

    // Método setter para modificar o valor da propriedade 'listaHabitat'
    public setListaHabitat(ListaHabitat: Array<Habitat>): void {
        this.listaHabitat = ListaHabitat;
    }

    // Método getter para obter o valor da propriedade 'listaHabitat'
    public getListaHabitat(): Array<Habitat> {
        return this.listaHabitat;
    }


}