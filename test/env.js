'use strict';

const $ = require ('sanctuary-def');

const S = require ('..');

const eq = require ('./internal/eq');


test ('env', () => {

  eq (typeof S.env) ('object');
  eq (S.is ($.Array ($.Type)) (S.env)) (true);

});
