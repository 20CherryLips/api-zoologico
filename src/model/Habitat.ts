// Importa a classe Animal do módulo "./Animal"
import { Animal } from "./Animal";

/**
 * Classe que representa um habitat em um zoológico.
 */
export class Habitat {

    // Propriedade privada para armazenar o nome do habitat
    private nome: string;

    // Propriedade privada para armazenar uma lista de animais associada ao habitat
    private listaAnimais: Array<Animal>;

    /**
     * Construtor da classe Habitat.
     * @param _nome - O nome do habitat.
     * @param _listaAnimais - A lista de animais associada ao habitat.
     */
    constructor(_nome: string, _listaAnimais: Array<Animal>) {
        // Inicializa as propriedades com os valores passados como parâmetros
        this.nome = _nome;
        this.listaAnimais = _listaAnimais;
    }

    /**
     * Define o nome do habitat.
     * @param novoNome - O novo nome a ser atribuído ao habitat.
     */
    public setNome(novoNome: string): void {
        // Atribui o novo valor do nome à propriedade 'nome'
        this.nome = novoNome;
    }

    /**
     * Obtém o nome do habitat.
     * @returns O nome atual do habitat.
     */
    public getNome(): string {
        // Retorna o valor atual da propriedade 'nome'
        return this.nome;
    }

    /**
     * Define a lista de animais associada ao habitat.
     * @param novaLista - A nova lista de animais a ser atribuída ao habitat.
     */
    public setListaAnimais(novaLista: Array<Animal>): void {
        // Atribui a nova lista de animais à propriedade 'listaAnimais'
        this.listaAnimais = novaLista;
    }

    /**
     * Obtém a lista de animais associada ao habitat.
     * @returns A lista atual de animais do habitat.
     */
    public getListaAnimais(): Array<Animal> {
        // Retorna o valor atual da propriedade 'listaAnimais'
        return this.listaAnimais;
    }
}



