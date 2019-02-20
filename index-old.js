//tratando de hacerlo con solo arrays
var score = [null]
var tiro1, tiro2;
var flag = false, spare = false;
var aux= 0;

function isStrike(j, tiro1){
        
        if(tiro1 == 10){
            flag = true;
            if(score[0] == null){
                score[j] = tiro1;
            }else{
                if(score[j+1])
                score[j] = score[j-1] + tiro1;
            }
            return  score[j];
        }else{
            //POR AQUI ABAJO TIENE QUE IR EL SPARE()
            tiro2 = Number(prompt("JUGADA "+(j+1)+" tiro 2: "));
            var suma = tiro1 +  tiro2;

            if(suma == 10){
                spare= true;
                if(spare){
                    if(score[0] == null){
                        score[j] = tiro1;
                    }else{

                    }
                    score[j-1] += tiro1;
                    spare=false; 
                }
            }else{
                if(flag){
                    score[j-1] += suma
                    flag= false;    
                }
                if(score[0] == null){
                    score[j] =suma;
                    return score[j]
                }else{
                    aux = (score[j-1] + suma);
                    score[j] = aux + suma;
                    return aux
                }
            }            
        }
}
function tiros(i) {
    if(typeof score[i+1] != "number"){
        console.log("jugada numero "+(i+1));
        tiro1 = Number(prompt("JUGADA "+(i+1)+" tiro 1: "));
        score[i] = isStrike(i, tiro1);        
        console.log("TOTAL de la jugada "+(i+1)+": "+score[i]);
        console.log(score);
    }
    return score[i-1] 
}

function empezar(){
    console.log("anotar los puntajes de las 10 casillas");
    for (let i = 0; i <= 10; i++){
        tiros(i)
    }
}