function lonSuccess(data)
       {
           if (data == 'true'){
           		window.location.href = "main.html#home";
           }else{
           		alert("invalid credientials");
           }
       }
       
       
       

       function lonError(data)
       {
       		$.mobile.loading( "hide" );
       		navigator.notification.alert("Can not login at the time...TRY AGAIN!!!", null,  "Network Error", "Ok"); 
       }      
       
       
       
       
        
   		 
   		  	function ronSuccess(data)
       {
           if (data == 'true'){
           		$.mobile.loading("hide");
           		navigator.notification.alert("Fuse Account created!!!", null,  "Success", "Ok"); 
           		window.location.href = "main.html#social";
           }else{
           		$.mobile.loading("hide");
           		navigator.notification.alert("Account not created", null,  "Failure", "Ok"); 
           }
       }
       
       
       
       
       

       function ronError(data)
       {
       		$.mobile.loading("hide");
       		navigator.notification.alert("error occurred while creating account...TRY AGAIN!!!", null,  "Network Error", "Ok"); 
       }       
       
       
       	 
   		  	function fonSuccess(data)
       {
           alert("success");
       }
       
       
       
       
       

       function fonError(data)
       {
           alert("error occurred while creating account...TRY AGAIN!!!");
       }       