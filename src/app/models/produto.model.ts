// Louvado seja o Senhor

export interface Produto{
    id : string,
    nome : string,
    valor : number,
    categoria : string;
}

export interface Produtos extends Array<Produto>{}

export interface ProdutosAPI{
    produtos : Produtos;
}