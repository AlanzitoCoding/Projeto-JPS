// Louvado seja o Senhor

export interface Produto{
    prodID : number,
    prodNome : string,
    prodValor : number,
    prodCategoria : string;
}

export interface Produtos extends Array<Produto>{}

export interface ProdutosAPI{
    produtos : Produtos;
}