// Louvado seja o Senhor

export interface Produto{
    id : string;
    nome : string;
    categoria : string;
    valorUnitario : number;
    valorKg : number | 0;
}

export interface Produtos extends Array<Produto>{}

export interface ProdutosAPI{
    produtos : Produtos;
}