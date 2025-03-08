"use strict";
var loja;
(function (loja) {
    class Produto {
        constructor(nome, preco) {
            this._nome = nome;
            this._preco = preco;
        }
        get nome() {
            return this._nome;
        }
        set nome(nome) {
            this._nome = nome;
        }
        get preco() {
            return this._preco;
        }
        set preco(preco) {
            this._preco = preco;
        }
        calcularPrecoFinal(imposto) {
            return this._preco + (this._preco * (imposto / 100));
        }
    }
    loja.Produto = Produto;
})(loja || (loja = {}));
