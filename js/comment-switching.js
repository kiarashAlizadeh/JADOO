document.addEventListener('DOMContentLoaded', function () {
  var button1 = document.getElementById('up-chevron-comment');
  var button2 = document.getElementById('down-chevron-comment');
  var content1 = document.getElementById('comment-1');
  var content2 = document.getElementById('comment-2');

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
});
