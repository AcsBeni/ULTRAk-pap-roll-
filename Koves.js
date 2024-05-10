let Koember = false;
let Papirember = false;
let Olloember = false;

let kobot = false;
let papirbot = false;
let ollobot = false;

let kokepe = document.getElementById("kokep") 
let papirkepe = document.getElementById("papirkep") 
let ollokepe = document.getElementById("ollokep") 

let botkepe = document.getElementById("robotkep")

let botpontja = document.getElementById("geppont")
let emberpontja = document.getElementById("tepont")

let nyertes = document.getElementById("szoveg")

let emberpont = 0
let botpont = 0

function ko(){
    
    kokepe.style.border = "thick solid #ff2137"
    papirkepe.style.border = ""
    ollokepe.style.border = ""

    Koember = true
    Papirember = false;
    Olloember = false;
    robotvalasztas();
    harc();
}
function papir(){
    
    papirkepe.style.border = "thick solid #ff2137"
    kokepe.style.border = ""
    ollokepe.style.border = ""

    Koember = false
    Papirember = true;
    Olloember = false;
    robotvalasztas();
    harc();
}
function ollo(){
    
    ollokepe.style.border = "thick solid #ff2137"
    papirkepe.style.border = ""
    kokepe.style.border = ""

    Koember = false
    Papirember = false;
    Olloember = true;
    robotvalasztas();
    harc();
}

function robotvalasztas(){
    let valasztasbot =Math.floor(Math.random() * 3);

    if(valasztasbot == 0){
        kobot = true;
        papirbot = false;
        ollobot = false;
        botkepe.style.backgroundImage = "url(Kő.png)"
    }
    else if(valasztasbot == 1){
        kobot = false;
        papirbot = true;
        ollobot = false;
        
        botkepe.style.backgroundImage = "url(Papír.png)"
    }
    else{
        kobot = false;
        papirbot = false;
        ollobot = true;
        
        botkepe.style.backgroundImage = "url(Olló.png)"
    }
}
function harc(){
    if(Koember == true && ollobot ==true){
        emberpont++;
        emberpontja.innerHTML = emberpont
        nyertes.innerHTML = "Nyertél"
        
    }
    else if(Koember == true && papirbot ==true){
        botpont++;
        botpontja.innerHTML = botpont
        nyertes.innerHTML = "Vesztítettél"
    }

    else if(Olloember == true && papirbot ==true){
        emberpont++;
        emberpontja.innerHTML = emberpont
        nyertes.innerHTML = "Nyertél"
    }
    else if(ollobot == true && Papirember ==true){
        botpont++;
        botpontja.innerHTML = botpont
        nyertes.innerHTML = "Vesztítettél"
    }

    else if(kobot == true && Olloember ==true){
        botpont++;
        botpontja.innerHTML = botpont
        nyertes.innerHTML = "Vesztítettél"
    }
    else if(kobot == true && Papirember ==true){
        emberpont++;
        emberpontja.innerHTML = emberpont
        nyertes.innerHTML = "Nyertél"
        
    }
       
    

    
    

    else if(Koember == true && kobot ==true){
        nyertes.innerHTML = "Döntetlen"
        
    }
    else if(Papirember == true && papirbot ==true){
        nyertes.innerHTML = "Döntetlen"
        
    }
    else if(Olloember == true && ollobot ==true){
        nyertes.innerHTML = "Döntetlen"
        
    }
}