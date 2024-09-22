
export interface Passenger {
    name: string;
    chilren?: string[];
}

const passengerone: Passenger = {
    name: 'Daniel',
    chilren: ['alejandra, ian'],
}

const passengertwo: Passenger = {
    name: 'Fernando',
}



const retunrchildrenNumber = (passenger:Passenger):string | number => {
    
// if ( !passenger.chilren ) return 0;

    const howmanyChildren = passenger.chilren?.length || 'no tiene hijos';
    // const howmanyChildren = passenger.chilren!.length;
    
    console.log(passenger.name,howmanyChildren);

    return(howmanyChildren);
}

retunrchildrenNumber(passengerone);

