var countries_stats = document.getElementById('all_countries_stats');
var states_stats = document.getElementById('all_states_stats');
var total_stats = document.getElementById('total_stats');
var india_stats = document.getElementById('india_stats');
var news = document.getElementById('news');

countries_stats.innerHTML = "";
states_stats.innerHTML = "";
total_stats.innerHTML = "";
india_stats.innerHTML = "";
news.innerHTML = "";

var labels = [];
var inf = [];

$.ajax({
	url: "https://api.rootnet.in/covid19-in/stats/latest",
	dataType: "json",
	type: 'GET',
	success: function(response)
	{    
		$.ajax({
			url: "./api/search_by_country.php",
			dataType: "json",
			type: 'POST',
			data: {country:'india'},
			success: function(response)
			{    
				india_stats.innerHTML += "<div class='single_stat'><p>Infected</p><h5>" + response.latest_stat_by_country[0].total_cases + "</h5></div><div class='single_stat'><p>Deaths</p><h5>"
				+ response.latest_stat_by_country[0].total_deaths + "</h5></div><div class='single_stat'><p>Recovered</p><h5>" + response.latest_stat_by_country[0].total_recovered + "</h5></div>";
			}
		});

		document.getElementById('asof_india').innerHTML = response.lastRefreshed.substr(0,10);

		for(var i=0;i<response.data.regional.length-1;i++)
		{
			labels.push(response.data.regional[i].loc);
			inf.push(parseInt(response.data.regional[i].confirmedCasesIndian)+parseInt(response.data.regional[i].confirmedCasesForeign));

			states_stats.innerHTML += "<tr><th scope='row'>" + response.data.regional[i].loc + "</th><td>"
			+ Number(response.data.regional[i].confirmedCasesIndian).toLocaleString() + "</td><td>" + Number(response.data.regional[i].confirmedCasesForeign).toLocaleString() + "</td><td>" + Number(response.data.regional[i].deaths).toLocaleString() + "</td><td>" + Number(response.data.regional[i].discharged).toLocaleString() + "</td></tr>";
		}

		var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: labels,
		        datasets: [{
		        	label: 'Infected',
		            data: inf,
		            backgroundColor: '#ff0000',
		            borderColor: window.chartColors.grey,
		            fill: false
		        }],
		    },
		    options: {
		    	legend: {
			        display: false
			    },
				responsive: true,
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						ticks: {
		                    display: false
		                },
						scaleLabel: {
							display: true,
							labelString: 'States'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'No. of people'
						}
					}]
				}
			}
		});
	}
});

$.ajax({
	url: "./api/all_country_cases.php",
	dataType: "json",
	type: 'GET',
	success: function(response)
	{    
		for(var i=0;i<response.countries_stat.length-1;i++)
		{
			countries_stats.innerHTML += "<tr><th scope='row'>" + response.countries_stat[i].country_name + "</th><td>"
			+ response.countries_stat[i].cases + "</td><td>" + response.countries_stat[i].deaths + "</td><td>" + response.countries_stat[i].total_recovered + "</td></tr>";
		}
	}
});

$.ajax({
	url: "./api/get_stats_all.php",
	dataType: "json",
	type: 'GET',
	success: function(response)
	{    
		document.getElementById('asof_countries').innerHTML = response.statistic_taken_at;
		
		total_stats.innerHTML += "<div class='single_stat'><p>Infected</p><h5>" + response.total_cases + "</h5></div><div class='single_stat'><p>Deaths</p><h5>"
		+ response.total_deaths + "</h5></div><div class='single_stat'><p>Recovered</p><h5>" + response.total_recovered + "</h5></div>";
	}
});

search_button.addEventListener('click', function() {
    var search = document.getElementById('search').value;
    var stats_div = document.getElementById('country_search_stats');

    $.ajax({
		url: "https://restcountries.eu/rest/v2/name/"+search+"?fullText=true",
		dataType: "json",
		type: 'GET',
		success: function(data)
		{    
			var total_pop = parseInt(data[0].population);

			$.ajax({
				url: "./api/search_by_country.php",
				dataType: "json",
				type: 'POST',
				data: {country:search},
				success: function(response)
				{    
					var confirmed = parseInt(response.latest_stat_by_country[0].total_cases.replace(/,/g, ''));
					var deaths = parseInt(response.latest_stat_by_country[0].total_deaths.replace(/,/g, ''));
					var recovered = parseInt(response.latest_stat_by_country[0].total_recovered.replace(/,/g, ''));
					var non_inf = total_pop - (confirmed+deaths+recovered);

					$('#country_pop').html(Number(total_pop).toLocaleString());
					$('#country_safe').text(Number(non_inf).toLocaleString());
					$('#country_inf').text(response.latest_stat_by_country[0].total_cases);
					$('#country_death').text(response.latest_stat_by_country[0].total_deaths);
					$('#country_rec').text(response.latest_stat_by_country[0].total_recovered);

					$('#total_pop').show(400);
					$(stats_div).show(800);
				}
			});
		}
	});
}, false);

$.ajax({
	url: "https://newsapi.org/v2/everything?q=coronavirus%20AND%20%22corona%20virus%22%20AND%20%22COVID-19%22&apiKey=6f105da0c6c94d63a15d10df7f17efdf",
	dataType: "json",
	type: 'GET',
	success: function(response)
	{    
		for(var i=0;i<response.articles.length-1;i++)
		{
			news.innerHTML += "<div class='single_news_card'><div class='row' style='align-items: center;'><div class='col-md-4 col-sm-6 col-5'><div class='news_img'><img src="+response.articles[i].urlToImage+"></div></div><div class='col-md-8 col-sm-6 col-7'><h6 class='news_title'>"+response.articles[i].title+"</h6><p class='news_desc'>"+response.articles[i].description.substr(0,110)+".....</p><a href="+response.articles[i].url+" target='_blank'><button class='btn btn-primary news_read'>Read More</button></a></div></div></div>";
		}

	}
});