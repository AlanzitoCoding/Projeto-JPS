// Louvado seja o Senhor

export interface Produto{
    id : string,
    nome : string,
    valorUnitario : number,
    valorKg : number | 0,
    categoria : string;
}

export interface Produtos extends Array<Produto>{}

export interface ProdutosAPI{
    produtos : Produtos;
}