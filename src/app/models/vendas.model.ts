// Louvado seja o Senhor

export interface RegistroVenda{
    vendaID : number,
    vendaDataRegistro : Date,
    vendaValor : number,
    nomeComprador : string | null,
    tipoCompra : TipoCompra
}

export interface RegistroDevedores{
    id : number,
    idCliente : number,
    idRegistroVenda : number
}

export enum TipoCompra{
    credito = 'Crédito',
    debito = 'Débito',
    dinheiro = 'Dinheiro',
    pix = 'PIX',
    fiado = 'Fiado',
}