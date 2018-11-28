//Segundo passo criar um modelo de dados, para que possam ser feitas intancias
export class Usuario{
	constructor(
		public email: string,
	    public nomeCompleto: string,
	    public nickname: string,
	    public dataNascimento: string,
	    public senha: string
	){}
}