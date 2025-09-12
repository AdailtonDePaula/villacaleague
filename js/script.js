const table = document.querySelector(".table")
const rounds = table.querySelectorAll(".round")

let idx = -(rounds.length - 1)
let eleWidth = getComputedStyle(table).getPropertyValue("width")


let diferenca = new Date().getTime() - new Date(2024, 7, 3).getTime();
let dias = Math.floor(diferenca / (1000 * 3600 * 24));

table.style.transform = `translateX(${idx * eleWidth.substring(0, eleWidth.length - 2)}px)`


function carousel(sense, eTarget){
	const eleContainer = document.querySelector(eTarget)
	eleWidth = getComputedStyle(eleContainer).getPropertyValue("width")
	idx += sense
	
	if(-idx > rounds.length - 1) {idx = 0}else if(idx > 0){idx = -(rounds.length - 1)}
	
	eleContainer.style.transform = `translateX(${idx * eleWidth.substring(0, eleWidth.length - 2)}px)`
}

document.querySelector("#rounds").addEventListener("click", (e)=>{
	var cls = e.target.classList;

	switch( true ){
		case cls.contains('backWard'):
			carousel(+1, ".table")
		break;

		case cls.contains('forWard'):
			carousel(-1, ".table")
		break;
	
	}
})

window.onresize = ()=>{
	carousel(0, ".table")
}




