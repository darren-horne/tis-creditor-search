const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'creditor-type-answer'
router.post('/creditor-type-answer', function (req, res) {

  // Make a variable and give it the value from 'creditor type'
  var creditortype = req.session.data['creditor-type']

  // Check whether the variable matches a condition
  if (creditortype == "Personal"){
    // Send user to the enter a personal creditor details page
    res.redirect('/enter-personal-creditor')
  } else {
    // Send user to the enter a business creditor details page
    res.redirect('/enter-business-creditor')
  }

})


// Run this code when a form is submitted to 'another-creditor'
router.post('/another-creditor-form', function (req, res) {

  // Make a variable and give it the value from 'another creditor'
  var anothercreditor = req.session.data['another-creditor']

  // Check whether the variable matches a condition
  if (anothercreditor == "yes"){
    // Send user to start to enter a new creditor
    res.redirect('/money-you-owe')
  } else {
    // Send user to task list page
    res.redirect('/overview-complete')
  }

})

// Run this code when a form is submitted to 'search results'
router.post('/search-results-answer', function (req, res) {

  // Make a variable and give it the value from 'search results answer'
  var searchresultsanswer = req.session.data['search-results-radios']

  // Check whether the variable matches a condition
  if (searchresultsanswer == "None of the above"){
    // Send user to manually enter a new business creditor
    res.redirect('/enter-new-business-creditor')
  } else {
    // Send user to enter about the debt for the business creditor
    res.redirect('/amount-you-owe-business-existing')
  }

})

// Run this code when a form is submitted to 'search results'
router.post('/search-input', function (req, res) {

  // Make a variable and give it the value from 'search results answer'
  var searchinput = req.session.data['search-organisation']

  // Check whether the variable matches a condition
  if (searchinput == "Natwest"){
    // Send user to manually enter a new business creditor
    res.redirect('/enter-business-creditor-results')
  } else {
    // Send user to enter about the debt for the business creditor
    res.redirect('/enter-business-creditor-no-results')
  }

})


module.exports = router
