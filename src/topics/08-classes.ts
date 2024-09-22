

export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public firtName: string,
        public LastName: string,
        private address: string,
    ) { }
}

// Extender clase
// export class Hero extends person {      <---- codigo inical
//     constructor(
//         public AlterEgo: string,
//         public age : string,
//         public realname: string,
//     ) {
//         super( realname, 'new york');
//     }
// }


export class Hero {
    // public person: Person;


    constructor(
        public AlterEgo: string,
        public age : string,
        public realname: string,
        public person: Person,
    ) {
        
        // this.person = new Person(realname); 
    }
}

const tony = new Person('Tony','Starck','New York');       // <----- Esta liena muestra los cambios de la clase Person

const ironman = new Hero('ironman', '45', 'tony', tony );  // <---- Esta linea los cambios de la clase Hero

console.log(ironman);