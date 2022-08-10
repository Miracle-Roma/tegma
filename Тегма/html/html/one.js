// function yoq(){
//     let gap = document.getElementById("one1");

//     if(gap.style.display == "none") {
//     gap.style.display = "flex";
//     } else {
//      gap.style.display = "none";
//     }
// }
function regist(){
    let user = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    if (user == "r@" && pass == "1"){
        document.getElementById("one").innerHTML = '<a href="./roma/index.html">Login in</a>'
    }
}