//tratando de hacerlo con arrays pero de objetos para mayor control de los datos
//parece que si salio asi
var tiro1,tiro2, tiroBonus, totalTiros = 0, suma =0;
var totalPuntos = 0;
var score = [];

isStrike=(tiro1) => {
    return (tiro1 == 10);
}
isSpare = (suma) =>{
    return (suma == 10);
}
addData = (t1=0,t2=0,tt=0,isStrike=false, isSpare=false) =>{
    var casilla = {
        t1,
        t2,
        tt,
        isStrike,
        isSpare
    }
    score.push(casilla);
}
updateScores = (puntajes) =>{
    for(let p = 0; p < puntajes.length; p++){
       if(p == 9){
            if(puntajes[p].isStrike){
                puntajes[p-1].tt += tiroBonus;
                puntajes[p].tt += 10 + tiroBonus;
            }else if(puntajes[p].isSpare){
                if(p == 9){
                    puntajes[p].tt +=tiroBonus;    
                }
            }
        }
        if(typeof puntajes[p+1] !== "undefined"){

            if(puntajes[p].isStrike){
                if(p > 0){
                    puntajes[p].tt += puntajes[p-1].tt;   
                }
                if(typeof puntajes[p+2] !== "undefined"){
                        
                    if(puntajes[p+2].isStrike){
                        puntajes[p].tt +=puntajes[p+1].tt;
                    }                   
                    
                }
                puntajes[p].tt +=puntajes[p+1].tt;               
            }else{ 
                if(puntajes[p].isSpare){
                    
                    puntajes[p].tt += puntajes[p-1].tt;
                    puntajes[p].tt += puntajes[p+1].t1
                }else if(p>0){
                puntajes[p].tt += puntajes[p-1].tt
                }
            }
        }else{
            puntajes[p].tt +=puntajes[p-1].tt
        }
    }
    showFinalScore(puntajes);
}
showFinalScore = (finalScore) =>{
    console.log("final score: "+score[9].tt);
    finalScore.map((casillas,i) =>{
        if( (i == 9) && (tiroBonus > 0) ){
            console.log("************** Jugada "+(i+1)+" ***************\ntiro 1: "+casillas.t1+" tiro 2: "+casillas.t2+" tiro bonus:"+tiroBonus+" total del juego: "+casillas.tt);
        }else{
            console.log("************** Jugada "+(i+1)+" ***************\ntiro 1: "+casillas.t1+" tiro 2: "+casillas.t2+" total del juego: "+casillas.tt);
        }
    })
}
game =() =>{
    score = [];
    for(let i=0; i < 10; i++){
        tiro1 = Number(prompt("JUGADA NO° "+(i+1)+" tiro 1:"));
        if(isStrike(tiro1)){
            if(i == 9){
                tiroBonus = Number(prompt("JUGADA NO° "+(i+1)+" Tiro Bonus 1: "));
            }
            addData(tiro1, 0, tiro1, true)
        }else{
            tiro2 = Number(prompt("JUGADA NO° "+(i+1)+" tiro 2:"));
            suma= tiro1 + tiro2;
            if(isSpare(suma)){
                if(i == 9){
                    tiroBonus = Number(prompt("JUGADA NO° "+(i+1)+" Tiro Bonus 1: "));
                }
                addData(tiro1, tiro2, suma,false,true)
            }else{
                addData(tiro1,tiro2,suma);
            }
        }
    }
    updateScores(score);
}