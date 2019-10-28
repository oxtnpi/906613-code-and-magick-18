'use strict';
(function () {

  var NAMES_ARRAY = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LAST_NAMES_ARRAY = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
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

  var generateRandomCharacter = function () {
    return {
      name: NAMES_ARRAY[getRandomInBounds(0, NAMES_ARRAY.length - 1)] + ' ' + LAST_NAMES_ARRAY[getRandomInBounds(0, LAST_NAMES_ARRAY.length - 1)],
      coatColor: COAT_COLOR_ARRAY[getRandomInBounds(0, COAT_COLOR_ARRAY.length - 1)],
      eyesColor: EYES_COLOR_ARRAY[getRandomInBounds(0, EYES_COLOR_ARRAY.length - 1)]
    };
  };

  var characterData = [];

  for (var i = 0; i < CHARACTER_CONST; i++) {
    characterData.push(generateRandomCharacter());
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var j = 0; j < characterData.length; j++) {
    fragment.appendChild(renderWizard(characterData[j]));
  }
  similarListElement.appendChild(fragment);

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
