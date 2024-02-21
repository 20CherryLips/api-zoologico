// Importa a classe Animal do módulo "./Animal"
import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;

/**
 * Classe que representa um mamífero, estendendo a classe Animal.
 */
export class Mamifero extends Animal {

    // Propriedade privada para armazenar a raça do mamífero
    private raca: string;

    /**
     * Construtor da classe Mamifero.
     * @param _raca - A raça do mamífero.
     * @param _nome - O nome do mamífero.
     * @param _idade - A idade do mamífero.
     * @param _genero - O gênero do mamífero.
     */
    constructor(_raca: string, _nome: string, _idade: number, _genero: string) {
        // Chama o construtor da classe pai (Animal) passando os parâmetros correspondentes
        super(_nome, _idade, _genero);
        // Inicializa a propriedade raca com o valor passado como parâmetro
        this.raca = _raca;
    }

    /**
     * Define a raça do mamífero.
     * @param _raca - A nova raça a ser atribuída ao mamífero.
     */
    public setRaca(_raca: string): void {
        // Atribui o novo valor da raça à propriedade 'raca'
        this.raca = _raca;
    }

    /**
     * Obtém a raça do mamífero.
     * @returns A raça atual do mamífero.
     */
    public getRaca(): string {
        // Retorna o valor atual da propriedade 'raca'
        return this.raca;
    }

    static async listarMamiferos() {
        const listaDeMamiferos: Array<Mamifero> = [];
        try {
            const queryReturn = await database.query(`SELECT * FROM  mamifero`);
            queryReturn.rows.forEach(mamifero => {
                listaDeMamiferos.push(mamifero);
            });

            // só pra testar se a lista veio certa do banco
            console.log(listaDeMamiferos);

            return listaDeMamiferos;
        } catch (error) {
            console.log('Erro no modelo');
            console.log(error);
            return "error";
        }
    }

    static async cadastrarMamiferos(mamifero: Mamifero): Promise<any> {
        try {
            let insertResult = false;
            await database.query(`INSERT INTO mamifero (nome, idade, genero, raca)
                VALUES
                ('${mamifero.getNome().toUpperCase()}', ${mamifero.getIdade()}, '${mamifero.getGenero().toUpperCase()}', '${mamifero.getRaca().toUpperCase()}');
            `).then((result) => {
                if(result.rowCount != 0) {
                    insertResult = true;
                }
            });
            return insertResult;
        } catch(error) {
            return error;
        }
    }
}

