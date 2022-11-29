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

// Run this code when a form is submitted to 'existing-business-debt-type-radio-answer'
router.post('/existing-business-debt-type-radio-answer', function (req, res) {

  // Make a variable and give it the value from 'creditor type'
  var existingbusinessdebttype = req.session.data['type-of-debt-business-existing']

  // Check whether the variable matches a condition
  if (existingbusinessdebttype == "Personal loan (unsecured)"){
    // Send user to the enter a personal creditor details page
    res.redirect('/amount-you-owe-business-existing-debt-reason')
  } else {
    // Send user to the enter a business creditor details page
    res.redirect('/review-debt-entered-business')
  }

})

// Run this code when a form is submitted to 'new-business-debt-type-radio-answer'
router.post('/new-business-debt-type-radio-answer', function (req, res) {

  // Make a variable and give it the value from 'creditor type'
  var newbusinessdebttype = req.session.data['type-of-debt-business-new']

  // Check whether the variable matches a condition
  if (newbusinessdebttype == "Personal loan (unsecured)"){
    // Send user to the enter a personal creditor details page
    res.redirect('/amount-you-owe-business-new-debt-reason')
  } else {
    // Send user to the enter a business creditor details page
    res.redirect('/review-debt-entered-business-new')
  }

})


// Run this code when a form is submitted to 'personal type of debt'
//router.post('personal-type-of-debt', function (req, res) {

  // Make a variable and give it the value from 'creditor type'
  //var personaldebttype = req.session.data['type-of-debt-personal']

  // Check whether the variable matches a condition
  //if (personaldebttype == "Private loan"){
    // Send user to the enter a more details
    //res.redirect('/amount-you-owe-personal-debt-reason')
  //} else {
    // Send user to the review page
    //res.redirect('/review-debt-entered-personal')
  //}

//})



module.exports = router
