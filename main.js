

let n = 0;

setInterval(function(){
if(n<100) {
    n++;
    progress.innerText = n + '%';
    row_prog.style.width = n+'%';
    if(n===100) {
        button_start.style.opacity = 1;
    } else {
        button_start.style.opacity = 0;
    }
} else {

}
},50);

let choise = '';

button_start.onclick = function() {
wrap.style.display = 'none';
loader.style.display = 'none'
choose_mode.style.display = 'flex';
};

c1.onclick = function() {
c1.style.border = '10px solid red';
c1.style.boxShadow = '5px 5px 5px #333';
c1.style.marginBottom = '5px';
choise = 'target1';


c2.style.border = '4px solid red';
c2.style.boxShadow = '0';
c2.style.marginBottom = '0px';

c3.style.border = '4px solid red';
c3.style.boxShadow = '0';
c3.style.marginBottom = '0px';

button_apply.style.opacity = '1';
};
c2.onclick = function() {
    c2.style.border = '10px solid red';
    c2.style.boxShadow = '5px 5px 5px #333';
    c2.style.marginBottom = '5px';
    choise = 'target2';


    c1.style.border = '4px solid red';
c1.style.boxShadow = '0';
c1.style.marginBottom = '0px';

c3.style.border = '4px solid red';
c3.style.boxShadow = '0';
c3.style.marginBottom = '0px';

button_apply.style.opacity = '1';

    };
    c3.onclick = function() {
        c3.style.border = '10px solid red';
        c3.style.boxShadow = '5px 5px 5px #333';
        c3.style.marginBottom = '5px';
        choise = 'target3';


        c1.style.border = '4px solid red';
c1.style.boxShadow = '0';
c1.style.marginBottom = '0px';

c2.style.border = '4px solid red';
c2.style.boxShadow = '0';
c2.style.marginBottom = '0px';

button_apply.style.opacity = '1';

        };


        button_apply.onclick = function() {
            choose_mode.style.display = 'none';
            wrap.style.display = 'none';
            settings.style.display = 'flex';
            if(choise === 'target1') {
                target.style.backgroundImage = 'url(target1.png)';
            } else if(choise === 'target2') {
                target.style.backgroundImage = 'url(target2.png)';
            } else if(choise === 'target3') {
                target.style.backgroundImage = 'url(target3.png)';
            };

        };





let player1Y = 50;
let player1X = 50;

let player2Y = 50;
let player2X = 50;
btn_top1.onclick = () => {
    player1Y--;
    player1.style.top = player1Y + '%';
}

btn_bottom1.onclick = () => {
    player1Y++;
    player1.style.top = player1Y + '%';
}

btn_left1.onclick = () => {
    player1X--;
    player1.style.left = player1X + '%';
}
btn_right1.onclick = () => {
    player1X++;
    player1.style.left = player1X + '%';
}



btn_top2.onclick = () => {
    player2Y--;
    player2.style.top = player2Y + '%';
}

btn_bottom2.onclick = () => {
    player2Y++;
    player2.style.top = player2Y + '%';
}

btn_left2.onclick = () => {
    player2X--;
    player2.style.left = player2X + '%';
}
btn_right2.onclick = () => {
    player2X++;
    player2.style.left = player2X + '%';
}


document.body.onkeyup = function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 38) {
        player1Y--;
        player1.style.top = player1Y + '%';
        checkWinner();
    } else if (e.keyCode == 40) {
        player1Y++;
        player1.style.top = player1Y + '%';
        checkWinner();
    } else if (e.keyCode == 37) {
        player1X--;
        player1.style.left = player1X + '%';
        checkWinner();
    } else if (e.keyCode == 39) {
        player1X++;
        player1.style.left = player1X + '%';
        checkWinner();
    } else if (e.keyCode == 87) {
        player2Y--;
        player2.style.top = player2Y + '%';
        checkWinner();
    } else if (e.keyCode == 83) {
        player2Y++;
        player2.style.top = player2Y + '%';
        checkWinner();
    } else if (e.keyCode == 65) {
        player2X--;
        player2.style.left = player2X + '%';
        checkWinner();
    } else if (e.keyCode == 68) {
        player2X++;
        player2.style.left = player2X + '%';
        checkWinner();
    }
}


let targetY;
let targetX;

function setTarget() {
    targetY = Math.floor(Math.random() * 100);
    targetX = Math.floor(Math.random() * 100);
    target.style.top = targetY + '%';
    target.style.left = targetX + '%';
}
setTarget();


let player1Score = 0;
let player2Score = 0;




let gamepad_current = false;
gamepad_open.onclick = function() {
    if(gamepad_current === false) {
gamepad1.style.bottom = '-20%';
gamepad2.style.bottom = '-20%';
gamepad_current = true;
    } else {
        gamepad1.style.bottom = '20px';
        gamepad1.style.right = '20px';
        gamepad2.style.bottom = '20px';
        gamepad2.style.left = '20px';
        gamepad_current = false;
    }
};


// bottom: 20px;
//     right: 20px;

let player1_skin;
let player2_skin;
left_skin1.onclick = function() {
left_skin1.style.border = '4px solid red';
left_skin2.style.border = '0';
left_skin3.style.border = '0';
left_skin4.style.border = '0';
left_skin5.style.border = '0';
left_skin6.style.border = '0';
left_skin7.style.border = '0';
left_skin8.style.border = '0';
left_skin9.style.border = '0';
left_skin10.style.border = '0';
player1.style.backgroundImage = 'url(t6.png)';

};

left_skin2.onclick = function() {
    left_skin1.style.border = '0';
    left_skin2.style.border = '4px solid red';
    left_skin3.style.border = '0';
    left_skin4.style.border = '0';
    left_skin5.style.border = '0';
    left_skin6.style.border = '0';
    left_skin7.style.border = '0';
    left_skin8.style.border = '0';
    left_skin9.style.border = '0';
    left_skin10.style.border = '0';
    player1.style.backgroundImage = 'url(t7.png)';
};
    left_skin3.onclick = function() {
        left_skin1.style.border = '0';
        left_skin2.style.border = '0';
        left_skin3.style.border = '4px solid red';
        left_skin4.style.border = '0';
        left_skin5.style.border = '0';
        left_skin6.style.border = '0';
        left_skin7.style.border = '0';
        left_skin8.style.border = '0';
        left_skin9.style.border = '0';
        left_skin10.style.border = '0';
        player1.style.backgroundImage = 'url(t8.png)';
    };
        left_skin4.onclick = function() {
            left_skin1.style.border = '0';
            left_skin2.style.border = '0';
            left_skin3.style.border = '0';
            left_skin4.style.border = '4px solid red';
            left_skin5.style.border = '0';
            left_skin6.style.border = '0';
            left_skin7.style.border = '0';
            left_skin8.style.border = '0';
            left_skin9.style.border = '0';
            left_skin10.style.border = '0';
            player1.style.backgroundImage = 'url(t9.png)';
        };
            left_skin5.onclick = function() {
                left_skin1.style.border = '0';
                left_skin2.style.border = '0';
                left_skin3.style.border = '0';
                left_skin4.style.border = '0';
                left_skin5.style.border = '4px solid red';
                left_skin6.style.border = '0';
                left_skin7.style.border = '0';
                left_skin8.style.border = '0';
                left_skin9.style.border = '0';
                left_skin10.style.border = '0';
                player1.style.backgroundImage = 'url(t10.png)';
            };
                left_skin6.onclick = function() {
                    left_skin1.style.border = '0';
                    left_skin2.style.border = '0';
                    left_skin3.style.border = '0';
                    left_skin4.style.border = '0';
                    left_skin5.style.border = '0';
                    left_skin6.style.border = '4px solid red';
                    left_skin7.style.border = '0';
                    left_skin8.style.border = '0';
                    left_skin9.style.border = '0';
                    left_skin10.style.border = '0';
                    player1.style.backgroundImage = 'url(t1.png)';
                };
                    left_skin7.onclick = function() {
                        left_skin1.style.border = '0';
                        left_skin2.style.border = '0';
                        left_skin3.style.border = '0';
                        left_skin4.style.border = '0';
                        left_skin5.style.border = '0';
                        left_skin6.style.border = '0';
                        left_skin7.style.border = '4px solid red';
                        left_skin8.style.border = '0';
                        left_skin9.style.border = '0';
                        left_skin10.style.border = '0';
                        player1.style.backgroundImage = 'url(t2.png)';
                    };
                        left_skin8.onclick = function() {
                            left_skin1.style.border = '0';
                            left_skin2.style.border = '0';
                            left_skin3.style.border = '0';
                            left_skin4.style.border = '0';
                            left_skin5.style.border = '0';
                            left_skin6.style.border = '0';
                            left_skin7.style.border = '0';
                            left_skin8.style.border = '4px solid red';
                            left_skin9.style.border = '0';
                            left_skin10.style.border = '0';
                            player1.style.backgroundImage = 'url(t3.png)';
                        };
                            left_skin9.onclick = function() {
                                left_skin1.style.border = '0';
                                left_skin2.style.border = '0';
                                left_skin3.style.border = '0';
                                left_skin4.style.border = '0';
                                left_skin5.style.border = '0';
                                left_skin6.style.border = '0';
                                left_skin7.style.border = '0';
                                left_skin8.style.border = '0';
                                left_skin9.style.border = '4px solid red';
                                left_skin10.style.border = '0';
                                player1.style.backgroundImage = 'url(t4.png)';
                                };
                                left_skin10.onclick = function() {
                                left_skin1.style.border = '0';
                                left_skin2.style.border = '0';
                                left_skin3.style.border = '0';
                                left_skin4.style.border = '0';
                                left_skin5.style.border = '0';
                                left_skin6.style.border = '0';
                                left_skin7.style.border = '0';
                                left_skin8.style.border = '0';
                                left_skin9.style.border = '0';
                                left_skin10.style.border = '4px solid red';
                                player1.style.backgroundImage = 'url(t5.png)';
                            };





                                right_skin1.onclick = function() {
                                    right_skin1.style.border = '4px solid red';
                                    right_skin2.style.border = '0';
                                    right_skin3.style.border = '0';
                                    right_skin4.style.border = '0';
                                    right_skin5.style.border = '0';
                                    right_skin6.style.border = '0';
                                    right_skin7.style.border = '0';
                                    right_skin8.style.border = '0';
                                    right_skin9.style.border = '0';
                                    right_skin10.style.border = '0';
                                    player2.style.backgroundImage = 'url(t6.png)';

                                    };
                                    
                                    right_skin2.onclick = function() {
                                        right_skin1.style.border = '0';
                                        right_skin2.style.border = '4px solid red';
                                        right_skin3.style.border = '0';
                                        right_skin4.style.border = '0';
                                        right_skin5.style.border = '0';
                                        right_skin6.style.border = '0';
                                        right_skin7.style.border = '0';
                                        right_skin8.style.border = '0';
                                        right_skin9.style.border = '0';
                                        right_skin10.style.border = '0';
                                        player2.style.backgroundImage = 'url(t7.png)';

                                        };
                                        right_skin3.onclick = function() {
                                            right_skin1.style.border = '0';
                                            right_skin2.style.border = '0';
                                            right_skin3.style.border = '4px solid red';
                                            right_skin4.style.border = '0';
                                            right_skin5.style.border = '0';
                                            right_skin6.style.border = '0';
                                            right_skin7.style.border = '0';
                                            right_skin8.style.border = '0';
                                            right_skin9.style.border = '0';
                                            right_skin10.style.border = '0';
                                            player2.style.backgroundImage = 'url(t8.png)';

                                            };
                                            right_skin4.onclick = function() {
                                                right_skin1.style.border = '0';
                                                right_skin2.style.border = '0';
                                                right_skin3.style.border = '0';
                                                right_skin4.style.border = '4px solid red';
                                                right_skin5.style.border = '0';
                                                right_skin6.style.border = '0';
                                                right_skin7.style.border = '0';
                                                right_skin8.style.border = '0';
                                                right_skin9.style.border = '0';
                                                right_skin10.style.border = '0';
                                                player2.style.backgroundImage = 'url(t9.png)';

                                                };
                                                right_skin5.onclick = function() {
                                                    right_skin1.style.border = '0';
                                                    right_skin2.style.border = '0';
                                                    right_skin3.style.border = '0';
                                                    right_skin4.style.border = '0';
                                                    right_skin5.style.border = '4px solid red';
                                                    right_skin6.style.border = '0';
                                                    right_skin7.style.border = '0';
                                                    right_skin8.style.border = '0';
                                                    right_skin9.style.border = '0';
                                                    right_skin10.style.border = '0';
                                                    player2.style.backgroundImage = 'url(t10.png)';

                                                    };
                                                    right_skin6.onclick = function() {
                                                        right_skin1.style.border = '0';
                                                        right_skin2.style.border = '0';
                                                        right_skin3.style.border = '0';
                                                        right_skin4.style.border = '0';
                                                        right_skin5.style.border = '0';
                                                        right_skin6.style.border = '4px solid red';
                                                        right_skin7.style.border = '0';
                                                        right_skin8.style.border = '0';
                                                        right_skin9.style.border = '0';
                                                        right_skin10.style.border = '0';
                                                        player2.style.backgroundImage = 'url(t1.png)';

                                                        };
                                                        right_skin7.onclick = function() {
                                                            right_skin1.style.border = '0';
                                                            right_skin2.style.border = '0';
                                                            right_skin5.style.border = '0';
                                                            right_skin6.style.border = '0';
                                                            right_skin7.style.border = '4px solid red';
                                                            right_skin8.style.border = '0';
                                                            right_skin9.style.border = '0';
                                                            right_skin10.style.border = '0';
                                                            player2.style.backgroundImage = 'url(t2.png)';

                                                            };
                                                            right_skin8.onclick = function() {
                                                                right_skin1.style.border = '0';
                                                                right_skin2.style.border = '0';
                                                                right_skin3.style.border = '0';
                                                                right_skin4.style.border = '0';
                                                                right_skin5.style.border = '0';
                                                                right_skin6.style.border = '0';
                                                                right_skin7.style.border = '0';
                                                                right_skin8.style.border = '4px solid red';
                                                                right_skin9.style.border = '0';
                                                                right_skin10.style.border = '0';
                                                                player2.style.backgroundImage = 'url(t3.png)';

                                                                };
                                                                right_skin9.onclick = function() {
                                                                    right_skin1.style.border = '0';
                                                                    right_skin2.style.border = '0';
                                                                    right_skin3.style.border = '0';
                                                                    right_skin4.style.border = '0';
                                                                    right_skin5.style.border = '0';
                                                                    right_skin6.style.border = '0';
                                                                    right_skin7.style.border = '0';
                                                                    right_skin8.style.border = '0';
                                                                    right_skin9.style.border = '4px solid red';
                                                                    right_skin10.style.border = '0';
                                                                    player2.style.backgroundImage = 'url(t4.png)';

                                                                    };
                                                                    right_skin10.onclick = function() {
                                                                        right_skin1.style.border = '0';
                                                                        right_skin2.style.border = '0';
                                                                        right_skin3.style.border = '0';
                                                                        right_skin4.style.border = '0';
                                                                        right_skin5.style.border = '0';
                                                                        right_skin6.style.border = '0';
                                                                        right_skin7.style.border = '0';
                                                                        right_skin8.style.border = '0';
                                                                        right_skin9.style.border = '0';
                                                                        right_skin10.style.border = '4px solid red';
                                                                        player2.style.backgroundImage = 'url(t5.png)';

                                                                    };



button_ready1.onclick = function() {
ready1.style.display = 'flex';
left_settings.style.display = 'none';
name_ready1.innerText = inp1_settings.value;
};
button_ready2.onclick = function() {
    ready2.style.display = 'flex';
    right_settings.style.display = 'none';
    name_ready2.innerText = inp2_settings.value;
    };












    document.body.onkeydown = function(e) {
        console.log(e.keyCode);
        if(e.keyCode === 49) {
            settings.style.display = 'none';
            wrap.style.display = 'flex';
let name1 = inp1_settings.value;
let name2 = inp2_settings.value;

pl1_name.innerText = name1;
pl2_name.innerText = name2;
        } else if(e.keyCode === 32) {
            if (player1X == targetX && player1Y == targetY) {
                player1Score++;
                scoreContainerLeft.innerText = player1Score;
                setTarget();
            } else if (player2X == targetX && player2Y == targetY) {
                player2Score++;
                  scoreContainerRight.innerText = player2Score;
                setTarget();
            }
        } else if(e.keyCode === 16) {
            if (player1X == targetX && player1Y == targetY) {
                player1Score++;
                scoreContainerLeft.innerText = player1Score;
                setTarget();
            } else if (player2X == targetX && player2Y == targetY) {
                player2Score++;
                  scoreContainerRight.innerText = player2Score;
                setTarget();
            }
        }
    };


btn_sett.onclick = function() {
menu_wrap.style.display = 'flex';
};

btn_ok.onclick = function() {
    menu_wrap.style.display = 'none';
};

bcg1.onclick = function() {
wrap.style.backgroundImage = 'url(bcg1.jpeg)';
};
bcg2.onclick = function() {
    wrap.style.backgroundImage = 'url(bcg2.jpeg)';
    };
    bcg3.onclick = function() {
        wrap.style.backgroundImage = 'url(bcg3.jpeg)';
        };
        bcg4.onclick = function() {
            wrap.style.backgroundImage = 'url(bcg4.jpeg)';
            };


btn_how.onclick = function() {
    how_menu.style.display = 'flex';
};       
btn_ok2.onclick = function() {
    how_menu.style.display = 'none';
};







            