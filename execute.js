// console.log(document.body);

function changeFavIcon() {
  var oldlink = document.head.querySelectorAll('link[rel="icon"]');
  oldlink.forEach(function (ele) {
    document.head.removeChild(ele)
  });
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'https://code.visualstudio.com/assets/favicon.ico';
  document.getElementsByTagName('head')[0].appendChild(link);
  document.title = "CleanSheet/MachinePrice.js"
};

function changeHeader() {
  var header = document.querySelector('div[class^="header"]');
  header.style.background = "#002b36";
  var logo = header.querySelector('img[class^="logo"]');
  logo.parentElement.removeChild(logo);
}


function findInitialFinish(callback) {
  var ele = document.querySelector('#app>div');
  if (!ele) {
    setTimeout(function () {
      findInitialFinish(callback);
    }, 3000);
  } else {
    console.log('find initial finish');
    callback();
  }
}


findInitialFinish(function () {
  changeFavIcon();
  changeHeader();
});