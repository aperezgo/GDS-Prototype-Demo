const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/juggling-balls-answer', function (req, res) {
  
  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['how-many-balls']
    // Check whether the variable matches a condition
    if (howManyBalls == "three-or-more"){
      // Send user to next page
      res.redirect('/juggling-trick')
    } else {
      // Send user to ineligible page
      res.redirect('/ineligible')
    };
})

router.post('/juggling-balls-edited', function (req, res) {
  
  // Make a variable and give it the value from 'how-many-balls'
  var howManyBallsEdited = req.session.data['how-many-balls-edited']
    // Check whether the variable matches a condition
    if (howManyBallsEdited == "three-or-more"){
      // Send user to next page
      res.redirect('/check-answers-edited')
    } else {
      // Send user to ineligible page
      res.redirect('/ineligible')
    };
})

router.post('/juggling-trick-edited', function (req, res) {
  
  // Make a variable and give it the value from 'how-many-balls'
  var jugglingTrickEdited = req.session.data['most-impressive-trick']
    // Check whether the variable matches a condition
    if (jugglingTrickEdited == true){
      // Send user to next page
      res.redirect('/check-answers-edited')
    };
})
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names
 // var howManyBallsEdited = req.session.data['edited']

 // if (howManyBallsEdited === true) {
   // res.redirect('/check-answers')
 // } 
//})

//router.post('/check-answers', function (req, res) {

  //req.session.data['completed'] = true;
  
  //res.render('check-answers')

//})

module.exports = router

