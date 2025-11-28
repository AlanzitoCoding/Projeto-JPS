// Louvado seja o Senhor

export interface Clientes{
    clienteID : number,
    clienteNome : string,
    clienteDivida : number
}

export interface PagamentoDividas{
    pagDividasID : number,
    dataPagamento : Date,
    valorPagamento : number,
    clienteID_FK : number
}

export interface RegistroDividas{
    regDividasID : number,
    valorDivida : number,
    dataDivida : Date,
    clienteID_FK : number
}