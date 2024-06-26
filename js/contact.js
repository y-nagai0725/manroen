//CONTACTページ用JS
document.addEventListener('DOMContentLoaded', function () {
  const privacyCheckbox = document.querySelector('.contents__form-checkbox');

  const submitButton = document.getElementById('contents__submit');

  privacyCheckbox.addEventListener('click', function () {
    if (this.checked) {
      submitButton.classList.remove('disabled');
    } else {
      submitButton.classList.add('disabled');
    }
  });
}, false);