function calculate_inwChq_ABB(bankobj, pa) {
    if (!(bankobj instanceof Object)) {
        bankobj = JSON.parse(bankobj);
    }
    if (!(pa instanceof Object)) {
        pa = JSON.parse(pa);
    }
    var countInwBounceNonTechnical = 0;
    var countTotalChq = 0;
    var today = new Date();
    var currentTime = new Date(today);
    var predate = new Date(today.getFullYear(), today.getMonth() - 12);
    var preTime = new Date(predate);
    var chqPercentage;
    var flag = "False";
    var dev_flag = "False";
    var coapplicant_id;
    policyDetails = {};

    if (pa.PA.BANK.DEVIATION_NUMBER_INWARD_BOUNCE) {
        count = pa.PA.BANK.DEVIATION_NUMBER_INWARD_BOUNCE;
    }
    else { var count = 0; }
    if (pa.PA.BANK.INWARD_BOUNCE_POLICY_FAIL_COUNT) {
        count_policy_false = pa.PA.BANK.INWARD_BOUNCE_POLICY_FAIL_COUNT;
    }
    else { var count_policy_false = 0; }

    bankobj.BANK_STATEMENTS.forEach(function (element) {
        coapplicant_id = element.BASIC_LAF_INFO.PRIMARY_KEY_2;
        if (element.monthlyDetails) {
            element.monthlyDetails.forEach(function (element2) {
                var date = new Date(element2.startDate);
                var time = new Date(date);
                if (preTime <= time) {
                    countInwBounceNonTechnical = countInwBounceNonTechnical + element2.inwBounceNonTechnical;
                    countTotalChq = countTotalChq + element2.totalChqIssue;
                }
            });
        }

        chqPercentage = (countTotalChq == 0 || countInwBounceNonTechnical == 0) ? 0 : (countInwBounceNonTechnical / countTotalChq) * 100;
        
    });
    if (chqPercentage <= 3) {
        flag = "True";
    }
    else if ((1 <= parseInt(pa.PA.CIBIL.CIBIL_SCORE_ENT) <= 6)
        && (parseInt(pa.PA.CIBIL.LOWEST_INDIVIDUAL_SCORE) >= 650)
        && chqPercentage <= 5) {
        dev_flag = "True";
        count++;
    }
    if (flag == "False" && dev_flag == "False") { count_policy_false++; }

    policyDetails["POLICY_ID"] = "INW_CHQ_BOUNCE";
    policyDetails["PARENT_POLICY_ID"] = "NA";
    policyDetails["POLICY_STATUS"] = flag;
    policyDetails["POLICY_VALUE"] = chqPercentage;
    policyDetails["COAPPLICANT_ID"] = coapplicant_id;
    pa.PA.POLICIES.push(policyDetails);

    pa.PA.BANK["INWARD_CHEQUE_BOUNCE_FLAG"] = flag;
    pa.PA.BANK["INWARD_CHEQUE_BOUNCE"] = countTotalChq;
    pa.PA.BANK["INWARD_CHEQUE_BOUNCE_NON_TECHNICAL"] = countInwBounceNonTechnical;
    pa.PA.BANK["PERCENTAGE_OF_TOTAL_CHECK"] = chqPercentage;
    pa.PA.BANK["DEVIATION_NUMBER_INWARD_BOUNCE"] = count;
    pa.PA.BANK["INWARD_BOUNCE_POLICY_FAIL_COUNT"] = count_policy_false;

    return JSON.stringify(pa);
}

