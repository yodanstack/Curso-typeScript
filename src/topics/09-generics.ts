
export function WhatsMyType<T>( argument: T ): T {
    

    return (argument);
}


let amIstring = WhatsMyType<string>('Hola Mundo');
let amNumber= WhatsMyType<number>(1234);
let amArray= WhatsMyType<number[]>([1,2,3,4,5,6]);


console.log(amIstring.split(' '));
console.log(amNumber.toFixed());
console.log(amArray.join('-'));
