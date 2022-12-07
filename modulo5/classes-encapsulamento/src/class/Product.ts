export class Products {
    constructor(private  id: string, private name:string, private price :number){
        this.id = id;
        this.name = name;
        this.price = price;

     }
    
    public getId():string {return this.id; }  
    public getName():string {return this.name; }
    public getPrice():number {return this.price; }
    
    public setId(newId:string):void { this.id = newId; }
    public setName(newName:string):void { this.name = newName; }
    public setPrice(newPrice:number):void { this.price = newPrice; }
}