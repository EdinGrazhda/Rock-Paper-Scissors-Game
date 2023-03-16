const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0,0];

for(var i=0; i<buttons.length;i++){
    buttons[i].addEventListener("click",startGame);
}
function startGame(e){
    var PlayerSelection = e.target.innerText;

    var ComputerSelection = Math.random();

    if(ComputerSelection < .34){
       ComputerSelection = "Gur";
    }else if(ComputerSelection <= .67){
       ComputerSelection = "Leter";
    }else{
       ComputerSelection = "Gershere";
    }

    var Fituesi = KontrolloFituesin(PlayerSelection,ComputerSelection);


    if(Fituesi === "Njeriu"){
        Fituesi+=" Fitoi";
        winnerScores[0]++;
    }
    if(Fituesi === "Kompjuteri"){
        Fituesi +=" Fitoi";
        winnerScores[1]++;
    }
    if(Fituesi === "Barabart"){
        Fituesi+=" Baraz";
    }
   
    score.innerHTML = 'Njeriu: [ ' + winnerScores[0]+ ' ] Kompjuteri: [ ' + winnerScores[1] + ' ]';

    messenger('Njeriu: '+ PlayerSelection+' Kompjuteri:'+ ComputerSelection+"<br>"+ Fituesi);
}

    function messenger (messageSelection){
        message.innerHTML=messageSelection;
    }

    function KontrolloFituesin(Njeriu,Kompjuteri){
        if(Njeriu === Kompjuteri){
            return 'Baraz';
        }
        if(Njeriu === "Gur"){
            if(Kompjuteri ==="Leter"){
                return 'Kompjuteri';
            }else{
                return 'Njeriu';
            }
        }
        
        if(Njeriu ==="Leter"){
            if(Kompjuteri ==="Gershere"){
                return 'Kompjuteri';
            }else{
                return 'Njeriu'
            }
        }
        
        if(Njeriu === "Gershere"){
            if(Kompjuteri ==="Gur"){
                return 'Kompjuteri';
            }else{
                return 'Njeriu';
            }
        }
        }
        
    





