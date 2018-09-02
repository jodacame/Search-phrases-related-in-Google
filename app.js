var target = document.createElement('div');
target.setAttribute("id","seo-related");
//document.querySelector("#rhs").appendChild(target)
document.querySelector("#rhs").insertBefore(target, document.querySelector("#rhs").firstChild);

target.innerHTML = "<div class='title'>Phrases Related for SEO</div>";
target.innerHTML = target.innerHTML + "<div class='result'></div>";
target = target.querySelector(".result");
document.querySelectorAll( "div.g div .rc div div[id^='eobd'] div" ).forEach(function(e){
  target.innerHTML = target.innerHTML + "<span>"+e.innerHTML+"</span>";
})
  