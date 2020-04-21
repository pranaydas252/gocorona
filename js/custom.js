var countries_stats = document.getElementById('all_countries_stats');
var states_stats = document.getElementById('all_states_stats');
var total_stats = document.getElementById('total_stats');
var india_stats = document.getElementById('india_stats');

countries_stats.innerHTML = "";
states_stats.innerHTML = "";
total_stats.innerHTML = "";
india_stats.innerHTML = "";

var labels = [];
var inf = [];

$.ajax({
	url: "./api/all_country_cases",
	dataType: "json",
	type: 'GET',
	success: function(response)
	{    
		for(var i=1;i<response.countries_stat.length-1;i++)
		{
			countries_stats.innerHTML += "<tr><th scope='row'>" + response.countries_stat[i].country_name + "</th><td>"
			+ response.countries_stat[i].cases + "<span class='country_stat'><i class='fa fa-arrow-up'></i>"
		 + response.countries_stat[i].new_cases + "</span></td><td>" + response.countries_stat[i].active_cases + "</td><td>" 
			+ response.countries_stat[i].deaths + "<span class='country_stat'><i class='fa fa-arrow-up'></i>"
		 + response.countries_stat[i].new_deaths + "</span></td><td>" + response.countries_stat[i].total_recovered + "</td><td>" 
			+ response.countries_stat[i].total_tests + "</td></tr>";
		}
	}
});

$.ajax({
	url: "./api/get_stats_all",
	dataType: "json",
	type: 'GET',
	success: function(response)
	{    
		document.getElementById('asof_countries').innerHTML = response.statistic_taken_at + "(GMT)";
		
		total_stats.innerHTML += "<div class='single_stat'><p>Infected</p><h5>" + response.total_cases + "<span class='newstat'><i class='fa fa-arrow-up'></i>"
		 + response.new_cases + "</span></h5></div><div class='single_stat'><p>Active</p><h5>" + response.active_cases + "</h5></div><div class='single_stat'><p>Recovered</p><h5>" + response.total_recovered + "</h5></div><div class='single_stat'><p>Deaths</p><h5>" + response.total_deaths + "<span class='newstat'><i class='fa fa-arrow-up'></i>"
		 + response.new_deaths + "</span></h5></div>";
	}
});

$.ajax({
	url: "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise",
	dataType: "json",
	type: 'GET',
	success: function(response)
	{    
		india_stats.innerHTML += "<div class='single_stat'><p>Infected</p><h5>" + Number(response.data.total.confirmed).toLocaleString() + "</h5></div><div class='single_stat'><p>Active</p><h5>" + Number(response.data.total.active).toLocaleString() + "</h5></div><div class='single_stat'><p>Recovered</p><h5>" + Number(response.data.total.recovered).toLocaleString() + "</h5></div><div class='single_stat'><p>Deaths</p><h5>"
		+ Number(response.data.total.deaths).toLocaleString() + "</h5></div>";
	}
});

$.ajax({
	url: "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise",
	dataType: "json",
	type: 'GET',
	success: function(response)
	{    
		var begin = response.data.statewise;
		for(var i=0;i<begin.length-1;i++)
		{
			labels.push(begin[i].state);
			inf.push(begin[i].active);
			
			states_stats.innerHTML += "<tr><th scope='row'>" + begin[i].state + "</th><td>"+ Number(begin[i].confirmed).toLocaleString() +"</td><td>"
				 + Number(begin[i].active).toLocaleString() + "</td><td>" + Number(begin[i].recovered).toLocaleString() + "</td><td>" + Number(begin[i].deaths).toLocaleString() + "</td></tr>";
		}

		console.log(labels);

		var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: labels,
		        datasets: [{
		        	label: 'Infected',
		            data: inf,
		            backgroundColor: '#ff073a',
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