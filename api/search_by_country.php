<?php

if (isset($_POST["country"])) 
{
	$country_name = $_POST["country"];

	$curl = curl_init();

	curl_setopt_array($curl, array(
		CURLOPT_URL => "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=".$country_name,
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_FOLLOWLOCATION => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "GET",
		CURLOPT_HTTPHEADER => array(
			"x-rapidapi-host: coronavirus-monitor.p.rapidapi.com",
			"x-rapidapi-key: baccd2dde1msh395e75ec6b341abp1cc38bjsna1335670cdfa"
		),
	));

	$response = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

	if ($err) {
		echo "cURL Error #:" . $err;
	} else {
		echo $response;
	}
}
