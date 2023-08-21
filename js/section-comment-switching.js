document.addEventListener('DOMContentLoaded', function () {
  var activeIndex = 10; // این متغیر نماینده شاخص عنصر فعال در حال حاضر است

  function switchActive(index) {
    var currentActive = document.querySelector('.active');
    var currentButton = document.querySelector('.btn-active');

    if (currentActive) {
      currentActive.classList.remove('active');
    }

    if (currentButton) {
      currentButton.classList.remove('btn-active');
    }

    var newActive = document.getElementById(index);
    var newButton = document.getElementById('btn-' + index);

    if (newActive) {
      newActive.classList.add('active');
    }

    if (newButton) {
      newButton.classList.add('btn-active');
    }
  }

  // تابع برای کلیک روی دکمه‌ها
  function handleButtonClick(event) {
    var clickedButton = event.target;
    var buttonIndex = parseInt(clickedButton.id.split('-')[1]);
    switchActive(buttonIndex);
  }

  // اضافه کردن رویداد کلیک به هر دکمه
  var buttons = document.querySelectorAll("i[id^='btn-']");
  buttons.forEach(function (button) {
    button.addEventListener('click', handleButtonClick);
  });

  // تابع برای تغییر اکتیو هر 3 ثانیه
  function switchActivePeriodically() {
    switchActive(activeIndex);
    activeIndex++;

    if (activeIndex > 12) {
      activeIndex = 10; // برگرداندن به ایدی 10 پس از ایدی 12
    }
  }

  setInterval(switchActivePeriodically, 5000); // اجرای تابع switchActive هر 3 ثانیه
});
