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
