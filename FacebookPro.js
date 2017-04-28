$(document).ready(function(){
	var fbtoken='your token here';
	
	function getInfo(){
		
		$.ajax('https://graph.facebook.com/me?access_token='+fbtoken,{

			success : function(response){
				console.log(response);
				console.log(typeof(response));
				$("#Id").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');  //to display the user's abouts.
				$('#name').text(response.name);
				$('#about').text(response.bio);
				$('#birthday').text(response.birthday);
				$("#email").text(response.email);
				



			}

		}

		);
	}
	function getFeed(){

		$.ajax('https://graph.facebook.com/me/posts?access_token='+fbtoken,{

			success: function(response){
				console.log(response);
				console.log(typeof(response));
			    $("#feed").text(response.data[0].description+'<br>');//displays the user's most recent post.
			    
			
			},
			error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                },
		}
		);
	}
	
	
	$("#loaddata").on('click',getInfo)
	$("#loadfeed").on('click',getFeed)
});
