// --------------------counter section ------------------
$(document).ready(function(){
	$('.counter').counterUp({
		delay: 10,
		time: 1000,
	});
});
// ---------------------- counter sectionEnd ----------------------


button = document.getElementById("myBtn");
// when user scroll up

window.onscroll = function(){
	scrollFunction();
}
function scrollFunction()
{
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop>20)
	{
		button.style.display = "block";
	}else
	{
		button.style.display = "none";
	}
};

// when user click on button

function topFunction(){
	document.body.scrollTop = 0; //for safari
	document.documentElement.scrollTop = 0; //for firefox,chrome,IE and opera
}