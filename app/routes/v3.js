module.exports = function (router) {

// GENERIC NEXT PAGE ELEMENT

// router.post('*', function (req, res, next) {
//   console.log(req.body);
//   if (req.body['next-page']) {
//     res.redirect(req.body['next-page']);
//   } else {
//     next();
//   }
// });

var date = new Date(); //get todays date

// APPLICATION START

router.post('/started-application-answer-v3', function(request, response) {

  var applicationstarted = request.session.data['startedapplication']
  if (applicationstarted == "yes-reference"){
    response.redirect("/v3/save/application-reference")
  } else if (applicationstarted == "yes-no-reference"){
        response.redirect("/v3/save/restart")
  } else if (applicationstarted == "no"){
        response.redirect("/v3/eligibility/before-you-start")
  }
})

// APPLICATION REFERENCE

router.post('/application-reference-answer-v3', function(request, response) {

  var referenceNumber = request.session.data['referenceNumber']
  if (referenceNumber == "FEJ OIY"){
    response.redirect("/v3/save/task-list")
  } else {
      response.redirect("/v3/save/application-not-found")
  }
})

// router.post('/application-reference-answer-v3', function(request, response) {

//   var referenceNumber = request.session.data['referenceNumber']
//   if (referenceNumber == "FEJ OIY"){
//     response.redirect("/v3/save/task-list-partner")
//   } else if (referenceNumber == "QCT RVL"){
//         response.redirect("/v3/save/task-list-ifm")
//   } else if (referenceNumber == "WLP XXD"){
//         response.redirect("/v3/save/task-list-cfm")
//   } else {
//       response.redirect("/v3/save/application-not-found")
//   }
// })

// RELATIONSHIP

router.post('/relationship-answer-v3', function(request, response) {

  var relationship = request.session.data['relationshiptodeceased']
  if (relationship == "partner"){
      response.redirect("/v3/eligibility/same-address")
  } else {
      response.redirect("/v3/eligibility/deceased-have-partner")
  }
})

// RESPONSIBLE FOR PAYING

router.post('/responsible-answer-v3', function(request, response) {

  var responsible = request.session.data['responsibleforpaying']
  if (responsible == "yes"){
      response.redirect("/v3/eligibility/where-you-live")
  } else {
      response.redirect("/v3/eligibility/not-responsible")
  }
})

// WHERE YOU LIVE

router.post('/whereyoulive-answer-v3', function(request, response) {

  var country = request.session.data['whereyoulive']
  if (country == "abroad"){
    response.redirect("/v3/eligibility/live-outside-uk")
  } else if (country == "northern-ireland"){
        response.redirect("/v3/eligibility/live-in-ni")
  } else if (country == "scotland"){
        response.redirect("/v3/eligibility/live-in-scotland")
  } else {
      response.redirect("/v3/eligibility/benefits")
  }
})

  // BENEFITS ANSWER

  router.post('/benefits-answer-v3', function(request, response) {

    var benefits = request.session.data['benefits']
    if (benefits == "no"){
        response.redirect("/v3/eligibility/not-on-qb")
    } else {
        response.redirect("/v3/eligibility/usually-live-in-uk")
    }
})

  // DID THE DECEASED LIKE IN THE UK

  router.post('/deceaseduk-answer-v3', function(request, response) {

    var deceaseduk = request.session.data['deceaseduk']
    if (deceaseduk == "no"){
        response.redirect("/v3/eligibility/deceased-outside-uk")
    } else {
        response.redirect("/v3/eligibility/funeral-taken-place")
    }
})

  // FUNERAL DATE

  router.post('/funeradate-answer-v3', function(request, response) {

    var funeraldatequestion = request.session.data['funeral-date-question']
    if (funeraldatequestion == "yes"){
        response.redirect("/v3/eligibility/over-6-months-ago")
    } else {
        response.redirect("/v3/eligibility/funeral-in-uk")
    }
})

  // FUNERAL IN UK

  router.post('/funeralinuk-answer-v3', function(request, response) {

    var funeralinuk = request.session.data['funeralinuk']
    if (funeralinuk == "no"){
        response.redirect("/v3/eligibility/funeral-in-eea")
    } else {
        response.redirect("/v3/eligibility/check-answers-eligibility")
    }
})

  // FUNERAL IN EEA

  router.post('/funeraleea-answer-v3', function(request, response) {

    var funeraleea = request.session.data['funeraleea']
    if (funeraleea == "no"){
        response.redirect("/v3/eligibility/funeral-outside-uk")
    } else {
        response.redirect("/v3/eligibility/check-answers-eligibility")
    }
})

 // FINANCIAL AFFAIRS

  router.post('/financial-affairs-answer-v3', function(request, response) {

    var financialaffairs = request.session.data['financialaffairs']
    if (financialaffairs == "me"){
        response.redirect("/v3/money/bank-accounts")
    } else {
        response.redirect("/v3/money/responsible-for-finances-name")
    }
})

  // MONEY IN BANK ACCOUNTS

  router.post('/bankaccounts-answer-v3', function(request, response) {

    var bankaccounts = request.session.data['bankaccounts']
    if (bankaccounts == "yes"){
        response.redirect("/v3/money/exact-amount-bank-account")
    } else {
        response.redirect("/v3/money/isa")
    }
})

  // MONEY IN JOINT ACCOUNT

  router.post('/jointaccount-answer-v3', function(request, response) {

    var jointaccount = request.session.data['jointaccount']
    if (jointaccount == "yes"){
        response.redirect("/v3/money/exact-amount-joint-account")
    } else if (jointaccount == "all"){
        response.redirect("/v3/money/partner-joint-account")    
    } else {
        response.redirect("/v3/money/isa")
    }
})

  // IS PARTNER OTHER JOINT ACCOUNT HOLDER

  router.post('/partnerjointaccount-answer-v3', function(request, response) {

    var partnerjointaccount = request.session.data['partnerjointaccount']
    if (partnerjointaccount == "no"){
        response.redirect("/v3/money/joint-account-transfer")
    } else {
        response.redirect("/v3/money/isa")
    }
})

  // MONEY TRANSFERRED TO OTHER JOINT ACCOUNT HOLDER

  router.post('/jointaccounttransfer-answer-v3', function(request, response) {

    var jointaccounttransfer = request.session.data['jointaccounttransfer']
    if (jointaccounttransfer == "yes"){
        response.redirect("/v3/money/exact-amount-other-joint-account")
    } else {
        response.redirect("/v3/money/isa")
    }
})

  // MONEY IN ISAS

  router.post('/isas-answer-v3', function(request, response) {

    var isas = request.session.data['isas']
    if (isas == "yes"){
        response.redirect("/v3/money/exact-amount-isa")
    } else {
        response.redirect("/v3/money/in-cash")
    }
})

  // MONEY IN CASH

  router.post('/cash-answer-v3', function(request, response) {

    var cash = request.session.data['cash']
    if (cash == "yes"){
        response.redirect("/v3/money/exact-amount-cash")
    } else {
        response.redirect("/v3/money/plans-filter")
    }
})

  // PLANS FILTER QUESTION

  router.post('/plansfilter-answer-v3', function(request, response) {

    var plansfilter = request.session.data['plansfilter']
    if (plansfilter == "no"){
        response.redirect("/v3/money/burial-club")
    } else {
        response.redirect("/v3/money/workplace-pension")
    }
})

  // WORKPLACE PENSION

  router.post('/pension-answer-v3', function(request, response) {

    var pension = request.session.data['pension']
    if (pension == "yes"){
        response.redirect("/v3/money/exact-amount-pension")
    } else {
        response.redirect("/v3/money/life-insurance")
    }
})

  // LIFE INSURANCE

  router.post('/lifeinsurance-answer-v3', function(request, response) {

    var lifeinsurance = request.session.data['lifeinsurance']
    if (lifeinsurance == "yes"){
        response.redirect("/v3/money/exact-amount-insurance")
    } else {
        response.redirect("/v3/money/funeral-plan")
    }
})

  // FUNERAL PLAN

  router.post('/funeralplan-answer-v3', function(request, response) {

    var funeralplan = request.session.data['funeralplan']
    if (funeralplan == "yes"){
        response.redirect("/v3/money/funeral-plan-cover-costs")
    } else {
        response.redirect("/v3/money/armed-forces")
    }
})

  // FUNERAL PLAN COVER ANY OF THE FUNERAL COSTS

  router.post('/funeralplancover-answer-v3', function(request, response) {

    var funeralplancover = request.session.data['funeralplancover']
    if (funeralplancover == "no"){
        response.redirect("/v3/money/funeral-plan-refund")
    } else {
        response.redirect("/v3/money/120-limit")
    }
})

  // FUNERAL PLAN REFUND

  router.post('/funeralplanrefund-answer-v3', function(request, response) {

    var funeralplanrefund = request.session.data['funeralplanrefund']
    if (funeralplanrefund == "yes"){
        response.redirect("/v3/money/exact-amount-funeral-refund")
    } else {
        response.redirect("/v3/money/armed-forces")
    }
})

  // BURIAL CLUB

  router.post('/burialclub-answer-v3', function(request, response) {

    var burialclub = request.session.data['burialclub']
    if (burialclub == "yes"){
        response.redirect("/v3/money/exact-amount-burial-club")
    } else {
        response.redirect("/v3/money/other-money")
    }
})

  // AMRED FORCES

  router.post('/armedforces-answer-v3', function(request, response) {

    var armedforces = request.session.data['armedforces']
    if (armedforces == "yes"){
        response.redirect("/v3/money/war-pension")
    } else {
        response.redirect("/v3/money/burial-club")
    }
})

  // WAR PENSION

  router.post('/warpension-answer-v3', function(request, response) {

    var warpension = request.session.data['warpension']
    if (warpension == "yes"){
        response.redirect("/v3/money/exact-amount-war-pension")
    } else {
        response.redirect("/v3/money/burial-club")
    }
})

  // OTHER MONEY

  router.post('/othermoney-answer-v3', function(request, response) {

    var othermoney = request.session.data['othermoney']
    if (othermoney == "yes"){
        response.redirect("/v3/money/exact-amount-other-money")
    } else {
        response.redirect("/v3/money/death-certificates")
    }
})

  // PERMISSION TO COLLECT

  router.post('/permission-to-collect-v3', function(request, response) {

    var permission = request.session.data['permission']
    if (permission == "yes"){
        response.redirect("/v3/money/check-answers-money")
    } else {
        response.redirect("/v3/money/permission-to-collect-in-future")
    }
})

  // ARRANGING FUNERAL

  router.post('/arrangingfuneral-answer-v3', function(request, response) {

    var arrangingfuneral = request.session.data['arrangingfuneral']
    if (arrangingfuneral == "myself"){
        response.redirect("/v3/funeral/have-you-used-money-from-deceased")
    } else {
        response.redirect("v3/funeral/provider-name")
    }
})

  // FUNERAL DIRECTOR

  router.post('/director-answer-v3', function(request, response) {

    var director = request.session.data['director']
    if (director == "yes"){
        response.redirect("/v3/funeral/provider-name")
    } else {
        response.redirect("/v3/funeral/someone-else")
    }
})

  // SOMEONE ELSE ARRANGING 

  router.post('/someoneelse-answer-v3', function(request, response) {

    var someoneelse = request.session.data['someoneelse']
    if (someoneelse == "yes"){
        response.redirect("/v3/funeral/provider-name")
    } else {
        response.redirect("/v3/funeral/have-you-used-money-from-deceased")
    }
})

   // HAVE YOU USED MONEY FROM DECEASED TO PAY FUNERAL (asked if arranging yourself)

   router.post('/haveyouusedmoney-answer-v3', function(request, response) {

    var haveyouusedmoney = request.session.data['haveyouusedmoney']
    if (haveyouusedmoney == "yes"){
        response.redirect("/v3/funeral/exact-amount-money-used")
    } else {
        response.redirect("/v3/funeral/claim-travel")
    }
})

  // DO YOU HAVE A FUNERAL BILL OR SIGNED CONTRACT YET

  router.post('/funeralbill-answer-v3', function(request, response) {

    var funeralbill = request.session.data['funeralbill']
    if (funeralbill == "yes"){
        response.redirect("/v3/funeral/bill-in-your-name")
    } else {
        response.redirect("/v3/funeral/will-bill-be-in-your-name")
    }
})

 // BILL IN YOUR NAME 

router.post('/billinyourname-answer-v3', function(request, response) {

    var billinyourname = request.session.data['billinyourname']
    if (billinyourname == "no"){
        response.redirect("/v3/funeral/arranged-on-your-behalf")    
    } else {
        response.redirect("/v3/funeral/money-paid-off-bill")
    }
  })

     // PAID MONEY OFF BILL

router.post('/moneyoffbill-answer-v3', function(request, response) {

    var moneyoffbill = request.session.data['moneyoffbill']
    if (moneyoffbill == "yes"){
        response.redirect("/v3/funeral/exact-amount-money-off-bill")
    } else {
        response.redirect("/v3/funeral/items-not-on-bill")
    }
})

   // USED MONEY FROM DECEASED TO PAY FUNERAL

router.post('/usedmoney-answer-v3', function(request, response) {

    var usedmoney = request.session.data['usedmoney']
    if (usedmoney == "yes"){
        response.redirect("/v3/funeral/exact-amount-used-money")
    } else {
        response.redirect("/v3/funeral/items-not-on-bill")
    }
})

// WHO PAID MONEY TO FUNERAL DIRECTOR

   router.post('/whopaidmoney-answer-v3', function(request, response) {

    var whopaidfuneraldirector = request.session.data['whopaidfuneraldirector']
    if (whopaidfuneraldirector.includes("friend-family")){
    response.redirect("/v3/funeral/pay-money-back")
    } else {
        response.redirect("/v3/funeral/items-not-on-bill")
    }
})

// WHO PAID MONEY TO ORG OR PERSON ARRANGING

   router.post('/whopaidmoney-answer-v3', function(request, response) {

    var whopaidorganisation = request.session.data['whopaidorganisation']
    if (whopaidorganisation.includes("friend-family")){
    response.redirect("/v3/funeral/pay-money-back")
    } else {
        response.redirect("/v3/funeral/items-not-on-bill")
    }
})

// ITEMS NOT ON FUNERAL BILL

    router.post('/itemsnotonbill-answer-v3', function(request, response) {
    var itemsnotonbill = request.session.data['itemsnotonbill']
    if (itemsnotonbill == "yes"){
        response.redirect("/v3/funeral/other-costs") 
    } else {
        response.redirect("/v3/funeral/claim-travel")
    }
})

// OTHER COSTS AMOUNT

    router.post('/othercosts-answer-v3', function(request, response) {
    var funeraltakenplace = request.session.data['othercosts']
    if (funeraltakenplace == "yes"){
        response.redirect("/v3/funeral/claim-travel-in-future") 
    } else {
        response.redirect("/v3/funeral/claim-travel")
    }
})

   // CLAIM TRAVEL ANSWER

   router.post('/claimtravel-answer-v3', function(request, response) {

    var claimtravel = request.session.data['claimtravel']
    if (claimtravel == "yes"){
        response.redirect("/v3/funeral/travel-expenses")
    } else {
        response.redirect("/v3/funeral/check-answers-funeral")
    }
})

   // DOCUMENTS ANSWER

router.post('/documents-answer-v3', function(request, response) {

    var documents = request.session.data['documents']
    if (documents.includes("bill")){
        response.redirect("/v3/funeral/bill-in-your-name")
    } else if (documents == "contract"){
        response.redirect("/v3/funeral/bill-in-your-name")
    } else if (documents == "estimate"){
        response.redirect("/v3/funeral/will-bill-be-in-your-name")
    } else {
        response.redirect("/v3/funeral/will-bill-be-in-your-name")
    }
})

   // ARRANGED ON YOUR BEHALF (WHEN CITIZEN HAS BILL OR SIGNED CONTRACT)

   router.post('/arrangementsonyourbehalf-answer-v3', function(request, response) {

    var arrangementsonyourbehalf = request.session.data['arrangementsonyourbehalf']
    if (arrangementsonyourbehalf == "yes"){
        response.redirect("/v3/funeral/money-paid-off-bill")
    } else {
        response.redirect("/v3/funeral/no-permission")
    }
})

   // NO PERMISSION GIVEN (WHEN CITIZEN HAS BILL OR SIGNED CONTRACT)

   router.post('/permission-answer-v3', function(request, response) {

    var nopermission = request.session.data['nopermission']
    if (nopermission == "yes"){
        response.redirect("/v3/funeral/money-paid-off-bill")
    } else {
        response.redirect("/index")
    }
})

   // NO PERMISSION GIVEN (ESTIMATE OR NO DOCUMENTS)

   router.post('/permission-other-answer-v3', function(request, response) {

    var nopermissionother = request.session.data['nopermissionother']
    if (nopermissionother == "yes"){
        response.redirect("/v3/funeral/claim-travel-in-future")
    } else {
        response.redirect("/index")
    }
})

 // WILL BILL BE IN YOUR NAME 

 router.post('/willbillbeinyourname-answer-v3', function(request, response) {

    var willbillbeinyourname = request.session.data['willbillbeinyourname']
    if (willbillbeinyourname == "no"){
        response.redirect("/v3/funeral/allowing-on-your-behalf")    
    } else {
        response.redirect("/v3/funeral/claim-travel-in-future")
    }
  })

   // ARE YOU ALLOWING SOMEONE ON YOUR BEHALF (ESTIMATE OR NO DOCUMENTS)

 router.post('/allowingonyourbehalf-answer-v3', function(request, response) {

    var allowingonyourbehalf = request.session.data['allowingonyourbehalf']
    if (allowingonyourbehalf == "yes"){
        response.redirect("/v3/funeral/claim-travel-in-future")    
    } else {
        response.redirect("/v3/funeral/no-permission")
    }
  })

// WHAT TYPE OF TRAVEL ROUTES

  router.post('/transporttype-answer-v3', function(request, response) {

    var transporttype = request.session.data['transporttype']
    if (transporttype.includes("car")){
        response.redirect("/v3/funeral/check-answers-funeral")
    } else {
        response.redirect("/v3/funeral/how-much-paid")
    }
})

// CORRESPONDENCE ADDRESS

  router.post('/correspondenceaddress-answer-v3', function(request, response) {

    var correspondenceAddress = request.session.data['correspondenceAddress']
    if (correspondenceAddress == "yes"){
        response.redirect("/v3/contact/alternative-format")
    } else {
        response.redirect("/v3/contact/correspondence-address-search")
    }
})

// ALTERNATIVE FORMATS

  router.post('/alternativeformat-answer-v3', function(request, response) {

    var alternative = request.session.data['alternative']
    if (alternative == "yes"){
        response.redirect("/v3/contact/alternative-format-select")
    } else {
        response.redirect("/v3/contact/check-answers-contact")
    }
})

// ROUTES WITH NEW IFM/CR JOURNEY BELOW

// PERSON WHO DIED OVER 20 

router.post('/over-20-answer-v3', function(request, response) {

    var over20 = request.session.data['over20']
    if (over20.includes("yes")){
        response.redirect("/v3/eligibility/relationship")
    } else {
        response.redirect("/v3/eligibility/under16")
    }
})

router.post('/over-20-partner-answer-v3', function(request, response) {

    var over20 = request.session.data['over20']
    if (over20.includes("yes")){
        response.redirect("/v3/eligibility/same-address")
    } else {
        response.redirect("/v3/eligibility/under16")
    }
})

// PERSON WHO DIED UNDER 16 OR IN FULL TIME EDUCATION

router.post('/16to19-answer-v3', function(request, response) {

    var under16 = request.session.data['under16']
    if (under16.includes("no")){
        response.redirect("/v3/eligibility/partner")
    } else {
        response.redirect("/v3/eligibility/cannot-use-private-beta")
    }
})

// ARE YOU THE PARTNER

router.post('/partner-answer-v3', function(request, response) {

    var relationship = request.session.data['partner']
    if (relationship == "yes"){
        response.redirect("/v3/eligibility/same-address")
    } else {
        response.redirect("/v3/eligibility/do-you-have-partner")
    }
  })

  // WERE YOU LIVING TOGETHER

router.post('/same-address-answer-v3', function(request, response) {

    var address = request.session.data['sameaddress']
    if (address == "no"){
        response.redirect("/v3/eligibility/cr-other-ifms")
    } else {
        response.redirect("/v3/eligibility/responsible-for-paying")
    }
  })

    // ASKING CR IF THEIR ARE OTHER IFMS

    router.post('/cr-other-ifms-answer-v3', function(request, response) {

        var ifm = request.session.data['ifm']
        if (ifm.includes("none")){
            response.redirect("/v3/eligibility/responsible-for-paying")
        } else {
            response.redirect("/v3/eligibility/ifm-should-apply")
        }
    })

    // IFM SOFT STOP

        router.post('/ifm-soft-stop-answer-v3', function(request, response) {

            var ifmsoftstop = request.session.data['ifmsoftstop']
            if (ifmsoftstop.includes("yes")){
                response.redirect("/v3/eligibility/responsible-for-paying")
            } else {
                response.redirect("/index")
            }
        })

        // SURIVING PARTNER -> CHILD OF DECEASED

        router.post('/childofdecased-answer-v3', function(request, response) {

            var deceasedhavepartner = request.session.data['deceasedhavepartner']
            if (deceasedhavepartner == "yes"){
                response.redirect("/v3/eligibility/partner-should-apply")
            } else {
                response.redirect("/v3/eligibility/child-other-ifms")
            }
          })

        // SURIVING PARTNER -> PARENT OF DECEASED

        router.post('/parentofdeceased-answer-v3', function(request, response) {

            var deceasedhavepartner = request.session.data['deceasedhavepartner']
            if (deceasedhavepartner == "yes"){
                response.redirect("/v3/eligibility/partner-should-apply")
            } else {
                response.redirect("/v3/eligibility/parent-other-ifms")
            }
          })

        // SURIVING PARTNER -> CLOSE RELATIVE OR FRIEND OF DECEASED

        router.post('/crofdeceased-answer-v3', function(request, response) {

            var deceasedhavepartner = request.session.data['deceasedhavepartner']
            if (deceasedhavepartner == "yes"){
                response.redirect("/v3/eligibility/partner-should-apply")
            } else {
                response.redirect("/v3/eligibility/cr-other-ifms")
            }
          })

        // PARTNER SOFT STOP

        router.post('/partner-soft-stop-answer-v3', function(request, response) {

            var partnersoftstop = request.session.data['partnersoftstop']
            if (partnersoftstop.includes("yes")){
                response.redirect("/v3/eligibility/relationship-to-deceased")
            } else {
                response.redirect("/index")
            }
        })

        // RELATIONSHIP TO DECEASED (to go on to ask about other IFMS)

        // router.post('/relationship-to-deceased-answer', function(request, response) {

        //     var relationshiptodeceased = request.session.data['relationshiptodeceased']
        //     if (relationshiptodeceased == "childofdeceased"){
        //       response.redirect("/v3/eligibility/child-other-ifms")
        //     } else if (relationshiptodeceased == "parentofdeceased"){
        //           response.redirect("/v3/eligibility/parent-other-ifms")
        //     } else {
        //         response.redirect("/v3/eligibility/cr-other-ifms")
        //     }
        //   })

        // IFM LOOP ROUTING BELOW

        // PARENT ESTRANGEMENT

        router.post('/relationshipbrokendown-answer-v3', function(request, response) {

            var relationshipbrokendown = request.session.data['relationshipbrokendown']
            if (relationshipbrokendown == "yes"){
              response.redirect("/v3/ifm/parent/add-another-parent")
            } else {
                response.redirect("/v3/ifm/parent/their-details")
            }
          })    

          // PARENT ON QB

          router.post('/parent-qb-answer-v3', function(request, response) {

            var parentonqb = request.session.data['parentonqb']
            if (parentonqb == "Yes"){
              response.redirect("/v3/ifm/parent/benefits")
            } else if (parentonqb == "dontknow"){
                  response.redirect("/v3/ifm/parent/add-another-parent")
            } else {
                response.redirect("/v3/ifm/parent/exemption-list")
            }
          })

        // WHAT QB PARENT ON

        router.post('/what-benefits-parent-answer-v3', function(request, response) {

            var whatbenefitsparent = request.session.data['whatbenefitsparent']
            if (whatbenefitsparent == "no"){
              response.redirect("/v3/ifm/parent/soft-stop")
            } else {
                response.redirect("/v3/ifm/parent/add-another-parent")
            }
          })

        // CONTINUING THROUGH PARENT 

        router.post('/addingparentsoftstop-answer-v3', function(request, response) {

            var addingparentsoftstop = request.session.data['addingparentsoftstop']
            if (addingparentsoftstop == "yes"){
              response.redirect("/v3/ifm/parent/add-another-parent")
            } else {
                response.redirect("/index")
            }
          })    

        // PARENT EXEMPTION  LIST ANSWER

        router.post('/parent-exemption-answer-v3', function(request, response) {

            var parentexemption = request.session.data['parentexemption']
            if (parentexemption == "no"){
              response.redirect("/v3/ifm/parent/soft-stop")
            } else {
                response.redirect("/v3/ifm/parent/add-another-parent")
            }
          })  

          
         // ADDING SECOND PARENT

          router.post('/add-2nd-parent-answer-v3', function(request, response) {

            var parenttwo = request.session.data['parenttwo']
            if (parenttwo == "no"){
              response.redirect("/v3/ifm/child/about-a-child")
            } else {
                response.redirect("/v3/ifm/parent2/about-a-parent")
            }
          })  

          // ADDING SECOND PARENT (NO CHILDREN STRAIGHT TO MONEY)

          router.post('/add-2nd-parent-no-child-answer', function(request, response) {

            var parenttwo = request.session.data['parenttwo']
            if (parenttwo == "no"){
              response.redirect("/v3/save/task-list")
            } else {
                response.redirect("/v3/ifm/parent2/about-a-parent")
            }
          })  

          // PARENT2 ROUTES BELOW 

          // PARENT2 RELATIONSHIP BROKEN DOWN 
          

          router.post('/relationshipbrokendown-answer2-v3', function(request, response) {

            var relationshipbrokendown2 = request.session.data['relationshipbrokendown2']
            if (relationshipbrokendown2 == "yes"){
              response.redirect("/v3/ifm/parent2/add-another-parent")
            } else {
                response.redirect("/v3/ifm/parent2/their-details")
            }
          })    

          // PARENT2 ON QB 

          router.post('/parent-qb-answer2-v3', function(request, response) {

            var parentonqb2 = request.session.data['parentonqb2']
            if (parentonqb2 == "Yes"){
              response.redirect("/v3/ifm/parent2/benefits")
            } else if (parentonqb2 == "dontknow"){
                  response.redirect("/v3/ifm/parent2/add-another-parent")
            } else {
                response.redirect("/v3/ifm/parent2/exemption-list")
            }
          })

          // WHAT QB PARENT2 ON

        router.post('/what-benefits-parent-answer2-v3', function(request, response) {

            var whatbenefitsparent2 = request.session.data['whatbenefitsparent2']
            if (whatbenefitsparent2 == "no"){
              response.redirect("/v3/ifm/parent2/soft-stop")
            } else {
                response.redirect("/v3/ifm/parent2/add-another-parent")
            }
          })

          // CONTINUING THROUGH PARENT2

        router.post('/addingparentsoftstop-answer2-v3', function(request, response) {

            var addingparentsoftstop2 = request.session.data['addingparentsoftstop2']
            if (addingparentsoftstop2 == "yes"){
              response.redirect("/v3/ifm/parent2/add-another-parent")
            } else {
                response.redirect("/index")
            }
          })    

          // PARENT2 EXEMPTION  LIST ANSWER

        router.post('/parent-exemption-answer2-v3', function(request, response) {

            var parentexemption2 = request.session.data['parentexemption2']
            if (parentexemption2 == "no"){
              response.redirect("/v3/ifm/parent2/soft-stop")
            } else {
                response.redirect("/v3/ifm/parent2/add-another-parent")
            }
          })  

        // START OF CHILD LOOP 

        // CHILD ESTRANGEMENT

        router.post('/relationshipbrokendownc1-answer-v3', function(request, response) {

            var relationshipbrokendownc1 = request.session.data['relationshipbrokendownc1']
            if (relationshipbrokendownc1 == "yes"){
              response.redirect("/v3/ifm/child/add-another-child")
            } else {
                response.redirect("/v3/ifm/child/their-details")
            }
          })    

         // CHILD ON QB

         router.post('/child-qb-answer-v3', function(request, response) {

            var childonqb = request.session.data['childonqb']
            if (childonqb == "Yes"){
              response.redirect("/v3/ifm/child/benefits")
            } else if (childonqb == "dontknow"){
                  response.redirect("/v3/ifm/child/add-another-child")
            } else {
                response.redirect("/v3/ifm/child/exemption-list")
            }
          }) 

        // WHAT QB CHILD ON

        router.post('/what-benefits-child-answer-v3', function(request, response) {

            var whatbenefitschild = request.session.data['whatbenefitschild']
            if (whatbenefitschild == "no"){
              response.redirect("/v3/ifm/child/soft-stop")
            } else {
                response.redirect("/v3/ifm/child/add-another-child")
            }
          })

          // CONTINUING THROUGH CHILD

        router.post('/addingchildsoftstop-answer-v3', function(request, response) {

            var addingchildsoftstop = request.session.data['addingchildsoftstop']
            if (addingchildsoftstop == "yes"){
              response.redirect("/v3/ifm/child/add-another-child")
            } else {
                response.redirect("/index")
            }
          })   

        // CHILD EXEMPTION LIST ANSWER

        router.post('/child-exemption-answer-v3', function(request, response) {

            var childexemption = request.session.data['childexemption']
            if (childexemption == "no"){
              response.redirect("/v3/ifm/child/soft-stop")
            } else {
                response.redirect("/v3/ifm/child/add-another-child")
            }
          })  

          // NEXT CHILD LOOP

          // ADDING SECOND CHILD

          router.post('/add-2nd-child-answer-v3', function(request, response) {

            var childtwo = request.session.data['childtwo']
            if (childtwo == "no"){
              response.redirect("/v3/save/task-list")
            } else {
                response.redirect("/v3/ifm/child2/about-a-child")
            }
          })  

        // CHILD2 ESTRANGEMENT

        router.post('/relationshipbrokendownc2-answer-v3', function(request, response) {

            var relationshipbrokendownc2 = request.session.data['relationshipbrokendownc2']
            if (relationshipbrokendownc2 == "yes"){
              response.redirect("/v3/ifm/child2/add-another-child")
            } else {
                response.redirect("/v3/ifm/child2/their-details")
            }
          })    

          // CHILD2 ON QB

         router.post('/child2-qb-answer-v3', function(request, response) {

            var childonqb2 = request.session.data['childonqb2']
            if (childonqb2 == "Yes"){
              response.redirect("/v3/ifm/child2/benefits")
            } else if (childonqb2 == "dontknow"){
                  response.redirect("/v3/ifm/child2/add-another-child")
            } else {
                response.redirect("/v3/ifm/child2/exemption-list")
            }
          }) 

          // WHAT QB CHILD2 ON

        router.post('/what-benefits-child-answer2-v3', function(request, response) {

            var whatbenefitschild2 = request.session.data['whatbenefitschild2']
            if (whatbenefitschild2 == "no"){
              response.redirect("/v3/ifm/child2/soft-stop")
            } else {
                response.redirect("/v3/ifm/child2/add-another-child")
            }
          })

        // CONTINUING THROUGH CHILD2

        router.post('/addingchildsoftstop-answer2-v3', function(request, response) {

            var addingchildsoftstop2 = request.session.data['addingchildsoftstop2']
            if (addingchildsoftstop2 == "yes"){
              response.redirect("/v3/ifm/child2/add-another-child")
            } else {
                response.redirect("/index")
            }
          })   

          // CHILD2 EXEMPTION LIST ANSWER

        router.post('/child-exemption-answer2-v3', function(request, response) {

            var childexemption2 = request.session.data['childexemption2']
            if (childexemption2 == "no"){
              response.redirect("/v3/ifm/child2/soft-stop")
            } else {
                response.redirect("/v3/ifm/child2/add-another-child")
            }
          })  

          // NEXT CHILD LOOP

          // ADDING THIRD CHILD

          router.post('/add-3rd-child-answer-v3', function(request, response) {

            var childthree = request.session.data['childthree']
            if (childthree == "no"){
              response.redirect("/v3/save/task-list")
            } else {
                response.redirect("/v3/ifm/child3/about-a-child")
            }
          })  

        // CHILD3 ESTRANGEMENT

        router.post('/relationshipbrokendownc3-answer-v3', function(request, response) {

            var relationshipbrokendownc3 = request.session.data['relationshipbrokendownc3']
            if (relationshipbrokendownc3 == "yes"){
              response.redirect("/v3/ifm/child3/add-another-child")
            } else {
                response.redirect("/v3/ifm/child3/their-details")
            }
          })    

          // CHILD3 ON QB

         router.post('/child3-qb-answer-v3', function(request, response) {

            var childonqb3 = request.session.data['childonqb3']
            if (childonqb3 == "Yes"){
              response.redirect("/v3/ifm/child3/benefits")
            } else if (childonqb3 == "dontknow"){
                  response.redirect("/v3/ifm/child3/add-another-child")
            } else {
                response.redirect("/v3/ifm/child3/exemption-list")
            }
          }) 

          // WHAT QB CHILD3 ON

        router.post('/what-benefits-child-answer3-v3', function(request, response) {

            var whatbenefitschild3 = request.session.data['whatbenefitschild3']
            if (whatbenefitschild3 == "no"){
              response.redirect("/v3/ifm/child3/soft-stop")
            } else {
                response.redirect("/v3/ifm/child3/add-another-child")
            }
          })

        // CONTINUING THROUGH CHILD3

        router.post('/addingchildsoftstop-answer3-v3', function(request, response) {

            var addingchildsoftstop3 = request.session.data['addingchildsoftstop3']
            if (addingchildsoftstop3 == "yes"){
              response.redirect("/v3/ifm/child3/add-another-child")
            } else {
                response.redirect("/index")
            }
          })   

          // CHILD3 EXEMPTION LIST ANSWER

        router.post('/child-exemption-answer3-v3', function(request, response) {

            var childexemption3 = request.session.data['childexemption3']
            if (childexemption3 == "no"){
              response.redirect("/v3/ifm/child3/soft-stop")
            } else {
                response.redirect("/v3/ifm/child3/add-another-child")
            }
          })  

          // NEXT CHILD LOOP

          // ADDING FOURTH CHILD

          router.post('/add-4th-child-answer-v3', function(request, response) {

            var childfour = request.session.data['childfour']
            if (childfour == "no"){
              response.redirect("/v3/save/task-list")
            } else {
                response.redirect("/v3/ifm/child4/about-a-child")
            }
          })  

        // CHILD4 ESTRANGEMENT

        router.post('/relationshipbrokendownc4-answer-v3', function(request, response) {

            var relationshipbrokendownc4 = request.session.data['relationshipbrokendownc4']
            if (relationshipbrokendownc4 == "yes"){
              response.redirect("/v3/ifm/child4/add-another-child")
            } else {
                response.redirect("/v3/ifm/child4/their-details")
            }
          })    

          // CHILD4 ON QB

         router.post('/child4-qb-answer-v3', function(request, response) {

            var childonqb4 = request.session.data['childonqb4']
            if (childonqb4 == "Yes"){
              response.redirect("/v3/ifm/child4/benefits")
            } else if (childonqb4 == "dontknow"){
                  response.redirect("/v3/ifm/child4/add-another-child")
            } else {
                response.redirect("/v3/ifm/child4/exemption-list")
            }
          }) 

          // WHAT QB CHILD4 ON

        router.post('/what-benefits-child-answer4-v3', function(request, response) {

            var whatbenefitschild4 = request.session.data['whatbenefitschild4']
            if (whatbenefitschild4 == "no"){
              response.redirect("/v3/ifm/child4/soft-stop")
            } else {
                response.redirect("/v3/ifm/child4/add-another-child")
            }
          })

        // CONTINUING THROUGH CHILD4

        router.post('/addingchildsoftstop-answer4-v3', function(request, response) {

            var addingchildsoftstop4 = request.session.data['addingchildsoftstop4']
            if (addingchildsoftstop4 == "yes"){
              response.redirect("/v3/ifm/child4/add-another-child")
            } else {
                response.redirect("/index")
            }
          })   

          // CHILD4 EXEMPTION LIST ANSWER

        router.post('/child-exemption-answer4-v3', function(request, response) {

            var childexemption4 = request.session.data['childexemption4']
            if (childexemption4 == "no"){
              response.redirect("/v3/ifm/child4/soft-stop")
            } else {
                response.redirect("/v3/ifm/child4/add-another-child")
            }
          })  

  // TASK LIST SIGN OUT

  router.post('/task-list-sign-out-v3', function(request, response) {

      var signout = request.session.data['signout']
      if (signout == "yes"){
        response.redirect("/v3/gov/how-to-claim")
      } else {
          response.redirect("/v3/save/task-list")
      }
    })  


}