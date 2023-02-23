import { CustomError } from "./CustomError";

export class InvalidEmail extends CustomError{
    constructor(){
        super(400, "Email inválido")
    }
};

export class InvalidPassword extends CustomError{
    constructor(){
        super(400, "Password inválido")
    }
};

export class UserNotFound extends CustomError{
    constructor(){
        super(404, "Usuário não encontrado")
    }
};

