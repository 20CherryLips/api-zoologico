import { Animal } from "./Animal";

class Habitat {

    private nome: string;
    private lista_de_animais: Animal;

    constructor(_nome: string,
        _lista_de_animais: Animal,) {
      this.nome = _nome;
      this.lista_de_animais = _lista_de_animais;
    }

    public setNome(nome: string): void {
        this.nome = nome
    }

    public getNome(): string {
        return this.nome
    }

    public setlista_de_animais(lista_de_animais: Animal): void {
        this.lista_de_animais = lista_de_animais
    }

    public getlista_de_animais(): Animal {
        return this.lista_de_animais
    }

}