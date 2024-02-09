/**
 * Classe que representa um animal.
 */
export class Animal {

    // Propriedade privada para armazenar o nome do animal
    private nome: string;

    // Propriedade privada para armazenar a idade do animal
    private idade: number;

    // Propriedade privada para armazenar o gênero do animal
    private genero: string;

    /**
     * Construtor da classe Animal.
     * @param _nome - O nome do animal.
     * @param _idade - A idade do animal.
     * @param _genero - O gênero do animal.
     */
    constructor(_nome: string, _idade: number, _genero: string) {
        // Inicializa as propriedades com os valores passados como parâmetros
        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;
    }

    /**
     * Define o nome do animal.
     * @param _nome - O novo nome a ser atribuído ao animal.
     */
    public setNome(_nome: string): void {
        // Atribui o novo valor do nome à propriedade 'nome'
        this.nome = _nome;
    }

    /**
     * Obtém o nome do animal.
     * @returns O nome atual do animal.
     */
    public getNome(): string {
        // Retorna o valor atual da propriedade 'nome'
        return this.nome;
    }

    /**
     * Define a idade do animal.
     * @param _idade - A nova idade a ser atribuída ao animal.
     */
    public setIdade(_idade: number): void {
        // Atribui o novo valor da idade à propriedade 'idade'
        this.idade = _idade;
    }

    /**
     * Obtém a idade do animal.
     * @returns A idade atual do animal.
     */
    public getIdade(): number {
        // Retorna o valor atual da propriedade 'idade'
        return this.idade;
    }

    /**
     * Define o gênero do animal.
     * @param _genero - O novo gênero a ser atribuído ao animal.
     */
    public setGenero(_genero: string): void {
        // Atribui o novo valor do gênero à propriedade 'genero'
        this.genero = _genero;
    }

    /**
     * Obtém o gênero do animal.
     * @returns O gênero atual do animal.
     */
    public getGenero(): string {
        // Retorna o valor atual da propriedade 'genero'
        return this.genero;
    }
}
