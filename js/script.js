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
});