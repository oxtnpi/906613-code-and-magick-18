'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TEXT_X = 120;
var TEXT_LINE_1 = 40;
var TEXT_LINE_2 = 60;
var COLUMN_WIDTH = 40;
var COLUMN_BASE_Y = 100;
var COLUMN_BASE_X = 140;
var GAP = 50;
var MAX_COLUMN_HEIGHT = 150;
var NAME_Y = 270;
var SCORE_OFFSET = 10;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxInArray = function (arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

var generateBlue = function () {
  return 'hsl(240,' + Math.round(Math.random() * 100) + '%, 50%)';
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y + CLOUD_Y, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_LINE_1);
  ctx.fillText('Список результатов:', TEXT_X, TEXT_LINE_2);

  var maxTime = getMaxInArray(times);

  for (var i = 0; i < times.length; i++) {
    var columnHeight = Math.round((MAX_COLUMN_HEIGHT * times[i]) / maxTime);
    var offsetY = MAX_COLUMN_HEIGHT - columnHeight;
    var columnX = COLUMN_BASE_X + (COLUMN_WIDTH + GAP) * i;
    var scoreY = COLUMN_BASE_Y + offsetY - SCORE_OFFSET;
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]), columnX, scoreY);
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : generateBlue();
    ctx.fillRect(columnX, COLUMN_BASE_Y + offsetY, COLUMN_WIDTH, columnHeight);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], columnX, NAME_Y);
  }
};
