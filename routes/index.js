var express = require('express');
var router = express.Router();

//para las preguntas
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz - Omar M.R' });
});


//para las preguntas 
router.get('/quizes/question',quizController.question);
router.get('/quizes/answer',quizController.answer);

module.exports = router;
