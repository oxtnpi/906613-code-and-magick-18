'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  window.userDialog = {userDialog: userDialog};
  var userDialogFooter = document.querySelector('.setup-similar');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');

  var openUserDialog = function () {
    userDialog.classList.remove('hidden');
  };

  var closeUserDialog = function () {
    userDialog.classList.add('hidden');
  };

  var openCharacterMenu = function () {
    userDialogFooter.classList.remove('hidden');
  };

  var onPopupEscPress = function (evt) {
    if (evt.target.name !== 'username') {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  var openPopup = function () {
    openUserDialog();
    openCharacterMenu();
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    closeUserDialog();
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup();
  });


  setupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEscEvent(evt, closeUserDialog);
  });

  var userNameInput = document.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function (evt) {
    var SHORT_NAME_CONST = 2;

    var target = evt.target;
    if (target.value.length < SHORT_NAME_CONST) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });

  var dialogHandle = document.querySelector('.upload');
  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (onClickEvt) {
          onClickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
