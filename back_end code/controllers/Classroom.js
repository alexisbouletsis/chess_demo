'use strict';

var utils = require('../utils/writer.js');
var Classroom = require('../service/ClassroomService');

module.exports.getClassroom = function getClassroom (req, res, next, groupID) {
  Classroom.getClassroom(groupID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupGroupIDClassroomChessboardGET = function groupGroupIDClassroomChessboardGET (req, res, next, groupID, userID) {
  Classroom.groupGroupIDClassroomChessboardGET(groupID, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupGroupIDClassroomChessboardSetEditorPOST = function groupGroupIDClassroomChessboardSetEditorPOST (req, res, next, groupID, userID) {
  Classroom.groupGroupIDClassroomChessboardSetEditorPOST(groupID, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupGroupIDClassroomVideocallGET = function groupGroupIDClassroomVideocallGET (req, res, next, groupID, userID) {
  Classroom.groupGroupIDClassroomVideocallGET(groupID, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateClassroom = function updateClassroom (req, res, next, body, groupID) {
  Classroom.updateClassroom(body, groupID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
