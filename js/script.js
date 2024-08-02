const table = document.querySelector(".table")
const rounds = table.querySelectorAll(".round")

let idx = 0

let diferenca = new Date().getTime() - new Date(2024, 7, 3).getTime();
let dias = Math.floor(diferenca / (1000 * 3600 * 24));

if(dias % 7 == 0) table.style.transform = `translateX(${(dias / 7) * -250}px)`


function carousel(sense){
	idx += Math.sign(sense)
	
	if(-idx > rounds.length - 1) {idx = 0}else if(idx > 0){idx = -(rounds.length - 1)}
	
	table.style.transform = `translateX(${idx * Math.abs(sense)}px)`
}

document.querySelector("#rounds").addEventListener("click", (e)=>{
	var cls = e.target.classList;

	switch( true ){
	case cls.contains('backWard'):
		console.log(idx)
		carousel(250)

		
	break;

	case cls.contains('forWard'):
		console.log(idx)
		carousel(-250)
	break;
	}
})

