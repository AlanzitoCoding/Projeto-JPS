// Louvado seja o Senhor

export interface Clientes{
    id : number,
    valorDivida : number,
    nome : string
}

export interface pagamentoDividas{
    id : number,
    dataPagamento : Date,
    valorPago : number,
    idCliente : number
}