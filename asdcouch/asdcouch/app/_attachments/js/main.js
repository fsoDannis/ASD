$(document).ready(function() {
	$.ajax({
		"url":"_view/SUPERVISORS",
		"dataType": "json",
		"success": function(data){
			$.each(data.rows, function(index,supervisor){
				var fullname = supervisor.value.fullname;
				$('#supervisors').append(
					$('<li>').append(
						$('<a>').attr("href","#")
							.text(fullname)
					)
				);
			});
			$('#supervisors').listview('refresh');
		}
	});	
});