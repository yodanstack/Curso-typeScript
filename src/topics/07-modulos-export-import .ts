
import { product, taxcalcualtion } from './06-fnction-destructuring';


const ShoppingCart: product[] = [
    {
        description:'nokia',
        price:100
    },
    {
        description:'ipad',
        price:150
    }
]; 



const [total, tax] = taxcalcualtion({ 
    products: ShoppingCart,
    tax:0.15
 });
 
console.log('tota', total);
console.log('tax', tax);