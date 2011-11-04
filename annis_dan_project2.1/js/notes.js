//Creating a list with just an array
		var items= ["Dan","Chris"];

		$.each(items, function(index, value){
			$("<li />").html(value).appendTo("#list");
			console.log (index);
			console.log (value);
});




//Creating a list with a "key" called Name and the values
var items= [{ "name" : "Dan"},
             {"name"  : "Chris"}
           ];
$.each(items, function(index, value){
	$("<li />").html(value.name).appendTo("#list");
	console.log (index);
	console.log (value);
});



//Creating a list with two "keys" and their values
var items= [{ "name" : "Dan",
				"email" : "Dannis@fullsail.edu"},
             {"name"  : "Chris",
             	"email" : "Biznmiz@aol.com"}
           ];
$.each(items, function(index, value){
	$("<li />").html("<b>"+value.name+"</b>"+"<br>"+value.email).appendTo("#list");
	console.log (index);
	console.log (value);
});


//Getting data from a JSON file
$.getJSON('json.json', function(data) {
  var items = [];

  $.each(data, function(key, val) {
    items.push('<li id="' + key + '">' + val + '</li>');
  });

  $('<ul/>', {
    'class': 'dailyTaskList',
    html: items.join('')
  }).appendTo('#list');
});
	
