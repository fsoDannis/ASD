

//Getting data from a xml file
$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "daySpec.xml",
		dataType: "xml",
		complete: function() {
            $('#page-wrap').listview('refresh');
      	 },
		success: function(xml) {
			$(xml).find('item').each(function(){
				var day = $(this).find('day').text();
				var task = $(this).find('task').text();
				$('<li data-role="list-divider" ></li>').html(day).appendTo('#page-wrap');
				$('<li data-theme="d" ></li>').html(task).appendTo('#page-wrap');
			});
		}
	});
});


//Getting data from a JSON file
$.getJSON('taskList.json', function(data) {
  var items = [];

  $.each(data, function(key, val) {
    items.push('<li id="' + key + '">' + val + '</li>');
  });

  $('<li/>', {
    html: items.join('')
  }).appendTo('#taskList');
});



	