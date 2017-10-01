	$(document).ready(function(){
			$('#start').click(function(e){	
				$('#start').hide();
				$('#counter,#stop').show();
				
				var timer;
				var counter = 0;
				var seconds = 0;
				var minutes = 0;
				var hours = 0;
				interval = setInterval(function() {
						// Do something every .1 seconds
						counter += 0.1;
						counter = Math.round(counter * 100) / 100;

						if(counter >= 60){
							counter = 0;
							minutes++;
							
							if(minutes >= 60){
								minutes = 0;
								hours++;
							}

							if(hours > 0 && minutes < 10){
								minutes = '0'+minutes;
							}							
						} 

						if(minutes > 0 && counter < 10){
							seconds = '0'+counter.toFixed(1);
						} else {
							seconds = counter.toFixed(1);
						}						
					
					if(hours > 0){
						timer = hours +':'+minutes+':'+seconds;
					} else if(minutes > 0){
						timer = minutes+':'+seconds;
					} else {
						timer = seconds;
					}
					  
					  $('#clock').html(timer);
					  
					  $('#stop').click(function(e){
						clearInterval(interval); 
					  });
				}, 100);
			});
			
		});