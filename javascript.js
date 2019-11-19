window.onload = function() {
	$("#test").onclick = () => {
			myFunction()
		};

		console.log("dasdsad", $("#test"));
	
}

function myFunction() {
	document.getElementById("test").style.border = "1px solid black";
}