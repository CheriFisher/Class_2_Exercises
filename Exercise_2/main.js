let foods = {
    Pizza: '$15.99',
    Spaghetti:'$8.99',
    Breadsticks:'$4.79',
    Calzone:'$14.99',
    Salad:'$7.50'
};

let foodList = document.createElement('ul');
for(let i in foods){
    let item = document.createElement('li');
    item.innerHTML = i;
    foodList.appendChild(item);
}
document.getElementById('demo').appendChild(foodList);