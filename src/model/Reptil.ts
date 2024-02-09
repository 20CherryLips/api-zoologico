// Importa a classe Animal do módulo "./Animal"
import { Animal } from "./Animal";

/**
 * Classe que representa um réptil, estendendo a classe Animal.
 */
export class Reptil extends Animal {

    // Propriedade privada para armazenar o tipo de escama do réptil
    private tipo_de_escama: string;

    /**
     * Construtor da classe Reptil.
     * @param _nome - O nome do réptil.
     * @param _idade - A idade do réptil.
     * @param _genero - O gênero do réptil.
     * @param _tipo_de_escama - O tipo de escama do réptil.
     */
    constructor(_nome: string, _idade: number, _genero: string, _tipo_de_escama: string) {
        // Chama o construtor da classe pai (Animal) passando os parâmetros correspondentes
        super(_nome, _idade, _genero);
        // Inicializa a propriedade tipo_de_escama com o valor passado como parâmetro
        this.tipo_de_escama = _tipo_de_escama;
    }

    /**
     * Define o tipo de escama do réptil.
     * @param tipo_de_escama - O novo tipo de escama a ser atribuído ao réptil.
     */
    public setTipo_de_escama(tipo_de_escama: string): void {
        // Atribui o novo valor do tipo de escama à propriedade 'tipo_de_escama'
        this.tipo_de_escama = tipo_de_escama;
    }

    /**
     * Obtém o tipo de escama do réptil.
     * @returns O tipo de escama atual do réptil.
     */
    public getTipo_de_escama(): string {
        // Retorna o valor atual da propriedade 'tipo_de_escama'
        return this.tipo_de_escama;
    }
}
