export default function shopeeCheck() {
  let utm_source = '';
  let utm_content = '';
  let utm_medium = '';
  let utm_campaign = '';
  let atProductGenerateCss = `
<style type="text/css">
/* common */
.at--w100 {width : 100%}
.at--radius {border-radius: 8px}
.at--mauto {margin: auto}
hr {
background-color: #eaecf0;
height: 1px;
border: 0;
}

/* element spec css */
.at--card {
background: #f9fafb;
border-radius: 8px;
width: 100%;
margin: auto;
}

.at--cps-wrap {
display: grid;
grid-template-columns: 20% 80%;
padding: 10px;
}

.at--cps-item {
margin: 8px;
display: flex;
align-items: start;
flex-direction: column;
justify-content: center;
position: relative;
}

.at--cps-campaign-thumb {
width: 100px;
height: 100px;
border-radius: 8px;
object-fit: contain;

}


.at--convert-link-box {
display: grid;
grid-template-columns: 80% 20%;
width: 100%;
}

.at--input-box {
border-radius: 8px;
padding: 8px;
width: 98%;
border: 0.5px solid #eaecf0;
}

.at--btn-box {
padding: 8px;
border-radius: 8px;
border: 0.5px solid #1570EF;
background: #fff;
color: #1570EF;
}

.at--direct-box {
display: flex;
justify-content: center;
padding: 20px;
padding-top: 0px;
}

.at--btn-direct {
background: #1570EF;
color: #fff;
text-decoration: none;
padding: 8px 12px;
border-radius: 8px;
}

.at--error {
color: red;
font-size: 14px;
margin-top: -5px;
padding: 0 10px 10px;
}

.d-none {
display: none;
}

/* reponsive */

@media screen and (max-width: 768px) { 
.at--cps-wrap {
grid-template-columns: 30% 70%;
}
}

@media screen and (max-width: 601px) { 
.at--cps-wrap {
grid-template-columns: 40% 60%;
}
.at--convert-link-box {
grid-template-columns: 60% 40%;
}
}



</style>`;

  let atProductGenerateHtml = `<div class="at--card">
<!--  campaign info  -->
<div class="at--cps-wrap">
<div class="at--cps-item at--mauto">
<div class="at--cps-campaign-thumb">
<img class="at--w100 at--radius" src="https://content.accesstrade.vn/adv/1714813844_avatar_1714813844.gif"/>
</div>
</div>
<div class="at--cps-item">
<a rel="nofollow" target="_blank" rel="nofollow">
Shopee Việt Nam Smartlink cho tất cả thiết bị
</a>
<b>45.000</b>
</div>
</div>

<hr>

<!--  convert link  -->
<div class="at--cps-item">
<label style="padding: 10px" for="">Dán link sau đó chuyển hướng đến trang mua hàng</label>
<div class="at--convert-link-box">
<div class="at--cps-item at--link-box">
<input id="at--convert-link-value" class="at--input-box" placeholder="Dán link sản phẩm sẽ mua" type="text">  
</div>
<div class="at--cps-item">
<button id="at--convert-link-btn" class="at--w100 at--btn-box" type="button">Dán link</button>
</div>
</div>
<p id="at--error" class="at--error d-none">Đường dẫn chưa được hỗ trợ! Vui lòng thử lại đường dẫn khác</p>

</div>
</div>`;

  let atProductGenerateElement = document.getElementById('at-widget');
  atProductGenerateElement.innerHTML =
    atProductGenerateCss + atProductGenerateHtml;

  let btn_color = '#1570EF';
  let btn_text = 'Mua Ngay';

  function createDeepLinkBox(deepLink, btn_color, btn_text) {
    var newDiv = document.createElement('div');

    // Set the class attribute
    newDiv.classList.add('at--direct-box');
    newDiv.id = 'at--direct-box';
    // Create an anchor element
    var newAnchor = document.createElement('a');

    // Set the id, style, target, href, and class attributes
    newAnchor.id = 'at--direct-link';
    newAnchor.style.background = btn_color;
    newAnchor.target = '_blank';
    newAnchor.href = deepLink;
    newAnchor.classList.add('at--btn-direct');

    // Set the text content
    newAnchor.textContent = btn_text;

    // Append the anchor element to the div element
    newDiv.appendChild(newAnchor);
    return newDiv;
  }

  function validateURL(original_link, value) {
    let URLObj = new URL(value);
    return original_link === URLObj.hostname;
  }

  let URLObj = new URL('https://shopee.vn/');
  let campaignDomain = URLObj.hostname;
  let atError = document.getElementById('at--error');

  atProductGenerateElement.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'at--convert-link-btn') {
      navigator.clipboard
        .readText()
        .then(text => {
          let input_link = document.getElementById('at--convert-link-value');
          let direct_box = document.getElementById('at--direct-box');
          if (!text) return;
          if (direct_box) {
            direct_box.remove();
          }

          text = text.trim();
          input_link.value = text;

          input_link.dispatchEvent(new Event('input', { bubbles: true }));
          if (!validateURL(campaignDomain, text)) {
            atError.classList.remove('d-none');
            return;
          } else {
            atError.classList.add('d-none');
          }

          let deepLink = `https://go.isclix.com/deep_link/5814550641003739915/4751584435713464237?sub3=tooldirectlink&sub4=oneatweb`;

          if (utm_source) {
            deepLink += '&utm_source=' + utm_source;
          }
          if (utm_medium) {
            deepLink += '&utm_medium=' + utm_medium;
          }
          if (utm_campaign) {
            deepLink += '&utm_campaign=' + utm_campaign;
          }
          if (utm_content) {
            deepLink += '&utm_content=' + utm_content;
          }

          deepLink = deepLink + '&url=' + text;
          atProductGenerateElement.appendChild(
            createDeepLinkBox(deepLink, btn_color, btn_text),
          );
        })
        .catch(err => {
          console.error('Failed to read clipboard contents: ', err);
        });
    }
  });

  let input_link = document.getElementById('at--convert-link-value');
  input_link.addEventListener('paste', function (event) {
    let text = (event.clipboardData || window.clipboardData).getData('text');
    text = text.trim();
    var direct_box = document.getElementById('at--direct-box');
    if (direct_box) {
      direct_box.remove();
    }
    if (!validateURL(campaignDomain, text)) {
      atError.classList.remove('d-none');
      return;
    } else {
      atError.classList.add('d-none');
    }

    let deepLink = `https://go.isclix.com/deep_link/5814550641003739915/4751584435713464237?sub3=tooldirectlink&sub4=oneatweb`;

    if (utm_source) {
      deepLink += '&utm_source=' + utm_source;
    }
    if (utm_medium) {
      deepLink += '&utm_medium=' + utm_medium;
    }
    if (utm_campaign) {
      deepLink += '&utm_campaign=' + utm_campaign;
    }
    if (utm_content) {
      deepLink += '&utm_content=' + utm_content;
    }

    deepLink = deepLink + '&url=' + text;
    atProductGenerateElement.appendChild(
      createDeepLinkBox(deepLink, btn_color, btn_text),
    );
  });
}
