'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var userDialogFooter = document.querySelector('.setup-similar');
userDialogFooter.classList.remove('hidden');


var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomInBounds = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var generateRandomCharacter = function () {
  var namesArr = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var lastNamesArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColorArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColorArr = ['black', 'red', 'blue', 'yellow', 'green'];

  return {
    name: namesArr[getRandomInBounds(0, namesArr.length - 1)] + ' ' + lastNamesArr[getRandomInBounds(0, lastNamesArr.length - 1)],
    coatColor: coatColorArr[getRandomInBounds(0, coatColorArr.length - 1)],
    eyesColor: eyesColorArr[getRandomInBounds(0, eyesColorArr.length - 1)]
  };
};

var characterData = [];

for (var i = 0; i < 4; i++) {
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
