

//Getting data from a xml file
$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "xhr/daySpec.xml",
		dataType: "xml",
		complete: function() {
            $('#specList').listview('refresh');
      	 },
		success: function(xml) {
			$(xml).find('item').each(function(){
				var day = $(this).find('day').text();
				var task = $(this).find('task').text();
				$('<li data-role="list-divider" ></li>').html(day).appendTo('#specList');
				$('<li data-theme="d" ></li>').html(task).appendTo('#specList');
			});
		}
	});
	
//Load CSV Data
	$('#supList').empty();
    $('#supList').CSVToTable('xhr/supInfo.csv');
});


//Getting data from a JSON file
$.getJSON('xhr/taskList.json', function(data) {
  var items = [];

  $.each(data, function(key, val) {
    items.push('<li id="' + key + '">' + val + '</li>');
  });

  $('<li/>', {
    html: items.join('')
  }).appendTo('#taskList');
});



