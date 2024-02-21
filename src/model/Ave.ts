// Importa a classe Animal do módulo "./Animal"
import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;
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

    static async listarAves() {
        const listaDeAves: Array<Ave> = [];
        try {
            const queryReturn = await database.query(`SELECT * FROM  ave`);
            queryReturn.rows.forEach(ave => {
                listaDeAves.push(ave);
            });

            // só pra testar se a lista veio certa do banco
            console.log(listaDeAves);

            return listaDeAves;
        } catch (error) {
            console.log('Erro no modelo');
            console.log(error);
            return "error";
        }
    }

    static async cadastrarAves(ave: Ave): Promise<any> {
        try {
            let insertResult = false;
            await database.query(`INSERT INTO ave (nome, idade, genero, envergadura)
                VALUES
                ('${ave.getNome().toUpperCase()}', ${ave.getIdade()}, '${ave.getGenero().toUpperCase()}', ${ave.getEnvergadura()});
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

