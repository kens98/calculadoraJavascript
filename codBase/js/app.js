let tecla;
let evento;
let n1,n2,resultado=0;
let operador;
let display=document.getElementById("display");
var Calculadora={

	init:function(){
		let self=this;
		self.Eventos();
	},
	Eventos:function(){
		let self=this;
		tecla=document.getElementsByClassName("tecla");

		for (var i = tecla.length - 1; i >= 0; i--) {
			tecla[i].addEventListener("mousedown",function(event){
				self.reducir(event);
			},true);
			tecla[i].addEventListener("mouseup",function(event){
				self.normal(event);
			},true);
		}
	},
	reducir:function(event){
		let img=document.getElementById(event.target.id);
		//img.style.width="20%";
		img.style.height="55px";
		this.acumulador(event.target.id);
		
		
	},
	normal:function(event){
		let img=document.getElementById(event.target.id);
		img.style.removeProperty("width");
		img.style.removeProperty("height");
	},
	acumulador:function(valor){
		try{

			if(isNaN(valor) && (valor=="por" || valor=="dividido" || valor=="menos" || valor=="mas")){
				operador=valor;
				n1=display.innerHTML;
				display.innerHTML="0";
			}
			else if(isNaN(valor) && (valor=="punto")) {
				if(display.innerHTML.indexOf(".")==-1)
					display.innerHTML+=".";
			}
			else if(isNaN(valor) && valor=="on"){
				display.innerHTML="0";
				n1=undefined;
				n2=undefined;
				n1=undefined;
				resultado=undefined;
			}
			else if(isNaN(valor) && valor=="sign"){
				if(display.innerHTML.indexOf("-")==-1 && display.innerHTML!="0")
					display.innerHTML="-"+display.innerHTML;
				else
					display.innerHTML=display.innerHTML.replace("-","");
			}

			else if(isNaN(valor) && valor=="igual"){
				n2=display.innerHTML;
				switch(operador){
					case "mas":
						resultado=n1+n2;
						break;
					case "menos":
						resultado=n1-n2;
						break;
					case "por":
						resultado=n1*n2;
						break;
					case "dividido":
						if(n2=="0")
							throw "Error /0";
						resultado=n1/n2;
						break;
				}
				display.innerHTML=resultado;
				n1=resultado;
			}else {
				if(display.innerHTML=="0")
					display.innerHTML="";
				display.innerHTML +=valor;
			}
			display.innerHTML=display.innerHTML.slice(0,8);
			
		}
		catch(error){
			display.innerHTML=error;
		}

	}
	
}
Calculadora.init();





