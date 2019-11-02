'use strict';
(function () {
  var popup;

  var hidePopup = function () {
    popup.style.display = 'none';
  };

  var createPopup = function (message) {
    popup = document.createElement('section');
    popup.style.position = 'absolute';
    popup.style.left = '50%';
    popup.style.top = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.zIndex = 10;
    popup.style.padding = '10px';
    popup.style.background = 'red';
    var popupMessage = document.createElement('h2');
    popupMessage.innerText = message;
    popup.appendChild(popupMessage);
    var popupCloseButton = document.createElement('button');
    popupCloseButton.addEventListener('click', hidePopup);
    popup.addEventListener('keydown', function (evt) {
      window.util.isEnterEvent(evt, hidePopup);
    });
    popupCloseButton.innerText = 'Закрыть';
    popupCloseButton.style.margin = '0px auto';
    popupCloseButton.style.display = 'block';
    popup.appendChild(popupCloseButton);
    document.body.appendChild(popup);
  };

  window.errorMessage = {
    show: function (message) {
      createPopup(message);
    },
    hide: function () {
      hidePopup();
    }
  };
})();
