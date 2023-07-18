export class Streaming{
    spartiti :Spartito[];
    strumenti : Strumento[];

}

export class Spartito{
    public id: number;
    public titolo: string;
    public autore: string;
    public editore: string;
    public prezzo: number
}

export class Strumento{
    public id: number;
    public marca: string;
    public modello: string;
    public categoria: string;
    public prezzo: number
    
     
}