<?php include ('header_open.php');?>
<!--Any Extra Libraries or Frameworks. Add them Here-->

<!--End Extra Libraries-->
<?php include ('header_close.php');?>


<!--Navigation Bar-->
<?php include ('navbar.php');?>
<!--Navigation Bar-->

<!--Start Coding Here-->
<main>
	<div class="header_title">
		<h2 class="text-center">COVID-19 Pandemic Current Stats (World & India)</h2>
	</div>

	<div class="stats_main">
		<div class="row">
			<div class="col-lg-6">

				<div class="card table-responsive">
					<p class="text-center">World data: As of <span id="asof_countries"></span></p>
					<div class="total_stats" id="total_stats">
						
					</div>
					<div class="tb_parent">
						<table class="table table-hover">
						  <thead class="thead-dark">
						    <tr>
						      <th scope="col">Country</th>
						      <th scope="col">Infected</th>
						      <th scope="col">Deaths</th>
						      <th scope="col">Recovered</th>
						    </tr>
						  </thead>
						  <tbody id="all_countries_stats">
						    
						  </tbody>
						</table>
					</div>
				</div>

				<div class="news_card">
					<p class="text-center">Global Headlines on COVID-19 (Coronavirus)</p>
					<div class="news_container" id="news">
						
					</div>
				</div>

			</div>
			<div class="col-lg-6">

				<div class="search_card">
					<p class="text-center">Search stats by Country</p>
					<form class="container form" id="myForm">
			            <input class="form-control grid-item" type="search" id="search" placeholder="Enter Country Name">
			            
			            <button class="btn btn-primary text-center grid-item" type="button" id="search_button">
			           		<span class="fa fa-search">&nbsp;&nbsp;&nbsp;SUBMIT</span>
			           	</button>
			        </form>
	        		
        			<div class="row" id="country_search_stats" style="display: none;">
        				<div class="col-md-3 col-sm-6 col-6">
        					<div class="single_country_stat" style="background: #2196F3;">
        						<p>Population</p>
								<h5 id="country_pop"></h5>
        					</div>
        				</div>
        				<div class="col-md-3 col-sm-6 col-6">
        					<div class="single_country_stat" style="background: #9C27B0;">
        						<p>Infected</p>
								<h5 id="country_inf"></h5>
        					</div>
        				</div>
        				<div class="col-md-3 col-sm-6 col-6">
        					<div class="single_country_stat" style="background: #e53935;">
        						<p>Deaths</p>
								<h5 id="country_death"></h5>
        					</div>
        				</div>
        				<div class="col-md-3 col-sm-6 col-6">
        					<div class="single_country_stat" style="background: #388E3C;">
        						<p>Recovered</p>
								<h5 id="country_rec"></h5>
        					</div>
        				</div>
        			</div>
				</div>

				<div class="card table-responsive" style="height: 900px;">
					<p class="text-center">India data: As of <span id="asof_india"></span></p>
					<div class="total_stats" id="india_stats">
						
					</div>
					
					<div class="tb_parent">
						<table class="table table-hover">
						  <thead class="thead-dark">
						    <tr>
						      <th scope="col">State</th>
						      <th scope="col">Infected (Indian)</th>
						      <th scope="col">Infected (Foreign)</th>
						      <th scope="col">Deaths</th>
						      <th scope="col">Recovered</th>
						    </tr>
						  </thead>
						  <tbody id="all_states_stats">
						    
						  </tbody>
						</table>
					</div>
				</div>

				<div class="graph_card">
					<p class="text-center">Indian States graphical analysis</p>
					<div class="graph_container">
						<canvas id="myChart" width="400" height="400"></canvas>
					</div>
				</div>
			</div>  
		</div>
	</div>

</main>

<!-- Footer -->
<footer id="footer">
    <div class="container">
        <div class="row text-center">
            <div class="col-md-12">
                <h4>Made with <span class="fa fa-heart"></span> by <a href="http://www.pranaydas.in" target="_blank">Pranay</a></h4>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-md-12 social">
                <h4><a href="https://www.instagram.com/pranaydas252" target="_blank"><span class="fa fa-instagram"></span></a><a href="https://github.com/pranaydas252" target="_blank"><span class="fa fa-github"></span></a></h4>
            </div>
        </div>
    </div>
</footer>
<!-- /.footer -->


<?php include ('footer.php');?>