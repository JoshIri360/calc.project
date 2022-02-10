let answr = "";

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
