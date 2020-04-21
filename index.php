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
		<h2 class="text-center">COVID-19 Pandemic Stats || World & India</h2>
	</div>

	<div class="stats_main">
		<div class="row">
			<div class="col-lg-12">

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
						      <th scope="col">Active</th>
						      <th scope="col">Deaths</th>
						      <th scope="col">Recovered</th>
						      <th scope="col">Total tests</th>
						    </tr>
						  </thead>
						  <tbody id="all_countries_stats">
						    
						  </tbody>
						</table>
					</div>
				</div>

			</div>
		</div>

		<div class="row">
			<div class="col-lg-6">
				<div class="card table-responsive" style="height: 900px;">
					<p class="text-center">INDIA DATA</p>
					<div class="total_stats" id="india_stats">
						
					</div>
					
					<div class="tb_parent">
						<table class="table table-hover">
						  <thead class="thead-dark">
						    <tr>
						      <th scope="col">State</th>
						      <th scope="col">Infected</th>
						      <th scope="col">Active</th>
						      <th scope="col">Recovered</th>
						      <th scope="col">Deaths</th>
						    </tr>
						  </thead>
						  <tbody id="all_states_stats">
						    <tr class="states">
						    	<td><i class="fa fa-caret-down" style="color: #9e9e9e;" onclick="districtsShow();"></i>&nbsp;&nbsp; Maha</td>
						    	<td>55</td>
						    	<td>55</td>
						    	<td>55</td>
						    </tr>
						    <tr class="districts" style="display: none;">
						    	<th>District</th>
						    	<th>Cases</th>
						    </tr>
						    <tr class="districts" style="display: none;">
						    	<td>Mumbai</td>
						    	<td>55</td>
						    	<td>55</td>
						    	<td>55</td>
						    </tr>
						    <tr class="states">
						    	<td><i class="fa fa-caret-down" style="color: #9e9e9e;" onclick="districtsShow();"></i>&nbsp;&nbsp; Maha</td>
						    	<td>55</td>
						    	<td>55</td>
						    	<td>55</td>
						    </tr>
						    <tr class="districts" style="display: none;">
						    	<th>District</th>
						    	<th>Cases</th>
						    </tr>
						    <tr class="districts" style="display: none;">
						    	<td>Mumbai</td>
						    	<td>55</td>
						    	<td>55</td>
						    	<td>55</td>
						    </tr>
						  </tbody>
						</table>
					</div>
				</div>
			</div>
			
			<script>
				function districtsShow() 
				{
					if ($('.districts').css('display', 'none')) 
					{
						$('.districts').css('display', 'block');
					}
				}
			</script>

			<div class="col-lg-6">
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