
$('#app').html(`
		
		<div class="loader"></div>

`);

setTimeout(function(){
	x();
},1000);

function x(){
$.ajax({

	url: "http://www.omdbapi.com/?t=Resident+evil"

}).done(function(res){
console.log(res);
	let html = `
	<h1>${res.Title}(2002)</h1>
	<img src ="${res.Poster}" width = 400, height = 500 style = "float: left; margin-right: 10px; margin bottom: 5px;bo" />
	<h3>Plot:<br>${res.Plot}</h3>
	<h3>Genre:<br>${res.Genre}</h3>
	<h3>Directed By: ${res.Director}</h3>
	<h3>Actors: ${res.Actors}</h3>
	<h3>Awards:<br>${res.Awards}</h3>
	
`;
$('#app').html(html);
});
}
http://www.omdbapi.com/?t=resident+evil+extinction

$.ajax({

	url: "http://www.omdbapi.com/?t=resident+evil+extinction"

}).done(function(res){
console.log(res);
	let html = `
	<h1>${res.Title}(2002)</h1>
	<img src ="${res.Poster}" width = 400, height = 500 style = "float: left; margin-right: 10px; margin bottom: 5px;bo" />
	<h3>Plot:<br>${res.Plot}</h3>
	<h3>Genre:<br>${res.Genre}</h3>
	<h3>Directed By: ${res.Director}</h3>
	<h3>Actors: ${res.Actors}</h3>
	<h3>Awards:<br>${res.Awards}</h3>
	
`;
$('#app2').html(html);
});
}






