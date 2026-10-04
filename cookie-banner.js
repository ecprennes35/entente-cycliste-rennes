document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem("ecpr_cookies") === "accepted") {
    loadCurator();
  }
});

function acceptCookies() {
  localStorage.setItem("ecpr_cookies", "accepted");
  loadCurator();
}

function loadCurator() {
  document.getElementById("cookie-placeholder").style.display = "none";
  document.getElementById("curator-feed-default-feed-layout").style.display = "block";
  
  var i, e, d = document, s = "script";
  i = d.createElement("script"); i.async = 1; i.charset = "UTF-8";
  i.src = "https://cdn.curator.io/published/5b4849e5-1f13-4773-905b-ad3918e71820.js";
  e = d.getElementsByTagName(s)[0];
  e.parentNode.insertBefore(i, e);
}