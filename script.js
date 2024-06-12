let messageContainer = {
    entrees: ['steak', 'turkey melt', 'salmon', 'crispy chicken salad', 'chicken tenders', 'burger'],
    sides: ['french fries', 'apple sauce', 'onion rings', 'no side', 'coleslaw', 'mac n cheese'],
    beverages: ['water', 'coke', 'apple juice', 'vanilla milkshake', 'water with lemon', 'diet soda'],
    gettingDessert: false,
    desserts: ['hot fudge sundae', 'brownie', 'cookies', 'super sundae', 'ice cream cone', 'chocolate milkshake'],
    leavingRating: false,
    ratings: ['you enjoyed it!', 'you hated it', 'you thought it was alright', 'you need a second opinion', 'you would recomend it to a friend', 'you would never eat here again']
};

function selectRandom(){
    return Math.floor(Math.random() * 5);
};


const entreeSelection = messageContainer.entrees[selectRandom()];
const sideSelection = messageContainer.sides[selectRandom()];
const beverageSelection = messageContainer.beverages[selectRandom()];

const yourMessage = `You will have the ${entreeSelection} with a side of ${sideSelection} and a ${beverageSelection} to drink.`;
console.log(yourMessage);
