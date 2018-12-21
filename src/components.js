import './components.pcss'

class Hero{
    constructor(name){
        this.name = name
    }

    get fullName(){
        return this.name;
    }
}

const hero = new Hero('Oscar');
console.log( hero.fullName);

