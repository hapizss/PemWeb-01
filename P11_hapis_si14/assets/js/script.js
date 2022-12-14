//menangkap semua elemen a 
document.querySelectorAll("#opts a").forEach((a) =>
    //jika di clik akan menjalankan funsi computerchoice
    a.addEventListener("click", (Element) => {
        computerChoice(Element);
    })
);
function computerChoice(element){
    // tangkap pilihan user 
    let pilihanuser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung
    // nilai  hasil  dari game 
    let pilihancomputer = document.querySelector('#result');

    // melihat array pilihan untuk komputer
    let choice = ["Rock", "Paper", "Scissors"];

    //pilihan random untuk komputer
    pilihancomputer.innerHTML = 
    choice[Math.round(Math.random() * choice.length)];
    pilihancomputer = pilihancomputer.innerHTML;

    //jika pilihannya sama antara komputer dan user maka (draw)
    if(pilihanuser == pilihancomputer){
        alert("draw")
    }

    // jika pilihan user yang menang 
    if(pilihanuser == "Rock" && pilihancomputer == "Scissors"){
        alert("you win");
    }else if(pilihanuser == "Paper" && pilihancomputer == "Rock"){
        alert("you win");
    }else if(pilihanuser == "Scissors" && pilihancomputer == "Paper"){
        alert("you win");
    }

      // jika pilihan komputer yang menang 
      if(pilihanuser == "Rock" && pilihancomputer == "Paper"){
        alert("computer win");
    }else if(pilihanuser == "Paper" && pilihancomputer == "Scissors"){
        alert("computer win");
    }else if(pilihanuser == "Scissors" && pilihancomputer == "Rock"){
        alert("computer win");
    }
}