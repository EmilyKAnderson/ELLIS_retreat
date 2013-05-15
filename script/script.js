/**
* @author Emily Anderson
*/
$(document).ready(function(){

		$.get("content/home.txt", function(data){
		 	$('#pageContent').html(data);

			 });


	/*$('header h1').css("background-color")
	var headerTag = $('header h1').get();
	TweenLite.to(headerTag, 5, { left: 600});
	TweenLite.to(headerTag, 5, { left: 30,  delay: 6, onComplete: addText});*/


	function addText() {
		$('header h1').append(" made it");
	}

	$("#three h1").click(function(e) {
		//alert$(this).html()toLowerCase();

		 var txtName = $(this).html().toLowerCase();


		 $.get("content/" + txtName + function(data){
		 	$('#pageContent').html(data);

			 });
		});

});

