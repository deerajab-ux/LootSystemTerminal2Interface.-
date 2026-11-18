const loot = []

const lootName = document.getElementById("lootName");

const lootNumber = document.getElementById("lootNumber");

const activateButton = document.getElementById("activateButton");

const validationMessage = document.getElementById("validationMessage");

const list = document.getElementById("list");

const total = document.getElementById("total");

activateButton.addEventListener("click", function ()
{
    let itemName = lootName.value;
    let itemValue = Number(lootNumber.value);

    if (itemName === "" )
    {
        validationMessage.innerHTML = "you need to enter an item";
    }
    else if (isNaN(itemValue))
    {
        validationMessage.innerHTML = "you need to enter a number";
    }
    else if (itemValue < 0)
    {
        validationMessage.innerHTML = "must be a postive number";
    }
    else 
    {
        
    loot.push({name: itemName, value: itemValue}) 
    }
});