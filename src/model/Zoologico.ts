// Importa a classe Atracao do módulo "./Atracao"
import { Atracao } from "./Atracao";

/**
 * Classe que representa um zoológico.
 */
export class Zoologico {

    // Propriedade privada para armazenar o nome do zoológico
    private nome: string;

    // Propriedade privada para armazenar uma lista de atrações associada ao zoológico
    private listaAtracoes: Array<Atracao>;

    /**
     * Construtor da classe Zoologico.
     * @param _nome - O nome do zoológico.
     * @param _listaAtracoes - A lista de atrações associada ao zoológico.
     */
    constructor(_nome: string, _listaAtracoes: Array<Atracao>) {
        // Inicializa as propriedades com os valores passados como parâmetros
        this.nome = _nome;
        this.listaAtracoes = _listaAtracoes;
    }

    /**
     * Define o nome do zoológico.
     * @param Nome - O novo nome a ser atribuído ao zoológico.
     */
    public setNome(Nome: string): void {
        // Atribui o novo valor do nome à propriedade 'nome'
        this.nome = Nome;
    }

    /**
     * Obtém o nome do zoológico.
     * @returns O nome atual do zoológico.
     */
    public getNome(): string {
        // Retorna o valor atual da propriedade 'nome'
        return this.nome;
    }

    /**
     * Define a lista de atrações associada ao zoológico.
     * @param ListaAtracoes - A nova lista de atrações a ser atribuída ao zoológico.
     */
    public setListaAtracoes(ListaAtracoes: Array<Atracao>): void {
        // Atribui a nova lista de atrações à propriedade 'listaAtracoes'
        this.listaAtracoes = ListaAtracoes;
    }

    /**
     * Obtém a lista de atrações associada ao zoológico.
     * @returns A lista atual de atrações do zoológico.
     */
    public getListaAtracoes(): Array<Atracao> {
        // Retorna o valor atual da propriedade 'listaAtracoes'
        return this.listaAtracoes;
    }
}
