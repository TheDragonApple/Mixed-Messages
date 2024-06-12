let messageContainer = {
    entrees: ['steak', 'turkey melt', 'salmon', 'crispy chicken salad', 'chicken tenders', 'burger'],
    sides: ['french fries', 'apple sauce', 'onion rings', 'no side', 'coleslaw', 'mac n cheese'],
    beverages: ['water', 'coke', 'apple juice', 'vanilla milkshake', 'water with lemon', 'diet soda'],
    desserts: ['hot fudge sundae', 'brownie', 'cookie', 'super sundae', 'ice cream cone', 'chocolate milkshake'],
    ratings: ['you enjoyed it!', 'you hated it', 'you thought it was alright', 'you need a second opinion on the meal', 'you would recomend it to a friend', 'you would never eat here again']
};

let yourMessage = '';

function selectRandom(){
    return Math.floor(Math.random() * 6);
};


const entreeSelection = messageContainer.entrees[selectRandom()];
const sideSelection = messageContainer.sides[selectRandom()];
const beverageSelection = messageContainer.beverages[selectRandom()];
let dessertSelection = "";
let ratingSelection = "";

function TrueOrFalse(){
    return Math.floor(Math.random() * 2);
}

const dessertDecider = TrueOrFalse();
const ratingDecider = TrueOrFalse();
if(dessertDecider === 1){
    dessertSelection = messageContainer.desserts[selectRandom()];
}

if(ratingDecider === 1){
    ratingSelection = messageContainer.ratings[selectRandom()];
}

if(!dessertSelection && !ratingSelection){
    yourMessage = `You will have the ${entreeSelection} with a side of ${sideSelection} and a ${beverageSelection} to drink.`;
}
else if(dessertSelection && !ratingSelection){
    yourMessage = `You decide to get the ${entreeSelection} with ${sideSelection} and a ${beverageSelection} to drink, and save room for a ${dessertSelection} for dessert!`;
}
else if(!dessertSelection && ratingSelection){
    yourMessage = `You order the ${entreeSelection} and ${sideSelection} along with a ${beverageSelection} to drink. ${ratingSelection}`;
}
else{
    yourMessage = `Your meal is a ${entreeSelection} with a side of ${sideSelection}. You later decide to get a ${dessertSelection} as a treat. ${ratingSelection}`;
}

console.log(yourMessage);


