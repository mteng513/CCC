$('document').ready(function(e){
	setupScrolling();
});

function setupScrolling() {
	$("nav a").click(function(e){
		//var btnName = $(this).attr("href");
		//console.log('Button Clicked ' + e.currentTarget.id);
		e.preventDefault();
		var sectionID = e.currentTarget.id + "Sect"; 

		$("html body").animate({
			scrollTop: $("#"+sectionID).offset().top}, 1000);

	});
}

function copyToClipboard(elementId) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(elementId).value);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  alert("Copied email to clipboard");
}