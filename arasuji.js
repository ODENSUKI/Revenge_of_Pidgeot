'use strict'
let clickcount = 0;

// $('.display').hide()

function arasuji1(){
    clickcount ++;
    return document.getElementsByClassName('arasuji1')[0].textContent = "Tamaroh博士によって、ポケモン図鑑に入れられ忘れたピジョット・・・"
}

function arasuji2(){
    clickcount ++;
    return document.getElementsByClassName('arasuji2')[0].textContent = "「このまま、忘れ去られてたまるか！」"
}

function arasuji3(){
    clickcount ++;
    return document.getElementsByClassName('arasuji3')[0].textContent = "今、すべてを失った「とりポケモン」の復讐劇が始まる!"
}

function clickToShow(tag){
    //切り替える対象の状態を取得
    const gamen = document.getElementsByClassName(tag)[0];
    //取得した情報からスタイルについての状態のみをstateに代入
    const state = gamen.style.display;
    //デバッグ用にlogに出力
    console.log('before = ', state);
    //非表示中のときの処理
    if(state === ""){
            //スタイルを表示(inline)に切り替え
            gamen.setAttribute("style","display:inline");
        //デバッグ用にinlineをlogに出力
        console.log("After: inline");
    }
}


function arasuji(){
    if (clickcount === 0){
        arasuji1()
        arasuji2()
        arasuji3()
        clickToShow('display_battle_button')
    }
    // }else if(clickcount === 1){
    //     arasuji2()
    // }else if(clickcount === 2){
    //     arasuji3()
    // }else if(clickcount === 3){
    //     clickToShow('display_battle_button')
    // }else{
    //     ;
    // }
}
