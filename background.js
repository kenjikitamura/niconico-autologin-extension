
chrome.extension.onMessage.addListener(function(request,sender,sendResponse)
{
  var email = localStorage["niconico_email"];
  var password = localStorage["niconico_password"];

  sendResponse(
    {
       niconico_email:email,
       niconico_password:password
    });
});
