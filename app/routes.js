const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'creditor-type-answer'
router.post('/creditor-type-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var creditortype = req.session.data['creditor-type']

  // Check whether the variable matches a condition
  if (creditortype == "Personal"){
    // Send user to next page
    res.redirect('/enter-personal-creditor')
  } else {
    // Send user to ineligible page
    res.redirect('/enter-business-creditor')
  }

})


// Run this code when a form is submitted to 'another-creditor'
router.post('/another-creditor-form', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var anothercreditor = req.session.data['another-creditor']

  // Check whether the variable matches a condition
  if (anothercreditor == "yes"){
    // Send user to next page
    res.redirect('/money-you-owe')
  } else {
    // Send user to ineligible page
    res.redirect('/start')
  }

})

// Run this code when a form is submitted to 'creditor-type-answer'
router.post('/search-results-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var searchresultsanswer = req.session.data['search-results-radios']

  // Check whether the variable matches a condition
  if (searchresultsanswer == "None of the above"){
    // Send user to next page
    res.redirect('/enter-new-business-creditor')
  } else {
    // Send user to ineligible page
    res.redirect('/amount-you-owe-business-existing')
  }

})

module.exports = router
