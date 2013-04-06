
chrome.extension.onMessage.addListener(function(request,sender,sendResponse)
{
  var email = localStorage["niconico_email"];
  var password = localStorage["niconico_password"];
  var configured = localStorage["niconico_configured"];
  var helpDisplayed = "";

  if (localStorage["niconico_helpDisplayed"]){
      helpDisplayed = "true";
  }else{      
      localStorage["niconico_helpDisplayed"] = "true";
      helpDisplayed = "false";
  }
  

  sendResponse(
    {
      niconico_email:email,
      niconico_password:password,
      niconico_helpDisplayed:helpDisplayed,
      niconico_configured:configured
    });
});
