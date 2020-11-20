console.log ('test');

// Traiter les citations randonms

var citation = document.getElementById ('citation'); 

var quotes = [
    "La pâtisserie et l'amour, c'est pareil-une question de fraîcheur et que tous les ingrédients, même les plus amers, tournent au délice - CHRISTIAN BOBIN", 
    "La gastronomie est l'art d'utiliser la nourriture pour créer le bonheur - THEODORE ZELDIN",
    "Le bonheur est toujours à la portée de celui qui sait le goûter - FRANÇOIS DE LA ROCHEFOUCAULD", 
    "La vie de l'homme est une chasse au bonheur. Parmi ces bonheurs, l'excercice de la gourmandise est un des plus importants - JEAN GIONO", 
    "Manger un macaron. C'est faire un tout petit excès sans avoir le sentiment de commettre un pêché de gourmandise - CHANTAL THOMASS", 
    "Nul n'est heureux que le gourmand - JEAN-JACQUES-ROUSSEAU"
]; 

console.log(quotes);
function randomquotes(){
    random=quotes[ Math.floor( Math.random() * quotes.length )];
    citation.innerHTML='" '+random +' "';
};

setInterval(randomquotes, 10000); 

//--------------------------------------------------------------------

var img_switch = document.getElementById ('img_switch'); 

var images = [
                "img/macaron.jpg",
                "img/gateaux_cerise.jpg",
                "img/yaourt_framboise.jpg"
            ]; 

    console.log(images); 

    var index = 0; 
    function img_change(){
        img_switch.src = images[index];
        index++; 
        if(index >= images.length) {
            index = 0; 
        }
    }
    
setInterval(img_change, 7000); 

//--------------------------------------------------------------------------
//Menu burger
var burger=document.getElementById('icon_burger');
var navi = document.getElementById('menu')

burger.addEventListener('click',function(){

    
    console.log(navi);

    if(navi.style.display=='none'){

        navi.style.display='block';
    }else{
        navi.style.display='none';
    }
})
