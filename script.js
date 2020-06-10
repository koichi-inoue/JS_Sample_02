function MyFunction(){
  var obj = document.body;
  obj.style.backgroundColor = 'red';
}

function MyFunction2(){
  var obj = document.getElementById('ABC');
  obj.style.backgroundColor = 'yellow';
}

function MyFunction3(){
  // lineクラスの把握（情報が line[0], line[1] ,line[2]・・に一括で入る）
  var lines = document.getElementsByClassName('line');
  //  i 番目の pタグ部分の背景を赤に
  for( var i=0; i<lines.length; i++ ){
    lines[i].style.backgroundColor = 'red';
  }
}

function ChangeBGColor( col ){
  var obj = document.body;
  obj.style.backgroundColor = col;
}


// 背景色の変更（汎用性が低い）
function ChangeBGRandomColor( ){
  var obj = document.body;
  obj.style.backgroundColor =RandomColor();
}

//ランダムな16進6桁のカラーコードを生成（汎用性が高い）
function RandomColor(){
    var col = Math.floor( Math.random() * 0xFFFFFF ).toString(16);
    for( var i = col.length; i<6; i++ ) { col = '0' + col; }
    return '#' + col;
}
