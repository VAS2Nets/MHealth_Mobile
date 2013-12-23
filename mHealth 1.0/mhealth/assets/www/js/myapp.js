/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */ 
/*
 * for sending sms functionality
 */
// intent param is needed to send sms using sms intent
$(document).ready(function(){
$("#subscribebutton").click(function(){
//$('#subform').submit(function() {
//localStorage.clear();
var phone = $('#phone').val();
var service = $('#service').val();
var receiver = 35123;
  alert(receiver);
  alert(service);
   // $.mobile.loading("show");
  SmsPlugin.prototype.send(receiver, service, '',
      function () {
          //$.mobile.loading("hide");
         alert('Message sent successfully');
      },
      function (e) {
         //$.mobile.loading("hide");
          alert('Message Failed:' + e);
      }
  );              
//});
return false;
});
});

/*
 * for unsubscription sms functionality
 */
 $(document).ready(function(){
$("#unsubscribebutton").click(function(){
//$('#subform').submit(function() {
localStorage.clear();
var optout = 'STOP ';
var phone = $('#phone').val();
var service = $('#service').val();
alert(service);
//var serve = optout.concat(service);
var serve = console.log(' ' + optout + service);
var receiver = 35123;
  alert(receiver);
  alert(serve);
  return;
   // $.mobile.loading("show");
  SmsPlugin.prototype.send(receiver, serve, '',
      function () {
        //  $.mobile.loading("hide");
         alert('Message sent successfully');
      },
      function (e) {
        // $.mobile.loading("hide");
          alert('Message Failed:' + e);
      }
  );              
//});
return false;
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