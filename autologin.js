// Saves options to localStorage.
function saveOptions() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  localStorage["niconico_email"] = email;
  localStorage["niconico_password"] = password;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "保存しました。";
  status.style.display = "block";
  setTimeout(function() {
    status.style.display = "none";
  }, 2000);
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

function init(){
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

var option = null ;

if (wrongPass && wrongPass.innerText.match("入力したメールアドレスまたはパスワードが間違っています")){
  alert("ログインできませんでした。");
}else{
  if (email){
//    email.value = localStorage["niconico_email"];

    //真っ先に必要なデータを裏から受け取る
//    chrome.extension.sendRequest( { 
      chrome.extension.sendMessage( { 
    } , function( response ){
	//alert(response.email);
        option = response ;
        //データの準備が整ったらコンテントスクリプトを初期化
        init();
    }
);

  }
}

