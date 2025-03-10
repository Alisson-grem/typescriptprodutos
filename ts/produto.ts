namespace loja{
  export class Produto {
    private _nome: string;
    private _preco: number;

    constructor(nome: string, preco: number) {
        this._nome = nome;
        this._preco = preco;
    }

    get nome(): string {
        return this._nome
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get preco(): number {
        return this._preco;
    }

    set preco(preco: number) {
        this._preco = preco;
    }

    public calcularPrecoFinal(imposto: number): number {
        return this._preco + (this._preco * (imposto / 100));
    }
  } 
}