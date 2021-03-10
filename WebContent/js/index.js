function getTime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let Hours = date.getHours();
    let Minutes = date.getMinutes();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    if (Hours < 10) {
        Hours = "0" + Hours;
    }
    if (Minutes < 10) {
        Minutes = "0" + Minutes;
    }
    let s_createtime = year + month + day + Hours + Minutes;
    return s_createtime;
}

$(document).ready(function(){
    $("#home-tab").click(function(){
        $("#statistic-tab").removeClass("active");
        $("#submit-tab").removeClass("active");
        $("#calculate-tab").removeClass("active");
    });
    $("#statistic-tab").click(function(){
        $("#home-tab").removeClass("active");
        $("#submit-tab").removeClass("active");
        $("#calculate-tab").removeClass("active");
    });
    $("#submit-tab").click(function(){
        $("#home-tab").removeClass("active");
        $("#statistic-tab").removeClass("active");
        $("#calculate-tab").removeClass("active");
    });
    $("#calculate-tab").click(function(){
        $("#home-tab").removeClass("active");
        $("#statistic-tab").removeClass("active");
        $("#submit-tab").removeClass("active");
    });
    $("#testbuttom").click(function () {
        var testtime=getTime();
        alert(testtime);
    });

    $("#submit-artifacts-sands").on("input propertychange",function () {
        if($("#submit-artifacts-sands").val()>0){
            $("#submit-artifacts-sands-card").removeClass("d-none");
        }else {
            $("#submit-artifacts-sands-card").addClass("d-none");
        }
    });
    $("#submit-artifacts-goblet").on("input propertychange",function () {
        if($("#submit-artifacts-goblet").val()>0){
            $("#submit-artifacts-goblet-card").removeClass("d-none");
        }else {
            $("#submit-artifacts-goblet-card").addClass("d-none");
        }
    });
    $("#submit-artifacts-circlet").on("input propertychange",function () {
        if($("#submit-artifacts-circlet").val()>0){
            $("#submit-artifacts-circlet-card").removeClass("d-none");
        }else {
            $("#submit-artifacts-circlet-card").addClass("d-none");
        }
    });

});
$(document).on("click", "#submit-ctm-upload", function () {
    $("#submit-ctm-upload").attr("disabled",true);

    let sumCTM = Number($("#submit-ctm-sum").val());
    let ctmL = Number($("#submit-ctm-level").val());
    let ctmA = Number($("#submit-ctm-a").val());
    let ctmB = Number($("#submit-ctm-b").val());
    let ctmC = Number($("#submit-ctm-c").val());
    let sumCTMB = ctmA+ctmB+ctmC;
    let timeCTM = getTime();

    if (sumCTMB==0){
        $("#submit-fail-modal-2").modal("show");
        $("#submit-boss-upload").attr("disabled", false);
    }else {
        $("#submit-modal").modal("show");
        $.ajax({
            type: "POST",
            url: "ctmSubmit",
            data: {
                "sumCTM":sumCTM,
                "ctmL":ctmL,
                "ctmA":ctmA,
                "ctmB":ctmB,
                "ctmC":ctmC,
                "timeCTM":timeCTM
            },
            timeout: 50000,
            success: function (msg) {
                $("#submit-modal").modal("hide");
                $("#submit-success-modal").modal("show");
                $("#submit-ctm-sum").val("1");
                $("#submit-ctm-level").val("4");
                $("#submit-ctm-a").val("");
                $("#submit-ctm-b").val("");
                $("#submit-ctm-c").val("");
                $("#submit-ctm-upload").attr("disabled",false);
            },
            error: function (msg) {
                $("#submit-modal").modal("hide");
                $("#submit-fail-modal").modal("show");
                $("#submit-ctm-upload").attr("disabled",false);
            }
        });
    }
})
$(document).on("click", "#submit-exp-upload", function () {
    $("#submit-exp-upload").attr("disabled",true);
    let sumBOR = Number($("#submit-exp-sum").val());
    let worldL = Number($("#submit-exp-worldlevel").val());
    let expA = Number($("#submit-exp-hero").val());
    let expB = Number($("#submit-exp-adventurer").val());
    let expC = Number($("#submit-exp-wanderer").val());
    let sumBORB = expA+expB+expC;
    let timeBOR = getTime();

    if (sumBORB==0){
        $("#submit-fail-modal-2").modal("show");
        $("#submit-boss-upload").attr("disabled", false);
    }else {
        $("#submit-modal").modal("show");
        $.ajax({
            type: "POST",
            url: "expSubmit",
            data: {
                "sumBOR": sumBOR,
                "expA": expA,
                "expB": expB,
                "expC": expC,
                "worldL": worldL,
                "timeBOR": timeBOR
            },
            timeout: 50000,
            success: function (msg) {
                $("#submit-modal").modal("hide");
                $("#submit-success-modal").modal("show");
                $("#submit-exp-sum").val("1");
                $("#submit-exp-worldlevel").val("8");
                $("#submit-exp-hero").val("");
                $("#submit-exp-adventurer").val("");
                $("#submit-exp-wanderer").val("");
                $("#submit-exp-upload").attr("disabled", false);
            },
            error: function (msg) {
                $("#submit-modal").modal("hide");
                $("#submit-fail-modal").modal("show");
                $("#submit-exp-upload").attr("disabled", false);
            }
        });
    }
})
$(document).on("click", "#submit-wam-upload", function () {
    $("#submit-wam-upload").attr("disabled",true);
    let sumWAM = Number($("#submit-wam-sum").val());
    let wamL = Number($("#submit-wam-level").val());
    let wamA = Number($("#submit-wam-a").val());
    let wamB = Number($("#submit-wam-b").val());
    let wamC = Number($("#submit-wam-c").val());
    let wamD = Number($("#submit-wam-d").val());
    let sumWAMB = wamA+wamB+wamC+wamD;
    let timeWAM = getTime();

    if (sumWAMB==0){
        $("#submit-fail-modal-2").modal("show");
        $("#submit-boss-upload").attr("disabled", false);
    }else {
        $("#submit-modal").modal("show");
        $.ajax({
            type: "POST",
            url: "wamSubmit",
            data: {
                "sumWAM": sumWAM,
                "wamL": wamL,
                "wamA": wamA,
                "wamB": wamB,
                "wamC": wamC,
                "wamD": wamD,
                "timeWAM": timeWAM
            },
            timeout: 50000,
            success: function (msg) {
                $("#submit-modal").modal("hide");
                $("#submit-success-modal").modal("show");
                $("#submit-wam-sum").val("1");
                $("#submit-wam-level").val("4");
                $("#submit-wam-a").val("");
                $("#submit-wam-b").val("");
                $("#submit-wam-c").val("");
                $("#submit-wam-d").val("");
                $("#submit-wam-upload").attr("disabled", false);
            },
            error: function (msg) {
                $("#submit-modal").modal("hide");
                $("#submit-fail-modal").modal("show");
                $("#submit-wam-upload").attr("disabled", false);
            }
        });
    }
})

$(document).on("click", "#submit-boss-upload", function () {
    $("#submit-boss-upload").attr("disabled",true);
    let sumCAM = Number($("#submit-boss-sum").val());
    let camL = Number($("#submit-boss-worldlevel").val());
    let camU = Number($("#submit-boss-u").val());
    let camA = Number($("#submit-boss-a").val());
    let camB = Number($("#submit-boss-b").val());
    let camC = Number($("#submit-boss-c").val());
    let camD = Number($("#submit-boss-d").val());
    let sumCAMB = camU+camA+camB+camC+camD;
    let timeCAM = getTime();

    if (sumCAMB==0){
        $("#submit-fail-modal-2").modal("show");
        $("#submit-boss-upload").attr("disabled", false);
    }else {
        $("#submit-modal").modal("show");
        $.ajax({
            type: "POST",
            url: "bossSubmit",
            data: {
                "sumCAM": sumCAM,
                "camL": camL,
                "camU": camU,
                "camA": camA,
                "camB": camB,
                "camC": camC,
                "camD": camD,
                "timeCAM": timeCAM
            },
            timeout: 50000,
            success: function (msg) {
                $("#submit-modal").modal("hide");
                $("#submit-success-modal").modal("show");
                $("#submit-boss-sum").val("1");
                $("#submit-boss-worldlevel").val("8");
                $("#submit-boss-a").val("");
                $("#submit-boss-b").val("");
                $("#submit-boss-c").val("");
                $("#submit-boss-d").val("");
                $("#submit-boss-u").val("");
                $("#submit-boss-upload").attr("disabled", false);
            },
            error: function (msg) {
                $("#submit-modal").modal("hide");
                $("#submit-fail-modal").modal("show");
                $("#submit-boss-upload").attr("disabled", false);
            }
        });
    }
})

$(document).on("click", "#submit-boss-continue", function () {
    $("#submit-boss-upload").attr("disabled",true);
    let sumCAM = Number($("#submit-boss-sum").val());
    let camL = Number($("#submit-boss-worldlevel").val());
    let camU = Number($("#submit-boss-u").val());
    let camA = Number($("#submit-boss-a").val());
    let camB = Number($("#submit-boss-b").val());
    let camC = Number($("#submit-boss-c").val());
    let camD = Number($("#submit-boss-d").val());
    let sumCAMB = camU+camA+camB+camC+camD;
    let timeCAM = getTime();

    if (sumCAMB==0){
        $("#submit-fail-modal-2").modal("show");
        $("#submit-boss-upload").attr("disabled", false);
    }else {
        $("#submit-modal").modal("show");
        $.ajax({
            type: "POST",
            url: "bossSubmit",
            data: {
                "sumCAM": sumCAM,
                "camL": camL,
                "camU": camU,
                "camA": camA,
                "camB": camB,
                "camC": camC,
                "camD": camD,
                "timeCAM": timeCAM
            },
            timeout: 50000,
            success: function (msg) {
                $("#submit-modal").modal("hide");
                $("#submit-success-modal-2").modal("show");
                $("#submit-boss-sum").val("1");
                $("#submit-boss-worldlevel").val("8");
                $("#submit-boss-a").val("");
                $("#submit-boss-b").val("");
                $("#submit-boss-c").val("");
                $("#submit-boss-d").val("");
                $("#submit-boss-u").val("");
                $("#submit-boss-upload").attr("disabled", false);

                $("#submit-div-boss").removeClass("active show");
                $("#submit-tab-boss").removeClass("active");
                $("#submit-tab-artifacts").addClass("active");
                $("#submit-div-artifacts").tab("show");
            },
            error: function (msg) {
                $("#submit-modal").modal("hide");
                $("#submit-fail-modal").modal("show");
                $("#submit-boss-upload").attr("disabled", false);
            }
        });
    }
})

$(document).on("click", "#submit-artifacts-upload", function () {
    $("#submit-artifacts-continue").attr("disabled",true);
    let sumArti = Number($("#submit-artifacts-sum").val());
    let sumFlower = Number($("#submit-artifacts-flower").val());
    let sumPlume = Number($("#submit-artifacts-plume").val());
    let sumSands = Number($("#submit-artifacts-sands").val());
    let sumGoblet = Number($("#submit-artifacts-goblet").val());
    let sumCirclet = Number($("#submit-artifacts-circlet").val());
    let sumArtiAll = sumFlower+sumPlume+sumSands+sumGoblet+sumCirclet;

    let emSands = Number($("#submit-artifacts-sands-em").val());
    let erSands = Number($("#submit-artifacts-sands-er").val());
    let atkSands = Number($("#submit-artifacts-sands-atk").val());
    let defSands = Number($("#submit-artifacts-sands-def").val());
    let hpSands = Number($("#submit-artifacts-sands-hp").val());
    let sumSandsB = emSands+erSands+atkSands+defSands+hpSands;

    let elemGoblet = Number($("#submit-artifacts-goblet-elem").val());
    let physGoblet = Number($("#submit-artifacts-goblet-phys").val());
    let atkGoblet = Number($("#submit-artifacts-goblet-atk").val());
    let defGoblet = Number($("#submit-artifacts-goblet-def").val());
    let hpGoblet = Number($("#submit-artifacts-goblet-hp").val());
    let emGoblet = Number($("#submit-artifacts-goblet-em").val());
    let sumGobletB = elemGoblet+physGoblet+atkGoblet+defGoblet+hpGoblet+emGoblet;

    let cRateCirclet = Number($("#submit-artifacts-circlet-crate").val());
    let cDmgCirclet = Number($("#submit-artifacts-circlet-cdmg").val());
    let atkCirclet = Number($("#submit-artifacts-circlet-atk").val());
    let defCirclet = Number($("#submit-artifacts-circlet-def").val());
    let hpCirclet = Number($("#submit-artifacts-circlet-hp").val());
    let healCirclet = Number($("#submit-artifacts-circlet-heal").val());
    let emCirclet = Number($("#submit-artifacts-circlet-em").val());
    let sumCircletB = cRateCirclet+cDmgCirclet+atkCirclet+defCirclet+hpCirclet+healCirclet+emCirclet;

    let timeArti = getTime();

    if (sumSandsB != sumSands || sumGobletB != sumGoblet || sumCircletB!=sumCirclet){
        $("#submit-fail-modal-2").modal("show");
        $("#submit-boss-upload").attr("disabled", false);
    }else if (sumArtiAll==0){
        $("#submit-fail-modal-2").modal("show");
        $("#submit-boss-upload").attr("disabled", false);
    }else {
        $("#submit-modal").modal("show");
        let artiAllSubmitFun=$.ajax({
            type: "POST",
            url: "artifactsSubmit",
            data: {
                "sumArti": sumArti,
                "flower": sumFlower,
                "plume": sumPlume,
                "sands": sumSands,
                "goblet": sumGoblet,
                "circlet": sumCirclet,
                "timeArti": timeArti
            },
            timeout: 50000
        })
        let sandsSubmitFun=$.ajax({
            type: "POST",
            url: "sandsSubmit",
            data: {
                "emSands": emSands,
                "erSands": erSands,
                "atkSands": atkSands,
                "defSands": defSands,
                "hpSands": hpSands,
                "timeSands": timeArti
            },
            timeout: 50000
        })
        let gobletSubmitFun=$.ajax({
            type: "POST",
            url: "gobletSubmit",
            data: {
                "elemGoblet": elemGoblet,
                "physGoblet": physGoblet,
                "atkGoblet": atkGoblet,
                "defGoblet": defGoblet,
                "hpGoblet": hpGoblet,
                "emGoblet": emGoblet,
                "timeGoblet": timeArti
            },
            timeout: 50000
        })
        let circletSubmitFun=$.ajax({
            type: "POST",
            url: "circletSubmit",
            data: {
                "cRateCirclet": cRateCirclet,
                "cDmgCirclet": cDmgCirclet,
                "atkCirclet": atkCirclet,
                "defCirclet": defCirclet,
                "hpCirclet": hpCirclet,
                "healCirclet": healCirclet,
                "emCirclet": emCirclet,
                "timeCirclet": timeArti
            },
            timeout: 50000
        })

        $.when(artiAllSubmitFun, sandsSubmitFun, gobletSubmitFun, circletSubmitFun).then(
            function () {
                $("#submit-modal").modal("hide");
                //成功回调，所有请求正确返回时调用
                $("#submit-artifacts-sum").val("1");
                $("#submit-artifacts-flower").val("");
                $("#submit-artifacts-plume").val("");
                $("#submit-artifacts-sands").val("");
                $("#submit-artifacts-goblet").val("");
                $("#submit-artifacts-circlet").val("");

                $("#submit-artifacts-sands-em").val("");
                $("#submit-artifacts-sands-er").val("");
                $("#submit-artifacts-sands-atk").val("");
                $("#submit-artifacts-sands-def").val("");
                $("#submit-artifacts-sands-hp").val("");

                $("#submit-artifacts-goblet-elem").val("");
                $("#submit-artifacts-goblet-phys").val("");
                $("#submit-artifacts-goblet-atk").val("");
                $("#submit-artifacts-goblet-def").val("");
                $("#submit-artifacts-goblet-hp").val("");
                $("#submit-artifacts-goblet-em").val("");

                $("#submit-artifacts-circlet-crate").val("");
                $("#submit-artifacts-circlet-cdmg").val("");
                $("#submit-artifacts-circlet-atk").val("");
                $("#submit-artifacts-circlet-def").val("");
                $("#submit-artifacts-circlet-hp").val("");
                $("#submit-artifacts-circlet-heal").val("");
                $("#submit-artifacts-circlet-em").val("");

                if ($("#submit-artifacts-sands-card").hasClass("d-none")==false){
                    $("#submit-artifacts-sands-card").addClass("d-none");
                }
                if ($("#submit-artifacts-goblet-card").hasClass("d-none")==false){
                    $("#submit-artifacts-goblet-card").addClass("d-none");
                }
                if ($("#submit-artifacts-circlet-card").hasClass("d-none")==false){
                    $("#submit-artifacts-circlet-card").addClass("d-none");
                }

                $("#submit-success-modal").modal("show");
                $("#submit-boss-upload").attr("disabled", false);
            },
            function () {
                $("#submit-modal").modal("hide");
                //失败回调，任意一个请求失败时返回
                $("#submit-fail-modal").modal("show");
                $("#submit-boss-upload").attr("disabled", false);
            }
        )
    }
})