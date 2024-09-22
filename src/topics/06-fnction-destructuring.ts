export interface product{
    description: string;
    price: number;
}

export interface taxcalculationoptions {
    tax: number,
    products: product[];
}


const phone: product = {
    description: 'nokia',
    price: 150.0,
}

const tablet: product = {
    description: 'air pad',
    price: 250.0,
}



// function totalcalculation( options: taxcalculationoptions ):[Number, number] {    <---- Codigo original del curso
// function totalcalculation( options: taxcalculationoptions ):[Number, number] {
   
//    const { tax, products } = options;
//     let total = 0;

//     options.products.forEach( ({price}) => {
//         total += price;


        

//     });
//     return [total, total * options.tax];
//     }


// const shoppingcart = [phone, tablet];
// const tax = 0.15;


// const result = totalcalculation({
//     products: shoppingcart,
//     tax: tax,  
// });



export function taxcalcualtion( options: taxcalculationoptions ):[Number, number] {
   
    const { tax, products } = options;
     let total = 0;
 
     products.forEach( ({price}) => {
         total += price;
 
 
         
 
     });
     return [total, total * tax];
     }
 
 
 const shoppingcart = [phone, tablet];
 const tax = 0.15;
 
 
 const result = taxcalcualtion({
     products: shoppingcart,
     tax: tax,  
 });
 

// homework (X) mal
console.log('price:', {price: tablet }, 'tax', {tax:tablet}); 
console.log('price:', {price:  phone}, 'tax', {tax:phone}); 

console.log('total', result[0]);
console.log('tax', result[0]);

// resolucion de la tarea

// const [total, totaltax] = totalcalculation({
//     products: shoppingcart,
//     tax: tax,  
// });

// console.log('total', total);
// console.log('tax', totaltax);



