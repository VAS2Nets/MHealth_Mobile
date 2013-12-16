/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */ 
//javascript for window loading show and hide functions.
$(document).on("click", ".show-page-loading-msg", function() {
        var $this = $( this ),
        theme = $this.jqmData("theme") || $.mobile.loader.prototype.options.theme,
        msgText = $this.jqmData("msgtext") || $.mobile.loader.prototype.options.text,
        textVisible = $this.jqmData("textvisible") || $.mobile.loader.prototype.options.textVisible,
        textonly = !!$this.jqmData("textonly");
        html = $this.jqmData("html") || "";
        $.mobile.loading( 'show', {
            text: msgText,
            textVisible: textVisible,
            theme: theme,
            textonly: textonly,
            html: html
     });
})
.on("click", ".hide-page-loading-msg", function() {
        $.mobile.loading( 'hide' );
}); 
/*
 * for signup functionality
 */
$(document).ready(function(){
    $('#signupbutton').click(function(){
    //var formData = $("#form1").serialize();
    localStorage.clear();
    var signupuser = $('#signupuser').val();
    var signupphone = $('#signupphone').val();
    var dceleb = $('#dceleb').val();

    //localStorage.setItem("userphone", phone);

  $.mobile.loading("show"); 
    $.ajax({
        type: "POST",
        url: "http://83.138.190.170/mobilecelebni/signup.php",
        dataType: "json",
        data: { 'signupuser': signupuser , 'signupphone': signupphone , 'dceleb': dceleb },
        //data: formData,
        success: function (data) {
             if (data == "true") {
                $.mobile.loading( "hide" );
                alert("success");
                window.location.href = "mobile.html#login"; 

            } else {
             $.mobile.loading( "hide" ); 
             alert("Registration Failed!");
             navigator.notification.alert("Invalid credientials", null,  "Sign Up Error", "Ok"); 
            } 

        },
        error: function(){ alert('error connecting');}
    });		
    return false;
}); //end of login logic
}); 
/*
 * for login functionality
 */
$(document).ready(function(){
$('#loginbutton').click(function(){
//var formData = $("#form1").serialize();
localStorage.clear();
var username = $('#username').val();
var phone = $('#phone').val();

localStorage.setItem("userphone", phone);

$.mobile.loading("show"); 
$.ajax({
    type: "POST",
    url: "http://83.138.190.170/mobilecelebni/login.php",
    dataType: "json",
    data: { 'username': username , 'phone': phone },
    //data: formData,
    success: function (data) {
         if (data == "true") {
            $.mobile.loading( "hide" );
            alert("success");
            window.location.href = "mobile.html#blog"; 

        } else {
         $.mobile.loading( "hide" ); 
         alert("Invalid credientials: Login Failed");
         navigator.notification.alert("Invalid credientials", null,  "Login Error", "Ok"); 
        } 

    },
    error: function(){ alert('error connecting');}
});		
return false;
}); //end of login logic
});
/*
 * for showing comments functionality
 */
 $(document).on("pageshow", "#comment", function () {
var phoneno = localStorage.getItem("userphone");
//alert(phoneno);
$.mobile.loading("show");
   $.ajax({
    type: "POST",
    url: "http://83.138.190.170/mobilecelebni/allcomment.php",
    dataType: "json",
    data: {'phone': phoneno },
    //data: formData,
    success: function (data) {
         if (data) {
          $.mobile.loading( "hide" );
          //alert('success');
          var output = '';
          $.each(data, function(index, value){                   
          output += '<li><a href="#" id="' + value.msisdn + '">' +value.sub_msisdn+ '<b> Says: </b>'+ value.content+ '</a></li>';
          });
          $('#listitema').html(output);
            //window.location.href = "mobile.html#blog"; 
        } else {
         //$.mobile.loading( "hide" ); 
         alert("Fail to Connect: Login or Sign up First");
         navigator.notification.alert("Invalid credientials", null,  "Login Error", "Ok");
         $.mobile.loading( "hide" );
        } 
    },
    error: function(){ alert('error connecting');}
});
}); 
/*
 * for showing celebrity post functionality
 */
  $(document).on("pageshow", "#blog", function () {  
var phoneno = localStorage.getItem("userphone");
     $.mobile.loading("show", {text: 'Loading...', textVisible : true, theme: 'b'}); 
        $.ajax({
            type: "POST",
            url: "http://83.138.190.170/mobilecelebni/post.php",
            dataType: "json",
            data: { 'phone': phoneno },
            //data: formData,
            success: function (data) {
                if (data) {
                    $.mobile.loading( "hide" );
                    var output = '';
                  $.each(data, function(index, value){                   
                  output += '<li><a href="#" id="' + value.cele_acd + '">' +value.cele_acd+ '<b> Says: </b>'+ value.content+ '</a></li>';
                  });
                  $('#listitemm').html(output);
                    //window.location.href = "mobile.html#blog"; 
                } else {
                 $.mobile.loading( "hide" ); 
                 navigator.notification.alert("Invalid credientials", null,  "Login Error", "Ok"); 
                }
            },
            error: function(){ alert('error connecting');}
        });
});
/*
 * for sending sms functionality
 */
// intent param is needed to send sms using sms intent
$(document).ready(function(){
$("#btnSmsIntent").click(function(){
  var receiver = $('#receiverphone').val();
  var smsmsg = $('#smscomment').val();
  alert(receiver);
    $.mobile.loading("show");
  SmsPlugin.prototype.send(receiver, smsmsg, '',
      function () {
          $.mobile.loading("hide");
         alert('Message sent successfully');
      },
      function (e) {
         $.mobile.loading("hide");
          alert('Message Failed:' + e);
      }
  );              
});
});
/*
 * for displaying the user phone number functionality
 
 $(document).on("pageshow", "#send", function () {
var telephoneNumber = cordova.require("cordova/plugin/telephonenumber");
telephoneNumber.get(function(result) {
        console.log("result = " + result);
    }, function() {
        console.log("error");
    });
}); */

/*
 * for nivo slider functionality
 */