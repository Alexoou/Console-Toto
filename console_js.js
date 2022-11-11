var question = document.getElementById("question"); 
var reponse = document.getElementById("reponse");
var boutonValider = document.getElementById("boutonValider");
var juste= document.getElementById("juste");//
var faux= document.getElementById("faux");//
var nbJuste=0;
var nbFaux=0; 
var n = 0 ;

var questRep =[
{
	quest:"Code démarrage console",
	rep:"scjpumobzpnf"
},
{
	quest:"K04",
	rep:"afat"
},
{
	quest:"R08",
	rep:"sexa"
},
{
	quest:"T09",
	rep:"saaj"
},
{
	quest:"https://bit.ly/calquecarte",
	rep:"giopssncdrty"
},
{
	quest:"https://bit.ly/derniermessagetoto",
	rep:"absggytopmqw"
}
]

function resetGame () {
	n = 0 ;
	nbFaux=0
	nbJuste=0
	question.textContent=questRep[n].quest;
	juste.textContent = nbJuste ;
	faux.textContent = nbFaux ;
	reponse.value = "";  
	resetReponse()
}
 resetGame();	

function resetReponse () {
		boutonValider.addEventListener('click',valider);
		reponse.addEventListener('keydown',validationEnter);
		reponse.removeAttribute('readonly');
		reponse.value="";
}

function questionSuivante () { 
	if (n < (questRep.length-1)) { 
		n+=1;
		question.textContent= questRep[n].quest;		

	} else {
		reponse.value="gagnééé !";	
		reponse.setAttribute('readonly',true);
		question.textContent="";
	}
}

function valider () {
	
	    if (reponse.value.toLowerCase() === questRep[n].rep){      		
 			reponse.value = "VALIDÉ"; 
	        setTimeout (questionSuivante,1000);
	        nbJuste += 1; 
	    	juste.textContent = nbJuste ;  	
	    } 
	    else if  (reponse.value.toLowerCase() === "gagnééé !"){
	    	 setTimeout(resetGame,1000);
		} 
		else {
	    	reponse.value = "ERROR";  
	    	nbFaux += 1 ; 
	    	faux.textContent = nbFaux ;
		}

	    boutonValider.removeEventListener('click',valider);
	 	reponse.removeEventListener('keydown',validationEnter);
	    reponse.setAttribute('readonly',true);
		setTimeout (resetReponse , 1000); 	
}

 

function validationEnter (e) {
		 if (e.key ==="Enter") {valider()}
};























