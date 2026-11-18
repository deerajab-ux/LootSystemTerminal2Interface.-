const loot = []

const lootName = document.getElementById("lootName");

const lootNumber = document.getElementById("lootNumber");

const activateButton = document.getElementById("activateButton");

const validationMessage = document.getElementById("validationMessage");

const list = document.getElementById("list");

const total = document.getElementById("total");

activateButton.addEventListener("click", function ()
{
    const itemName = lootName.value;
    const itemValue = Number(lootNumber.value);
    let totalValue = 0;
    let lootList = "";


    if (itemName === "" )
    {
        validationMessage.innerHTML = "you need to enter an item";
    }
    else if (lootNumber.value === "" || isNaN(itemValue)
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

    for (let i = 0; i < loot.length; i++)
    {
        lootList += "[" + (i + 1) + "] " + loot[i].name + " - " + loot[i].value + "-"
    }
        for (let i = 0; i < loot.length; i++)
    {
        totalValue += loot[i].value;
    }
    total.innerHTML = totalValue;
    list.innerHTML = lootList
    }

});
