function showHxContent(pNumber) {
    vDiv = document.getElementById("title" + pNumber);
    vDiv.style.display = "block";
}
function hideAllDivs () {
	vDivs = document.getElementsByTagName("div");
	for (var i=0; i<vDivs.lenght; i++) {
		vDivs.item(i).style.display= "none"
	}
}
function alertTitle() {
    vHx = document.getElementsByTagName("h1");
    vIndice = document.getElementById("title").value;
    vIndice = vIndice - 1;
    //alert ( "Partie " +document.getElementById("title").value );
    alert(vHx[vIndice].innerHTML);
}
function deleteTitle() {
    vHx = document.getElementsByTagName('h1');
    vIndice = document.getElementById('title').value;
    vIndice = vIndice - 1;
    vHx.item(vIndice).removeChild(vHx.item(vIndice).firstChild);
}
function defineTitle() {

    vHx = document.getElementsByTagName("h1");
    vIndice = document.getElementById("title").value;
    vText = document.createTextNode("Nouveau titre");
    vIndice = vIndice - 1;
    if (vHx.item(vIndice).firstChild !== null) {
        vHx.item(vIndice).removeChild(vHx.item(vIndice).firstChild);
    }
    vHx.item(vIndice).appendChild(vText);
}
