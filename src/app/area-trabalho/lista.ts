export class Lista {
    public constructor(public id: string, public temaSala: string){}

    public getLista(){
        return this.id;
    }
    public getTema(){
        return this.temaSala;
    }

    public setId(id: string){
        this.id = id;
    }

    public setTema(tema: string){
        this.temaSala = tema;
    }
}
