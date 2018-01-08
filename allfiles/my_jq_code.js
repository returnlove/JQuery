$("#wrapper").click(function(){

console.log("clicked on the wrapper")

})


$(document).ready(function(){
console.log("document is loaded");
});


$("#SubmitBtn").click(function(){alert('submit button clicked');})


$(".error").click(function(){alert('submit button clicked');})


$('.md-link')[0].click(function(){alert("clicked")})

$('.md-link')[0].text.trim()