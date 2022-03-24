let answr = "";
var z = document.getElementById("inpt");

function addEl(Element) {
  document.getElementById("inpt").value+=Element;
}

function clr() {
  document.getElementById("inpt").value="";
}

function eq()
{
  let x = document.getElementById("inpt").value;
  answr = eval(x);
  document.getElementById("inpt").value = answr;
}

let ans1 = () => {document.getElementById("inpt").value = answr}

const allClear = () => {
  clr();
  answr = "";
}

input.addEventListener("keypress", function(e) {
    if(e.keyCode === 13){
        eq();
    }
})
