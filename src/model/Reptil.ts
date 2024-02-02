import { Animal } from "./Animal";

export class Reptil extends Animal {
    private tipo_de_escama: string;

    constructor( _nome: string, _idade: number, _genero: string, _tipo_de_escama: string,) {
        super(_nome, _idade, _genero);
        this.tipo_de_escama = _tipo_de_escama;
    }

    public setTipo_de_escama(tipo_de_escama: string): void {
        this.tipo_de_escama = tipo_de_escama;
    }

    public getTipo_de_escama(): string {
        return this.tipo_de_escama;
    }
}