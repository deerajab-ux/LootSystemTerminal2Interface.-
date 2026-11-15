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

    if (lootName.length === 0)
    {
        prompt("PLease enter something in the box")
    }
    else if (isNaN(lootNumber))
    {
        prompt("Enter a number")
    }
    else if (isNaN(lootNumber) || lootNumber < 0)
    {
        prompt("Enter a postiive number")
    }
    else 
    {
        prompt("valid input")
    }
    loot.push({name: lootName, value: lootNumber})

});