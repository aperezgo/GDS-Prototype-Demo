const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/juggling-trick', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  const howManyBalls = req.session.data['how-many-balls'];
  // Check whether the variable matches a condition
  if (howManyBalls === "three-or-more") {
    // Send user to next page
    res.redirect('/juggling-trick');
  } else {
    // Send user to ineligible page
    res.redirect('/ineligible');
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


module.exports = router

