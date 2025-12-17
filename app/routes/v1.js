module.exports = function (router) {

// ARE YOU THE PARTNER

router.post('/partner-answer-v1', function(request, response) {

  var relationship = request.session.data['partner']
  if (relationship == "yes"){
      response.redirect("/v1/eligibility/same-address")
  } else {
      response.redirect("/v1/eligibility/cannot-use-private-beta")
  }
})

// WERE YOU LIVING TOGETHER

router.post('/same-address-answer-v1', function(request, response) {

  var address = request.session.data['sameaddress']
  if (address == "no"){
      response.redirect("/v1/eligibility/cannot-use-private-beta")
  } else {
      response.redirect("/v1/eligibility/responsible-for-paying")
  }
})

// RESPONSIBLE FOR PAYING

router.post('/responsible-answer-v1', function(request, response) {

  var responsible = request.session.data['responsibleforpaying']
  if (responsible == "yes"){
      response.redirect("/v1/eligibility/where-you-live")
  } else {
      response.redirect("/v1/eligibility/not-responsible")
  }
})

// WHERE YOU LIVE

router.post('/whereyoulive-answer-v1', function(request, response) {

  var country = request.session.data['whereyoulive']
  if (country == "abroad"){
    response.redirect("/v1/eligibility/live-outside-uk")
  } else if (country == "northern-ireland"){
        response.redirect("/v1/eligibility/live-in-ni")
  } else if (country == "scotland"){
        response.redirect("/v1/eligibility/live-in-scotland")
  } else {
      response.redirect("/v1/eligibility/benefits")
  }
})

  // BENEFITS ANSWER

  router.post('/benefits-answer-v1', function(request, response) {

    var benefits = request.session.data['benefits']
    if (benefits == "no"){
        response.redirect("/v1/eligibility/not-on-qb")
    } else {
        response.redirect("/v1/eligibility/usually-live-in-uk")
    }
})

  // DID THE DECEASED LIKE IN THE UK

  router.post('/deceaseduk-answer-v1', function(request, response) {

    var deceaseduk = request.session.data['deceaseduk']
    if (deceaseduk == "no"){
        response.redirect("/v1/eligibility/deceased-outside-uk")
    } else {
        response.redirect("/v1/eligibility/funeral-taken-place")
    }
})

  // FUNERAL IN UK

  router.post('/funeralinuk-answer-v1', function(request, response) {

    var funeralinuk = request.session.data['funeralinuk']
    if (funeralinuk == "no"){
        response.redirect("/v1/eligibility/funeral-in-eea")
    } else {
        response.redirect("/v1/eligibility/check-answers-eligibility")
    }
})

  // FUNERAL IN EEA

  router.post('/funeraleea-answer-v1', function(request, response) {

    var funeraleea = request.session.data['funeraleea']
    if (funeraleea == "no"){
        response.redirect("/v1/eligibility/funeral-outside-uk")
    } else {
        response.redirect("/v1/eligibility/check-answers-eligibility")
    }
})

  // FINANCIAL AFFAIRS

  router.post('/financial-affairs-answer-v1', function(request, response) {

    var financialaffairs = request.session.data['financialaffairs']
    if (financialaffairs == "me"){
        response.redirect("/v1/money/bank-accounts")
    } else {
        response.redirect("/v1/money/responsible-for-finances-name")
    }
})

  // MONEY IN BANK ACCOUNTS

  router.post('/bankaccounts-answer-v1', function(request, response) {

    var bankaccounts = request.session.data['bankaccounts']
    if (bankaccounts == "yes"){
        response.redirect("/v1/money/exact-amount-bank-account")
    } else {
        response.redirect("/v1/money/isa")
    }
})

  // MONEY IN JOINT ACCOUNT

  router.post('/jointaccount-answer-v1', function(request, response) {

    var jointaccount = request.session.data['jointaccount']
    if (jointaccount == "some"){
        response.redirect("/v1/money/exact-amount-joint-account")
    } else if (jointaccount == "all"){
        response.redirect("/v1/money/partner-joint-account")    
    } else {
        response.redirect("/v1/money/isa")
    }
})

  // IS PARTNER OTHER JOINT ACCOUNT HOLDER

  router.post('/partnerjointaccount-answer-v1', function(request, response) {

    var partnerjointaccount = request.session.data['partnerjointaccount']
    if (partnerjointaccount == "no"){
        response.redirect("/v1/money/isa")
    } else {
        response.redirect("/v1/money/isa")
    }
})

  // MONEY IN ISAS

  router.post('/isas-answer-v1', function(request, response) {

    var isas = request.session.data['isas']
    if (isas == "yes"){
        response.redirect("/v1/money/exact-amount-isa")
    } else {
        response.redirect("/v1/money/in-cash")
    }
})

  // MONEY IN CASH

  router.post('/cash-answer-v1', function(request, response) {

    var cash = request.session.data['cash']
    if (cash == "yes"){
        response.redirect("/v1/money/exact-amount-cash")
    } else {
        response.redirect("/v1/money/plans-filter")
    }
})

  // PLANS FILTER QUESTION

  router.post('/plansfilter-answer-v1', function(request, response) {

    var plansfilter = request.session.data['plansfilter']
    if (plansfilter == "no"){
        response.redirect("/v1/money/burial-club")
    } else {
        response.redirect("/v1/money/workplace-pension")
    }
})

  // WORKPLACE PENSION

  router.post('/pension-answer-v1', function(request, response) {

    var pension = request.session.data['pension']
    if (pension == "yes"){
        response.redirect("/v1/money/exact-amount-pension")
    } else {
        response.redirect("/v1/money/life-insurance")
    }
})

  // LIFE INSURANCE

  router.post('/lifeinsurance-answer-v1', function(request, response) {

    var lifeinsurance = request.session.data['lifeinsurance']
    if (lifeinsurance == "yes"){
        response.redirect("/v1/money/exact-amount-insurance")
    } else {
        response.redirect("/v1/money/funeral-plan")
    }
})

  // FUNERAL PLAN

  router.post('/funeralplan-answer-v1', function(request, response) {

    var funeralplan = request.session.data['funeralplan']
    if (funeralplan == "yes"){
        response.redirect("/v1/money/funeral-plan-cover-costs")
    } else {
        response.redirect("/v1/money/armed-forces")
    }
})

  // FUNERAL PLAN COVER ANY OF THE FUNERAL COSTS

  router.post('/funeralplancover-answer-v1', function(request, response) {

    var funeralplancover = request.session.data['funeralplancover']
    if (funeralplancover == "no"){
        response.redirect("/v1/money/funeral-plan-refund")
    } else {
        response.redirect("/v1/money/120-limit")
    }
})

  // FUNERAL PLAN REFUND

  router.post('/funeralplanrefund-answer-v1', function(request, response) {

    var funeralplanrefund = request.session.data['funeralplanrefund']
    if (funeralplanrefund == "yes"){
        response.redirect("/v1/money/exact-amount-funeral-refund")
    } else {
        response.redirect("/v1/money/armed-forces")
    }
})

  // BURIAL CLUB

  router.post('/burialclub-answer-v1', function(request, response) {

    var burialclub = request.session.data['burialclub']
    if (burialclub == "yes"){
        response.redirect("/v1/money/exact-amount-burial-club")
    } else {
        response.redirect("/v1/money/other-money")
    }
})

  // AMRED FORCES

  router.post('/armedforces-answer-v1', function(request, response) {

    var armedforces = request.session.data['armedforces']
    if (armedforces == "yes"){
        response.redirect("/v1/money/war-pension")
    } else {
        response.redirect("/v1/money/burial-club")
    }
})

  // WAR PENSION

  router.post('/warpension-answer-v1', function(request, response) {

    var warpension = request.session.data['warpension']
    if (warpension == "yes"){
        response.redirect("/v1/money/exact-amount-war-pension")
    } else {
        response.redirect("/v1/money/burial-club")
    }
})

  // OTHER MONEY

  router.post('/othermoney-answer-v1', function(request, response) {

    var othermoney = request.session.data['othermoney']
    if (othermoney == "yes"){
        response.redirect("/v1/money/exact-amount-other-money")
    } else {
        response.redirect("/v1/money/death-certificates")
    }
})

  // PERMISSION TO COLLECT

  router.post('/permission-to-collect-v1', function(request, response) {

    var permission = request.session.data['permission']
    if (permission == "yes"){
        response.redirect("/v1/money/check-answers-money")
    } else {
        response.redirect("/v1/money/permission-to-collect-in-future")
    }
})

  // FUNERAL DIRECTOR

  router.post('/director-answer-v1', function(request, response) {

    var director = request.session.data['director']
    if (director == "yes"){
        response.redirect("/v1/funeral/provider-name")
    } else {
        response.redirect("/v1/funeral/someone-else")
    }
})

  // SOMEONE ELSE ARRANGING 

  router.post('/someoneelse-answer-v1', function(request, response) {

    var someoneelse = request.session.data['someoneelse']
    if (someoneelse == "yes"){
        response.redirect("/v1/funeral/provider-name")
    } else {
        response.redirect("/v1/funeral/have-you-used-money-from-deceased")
    }
})

   // HAVE YOU USED MONEY FROM DECEASED TO PAY FUNERAL (asked if arranging yourself)

   router.post('/haveyouusedmoney-answer-v1', function(request, response) {

    var haveyouusedmoney = request.session.data['haveyouusedmoney']
    if (haveyouusedmoney == "yes"){
        response.redirect("/v1/funeral/exact-amount-money-used")
    } else {
        response.redirect("/v1/funeral/who-paid-money")
    }
})

  // DO YOU HAVE A FUNERAL BILL OR SIGNED CONTRACT YET

  router.post('/funeralbill-answer-v1', function(request, response) {

    var funeralbill = request.session.data['funeralbill']
    if (funeralbill == "yes"){
        response.redirect("/v1/funeral/bill-in-your-name")
    } else {
        response.redirect("/v1/funeral/will-bill-be-in-your-name")
    }
})

 // BILL IN YOUR NAME 

router.post('/billinyourname-answer-v1', function(request, response) {

    var billinyourname = request.session.data['billinyourname']
    if (billinyourname == "no"){
        response.redirect("/v1/funeral/arranged-on-your-behalf")    
    } else {
        response.redirect("/v1/funeral/money-paid-off-bill")
    }
  })

  // PAID MONEY OFF BILL

router.post('/moneyoffbill-answer-v1', function(request, response) {

    var moneyoffbill = request.session.data['moneyoffbill']
    if (moneyoffbill == "yes"){
        response.redirect("/v1/funeral/exact-amount-money-off-bill")
    } else {
        response.redirect("/v1/funeral/items-not-on-bill")
    }
})

// USED MONEY FROM DECEASED TO PAY FUNERAL

router.post('/usedmoney-answer-v1', function(request, response) {

    var usedmoney = request.session.data['usedmoney']
    if (usedmoney == "yes"){
        response.redirect("/v1/funeral/exact-amount-used-money")
    } else {
        response.redirect("/v1/funeral/who-paid-money")
    }
})

// WHO PAID MONEY TO FUNERAL DIRECTOR

   router.post('/whopaidmoney-answer-v1', function(request, response) {

    var whopaidfuneraldirector = request.session.data['whopaidfuneraldirector']
    if (whopaidfuneraldirector.includes("friend-family")){
    response.redirect("/v1/funeral/pay-money-back")
    } else {
        response.redirect("/v1/funeral/items-not-on-bill")
    }
})

// WHO PAID MONEY TO ORG OR PERSON ARRANGING

   router.post('/whopaidmoney-answer-v1', function(request, response) {

    var whopaidorganisation = request.session.data['whopaidorganisation']
    if (whopaidorganisation.includes("friend-family")){
    response.redirect("/v1/funeral/pay-money-back")
    } else {
        response.redirect("/v1/funeral/items-not-on-bill")
    }
})

// ITEMS NOT ON FUNERAL BILL

    router.post('/itemsnotonbill-answer-v1', function(request, response) {
    var itemsnotonbill = request.session.data['itemsnotonbill']
    if (itemsnotonbill == "yes"){
        response.redirect("/v1/funeral/other-costs") 
    } else {
        response.redirect("/v1/funeral/claim-travel")
    }
})

   // CLAIM TRAVEL ANSWER

   router.post('/claimtravel-answer-v1', function(request, response) {

    var claimtravel = request.session.data['claimtravel']
    if (claimtravel == "yes"){
        response.redirect("/v1/funeral/travel-expenses")
    } else {
        response.redirect("/v1/funeral/check-answers-funeral")
    }
})

   // DOCUMENTS ANSWER

router.post('/documents-answer-v1', function(request, response) {

    var documents = request.session.data['documents']
    if (documents.includes("bill")){
        response.redirect("/v1/funeral/bill-in-your-name")
    } else if (documents == "contract"){
        response.redirect("/v1/funeral/bill-in-your-name")
    } else if (documents == "estimate"){
        response.redirect("/v1/funeral/will-bill-be-in-your-name")
    } else {
        response.redirect("/v1/funeral/will-bill-be-in-your-name")
    }
})

   // ARRANGED ON YOUR BEHALF (WHEN CITIZEN HAS BILL OR SIGNED CONTRACT)

   router.post('/arrangementsonyourbehalf-answer-v1', function(request, response) {

    var arrangementsonyourbehalf = request.session.data['arrangementsonyourbehalf']
    if (arrangementsonyourbehalf == "yes"){
        response.redirect("/v1/funeral/money-paid-off-bill")
    } else {
        response.redirect("/v1/funeral/no-permission")
    }
})

   // NO PERMISSION GIVEN (WHEN CITIZEN HAS BILL OR SIGNED CONTRACT)

   router.post('/permission-answer-v1', function(request, response) {

    var nopermission = request.session.data['nopermission']
    if (nopermission == "yes"){
        response.redirect("/v1/funeral/money-paid-off-bill")
    } else {
        response.redirect("/index")
    }
})

   // NO PERMISSION GIVEN (ESTIMATE OR NO DOCUMENTS)

   router.post('/permission-other-answer-v1', function(request, response) {

    var nopermissionother = request.session.data['nopermissionother']
    if (nopermissionother == "yes"){
        response.redirect("/v1/funeral/claim-travel-in-future")
    } else {
        response.redirect("/index")
    }
})

 // WILL BILL BE IN YOUR NAME 

 router.post('/willbillbeinyourname-answer-v1', function(request, response) {

    var willbillbeinyourname = request.session.data['willbillbeinyourname']
    if (willbillbeinyourname == "no"){
        response.redirect("/v1/funeral/allowing-on-your-behalf")    
    } else {
        response.redirect("/v1/funeral/claim-travel-in-future")
    }
  })

   // ARE YOU ALLOWING SOMEONE ON YOUR BEHALF (ESTIMATE OR NO DOCUMENTS)

 router.post('/allowingonyourbehalf-answer-v1', function(request, response) {

    var allowingonyourbehalf = request.session.data['allowingonyourbehalf']
    if (allowingonyourbehalf == "yes"){
        response.redirect("/v1/funeral/claim-travel-in-future")    
    } else {
        response.redirect("/v1/funeral/no-permission")
    }
  })

// WHAT TYPE OF TRAVEL ROUTES

  router.post('/transporttype-answer-v1', function(request, response) {

    var transporttype = request.session.data['transporttype']
    if (transporttype.includes("car")){
        response.redirect("/v1/funeral/check-answers-funeral")
    } else {
        response.redirect("/v1/funeral/how-much-paid")
    }
})

// ALTERNATIVE FORMATS

  router.post('/alternativeformat-answer-v1', function(request, response) {

    var alternative = request.session.data['alternative']
    if (alternative == "yes"){
        response.redirect("/v1/contact/alternative-format-select")
    } else {
        response.redirect("/v1/contact/check-answers-bankandcontact")
    }
})

}