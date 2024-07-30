let player="Player";

function editNames(){
    player=prompt("change player name")

    if(player.length<1){
        alert('please enter a valid name');
        return;
    }
    document.querySelector("p.player")
        .innerHTML=player;
 
}

function tossTheCoin(){
    choose=prompt("choose a side")
    if((choose==="head") || (choose==="tail")){


    let coin=document.querySelector(".img1");

    let result=document.querySelector("h1")
    setTimeout(()=>{
        let randomnumber=Math.floor(Math.random()*2)+1;

        coin.setAttribute('src','images/coin'+randomnumber+'.png');


        if((randomnumber===1 && choose==='tail') || (randomnumber===2 && choose==='head')){
            result.innerHTML=(player+" WINS!")
        }
        else{
            result.innerHTML=(player+" LOSES!")
        }
    },1500);
    }
    else{
        alert('please choose a valid side');
        return;
    }

}