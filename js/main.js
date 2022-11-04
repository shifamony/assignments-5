//=================== 2ND CALLING FUNCTION ==============================
const findThePlayers = [];
function displayName(ourPlayer){
    
    const playerList = document.getElementById('players-name');
    
    playerList.innerHTML = '';

for(let i = 0; i <ourPlayer.length; i++){

   const name = findThePlayers[i].playersName;
   

const li = document.createElement('li');
li.innerHTML = `

<li class="list-group-item d-flex justify-content-between align-items-start border-0 bg-dark text-white pe-4">${i + 1}.  ${name}</li>
`
playerList.appendChild(li);

}

}
//=====================  FUNCTION FOR PLAYERS FIRST CALLING FUNCTION  =======================

function addPlayerName(element){
    const playersName = element.parentNode.parentNode.children[1].children[0].innerText;
   
    const playersObj = {
        playersName:  playersName,
    }

     findThePlayers.push(playersObj);

     document.getElementById('show-players').innerText = findThePlayers.length;


    // Bonus Part: Only 5 Players can be chosen

    if (findThePlayers.length <= 5) {
        displayName(findThePlayers);
    }

    else {
        alert('Cannot choose more than 5 players');
    }
     
}
//FUNCTION FOR DISABLE BUTTON 

const allButtons = document.querySelectorAll('.bt');
for(const allButton of allButtons){

   allButton.addEventListener('click',function(){
       allButton.disabled = true;
       allButton.style.backgroundColor = '#015196';
    
   });
};


//FUNCTION COST OF PLAYERS
//INPUT FIELD
function playersInputField(inputField){
    const playersInputs = document.getElementById(inputField);
    const playersInputsStrings = playersInputs.value;
    const convertNumberPlayersInput = parseFloat( playersInputsStrings);
    return convertNumberPlayersInput;
}

//PLAYERS COST

document.getElementById('player-cost-btn').addEventListener('click',function(){
    const playerCosts = playersInputField('players-cost');

    if((isNaN(playerCosts) || (playerCosts <= 0))){
        alert('Please Enter the number');
    }

    const playerTotalCosts = playerCosts * 5;
    const playersText = document.getElementById('total-cost');
     playersText.innerText = playerTotalCosts;
   
    
});

//ALL COST  AND SUBTOTAL

document.getElementById('allplayers-cost').addEventListener('click',function(){
  
   const playersText = document.getElementById('total-cost');
   const PlayerCostStrings = playersText.innerText;
   const convertNumberPlayerCost = parseFloat(PlayerCostStrings);

   const managersCost = playersInputField('manager-cost');
   const coachCost = playersInputField('coach-cost');

   if((isNaN(convertNumberPlayerCost) || (convertNumberPlayerCost <= 0)) && (isNaN(managersCost) || (managersCost <= 0)) && (isNaN(coachCost) || (coachCost <= 0))){
    alert('Please Enter the valid number');
}

   const totalAmount = convertNumberPlayerCost + managersCost + coachCost;
   const showTotalAmount = document.getElementById('sub-total');
   showTotalAmount.innerText = totalAmount;


});
