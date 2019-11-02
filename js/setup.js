'use strict';
(function () {

  var COAT_COLOR_ARRAY = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR_ARRAY = ['black', 'red', 'blue', 'yellow', 'green'];
  var CHARACTER_CONST = 4;


  var similarListElement = window.userDialog.userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandomInBounds = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderCharacters = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < CHARACTER_CONST; i++) {
      var randomIndex = getRandomInBounds(0, wizards.length - 1);
      fragment.appendChild(renderWizard(wizards[randomIndex]));
      wizards.splice(randomIndex, 1);
    }
    similarListElement.appendChild(fragment);
  };

  var onFail = function (err) {
    window.errorMessage.show(err);
  };

  window.backend.load(renderCharacters, onFail);

  var setupWizard = document.querySelector('.setup-wizard');

  var wizardCoat = setupWizard.querySelector('.wizard-coat');

  var wizardEyes = setupWizard.querySelector('.wizard-eyes');

  var fireball = document.querySelector('.setup-fireball-wrap');

  var setupPlayer = document.querySelector('.setup-player');

  var coatColorInput = setupPlayer.querySelector('input[name = coat-color]');
  var eyesColorInput = setupPlayer.querySelector('input[name = eyes-color]');
  var fireballColorInput = fireball.querySelector('input[name = fireball-color]');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = COAT_COLOR_ARRAY[getRandomInBounds(0, COAT_COLOR_ARRAY.length - 1)];
    coatColorInput.value = wizardCoat.style.fill;
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = EYES_COLOR_ARRAY[getRandomInBounds(0, EYES_COLOR_ARRAY.length - 1)];
    eyesColorInput.value = wizardEyes.style.fill;
  });

  fireball.addEventListener('click', function () {
    var FIREBALL_COLOR_ARRAY = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var fireballColor = FIREBALL_COLOR_ARRAY[getRandomInBounds(0, FIREBALL_COLOR_ARRAY.length - 1)];
    fireball.style.backgroundColor = fireballColor;
    fireballColorInput.value = fireballColor;
  });
})();
