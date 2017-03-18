$('#app').html(`
	<div class="progress">
	<div class="indeterminate"></div>
	</div>
	`);

setTimeout(function(){
	x();
},2000);

function x(){
	$.ajax({
		url: "http://www.omdbapi.com/?t=Resident+evil"
	}).done(function(res){
		console.log(res);
		let html = `
		<h1>${res.Title} (2002)</h1>
		<img src="${res.Poster}" width = 400, height = 500, style = "float: left; margin-right: 50px; margin bottom: 5px;bo" />
		<h4>Plot: <br><br>${res.Plot}</h4><br>
		<h5>Genre: ${res.Genre}</h5>
		<h5>Director: ${res.Director}</h5>
		<h5>Writer: ${res.Writer}</h5>
		<h5>Actors: ${res.Actors}</h5>
		<h5>Released: ${res.Released}</h5>
		<h5>Awards: ${res.Awards}</h5>
		<br>
		<br>
		<br>
		<br>
		`;
		$('#app').html(html);
	});
http://www.omdbapi.com/?t=Resident+evil+apocalypse

$.ajax({
	url: "http://www.omdbapi.com/?t=Resident+evil+apocalypse"
}).done(function(res){
	console.log(res);
	let html = `
	<h1>${res.Title} (2004)</h1>
	<img src="${res.Poster}" width = 400, height = 500, style = "float: left; margin-right: 50px; margin bottom: 5px;bo" />
	<h4>Plot: <br><br>${res.Plot}</h4><br>
	<h5>Genre: ${res.Genre}</h5>
	<h5>Director: ${res.Director}</h5>
	<h5>Writer: ${res.Writer}</h5>
	<h5>Actors: ${res.Actors}</h5>
	<h5>Released: ${res.Released}</h5>
	<h5>Awards: ${res.Awards}</h5>
	<br>
	<br>
	<br>
	<br>
	`;
	$('#app2').html(html);
});
}
http://www.omdbapi.com/?t=Resident+evil+extinction

$.ajax({
	url: "http://www.omdbapi.com/?t=Resident+evil+extinction"
}).done(function(res){
	console.log(res);
	let html = `
	<h1>${res.Title} (2007)</h1>
	<img src="${res.Poster}" width = 400, height = 500, style = "float: left; margin-right: 50px; margin bottom: 5px;bo" />
	<h4>Plot: <br><br>${res.Plot}</h4><br>
	<h5>Genre: ${res.Genre}</h5>
	<h5>Director: ${res.Director}</h5>
	<h5>Writer: ${res.Writer}</h5>
	<h5>Actors: ${res.Actors}</h5>
	<h5>Released: ${res.Released}</h5>
	<h5>Awards: ${res.Awards}</h5>
	<br>
	<br>
	<br>
	<br>
	`;
	$('#app3').html(html);
});

http://www.omdbapi.com/?t=Resident+evil+afterlife

$.ajax({
	url: "http://www.omdbapi.com/?t=Resident+evil+afterlife"
}).done(function(res){
	console.log(res);
	let html = `
	<h1>${res.Title} (2010)</h1>
	<img src="${res.Poster}" width = 400, height = 500, style = "float: left; margin-right: 50px; margin bottom: 5px;bo" />
	<h4>Plot: <br><br>${res.Plot}</h4><br>
	<h5>Genre: ${res.Genre}</h5>
	<h5>Director: ${res.Director}</h5>
	<h5>Writer: ${res.Writer}</h5>
	<h5>Actors: ${res.Actors}</h5>
	<h5>Released: ${res.Released}</h5>
	<h5>Awards: ${res.Awards}</h5>
	<br>
	<br>
	<br>
	<br>

	`;
	$('#app4').html(html);
});

http://www.omdbapi.com/?t=Resident+evil+the+final+chapter
$.ajax({
	url: "http://www.omdbapi.com/?t=Resident+evil+the+final+chapter"
}).done(function(res){
	console.log(res);
	let html = `
	<h1>${res.Title} (2016)</h1>
	<img src="${res.Poster}" width = 400, height = 500, style = "float: left; margin-right: 50px; margin bottom: 5px;bo" />
	<h4>Plot: <br><br>${res.Plot}</h4><br>
	<h5>Genre: ${res.Genre}</h5>
	<h5>Director: ${res.Director}</h5>
	<h5>Writer: ${res.Writer}</h5>
	<h5>Actors: ${res.Actors}</h5>
	<h5>Released: ${res.Released}</h5>
	<h5>Awards: ${res.Awards}</h5>
	<br>
	<br>
	<br>
	<br>

	`;
	$('#app5').html(html);
});



