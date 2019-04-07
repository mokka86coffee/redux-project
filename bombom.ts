
 class Cl1 {
    el1: string
    constructor(){
        this.el1 = 'el1';
    }

    getSmth1 = () => {
        console.log(this);
    }
}

class Cl2 extends Cl1 {
    el2
    constructor(){
        super();
        this.el2 = 'el2';
    }

    getSmth2 () {
        console.log(2);
    }

    getIns() {
        this.getSmth1();
    }
}

let cl = new Cl2();

cl.getSmth1();
cl.getIns();
