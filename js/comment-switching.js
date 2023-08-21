document.addEventListener('DOMContentLoaded', function () {
  var button1 = document.getElementById('chevron-1');
  var button2 = document.getElementById('chevron-2');
  var button3 = document.getElementById('chevron-3');
  var button4 = document.getElementById('chevron-4');
  var button5 = document.getElementById('chevron-5');
  var button6 = document.getElementById('chevron-6');
  var content1 = document.getElementById('comment-1');
  var content2 = document.getElementById('comment-2');
  var content3 = document.getElementById('comment-3');
  var content4 = document.getElementById('comment-4');
  var content5 = document.getElementById('comment-5');
  var content6 = document.getElementById('comment-6');

  // slide1
  button1.addEventListener('click', function () {
    var tempContent = content1.innerHTML;
    content1.innerHTML = content2.innerHTML;
    content2.innerHTML = tempContent;
  });

  button2.addEventListener('click', function () {
    var tempContent = content1.innerHTML;
    content1.innerHTML = content2.innerHTML;
    content2.innerHTML = tempContent;
  });

  // slide2
  button3.addEventListener('click', function () {
    var tempContent = content3.innerHTML;
    content3.innerHTML = content4.innerHTML;
    content4.innerHTML = tempContent;
  });
  button4.addEventListener('click', function () {
    var tempContent = content3.innerHTML;
    content3.innerHTML = content4.innerHTML;
    content4.innerHTML = tempContent;
  });

  // slide3
  button5.addEventListener('click', function () {
    var tempContent = content5.innerHTML;
    content5.innerHTML = content6.innerHTML;
    content6.innerHTML = tempContent;
  });
  button6.addEventListener('click', function () {
    var tempContent = content5.innerHTML;
    content5.innerHTML = content6.innerHTML;
    content6.innerHTML = tempContent;
  });
});
