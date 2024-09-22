function ClassDecortaror (
    constructor: any,
){
    return class extends constructor {
        newProperty = 'new Property';
        hello = 'override';
    } 
}




@ClassDecortaror
export class SuperClass {
   public myproperty: string = 'Abc123'

  print() {
        console.log('Hola Mundo');
  }
}

console.log ( SuperClass );

const myclass = new SuperClass ();

console.log(myclass);