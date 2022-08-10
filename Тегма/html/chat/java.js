function bos() {
    let ong = document.getElementById('tomon').value;
    let xabar = document.getElementById('xabar').value;

    if (ong == 1) {
        document.getElementById('middle').innerHTML += '<div class="one" id="one"><p>' + xabar + '</p></div>';
    }else if (ong == 2) {
        document.getElementById('middle').innerHTML += '<div class="two" id="two"><p>' + xabar + '</p></div>';
    }

}
//echo "# tegma" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Miracle-Roma/tegma.git
// git push -u origin main

// git remote add origin https://github.com/Miracle-Roma/tegma.git
// git branch -M main
// git push -u origin main