function addnumbers(a: number, b: number): number {
    return a + b;
}

const addnumbresArroy = (a: number, b: number): string => {
    return `${a + b}`;
};


function multiply(firstnumber: number, secondNumber?: number, base: number = 2) {
    return firstnumber * base;
};

// const result: number = addnumbers(1, 2);
// const result2: string = addnumbresArroy(1, 2);
// const multiplyresult:number = multiply(5);

// console.table({ result, result2, multiplyresult })


interface Character {
    name: string ;
    hp: number;
    showHp: () => void;
}

const healcahracter = (character: Character , amount:number ) =>{

    character.hp += amount;
}


const strider: Character = {
    name: 'strider',
    hp: 10,
    showHp (){
        console.log(`puntos de vida ${ this.hp }`);
    }
}


healcahracter(strider, 40)
    

strider.showHp();

export { };