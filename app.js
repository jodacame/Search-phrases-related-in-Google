var target = document.createElement('div');
target.setAttribute('id', 'seo-related');
//document.querySelector("#rhs").appendChild(target)
document
  .querySelector('#rhs')
  .insertBefore(target, document.querySelector('#rhs').firstChild);

target.innerHTML = "<div class='title'>Phrases Related for SEO</div>";
target.innerHTML = target.innerHTML + "<div class='result'></div>";
target = target.querySelector('.result');

fetch(
  `https://www.google.com/complete/search?output=toolbar&q=${
    document.querySelector("[name='q']").value
  }`
)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
  .then(data => {
    data.querySelectorAll('suggestion').forEach(el => {
      console.log(el);
      target.innerHTML += `<a href="?q=${el.getAttribute(
        'data'
      )}"><div class="sb43" style="display:block;margin-right:10px;float:left"></div> ${el.getAttribute(
        'data'
      )}</a>`;
    });
  });
