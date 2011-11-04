
//Getting data from a JSON file
$.getJSON('taskList.json', function(data) {
  var items = [];

  $.each(data, function(key, val) {
    items.push('<li id="' + key + '">' + val + '</li>');
  });

  $('<li/>', {
   // 'class': 'ui-li-btn-icon-right ui-li ui-btn-up-b',
    html: items.join('')
  }).appendTo('#taskList');
});
	

