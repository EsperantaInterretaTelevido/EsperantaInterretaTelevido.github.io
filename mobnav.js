function showmobnav() {
	mobnavbutt.style.backgroundColor = "#0C7726";
	mobnavbutt.onclick = function() { hidemobnav(); };
	mobnav.style.display = "block";

}

function hidemobnav() {
	mobnavbutt.style.backgroundColor = "#666666";
	mobnavbutt.onclick = function() { showmobnav(); };
	mobnav.style.display = "none";
}