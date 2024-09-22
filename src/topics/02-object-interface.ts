const skill: string[]= ['bash', 'counter', 'healing']

interface character {
    name: string;
    hp : number;
    skills:string[];
    hometown?:string;

}

const strider: character = {
    name : 'strider',
    hp : 100,
    skills: ['Bash', 'Counter'],
    hometown: ""
}


strider.hometown = 'rivenderll';

console.table(strider);

export{};