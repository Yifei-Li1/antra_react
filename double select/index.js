const items = [
    {
      name: "apple",
      category: "fruit"
    },
    {
      name: "Cucumber",
      category: "vegetable"
    },
    {
      name: "Banana",
      category: "fruit"
    },
    {
      name: "Celery",
      category: "vegetable"
    },
    {
      name: "orange",
      category: "fruit"
    },
    {
      name: "sausage",
      category: "meat"
    },
    {
      name: "bacon",
      category: "meat"
    }
  ];
const map = new Map();
for(i of items){
    if(map.has(i.category)){
        map.get(i.category).push(i.name);
    }
    else{
        map.set(i.category,[i.name]);
    }
}
let category = document.getElementById("category");
let toDisplay = document.getElementById("items");
let selected;
category.addEventListener('change',changeCategory);
function changeCategory(){
    selected = this.options[this.selectedIndex].value;
    console.log("changed",selected);
    let subC = document.getElementById("items");
    removeOptions(subC);  
    for(let i = 0;i < map.get(selected).length;i++){
        let item = map.get(selected)[i];
        if(i === 0) document.getElementById("result").innerHTML=item;
        
        let temp = document.createElement("option");
        console.log("add item",temp.text = item);
        subC.add(temp);    

    }
    
    
}
console.log(toDisplay);

toDisplay.addEventListener('change',getItem);
function getItem(){
    //console.log(this.options[this.selectedIndex].value);
    document.getElementById("result").innerHTML = this.options[this.selectedIndex].value;
    
}
//console.log( = getItem());
function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
 }


 