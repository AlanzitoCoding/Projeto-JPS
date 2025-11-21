// Louvado seja o Senhor

export interface RegistroVenda{
    id : number,
    dataRegistro : Date,
    valor : number,
    nomeComprador : string,
    tipoCompra : TipoCompra,
    idListaProdutos : number
}

export interface RegistroDevedores{
    id : number,
    dataRegistro : Date,
    valor : number,
    nomeDevedor : string,
    idCliente : number
    idListaProdutos : number
}

export interface listaProdutosComprados{
    id : number
}

export interface produtosComprados{
    id : number,
    idProduto : number,
    idLista : number
}

export enum TipoCompra{
    credito = 'Crédito',
    debito = 'Débito',
    dinheiro = 'Dinheiro',
    pix = 'PIX',
    fiado = 'Fiado',
}