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


module.exports = router
