// Louvado seja o Senhor

export interface RegistroVenda{
    id : number,
    dataRegistro : Date,
    valor : number,
    nomeComprador : string,
    tipoCompra : TipoCompra
}

export interface RegistroDevedores{
    id : number,
    idCliente : number,
    idRegistroVenda : number
}

export interface listaProdutosComprados{
    id : number,
    idRegistroVenda : number
}

export interface produtosComprados{
    id : number,
    idProduto : number,
    quantidadeComprada : number,
    idLista : number
}

export enum TipoCompra{
    credito = 'Crédito',
    debito = 'Débito',
    dinheiro = 'Dinheiro',
    pix = 'PIX',
    fiado = 'Fiado',
}