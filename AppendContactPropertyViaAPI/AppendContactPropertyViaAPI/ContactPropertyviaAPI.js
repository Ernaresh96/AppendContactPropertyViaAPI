$(document).ready(function() {
	$('#createPropertyForm').submit(function(e) {
		e.preventDefault();
		var propertyName = $('#propertyName').val();
		console.log('mainproperty data on');

		var raw = JSON.stringify({
			"name": propertyName,
			"label": propertyName,
			"description": "Custom property for you",
			"groupName": "contactinformation",
			"type": "datetime",
			"formField": true,
			"displayOrder": 6,
			"options": []
		});

		var setting = {
			type: "POST",
			url: "https://api.hubapi.com/properties/v1/contacts/properties",
			token: "Bearer pat-na1-1fa12d5a-81ec-41ef-91eb-fdbcbd1d66f4",
			data: JSON.parse(raw)
		}

		$.ajax({
			type: "POST",
			url: "https://bypassphp.test4you.in/bypass-2.php", /* Php Bypass function that in Hosted on our server ( Do not change this link ) */
			data: setting,
			success: function (response,data, status, xhr) { 
				console.log('Posted', data);
				console.log('Status: ', status);
			},
			dataType: 'JSON'
		}); 
	});
});