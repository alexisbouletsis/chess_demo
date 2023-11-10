'use strict';

var utils = require('../utils/writer.js');
var Student = require('../service/StudentService');

module.exports.getStudent = function getStudent (req, res, next, studentID) {
  Student.getStudent(studentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
