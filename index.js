import {foo, bar} from './foo'

const thing = async () =>{
    setTimeout(() => {
        console.log('thing')
    }, 1000);

}

console.log(foo());
console.log(bar());

class Moo{
    constructor(id){
        console.log('const hi')
        this.id = id
        this.obj  = {one: 1, two: 2, three: 3, four: 4}
    }


    name = () => {
        console.log('name hi', this.id)
        // console.log(...this.obj)
        let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
        console.log(x); // 1
        console.log(y); // 2
        console.log(z); // { a: 3, b: 4 }
    }
}


const cow = new Moo(10);
const cow2 = new Moo(12);
// cow.name()
cow2.name()

thing()