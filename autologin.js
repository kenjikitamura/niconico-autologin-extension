// Saves options to localStorage.
function saveOptions() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  localStorage["niconico_email"]         = email;
  localStorage["niconico_password"]      = password;
  localStorage["niconico_configured"]    = "true";
  localStorage["niconico_helpDisplayed"] = "true";

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "保存しました。<br>次回からニコニコ動画のログイン画面を表示すると自動でログインを行います。";
  status.style.display = "block";
  setTimeout(function() {
    status.style.display = "none";
  }, 5000);
}

// Restores select box state to saved value from localStorage.
function restoreOptions() {
  $("#saveButton").click(function(){saveOptions();});

  var email = localStorage["niconico_email"];
  var password = localStorage["niconico_password"];
  if (!email) {
    return;
  }
  document.getElementById("email").value = email;
  document.getElementById("password").value = password;
}

function init(option){
  if (option["niconico_email"] && option["niconico_email"] != ""){
    email.value = option["niconico_email"];
    password.value = option["niconico_password"];
    loginForm.submit();
  }
}


$("#configBody").ready(function(){restoreOptions();});


var test = "Hello";
var email = document.getElementById("mail")
var password = document.getElementById("password")
var loginForm = document.getElementsByTagName("form")[0]
var wrongPass = document.getElementsByClassName("wrongPass")[0]

if (wrongPass && wrongPass.innerText.match("入力したメールアドレスまたはパスワードが間違っています")){
  alert("自動ログインできませんでした。設定画面からメールアドレス、パスワードを確認してください。");
}else{
  if (email){
    chrome.extension.sendMessage( { 
      } , function( response ){
	if(response.niconico_configured){
          init(response);
	}else{
	  if(response.niconico_helpDisplayed == "false"){
	    alert("Niconico autologin extensionは、このログイン画面を自動処理することができます。Chromeのメニューから「環境設定」-「拡張機能」-「Niconico autologin extension」のオプションからログイン情報を設定してください。");
	  }
	}
      }
    );
  }
}

