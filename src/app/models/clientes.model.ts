// Louvado seja o Senhor

export interface Cliente{
    clienteID : number,
    clienteNome : string,
    clienteDivida : number
}

export interface ClienteAPI{
    clienteInfo : Clientes
}

export interface Clientes extends Array<Cliente>{}

export interface ClientesAPI{
    clientes : Clientes
}

export interface RegistroDivida{
    regDividasID : number,
    valorDivida : number,
    dataDivida : Date,
    clienteID_FK : number
}

export interface RegistroDividas extends Array<RegistroDivida>{}

export interface RegistroDividasAPI{
    registroDividas : RegistroDividas
}

export interface PagamentoDivida{
    pagDividasID : number,
    dataPagamento : Date,
    valorPagamento : number,
    clienteID_FK : number
}

export interface PagamentoDividas extends Array<PagamentoDivida>{}

export interface PagamentoDividasAPI{
    pagamentoDividas : PagamentoDividas
}
