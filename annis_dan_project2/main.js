

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



//Load CSV Data
$(document).ready(function() { 
 
 
    $.ajax({ 
       type: 'GET', 
       url: 'supDataPHP.php', 
       data: null, 
       success: function(text) { 
        
        
           var fields = text.split(/\n/); 
           fields.pop(fields.length-1); 
            
            
           var headers = fields[0].split(','), html = '<table>'; 
            
           html += '<tr>'; 
            
           for(var i = 0; i < headers.length; i += 1) { 
            
              html += '<th scope="col">' + headers[i] + '</th>'; 
               
           } 
            
           html += '</tr>'; 
            
           var data = fields.slice(1, fields.length); 
            
            
            
           for(var j = 0; j < data.length; j += 1) { 
            
            
            
              var dataFields = data[j].split(','); 
               
              html += '<tr>'; 
              html += '<td>' + dataFields[0] + '</td>'; 
              html += '<td><a href="' + dataFields[1] + '">' + dataFields[1] + '</a></td>'; 
              html += '<td>' + dataFields[2] + '</td>'; 
              html += '</tr>'; 
               
            
            
           } 
            
           html += '</table>'; 
            
            
           $(html).appendTo('#supContact'); 
            
            
            
        
        
        
       } 
     
     
     
    }); 
 
 
 
});
