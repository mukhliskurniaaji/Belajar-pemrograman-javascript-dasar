export default class{
    constructor(name){
        this.name = name;
    }
    sayHello(name){
        console.log("Hello "+this.name+", my name is "+name);
    }
}