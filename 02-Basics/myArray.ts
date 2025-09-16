//FIRST METHOD OF DECLARING AN ARRAY
const superHeroes: string[] = []; //initialized as an empty array that should only contain strings
const favFoods: string[] = [];
const favNumbers: number[] = []; //initialized as an empty array that should only contain numbers

superHeroes.push('Superman');
favFoods.push('Rice');
favNumbers.push(7);

//SECOND METHOD OF DECLARING AN ARRAY
const powerLevel: Array<number> = []; //initialized as an empty array that should only contain numbers. Works the same way as the first method
powerLevel.push(9000);

type User1 = {
    name: string;
    email: string;
    isActive: boolean;
}

//THIRD METHOD USING TYPE ALIASES
const newUSer: User1[] = [];
newUSer.push({ name: 'Sadiq', email: 's@gmail.com', isActive: true })


//FOURTH METHOD USING THE ARRAY OBJECT: Using an array inside an array type
const coordinates: number[][] = [
    [10, 20],
    [30, 40],
    [50, 60],
]
console.log(coordinates);