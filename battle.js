'use strict'
//画面サイズ
const SCREEN_W = 320;
const SCREEN_H = 150;

//キャンバスサイズ
const CANVAS_W = SCREEN_W *2;
const CANVAS_H = SCREEN_H *2;

//フィールドサイズ
const FIELD_W = SCREEN_W *2;
const FIELD_H = SCREEN_H *2;

//キャンバス
let canvas = document.createElement('canvas')
canvas.width = CANVAS_W
canvas.height = CANVAS_H

//ピジョットの画像
const PigeotImage = new Image()
PigeotImage.src = "images/18.jpg";

//ピカチューの画像
const PikachuImage = new Image();
PikachuImage.src = "images/25.jpg"
PikachuImage.classList.add('Pikachu')

//ボロボロのピカチュー画像
const PikachuWounded = new Image();
PikachuWounded.src = "images/250.jpg"
PikachuWounded.classList.add('PikachuWounded')

//ミュウツーの画像
const MewtwoImage = new Image();
MewtwoImage.src = "images/150.jpg"
MewtwoImage.classList.add('Mewtwo')

//電撃の画像
const DengekiImage = new Image();
DengekiImage.src = "images/kaminari.png";
DengekiImage.classList.add('Dengeki')

//はかいこうせんの画像
const HakaikousenImage = new Image();
HakaikousenImage.src = "images/hakaikousen2.png";
HakaikousenImage.classList.add('Hakaikousen')

//かぜおこしの画像
const KazeokosiImage = new Image();
KazeokosiImage.src = "images/tatumaki.png";
KazeokosiImage.classList.add('Kazeokosi')

//エンドロールの画像
const EndrollImage = new Image();
EndrollImage.src = "images/Ending.png";
EndrollImage.classList.add('Ending')

//イベントコントロール
let countclickcanvas = 0;
let eventControl = 0
function clickcanvas(){
    console.log('Click count', countclickcanvas)
    countclickcanvas ++;
    if(countclickcanvas === 1){
        eventControl = countclickcanvas
        console.log('event1:', eventControl)
        return text1();
    }
    else if(countclickcanvas === 2){
        eventControl = countclickcanvas
        console.log('event2:', eventControl)
        return pikachuCome();
    }
    else if(countclickcanvas === 3){
        eventControl = countclickcanvas
        console.log('event3:', eventControl)
        return text2();
    }
    else if(countclickcanvas === 4){
        eventControl = countclickcanvas
        console.log('event4:', eventControl)
        return dengeki_start();
    }
    else if(countclickcanvas >= 4 && dengeki_start_x === 151){
        countclickcanvas = 1000;
        eventControl = countclickcanvas
        console.log('event5:', eventControl)
        dengeki_start_x ++;
        return PigeotFly();
    }else if(countclickcanvas >= 1001 && countclickcanvas <= 1500 && PigeotPosition_x === 500){
        countclickcanvas = 2000
        eventControl = countclickcanvas
        console.log('event6: ', eventControl)
        return FlyAttackResult()
    }else if(countclickcanvas >= 2001 && countclickcanvas <= 2500){
        countclickcanvas = 3000
        eventControl = countclickcanvas
        console.log('event7: ', eventControl)
        return PigeotBack();
    }else if(countclickcanvas >= 3000 && countclickcanvas <= 3500 && PigeotPosition_x === 0){
        countclickcanvas = 4000
        eventControl = countclickcanvas
        console.log('event8: ', eventControl)
        return Pikachuexit();
    }else if(countclickcanvas >= 4000 && countclickcanvas <= 4500 && PikachuPositionX === 700){
        countclickcanvas = 5000
        eventControl = countclickcanvas
        console.log('event9: ', eventControl)
        return mewtwoExplain();
    }else if(countclickcanvas === 5001){
        eventControl = countclickcanvas
        console.log('event10: ', eventControl)
        return mewtwoCome()
    }else if(countclickcanvas >= 5002 && countclickcanvas <= 5500 && mewtwoPositionX === 500){
        countclickcanvas = 6000;
        eventControl = countclickcanvas
        console.log('event11: ', eventControl)
        return HakaikousenExplain()
    }else if(countclickcanvas === 6001){
        countclickcanvas = 7000;
        eventControl = countclickcanvas
        console.log('event12: ', eventControl)
        return HakaikousenAnimation()
    }else if (countclickcanvas >=7001 && countclickcanvas <= 7500 && hakaikousenX === 150){
        countclickcanvas = 8000;
        eventControl = countclickcanvas
        console.log('event13: ', eventControl)
        return PigeotDamageAnime();
    }else if (countclickcanvas >= 8001 && countclickcanvas <= 8500 && PigeotDamageMovecount === 100){
        countclickcanvas = 9000;
        eventControl = countclickcanvas
        console.log('event14: ', eventControl)
        return PigeotTaeruText();
    }else if (countclickcanvas === 9001){
        eventControl = countclickcanvas
        console.log('event15: ', eventControl)
        return PigeotKazeokosiText();
    }else if (countclickcanvas === 9002){
        countclickcanvas = 10000
        eventControl = countclickcanvas
        console.log('event15: ', eventControl)
        return kazeokisiAnimation();
    }else if (countclickcanvas >= 10001 && countclickcanvas <= 10500 && endkazeokosi === 1){
        countclickcanvas = 10600
        eventControl = countclickcanvas
        console.log('event16: ', eventControl)
        return mewTwoLoseText();
    }else if (countclickcanvas >= 10601 && countclickcanvas <= 10700){
        countclickcanvas = 10800;
        eventControl = countclickcanvas
        console.log('event17: ', eventControl)
        return PigeotWinText()
    }else if (countclickcanvas >= 10801 && countclickcanvas <=19000){
        countclickcanvas = 20000;
        console.log('event18: ', eventControl)
        return Ending()
    }
}

//キャンバス表示
let battlecount = 0;
function battle(){
    if(battlecount === 0){
        document.getElementsByClassName('display_gamen')[0].width = FIELD_W
        document.getElementsByClassName('display_gamen')[0].height = FIELD_H
        document.getElementsByClassName('display_gamen')[0].appendChild(canvas)
        document.querySelector('canvas').classList.add('battleField')
        document.getElementsByClassName('battleField')[0].style.margin = 'auto'
        // document.getElementsByClassName('battleField')[0].style.left = '0' //中央寄せ
        // document.getElementsByClassName('battleField')[0].style.right = '0' //中央寄せ
        const con = document.querySelector('canvas').getContext('2d')
        con.drawImage(PigeotImage, 0, 100);
        console.log('Pigeot Image Load!')
        const textField = document.createElement('canvas')
        textField.width = 600;
        textField.height = 100;
        textField.classList.add('textfield') //<canvas class=textfield>
        document.getElementsByClassName('display_gamen')[0].appendChild(textField)
        document.getElementsByClassName('textfield')[0].style.backgroundColor = 'white' //色
        document.getElementsByClassName('textfield')[0].style.border = 'ridge' //枠線
        document.getElementsByClassName('textfield')[0].style.margin = 'auto'
        // document.getElementsByClassName('textfield')[0].style.left = '0' //中央寄せ
        // document.getElementsByClassName('textfield')[0].style.right = '0' //中央寄せ
        // document.getElementsByClassName('textfield')[0].style.top = '1000'
        // document.getElementsByClassName('textfield')[0].style.bottom = '100' //下寄
        console.log('show textfield!')
        battlecount ++;
    }
    else if(battlecount > 0){
        window.alert('下の画像をクリックして遊んでね！')
    }
}

//テキスト1
function text1(){
    const statusfield = document.getElementsByClassName('textfield')[0];
    const conStatusfiled = statusfield.getContext('2d')
    conStatusfiled.font = '30px serif';
    conStatusfiled.fillText('野生のピカチューが現れた！', 30, 45);
}

//テキスト2
function text2(){
    const statusfield = document.getElementsByClassName('textfield')[0];
    const conStatusfiled = statusfield.getContext('2d')
    conStatusfiled.clearRect(0,0,600,100)
    conStatusfiled.fillText('ピカチューのでんげき！', 30, 45);
}

//ピカチュー登場
function pikachuCome(){
    const con = document.querySelector('canvas').getContext('2d')
    con.drawImage(PikachuImage, 500, 100);
}

//電撃アニメーション
let dengeki_start_x = 400;
function dengeki_anime(){
    const con = document.querySelector('canvas').getContext('2d')
    // for(let x = 400; x>= 200; x--){
    if(dengeki_start_x === 150){
        con.drawImage(DengekiImage, 150, 150)
        clearInterval(startdengeki)
        PigeotEscape();
    }else{
        con.drawImage(DengekiImage, dengeki_start_x, 150);
        con.clearRect(dengeki_start_x+38,150,38,38);
        // console.log('draw');
        dengeki_start_x --;
    }
}
function dengeki_start(){
    let intervalID = setInterval(function(){
        {
            const con = document.querySelector('canvas').getContext('2d')
            if(dengeki_start_x === 150){
                con.drawImage(DengekiImage, 150, 150)
                clearInterval(intervalID)
                PigeotEscape();
            }else{
                con.drawImage(DengekiImage, dengeki_start_x, 150);
                con.clearRect(dengeki_start_x+38,150,38,38);
                // console.log('draw');
                dengeki_start_x --;
            }
        }
    },1)//interval 間隔
}

//ピジョットは避けた説明文
function PigeotEscape(){
    dengeki_start_x ++; 
    const statusfield = document.getElementsByClassName('textfield')[0];
    const conStatusfiled = statusfield.getContext('2d')
    conStatusfiled.clearRect(0,0,600,100)
    conStatusfiled.fillText('ピジョットは空を飛んでよけて攻撃した！', 30, 45);
}

//ピジョット飛ぶ
let PigeotPosition_x = 0;
let PigeotPosition_y = 100;

function PigeotFly(){
    let PigeotFlyInterval = setInterval(function(){
        const con = document.querySelector('canvas').getContext('2d')
        con.clearRect(PigeotPosition_x,PigeotPosition_y,128,128);
        if(PigeotPosition_x <= 250){
            PigeotPosition_x ++;
            PigeotPosition_y = (100- (100/250)* PigeotPosition_x)
        }else if(PigeotPosition_x >= 250 && PigeotPosition_x<=499){
            PigeotPosition_x ++;
            PigeotPosition_y = (100/250) * (PigeotPosition_x-250)
        }else if(PigeotPosition_x === 500){
            console.log('clear Interval!')
            clearInterval(PigeotFlyInterval)
        }
        con.drawImage(PigeotImage, PigeotPosition_x, PigeotPosition_y);
    },1) //interval 間隔
}

//会心の一撃
function FlyAttackResult(){
    const statusfield = document.getElementsByClassName('textfield')[0];
    const conStatusfiled = statusfield.getContext('2d')
    conStatusfiled.clearRect(0,0,600,100)
    conStatusfiled.fillText('会心の一撃！', 30, 45);
}

//ピジョットスタート位置に戻る
function PigeotBack(){
    let PigeotBackInterval = setInterval(function(){
        const con = document.querySelector('canvas').getContext('2d')
        con.clearRect(PigeotPosition_x,PigeotPosition_y,128,128);
        if(PigeotPosition_x > 0){
            PigeotPosition_x --;
            PigeotPosition_y = 100
        }else if(PigeotPosition_x === 0){
            clearInterval(PigeotBackInterval)
        }
        con.drawImage(PikachuWounded, 500, 100);
        con.drawImage(PigeotImage, PigeotPosition_x, PigeotPosition_y);
    },1) //interval 間隔
}

//ピカチュー退場
let PikachuPositionX = 500;
let PikachuPositionY = 100;
function Pikachuexit(){
    const statusfield = document.getElementsByClassName('textfield')[0];
    const conStatusfiled = statusfield.getContext('2d')
    conStatusfiled.clearRect(0,0,600,100)
    conStatusfiled.fillText('ピカチューはボロボロになり敗れ去った！', 20, 45);
    let PikachuExitInterval = setInterval(function(){
        const con = document.querySelector('canvas').getContext('2d')
        con.clearRect(PikachuPositionX,PikachuPositionY,128,128);
        if(PikachuPositionX < 700){
            PikachuPositionX ++;
            PikachuPositionY = 100
        }else if(PikachuPositionX === 700){
            clearInterval(PikachuExitInterval)
        }
        con.drawImage(PikachuWounded, PikachuPositionX, PikachuPositionY);
    },1) //interval 間隔
}

//ミュウツー登場説明
function mewtwoExplain(){
    const statusfield = document.getElementsByClassName('textfield')[0];
    const conStatusfiled = statusfield.getContext('2d')
    conStatusfiled.clearRect(0,0,600,100)
    conStatusfiled.fillText('ラスボスのミュウツーが表れた！', 20, 45);
}

let mewtwoPositionX = 700;
let mewtwoPositionY = 100;

//ミュウツー登場アニメーション
function mewtwoCome(){
    let mewtwoInterval = setInterval(function(){
        const con = document.querySelector('canvas').getContext('2d')
        con.clearRect(mewtwoPositionX,mewtwoPositionY,128,128);
        if(mewtwoPositionX > 500){
            mewtwoPositionX --;
            mewtwoPositionY = 100
        }else if(mewtwoPositionX === 500){
            clearInterval(mewtwoInterval)
        }
        con.drawImage(MewtwoImage, mewtwoPositionX, mewtwoPositionY);
    },1) //interval 間隔
}

//はかいこうせん説明
function HakaikousenExplain(){
    const statusfield = document.getElementsByClassName('textfield')[0];
    const conStatusfiled = statusfield.getContext('2d')
    conStatusfiled.clearRect(0,0,600,100)
    conStatusfiled.fillText('ミュウツーのはかいこうせん！', 20, 45);
}

//はかいこうせんアニメーション
let hakaikousenX = 450
function HakaikousenAnimation(){
    let HakaikousenInterval = setInterval(function(){
        const con = document.querySelector('canvas').getContext('2d')
        if(hakaikousenX > 150){
            hakaikousenX --;
        }else if(hakaikousenX === 150){
            clearInterval(HakaikousenInterval)
        }
        con.drawImage(HakaikousenImage, hakaikousenX, 150);
    },1) //interval 間隔
}

//ピジョットダメージ受けて震えるアニメーション
let PigeotDamageMovecount = 0;
function PigeotDamageAnime(){
    let PigeotDamageInterval = setInterval(function(){
        const con = document.querySelector('canvas').getContext('2d')
        if(PigeotDamageMovecount <= 99){
            con.clearRect(PigeotPosition_x,PigeotPosition_y,128,128);
            PigeotPosition_x = Math.floor(Math.random() * 10)
            PigeotPosition_y = Math.floor(Math.random() * 10) + 100
            con.drawImage(PigeotImage, PigeotPosition_x, PigeotPosition_y);
            PigeotDamageMovecount ++;
        }else{
            clearInterval(PigeotDamageInterval)
            con.clearRect(PigeotPosition_x,PigeotPosition_y,128,128);
            PigeotPosition_x = 0,
            PigeotPosition_y = 100,
            con.drawImage(PigeotImage, PigeotPosition_x, PigeotPosition_y);
        }
    })
}

//ピジョットギリギリで耐える
function PigeotTaeruText(){
    const statusfield = document.getElementsByClassName('textfield')[0];
    const conStatusfiled = statusfield.getContext('2d')
    conStatusfiled.clearRect(0,0,600,100)
    conStatusfiled.fillText('ピジョットはギリギリで耐えた！', 20, 45);
}

//ピジョットのかぜおこし説明文
function PigeotKazeokosiText(){
    const con = document.querySelector('canvas').getContext('2d')
    con.clearRect(128,100,450,150); //破壊光線の消去
    con.drawImage(MewtwoImage, mewtwoPositionX, mewtwoPositionY);
    const statusfield = document.getElementsByClassName('textfield')[0];
    const conStatusfiled = statusfield.getContext('2d')
    conStatusfiled.clearRect(0,0,600,100)
    conStatusfiled.fillText('ピジョットのかぜおこし！', 20, 45);
}

//かぜおこしアニメーション
let kazeokosicount = 10;
let kazeokosipositonX = [];
let kazeokosipositonY = [];
let endkazeokosi = 0;
function kazeokisiAnimation(){
    const con = document.querySelector('canvas').getContext('2d')
    for (let number = 0; number <= kazeokosicount; number++){
        kazeokosipositonX.push((Math.floor(Math.random() * 200)))
        kazeokosipositonY.push((Math.floor(Math.random() * 300)))
    }
    console.log('position array :', kazeokosipositonX)
    let kazeokosiInterval = setInterval(function(){
        if(kazeokosipositonX.length === 0){
            clearInterval(kazeokosiInterval)
            // console.log('kazeokosi end!')
            endkazeokosi = 1;
        }else{
        for(let number = 0; number < kazeokosipositonX.length; number++){
            con.clearRect(kazeokosipositonX[number], kazeokosipositonY[number],32,38)
            // console.log('Delete kaze!')
            kazeokosipositonX[number] ++;
            // console.log('Position changed!', kazeokosipositonX[number])
            if(kazeokosipositonX[number] >= 600){
                kazeokosipositonX.splice(number,1)
                kazeokosipositonY.splice(number,1)
            }
            if(Math.max.apply(null, kazeokosipositonX) >= 550){ //風がミュウツーに届いたらミュウツー消える
                con.clearRect(mewtwoPositionX,mewtwoPositionY,128,128);
                mewtwoPositionX ++;
                // console.log('Mew Move!')
            }
            // console.log('Max X :', Math.max.apply(null, kazeokosipositonX))
            con.drawImage(MewtwoImage, mewtwoPositionX, mewtwoPositionY);
            con.drawImage(PigeotImage, PigeotPosition_x, PigeotPosition_y);
            con.drawImage(KazeokosiImage, kazeokosipositonX[number], kazeokosipositonY[number])
            // console.log('Draw kaze!')
            // console.log(kazeokosipositonX)
        }
    }
    },1)
}

function mewTwoLoseText(){
    const statusfield = document.getElementsByClassName('textfield')[0];
    const conStatusfiled = statusfield.getContext('2d')
    conStatusfiled.clearRect(0,0,600,100)
    conStatusfiled.fillText('ミュウツーは地平線のかなたに吹き飛んだ！', 20, 45);
}

function PigeotWinText(){
    const statusfield = document.getElementsByClassName('textfield')[0];
    const conStatusfiled = statusfield.getContext('2d')
    conStatusfiled.clearRect(0,0,600,100)
    conStatusfiled.fillText('ピジョットの完全勝利だ！', 20, 45);
}

function Ending(){
let EndrollpositionY = 300;
const con = document.querySelector('canvas').getContext('2d')
const statusfield = document.getElementsByClassName('textfield')[0];
const conStatusfiled = statusfield.getContext('2d')
conStatusfiled.clearRect(0,0,600,100)
con.clearRect(0,0,600,340)
let EndingInterval = setInterval(function(){
    if(EndrollpositionY > 0){
        con.clearRect(0,0,600,340)
        EndrollpositionY --;
        console.log('Move Y', EndrollpositionY);
        console.log(EndrollImage.width)
        console.log(EndrollImage.height)
        con.drawImage(EndrollImage, 0, EndrollpositionY);
        console.log('Draw!')
    }else if(EndrollpositionY === 0){
        clearInterval(EndingInterval)
    }
},10) //interval 間隔
}

//関数の実行
canvas.addEventListener('click', clickcanvas)