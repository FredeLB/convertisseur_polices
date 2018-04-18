						
$(document).ready(function(){
	
	
	//var globales
	var tableauApercu = [];
	var formConv = document.getElementById("convertisseur");
	var reference = {};
	var outputV2 = document.getElementById("valeur2");
	var inputDefaultPx = document.getElementById("defaultpx");
	var msgErreur = document.getElementById("msgerreur");
	var msgLimite = document.getElementById("limite");
	var longeurPxDefaut = true;
	var valeurConvertie = "";
	
	
	
	
	//Générer le tableau de valeurs
	function convertisseurApercu(){
		
		
		
		for( var i = 0; i <= 100000; i += 1 ){
			
			var px = 0;
			var ems = 0;
			var pourcent = 0;
			var pts = 0;
			var transvideur = {};
			
			//Conversion
			
			px = i;
			ems = px*0.0625;
			pourcent = px*6.25;
			pts = px*0.75;
			
			
			//Remplir l'objet
			
			transvideur.pixels = px;
			transvideur.ems = ems;
			transvideur.pourcentage = pourcent;
			transvideur.points = pts;
			
			
			//Création d'une nouvelle valeur dans mon tableau
			
			tableauApercu.push(transvideur);
			
		}
				
	}
	
	
	
	
	//Créer le tableau HTML et l'afficher
	function creerTableau(){
		
		//Variable
		var affichageTableauPxDefaut = document.getElementById("affichagePxDefaut");
		var produitEm = (reference.ems)/(reference.pixels);
		var produitPourcent = (reference.pourcentage)/(reference.pixels);
		var produitPoint = (reference.points)/(reference.pixels);
		var tableauPxDefaut = [];
		var depart = (reference.pixels)-7;
		var pxParDefaut = reference.pixels;
		
//		console.log("produitEm : "+ produitEm);
//		console.log("produitPourcent : "+ produitPourcent);
//		console.log("produitPoint : "+ produitPoint);
		
		//Éliminer les valeurs négatives
		if(depart<=0){
			
			depart = 1;
			
		}else{
			
			depart = depart;
		}
		
		//console.log("depart : "+ depart);
		
		
		for( i=depart; i<depart+15; i+=1){
			
			var px = 0;
			var ems = 0;
			var pourcent = 0;
			var pts = 0;
			var transvideur2 = {};
			
			//Conversion
			
			px = i;
			ems = px*produitEm;
			pourcent = px*produitPourcent;
			pts = px*produitPoint;
			
			
			
			
			//Remplir l'objet
			
			transvideur2.pixels = px;
			transvideur2.ems = ems.toFixed(3);
			transvideur2.pourcentage = pourcent.toFixed(1);
			transvideur2.points = pts.toFixed();
	
			
			//Création d'une nouvelle valeur dans mon tableau
			
			tableauPxDefaut.push(transvideur2);
			
			transvideur2 = {};
			
		}
		
	//console.log(tableauPxDefaut);
		
		//CRÉATION DU TABLEAU HTML DE A a Z
		
		
		//Initialisation
		if(affichageTableauPxDefaut.hasChildNodes()){
			
			affichageTableauPxDefaut.removeChild(affichageTableauPxDefaut.childNodes[0]);
			
		}
		
		//Créer mon tableau
		var tableauHTMLPxDefaut = document.createElement("TABLE");
		tableauHTMLPxDefaut.setAttribute("id", "tableauPxDefaut");
		tableauHTMLPxDefaut.setAttribute("class", "table table-sm");
		affichageTableauPxDefaut.appendChild(tableauHTMLPxDefaut);
		
		//Créer mon thead
		var tHead = document.createElement("THEAD");
		tHead.setAttribute("id", "theadtable");
		tHead.setAttribute("class", "thead thead-light");
		tableauHTMLPxDefaut.appendChild(tHead);
		
		
		//Créer mon tbody
		var tBody = document.createElement("TBODY");
		tBody.setAttribute("id", "tbodytable");
		tBody.setAttribute("class", "tbody");
		tableauHTMLPxDefaut.appendChild(tBody);
		
		
		//Créer ma première rangée
		var trHead = document.createElement("TR");
		trHead.setAttribute("id", "rangeeprincipale");
		tHead.appendChild(trHead);
		
		//Créer mes titres de colonnes
		var th01 = document.createElement("TH");
		var textTH01 = document.createTextNode("Pixels");
		th01.appendChild(textTH01);
		trHead.appendChild(th01);
		
		var th02 = document.createElement("TH");
		var textTH02 = document.createTextNode("EMs");
		th02.appendChild(textTH02);
		trHead.appendChild(th02);
		
		var th03 = document.createElement("TH");
		var textTH03 = document.createTextNode("Pourcentage");
		th03.appendChild(textTH03);
		trHead.appendChild(th03);
		
		var th04 = document.createElement("TH");
		var textTH04 = document.createTextNode("Points");
		th04.appendChild(textTH04);
		trHead.appendChild(th04);
		
			
		for(var i=0; i<15; i+=1){
			
			
			//Créer la rangée
			var trHTML = document.createElement("TR");
			var idRangee = "rangee"+ (i+1);
			trHTML.setAttribute("id", idRangee);
			tBody.appendChild(trHTML);
			
			
			//Créer la colonne des pixels
			var tdHTML = document.createElement("TD");
			var texteTd = document.createTextNode(tableauPxDefaut[i].pixels);
			tdHTML.appendChild(texteTd);
			document.getElementById(idRangee).appendChild(tdHTML);
			
			
			
			//Créer la colonne des ems
			tdHTML = document.createElement("TD");
			texteTd = document.createTextNode(tableauPxDefaut[i].ems);
			tdHTML.appendChild(texteTd);
			document.getElementById(idRangee).appendChild(tdHTML);		
			
			
			//Créer la colonne des pourcent
			tdHTML = document.createElement("TD");
			texteTd = document.createTextNode(tableauPxDefaut[i].pourcentage);
			tdHTML.appendChild(texteTd);
			document.getElementById(idRangee).appendChild(tdHTML);		
			
			
			
			//Créer la colonne des points
			tdHTML = document.createElement("TD");
			texteTd = document.createTextNode(tableauPxDefaut[i].points);
			tdHTML.appendChild(texteTd);
			document.getElementById(idRangee).appendChild(tdHTML);	
			
			if(tableauPxDefaut[i].pixels == reference.pixels){
				
				trHTML.setAttribute("class", "table-dark");
				
			}
			
		}
		
	}
	

	
	
	//CONVERTISSEUR!!
	
	function convertisseur(){
		
		//TROUVER TOUTES MES VALEURS
		
		reference = tableauApercu[16];
		var valeur1 = 0;
		var unite1 = "";
		var valeur2 = 0;
		var unite2 = "";
		var refU1 = 0;
		var refU2 = 0;
		var defaultPx = document.getElementById("defaultpx").value;
		
		if(defaultPx<1){
			
			defaultPx = 1;
		}
		
		
		valeur1 = document.getElementById("valeur1").value;
		var optionSelectU1 = document.getElementById("unite1");
		var optionSelectU2 = document.getElementById("unite2");
		
		unite1 = optionSelectU1.options[optionSelectU1.selectedIndex].text;
		unite2 = optionSelectU2.options[optionSelectU2.selectedIndex].text;
		
//		console.log("valeur1: " + valeur1);
//		console.log("unite1: " + unite1);
//		console.log("unite2: " + unite2);
//		console.log("Px par défaut: " + defaultPx);
		
		//Appliquer la police par défaut
		
		reference.pixels = defaultPx;
		reference.points = tableauApercu[defaultPx].points;
		
	//	console.log(reference);
		
		
		//Trouver la référence pour la première unité
		
		if(unite1=="px"){
			
			refU1 = reference.pixels;
			
		}else if(unite1=="em"){
			
			refU1 = reference.ems;
			
		}else if(unite1=="%"){
			
			refU1 = reference.pourcentage;
			
		}else{
			
			refU1 = reference.points;
			
		}
		
		
		//Trouver la référence pour la deuxième unité
		
		if(unite2=="px"){
			
			refU2 = reference.pixels;
			
		}else if(unite2=="em"){
			
			refU2 = reference.ems;
			
		}else if(unite2=="%"){
			
			refU2 = reference.pourcentage;

		}else{
			
			refU2 = reference.points;
		}
		
		
//		console.log("refU1 : " + refU1);
//		console.log("refU2 : " + refU2);
		
		
		//CONVERTISSEUR BABY
		
		valeur2 = valeur1*refU2/refU1;
		//console.log("valeur2 : " + valeur2);
		
		
		//Arrondir mes valeurs
		if(unite2=="px"){
		   
			valeur2 = valeur2.toFixed();
		   
		}else if(unite2=="em"){
			
			valeur2 = valeur2.toFixed(3);
			
		}else if(unite2=="%"){
			
			valeur2 = valeur2.toFixed(1);
				 
		}else{
			
			valeur2 = valeur2.toFixed();
			
		}
		
		
		//Afficher le résultat
		

		return valeur2;
		
		
	}
	
	
	
	//Affichage
	function afficherConv(){
		
		var asterix = document.getElementById("asterixValeur");
		valeurConvertie = convertisseur();
		
		var longueur = valeurConvertie.length; 
		
		//console.log("La longueur de ma valeur convertie est " + longueur);
		
		if(longueur>12){
			
			outputV2.className = "msgErreur";
			asterix.className = "msgErreur";
			outputV2.innerHTML = " --- ";
			
		}else{
			
			outputV2.className = "regulier";
			asterix.className = "regulier";
			outputV2.innerHTML = valeurConvertie;
			
		}
		
		
		
	}

	
	
	//NOMBRE ENTIERS SEULEMENT DANS La VALEUR PAR DÉFAUT
	
	//Source: https://www.qodo.co.uk/blog/javascript-restrict-keyboard-character-input/

	function restrictCharacters(e) {
		
		var code = e.which;
		var touche = String.fromCharCode(code);
		var integerOnly = /[0-9]/g;
		

		console.log("Mon charCode est = " + code);
		// ignore if they are press other keys
		// strange because code: 39 is the down key AND ' key...
		// and DEL also equals .
		
			if(touche.match(integerOnly)){
				
				msgErreur.className = "regulier";
				
				if(longeurPxDefaut===true){
					
					return true;
					
				}else if(longeurPxDefaut===false){
					
					return false;
					
				}
				
								
			} else {
				
				msgErreur.className = "msgErreur";
				
				return false;
				
			}

	}
	
	
	
	//LIMITE PX PAR DÉFAUT
	
	function limitePxDefaut(){
				
		if (inputDefaultPx.value.length>=4){
			
			msgLimite.className= "msgErreur";
			//console.log("le nombre est trop grand");
			longeurPxDefaut = false;
			
		}else{
			msgLimite.className= "regulier";
			//console.log("C'Est chiiiill");
			longeurPxDefaut = true;
		}
			
	}
	
	

	
	//Appels
	
	window.addEventListener("load", function(){
		
		convertisseurApercu();
		afficherConv();
		creerTableau();
		
	});
	
	formConv.addEventListener("input", function(){
		
		msgErreur.className = "regulier";
		limitePxDefaut();
		afficherConv();
		creerTableau();
		
	});
	
	inputDefaultPx.addEventListener("keypress", function(event){
		
		console.log("keypress");
		
		console.log(longeurPxDefaut);
		
		if(longeurPxDefaut===false){
			
			event.preventDefault();
			
		}
		
		
	});
	
	
	
	//TESTS
	//console.log(tableauApercu);
	//console.log(reference);
});
