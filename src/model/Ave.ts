// Importa a classe Animal do módulo "./Animal"
import { Animal } from "./Animal";

/**
 * Classe que representa uma ave, estendendo a classe Animal.
 */
export class Ave extends Animal {

    // Propriedade privada para armazenar a envergadura da ave
    private envergadura: number;

    /**
     * Construtor da classe Ave.
     * @param _nome - O nome da ave.
     * @param _idade - A idade da ave.
     * @param _genero - O gênero da ave.
     * @param _envergadura - A envergadura da ave.
     */
    constructor(_nome: string, _idade: number, _genero: string, _envergadura: number) {
        // Chama o construtor da classe pai (Animal) passando os parâmetros correspondentes
        super(_nome, _idade, _genero);
        // Inicializa a propriedade envergadura com o valor passado como parâmetro
        this.envergadura = _envergadura;
    }

    /**
     * Define a envergadura da ave.
     * @param envergadura - A nova envergadura a ser atribuída à ave.
     */
    public setEnvergadura(envergadura: number): void {
        // Atribui o novo valor da envergadura à propriedade 'envergadura'
        this.envergadura = envergadura;
    }

    /**
     * Obtém a envergadura da ave.
     * @returns A envergadura atual da ave.
     */
    public getEnvergadura(): number {
        // Retorna o valor atual da propriedade 'envergadura'
        return this.envergadura;
    }
}
