const loot = []

const lootName = document.getElementById("lootName");

const lootNumber = document.getElementById("lootNumber");

const activateButton = document.getElementById("activateButton");

const validationMessage = document.getElementById("validationMessage");

const list = document.getElementById("list");

const total = document.getElementById("total");

activateButton.addEventListener("click", function ()
{
    validationMessage.innerHTML = "you have clicked the button";

    if (lootName.value === "")
    {
        validationMessage.innerHTML = "you need to enter an item";
    }
    else if (isNaN(lootNumber))
    {
        validationMessage.innerHTML = "you need to enter a number";
    }
    else if (lootNumber < 0)
    {
        validationMessage.innerHTML = "must be a postive number";
    }
    else 
    {
        
    loot.push({name: lootName, value: lootNumber})
    }
});