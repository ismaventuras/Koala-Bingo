//Joker position in array = 12 (starting counting from 0)

function randomArray(){
    arr = [];
    while(arr.length < 25){
        var r = Math.floor(Math.random() * 75) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    arr[12] = '';
    return arr
}
function printCard(){
    html2canvas(document.querySelector("#container")).then(canvas => {
        saveAs(canvas.toDataURL(),'KoalaBingoCard.png');
    });
}

function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }

/* Coordinates

1st = 230px,150px
    next X = 60px , next Y = 55px
*/

const img = document.getElementById('koala_bingo_img');
const body = document.getElementsByTagName('body')[0];
const container = document.getElementById('container');
const print_button = document.getElementById('print-button');

var xAxis = 230;
var yAxis = 150;
var bingo_index = 0;

var bingo_numbers = randomArray();

for(i=0;i<5;i++){
    xAxis = 230;
    for(j=0;j<5;j++){
        let p = document.createElement('p');
        
        p.innerText = bingo_numbers[bingo_index];
        p.style.position = 'absolute'
        p.style.left = xAxis + 'px';
        p.style.top = yAxis + 'px';
        container.appendChild(p);
        xAxis +=60;
        bingo_index++;
    }
    yAxis += 55;
}



print_button.addEventListener('click', printCard);
