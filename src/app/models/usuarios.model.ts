// Louvado seja o Senhor

export interface Usuario{
    userID : number,
    userNome : string,
    userSenha : string,
    userTipo : TipoUsuario
}

export interface UsuarioAPI{
    usuario : Usuario[]
}

export enum TipoUsuario{
    admin = "Admin",
    usuario = "Usuario"
}