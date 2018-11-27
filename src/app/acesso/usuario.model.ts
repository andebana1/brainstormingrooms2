export class Usuario {
    constructor (
        public email: string,
        public nome_completo: string,
        public nickname: string,
        public data_nascimento: Date,
        public senha: string

    ) { }
}

