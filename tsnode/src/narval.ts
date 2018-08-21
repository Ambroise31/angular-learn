import {double} from "./hello";


class Animal {
    constructor(public name: string, public weight: number) {
    }
}

const lulu = new Animal('Cat', 7);

class Narval extends Animal {
    constructor(public length: number) {
        super('Gerard', 400);
    }

    detect(object: any) {
        console.log(object);
    }

}

const gerard = new Narval(30);

console.log(gerard);
gerard.detect(lulu);

class Viewer<T> {
    viewable: T;

    view(thing: T) {
        this.viewable = thing;
    }
}


gerard.length = double(50);


let viewer = new Viewer<Animal>();
viewer.view(lulu);
console.log(viewer);
viewer.view(gerard);
console.log(viewer);

const lorem = `
This
is
on
multiline
<html>
<div>${gerard.name}</div>
</html>
`;

type Operation  = (x:number, y:number)=>number;

let add:Operation=(x,y) => x+y;

console.log(add(12,15));

let div  = (x:number, y:number)=> x/y;

let myOperation:Operation = div;

//splat operator

const people = ['Jim','John','Jack'];
const morePeople = people.concat('Jules');
console.log('People',people);
console.log(morePeople);
const morePeopleSexy = [...people,'Jacky','Joseph'];
console.log(morePeopleSexy);


const house = {
    size:50,
    price: 500000
};
let palace = {
    ...house,
        employees: 5
};


console.log(palace);

const rental = {
    people,
    palace:palace,
    price:10000,
    days:7

};

console.log('--------------------',rental);