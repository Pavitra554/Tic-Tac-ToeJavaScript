let btn = document.getElementsByTagName('input');
let x = 0;
for (let index = 0; index < btn.length; index++) {
    const element = btn[index];
   element.addEventListener('click',function run(){
    if(x == 0){
        element.value = 'X';
        x = 1;
        if(btn[0].value == 'X' && btn[1].value == 'X' && btn[2].value == 'X' ){
            btn[0].style.color = 'red';
            btn[1].style.color = 'red';
            btn[2].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
            
        }
        else if(btn[3].value == 'X' && btn[4].value == 'X' && btn[5].value == 'X' ){
            btn[3].style.color = 'red';
            btn[4].style.color = 'red';
            btn[5].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
        }
        else if(btn[6].value == 'X' && btn[7].value == 'X' && btn[8].value == 'X' ){
            btn[6].style.color = 'red';
            btn[7].style.color = 'red';
            btn[8].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
        }
        else if(btn[0].value == 'X' && btn[4].value == 'X' && btn[8].value == 'X' ){
            btn[0].style.color = 'red';
            btn[4].style.color = 'red';
            btn[8].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
        }
        else if(btn[2].value == 'X' && btn[4].value == 'X' && btn[6].value == 'X' ){
            btn[2].style.color = 'red';
            btn[4].style.color = 'red';
            btn[6].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
        }
        else if(btn[0].value == 'X' && btn[3].value == 'X' && btn[6].value == 'X' ){
            btn[0].style.color = 'red';
            btn[3].style.color = 'red';
            btn[6].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
        }
        else if(btn[1].value == 'X' && btn[4].value == 'X' && btn[7].value == 'X' ){
            btn[1].style.color = 'red';
            btn[4].style.color = 'red';
            btn[7].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
        }
        else if(btn[2].value == 'X' && btn[5].value == 'X' && btn[8].value == 'X' ){
            btn[2].style.color = 'red';
            btn[5].style.color = 'red';
            btn[8].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
        }
        else{
            if(btn[0].value == 'O' && btn[1].value == 'O' && btn[2].value == 'O' ){
                btn[0].style.color = 'red';
                btn[1].style.color = 'red';
                btn[2].style.color = 'red';
                setTimeout(() => {
                    winnerO()
                }, 1000);
            }
            else if(btn[3].value == 'O' && btn[4].value == 'O' && btn[5].value == 'O' ){
                btn[3].style.color = 'red';
                btn[4].style.color = 'red';
                btn[5].style.color = 'red';
                setTimeout(() => {
                    winnerO()
                }, 1000);
            }
            else if(btn[6].value == 'O' && btn[7].value == 'O' && btn[8].value == 'O' ){
                btn[6].style.color = 'red';
                btn[7].style.color = 'red';
                btn[8].style.color = 'red';
                setTimeout(() => {
                    winnerO()
                }, 1000);
            }
            else if(btn[0].value == 'O' && btn[4].value == 'O' && btn[8].value == 'O' ){
                btn[0].style.color = 'red';
                btn[4].style.color = 'red';
                btn[8].style.color = 'red';
                setTimeout(() => {
                    winnerO()
                }, 1000);
            }
            else if(btn[2].value == 'O' && btn[4].value == 'O' && btn[6].value == 'O' ){
                btn[2].style.color = 'red';
                btn[4].style.color = 'red';
                btn[6].style.color = 'red';
               setTimeout(() => {
                    winnerO()
                }, 1000);
            }
            else if(btn[0].value == 'O' && btn[3].value == 'O' && btn[6].value == 'O' ){
                btn[0].style.color = 'red';
                btn[3].style.color = 'red';
                btn[6].style.color = 'red';
                setTimeout(() => {
                    winnerO()
                }, 1000);
            }
            else if(btn[1].value == 'O' && btn[4].value == 'O' && btn[7].value == 'O' ){
                btn[1].style.color = 'red';
                btn[4].style.color = 'red';
                btn[7].style.color = 'red';
                setTimeout(() => {
                    winnerO()
                }, 1000);
            }
            else if(btn[2].value == 'O' && btn[5].value == 'O' && btn[8].value == 'O' ){
                btn[2].style.color = 'red';
                btn[5].style.color = 'red';
                btn[8].style.color = 'red';
               setTimeout(() => {
                    winnerO()
                }, 1000);
            }
          
        }
    }
    else{
        element.value = 'O';
        x = 0;
        if(btn[0].value == 'X' && btn[1].value == 'X' && btn[2].value == 'X' ){
            btn[0].style.color = 'red';
            btn[1].style.color = 'red';
            btn[2].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
        }
        else if(btn[3].value == 'X' && btn[4].value == 'X' && btn[5].value == 'X' ){
            btn[3].style.color = 'red';
            btn[4].style.color = 'red';
            btn[5].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
        }
        else if(btn[6].value == 'X' && btn[7].value == 'X' && btn[8].value == 'X' ){
            btn[6].style.color = 'red';
            btn[7].style.color = 'red';
            btn[8].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
        }
        else if(btn[0].value == 'X' && btn[4].value == 'X' && btn[8].value == 'X' ){
            btn[0].style.color = 'red';
            btn[4].style.color = 'red';
            btn[8].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
        }
        else if(btn[2].value == 'X' && btn[4].value == 'X' && btn[6].value == 'X' ){
            btn[2].style.color = 'red';
            btn[4].style.color = 'red';
            btn[6].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
           
        }
        else if(btn[0].value == 'X' && btn[3].value == 'X' && btn[6].value == 'X' ){
            btn[0].style.color = 'red';
            btn[3].style.color = 'red';
            btn[6].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
        }
        else if(btn[1].value == 'X' && btn[4].value == 'X' && btn[7].value == 'X' ){
            btn[1].style.color = 'red';
            btn[4].style.color = 'red';
            btn[7].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
        }
        else if(btn[2].value == 'X' && btn[5].value == 'X' && btn[8].value == 'X' ){
            btn[2].style.color = 'red';
            btn[5].style.color = 'red';
            btn[8].style.color = 'red';
            setTimeout(() => {
                winnerX()
            }, 1000);
        }
        else{
            if(btn[0].value == 'O' && btn[1].value == 'O' && btn[2].value == 'O' ){
                btn[0].style.color = 'red';
                btn[1].style.color = 'red';
                btn[2].style.color = 'red';
                setTimeout(() => {
                    winnerO()
                }, 1000);
            }
            else if(btn[3].value == 'O' && btn[4].value == 'O' && btn[5].value == 'O' ){
                btn[3].style.color = 'red';
                btn[4].style.color = 'red';
                btn[5].style.color = 'red';
                setTimeout(() => {
                    winnerO()
                }, 1000);
                
            }
            else if(btn[6].value == 'O' && btn[7].value == 'O' && btn[8].value == 'O' ){
                btn[6].style.color = 'red';
                btn[7].style.color = 'red';
                btn[8].style.color = 'red';
                setTimeout(() => {
                    winnerO()
                }, 1000);
            
            }
            else if(btn[0].value == 'O' && btn[4].value == 'O' && btn[8].value == 'O' ){
                btn[0].style.color = 'red';
                btn[4].style.color = 'red';
                btn[8].style.color = 'red';
                setTimeout(() => {
                    winnerO()
                }, 1000);
              
            }
            else if(btn[2].value == 'O' && btn[4].value == 'O' && btn[6].value == 'O' ){
                btn[2].style.color = 'red';
                btn[4].style.color = 'red';
                btn[6].style.color = 'red';
                setTimeout(() => {
                    winnerO()
                }, 1000);
            }
            else if(btn[0].value == 'O' && btn[3].value == 'O' && btn[6].value == 'O' ){
                btn[0].style.color = 'red';
                btn[3].style.color = 'red';
                btn[6].style.color = 'red';
                setTimeout(() => {
                    winnerO()
                }, 1000);
            }
            else if(btn[1].value == 'O' && btn[4].value == 'O' && btn[7].value == 'O' ){
                btn[1].style.color = 'red';
                btn[4].style.color = 'red';
                btn[7].style.color = 'red';
                setTimeout(() => {
                    winnerO()
                }, 1000);
            }
            else if(btn[2].value == 'O' && btn[5].value == 'O' && btn[8].value == 'O' ){
                btn[2].style.color = 'red';
                btn[5].style.color = 'red';
                btn[8].style.color = 'red';
                setTimeout(() => {
                    winnerO()
                }, 1000);
            }
         
        }
    }
   })
}

function reset(){
    let win = document.getElementById('massage');
        for (let index = 0; index < btn.length; index++) {
            const element = btn[index];
            element.value = '';
            element.style.color = 'black';
        }
        win.style.display = 'none';
}
function winnerX(){
    let win = document.getElementById('massage');
    let win_name = document.getElementById('player');
    win_name.innerHTML = 'Player-1'
    win.style.display = 'grid';
    win.style.background = '#0000009e';

}

function winnerO(){
    fun_check = 10;
    let win = document.getElementById('massage');
    let win_name = document.getElementById('player');
    win_name.innerHTML = 'Player-2'
    win.style.display = 'grid';
    win.style.background = '#0000009e';
}


