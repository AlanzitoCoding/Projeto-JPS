// Louvado seja o Senhor

export interface RegistroVenda{
    vendaID : number,
    vendaDataRegistro : Date,
    vendaValor : number,
    nomeComprador : string | null,
    tipoCompra : TipoCompra
}

export interface RegistroVendas extends Array<RegistroVenda>{}

export interface RegistroVendasAPI{
    vendas : RegistroVendas;
    dividas : RegistroVendas;
}

export enum TipoCompra{
    credito = 'Crédito',
    debito = 'Débito',
    dinheiro = 'Dinheiro',
    pix = 'PIX',
    fiado = 'Dívida',
}