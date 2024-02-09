// Importa a classe Habitat do módulo "./Habitat"
import { Habitat } from "./Habitat";

/**
 * Classe que representa uma atração em um zoológico.
 */
export class Atracao {

    // Propriedade privada para armazenar o nome da atração
    private nome: string;

    // Propriedade privada para armazenar uma lista de habitats associada à atração
    private listaHabitat: Array<Habitat>;

    /**
     * Construtor da classe Atracao.
     * @param _nome - O nome da atração.
     * @param _listaHabitat - A lista de habitats associada à atração.
     */
    constructor(_nome: string, _listaHabitat: Array<Habitat>) {
        // Inicializa as propriedades com os valores passados como parâmetros
        this.nome = _nome;
        this.listaHabitat = _listaHabitat;
    }

    /**
     * Define o nome da atração.
     * @param Nome - O novo nome a ser atribuído à atração.
     */
    public setNome(Nome: string): void {
        // Atribui o novo valor do nome à propriedade 'nome'
        this.nome = Nome;
    }

    /**
     * Obtém o nome da atração.
     * @returns O nome atual da atração.
     */
    public getNome(): string {
        // Retorna o valor atual da propriedade 'nome'
        return this.nome;
    }

    /**
     * Define a lista de habitats da atração.
     * @param ListaHabitat - A nova lista de habitats a ser atribuída à atração.
     */
    public setListaHabitat(ListaHabitat: Array<Habitat>): void {
        // Atribui a nova lista de habitats à propriedade 'listaHabitat'
        this.listaHabitat = ListaHabitat;
    }

    /**
     * Obtém a lista de habitats associada à atração.
     * @returns A lista atual de habitats da atração.
     */
    public getListaHabitat(): Array<Habitat> {
        // Retorna o valor atual da propriedade 'listaHabitat'
        return this.listaHabitat;
    }
}
