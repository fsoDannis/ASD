$(document).ready(function() {
	$.ajax({
		"url":"_view/SUPERVISORS",
		"dataType": "json",
		"success": function(data){
			$.each(data.rows, function(index,supervisor){
				var fullname = supervisor.value.fullname;
				var page = supervisor.value.page;
				console.log(page);
				$('#supervisors').append(
					$('<li>').append(
						$('<a href=#'+page+'>')
							.text(fullname)
					)
				);
			});
			$('#supervisors').listview('refresh');
		}
	});	
	
	$.ajax({
		"url":"_view/teeter_tasks",
		"dataType": "json",
		"success": function(data){
			$.each(data.rows, function(index,teeter_tasks){
			var tasks = teeter_tasks.value.tasks
			$('#teeter_tasks').append(
				$('<li>').text(tasks)
				);
			});
		}
	});	
		
		
		
		
		
});