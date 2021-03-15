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

function getMaterialToday() {
    let date = new Date();
    let today = date.getDay();
    let Hours = date.getHours();

    if (Hours<4 && today==0){
        today = 6;
    } else if (Hours<4 && today>0){
        today = today-1;
    }

    $.ajax({
        type: "POST",
        url: "MaterialTodayList/" + today,
        timeout: 50000,
        success: function (msg) {
            $("#card-material-today").empty();
            let result = msg.extend.material;
            $.each(result,function (index, item) {
                let addMaterialImg = $("<img>").attr("src", item.fileName).addClass("material-img");
                let addMaterialName = item.materialName;

                $("<li></li>").addClass("list-group-item").append(addMaterialImg).append(addMaterialName)
                    .appendTo("#card-material-today");
            });

        },
        error: function (msg) {
            $("#card-material-today").empty();
            $("<li>获取数据失败QAQ</li>").addClass("list-group-item").appendTo("#card-material-today");
        }
    });
}


$(document).ready(function(){
    getMaterialToday();

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
        //let testtext=$("#card-MaterialToday .card-title").text();
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

    // $("#calculate-exp-level").on("input propertychange",function () {
    //     LoadExpSum();
    // });

    $("#calculate-ctm-level").on("input propertychange",function () {
        loadCTMSum();
    });

    $("#calculate-wam-level").on("input propertychange",function () {
        loadWAMSum();
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
        $("#submit-ctm-upload").attr("disabled", false);
    }else {
        $("#submit-ctm-upload").html("提交中...");
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
                $("#submit-ctm-upload").html("提交");
                $("#submit-success-modal").modal("show");
                $("#submit-ctm-sum").val("1");
                $("#submit-ctm-level").val("4");
                $("#submit-ctm-a").val("");
                $("#submit-ctm-b").val("");
                $("#submit-ctm-c").val("");
                $("#submit-ctm-upload").attr("disabled",false);
            },
            error: function (msg) {
                $("#submit-ctm-upload").html("提交");
                $("#submit-fail-modal").modal("show");
                $("#submit-ctm-upload").attr("disabled",false);
            }
        });
    }
})
$(document).on("click", "#submit-exp-upload", function () {
    $("#submit-exp-upload").attr("disabled",true);

    let sumBOR = Number($("#submit-exp-sum").val());
    let botL = Number($("#submit-exp-worldlevel").val());
    let expA = Number($("#submit-exp-hero").val());
    let expB = Number($("#submit-exp-adventurer").val());
    let expC = Number($("#submit-exp-wanderer").val());
    let sumBORB = expA+expB+expC;
    let timeBOR = getTime();

    if (sumBORB==0){
        $("#submit-fail-modal-2").modal("show");
        $("#submit-exp-upload").attr("disabled", false);
    }else {
        $("#submit-exp-upload").html("提交中...");
        $.ajax({
            type: "POST",
            url: "expSubmit",
            data: {
                "sumBOR": sumBOR,
                "expA": expA,
                "expB": expB,
                "expC": expC,
                "botL": botL,
                "timeBOR": timeBOR
            },
            timeout: 50000,
            success: function (msg) {
                $("#submit-exp-upload").html("提交");
                $("#submit-success-modal").modal("show");
                $("#submit-exp-sum").val("1");
                $("#submit-exp-worldlevel").val("8");
                $("#submit-exp-hero").val("");
                $("#submit-exp-adventurer").val("");
                $("#submit-exp-wanderer").val("");
                $("#submit-exp-upload").attr("disabled", false);
            },
            error: function (msg) {
                $("#submit-exp-upload").html("提交");
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
        $("#submit-wam-upload").attr("disabled", false);
    }else {
        $("#submit-wam-upload").html("提交中...");
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
                $("#submit-wam-upload").html("提交");
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
                $("#submit-wam-upload").html("提交");
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
        $("#submit-boss-upload").html("提交中...");
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
                $("#submit-boss-upload").html("提交");
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
                $("#submit-boss-upload").html("提交");
                $("#submit-fail-modal").modal("show");
                $("#submit-boss-upload").attr("disabled", false);
            }
        });
    }
})

$(document).on("click", "#submit-boss-continue", function () {
    $("#submit-boss-continue").attr("disabled",true);
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
        $("#submit-boss-continue").attr("disabled", false);
    }else {
        $("#submit-boss-continue").html("提交中...");
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
                $("#submit-boss-continue").html("继续输入圣遗物");
                $("#submit-success-modal-2").modal("show");
                $("#submit-boss-sum").val("1");
                $("#submit-boss-worldlevel").val("8");
                $("#submit-boss-a").val("");
                $("#submit-boss-b").val("");
                $("#submit-boss-c").val("");
                $("#submit-boss-d").val("");
                $("#submit-boss-u").val("");
                $("#submit-boss-continue").attr("disabled", false);

                $("#submit-div-boss").removeClass("active show");
                $("#submit-tab-boss").removeClass("active");
                $("#submit-tab-artifacts").addClass("active");
                $("#submit-div-artifacts").tab("show");
            },
            error: function (msg) {
                $("#submit-boss-continue").html("继续输入圣遗物");
                $("#submit-fail-modal").modal("show");
                $("#submit-boss-continue").attr("disabled", false);
            }
        });
    }
})

$(document).on("click", "#submit-artifacts-upload", function () {
    $("#submit-artifacts-upload").attr("disabled",true);
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
        $("#submit-artifacts-upload").attr("disabled", false);
    }else if (sumArtiAll==0){
        $("#submit-fail-modal-2").modal("show");
        $("#submit-artifacts-upload").attr("disabled", false);
    }else {
        $("#submit-artifacts-upload").html("提交中...");
        $.ajax({
            type: "POST",
            url: "artifactsSubmit",
            data: {
                "sumArti": sumArti,
                "timeArti": timeArti,
                "flower": sumFlower,
                "plume": sumPlume,
                "sands": sumSands,
                "goblet": sumGoblet,
                "circlet": sumCirclet,
                "emSands": emSands,
                "erSands": erSands,
                "atkSands": atkSands,
                "defSands": defSands,
                "hpSands": hpSands,
                "elemGoblet": elemGoblet,
                "physGoblet": physGoblet,
                "atkGoblet": atkGoblet,
                "defGoblet": defGoblet,
                "hpGoblet": hpGoblet,
                "emGoblet": emGoblet,
                "cRateCirclet": cRateCirclet,
                "cDmgCirclet": cDmgCirclet,
                "atkCirclet": atkCirclet,
                "defCirclet": defCirclet,
                "hpCirclet": hpCirclet,
                "healCirclet": healCirclet,
                "emCirclet": emCirclet,
            },
            timeout: 50000,
            success: function (msg) {
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

                $("#submit-artifacts-upload").html("提交");
                $("#submit-success-modal").modal("show");
                $("#submit-artifacts-upload").attr("disabled", false);
            },
            error: function (msg) {
                $("#submit-artifacts-upload").html("提交");
                //失败回调，任意一个请求失败时返回
                $("#submit-fail-modal").modal("show");
                $("#submit-artifacts-upload").attr("disabled", false);
            }
        })
    }
})


function LoadExpSum() {
    let sumBORSum = 0;
    let expASum = 0;
    let expBSum = 0;
    let expCSum = 0;
    let expACal = 0;
    let expBCal = 0;
    let expCCal = 0;
    let botL = $("#calculate-exp-level").val();
    if (botL==0) {
        $("#calculate-exp-A").html("");
        $("#calculate-exp-B").html("");
        $("#calculate-exp-C").html("");
    } else {
        $("#calculate-exp-A").html(".");
        $("#calculate-exp-B").html(".");
        $("#calculate-exp-C").html(".");
        $.ajax({
            type: "POST",
            url: "expSumList/" + botL,
            timeout: 50000,
            success: function (result) {
                let data = result.extend.exp[0];
                if (data) {
                    sumBORSum = data.sumBORSum;
                    expASum = data.expASum;
                    expBSum = data.expBSum;
                    expCSum = data.expCSum;

                    expACal = expASum/sumBORSum;
                    expBCal = expBSum/sumBORSum;
                    expCCal = expCSum/sumBORSum;
                }

                $("#calculate-exp-A").html(expACal.toFixed(2));
                $("#calculate-exp-B").html(expBCal.toFixed(2));
                $("#calculate-exp-C").html(expCCal.toFixed(2));
            },
            error: function (msg) {
                $("#calculate-exp-A").html("无数据");
                $("#calculate-exp-B").html("无数据");
                $("#calculate-exp-C").html("无数据");
            }
        });
    }
}

function loadCTMSum() {
    let sumCTMSum = 0;
    let ctmASum = 0;
    let ctmBSum = 0;
    let ctmCSum = 0;
    let ctmACal = 0;
    let ctmBCal = 0;
    let ctmCCal = 0;
    let ctmL = $("#calculate-ctm-level").val();
    if (ctmL==0) {
        $("#calculate-ctm-A").html("");
        $("#calculate-ctm-B").html("");
        $("#calculate-ctm-C").html("");
    } else {
        $("#calculate-ctm-A").html(".");
        $("#calculate-ctm-B").html(".");
        $("#calculate-ctm-C").html(".");
        $.ajax({
            type: "POST",
            url: "ctmSumList/" + ctmL,
            timeout: 50000,
            success: function (result) {
                let data = result.extend.ctm[0];
                if (data) {
                    sumCTMSum = data.sumCTMSum;
                    ctmASum = data.ctmASum;
                    ctmBSum = data.ctmBSum;
                    ctmCSum = data.ctmCSum;

                    ctmACal = ctmASum/sumCTMSum;
                    ctmBCal = ctmBSum/sumCTMSum;
                    ctmCCal = ctmCSum/sumCTMSum;
                }

                $("#calculate-ctm-A").html(ctmACal.toFixed(2));
                $("#calculate-ctm-B").html(ctmBCal.toFixed(2));
                $("#calculate-ctm-C").html(ctmCCal.toFixed(2));
            },
            error: function (msg) {
                $("#calculate-ctm-A").html("无数据");
                $("#calculate-ctm-B").html("无数据");
                $("#calculate-ctm-C").html("无数据");
            }
        });
    }
}

$(document).on("click", "#calculate-ctm-cal", function () {
    let ctmACal = Number($("#calculate-ctm-A").text());
    let ctmBCal = Number($("#calculate-ctm-B").text());
    let ctmCCal = Number($("#calculate-ctm-C").text());

    let ctmACalReq = Number($("#calculate-ctm-A-req").val());
    let ctmBCalReq = Number($("#calculate-ctm-B-req").val());
    let ctmCCalReq = Number($("#calculate-ctm-C-req").val());

    let ctmCheckSta = $("#calculate-ctm-choose").prop("checked");

    if (ctmACal+ctmBCal+ctmCCal==0) {
        $("#calculate-fail-modal").modal("show");
    } else if (ctmACalReq+ctmBCalReq+ctmCCalReq==0) {
        $("#calculate-fail-modal-2").modal("show");
    } else if (ctmACalReq>300 || ctmBCalReq>300 || ctmCCalReq>300){
        $("#calculate-fail-modal-2").modal("show");
    } else {
        if (ctmCheckSta) {
            let calSum=1;
            while (1) {
                let calCRem = Math.floor(ctmCCal*calSum-ctmCCalReq);
                let calBRem = Math.floor(
                    ctmBCal*calSum+Math.floor(calCRem/3)-ctmBCalReq
                );
                let calARem = Math.floor(
                    ctmACal*calSum+Math.floor(calBRem/3)-ctmACalReq
                );

                if (calCRem>=0 && calBRem>=0 && calARem>=0) {
                    $("#calculate-ctm-sum-req").val(calSum);
                    break;
                }
                calSum++;
            }
        } else {
            let ctmASum = Math.ceil(ctmACalReq/ctmACal);
            let ctmBSum = Math.ceil(ctmBCalReq/ctmBCal);
            let ctmCSum = Math.ceil(ctmCCalReq/ctmCCal);

            let calSum = Math.max(ctmASum,ctmBSum,ctmCSum);
            $("#calculate-ctm-sum-req").val(calSum);
        }
    }
})
$(document).on("click", "#calculate-ctm-cal-clean", function () {
    $("#calculate-ctm-A-req").val("");
    $("#calculate-ctm-B-req").val("");
    $("#calculate-ctm-C-req").val("");
    $("#calculate-ctm-sum-req").val("");
})

function loadWAMSum() {
    let sumWAMSum = 0;
    let wamASum = 0;
    let wamBSum = 0;
    let wamCSum = 0;
    let wamDSum = 0;
    let wamACal = 0;
    let wamBCal = 0;
    let wamCCal = 0;
    let wamDCal = 0;
    let wamL = $("#calculate-wam-level").val();

    if (wamL==0) {
        $("#calculate-wam-A").val("");
        $("#calculate-wam-B").val("");
        $("#calculate-wam-C").val("");
        $("#calculate-wam-D").val("");
    } else {
        $("#calculate-wam-A").val(".");
        $("#calculate-wam-B").val(".");
        $("#calculate-wam-C").val(".");
        $("#calculate-wam-D").val(".");
        $.ajax({
            type: "POST",
            url: "wamSumList/" + wamL,
            timeout: 50000,
            success: function (result) {
                let data = result.extend.wam[0];
                if (data) {
                    sumWAMSum = data.sumWAMSum;
                    wamASum = data.wamASum;
                    wamBSum = data.wamBSum;
                    wamCSum = data.wamCSum;
                    wamDSum = data.wamDSum;

                    wamACal = wamASum/sumWAMSum;
                    wamBCal = wamBSum/sumWAMSum;
                    wamCCal = wamCSum/sumWAMSum;
                    wamDCal = wamDSum/sumWAMSum;
                }

                $("#calculate-wam-A").html(wamACal.toFixed(2));
                $("#calculate-wam-B").html(wamBCal.toFixed(2));
                $("#calculate-wam-C").html(wamCCal.toFixed(2));
                $("#calculate-wam-D").html(wamDCal.toFixed(2));
            },
            error: function (msg) {
                $("#calculate-wam-A").val("无数据");
                $("#calculate-wam-B").val("无数据");
                $("#calculate-wam-C").val("无数据");
                $("#calculate-wam-D").val("无数据");
            }
        });
    }
}
$(document).on("click", "#calculate-wam-cal", function () {
    let wamACal = Number($("#calculate-wam-A").text());
    let wamBCal = Number($("#calculate-wam-B").text());
    let wamCCal = Number($("#calculate-wam-C").text());
    let wamDCal = Number($("#calculate-wam-D").text());

    let wamACalReq = Number($("#calculate-wam-A-req").val());
    let wamBCalReq = Number($("#calculate-wam-B-req").val());
    let wamCCalReq = Number($("#calculate-wam-C-req").val());
    let wamDCalReq = Number($("#calculate-wam-D-req").val());

    let wamCheckSta = $("#calculate-wam-choose").prop("checked");

    if (wamACal+wamBCal+wamCCal+wamDCal==0) {
        $("#calculate-fail-modal").modal("show");
    } else if (wamACalReq+wamBCalReq+wamCCalReq+wamDCalReq==0) {
        $("#calculate-fail-modal-2").modal("show");
    } else if (wamACalReq>300 || wamBCalReq>300 || wamCCalReq>300 || wamDCalReq>300){
        $("#calculate-fail-modal-2").modal("show");
    } else {
        if (wamCheckSta) {
            let calSum=1
            while (1) {
                let calDRem = Math.floor(wamDCal*calSum-wamDCalReq);
                let calCRem = Math.floor(
                    wamCCal*calSum+Math.floor(calDRem/3)-wamCCalReq
                );
                let calBRem = Math.floor(
                    wamBCal*calSum+Math.floor(calCRem/3)-wamBCalReq
                );
                let calARem = Math.floor(
                    wamACal*calSum+Math.floor(calBRem/3)-wamACalReq
                );
                if (calDRem && calCRem>=0 && calBRem>=0 && calARem>=0) {
                    $("#calculate-wam-sum-req").val(calSum);
                    break;
                }
                calSum++;
            }
        } else {
            let wamASum = Math.ceil(wamACalReq/wamACal);
            let wamBSum = Math.ceil(wamBCalReq/wamBCal);
            let wamCSum = Math.ceil(wamCCalReq/wamCCal);
            let wamDSum = Math.ceil(wamDCalReq/wamDCal);

            let calSum = Math.max(wamASum,wamBSum,wamCSum,wamDSum);
            $("#calculate-wam-sum-req").val(calSum);
        }
    }
})
$(document).on("click", "#calculate-wam-cal-clean", function () {
    $("#calculate-wam-A-req").val("");
    $("#calculate-wam-B-req").val("");
    $("#calculate-wam-C-req").val("");
    $("#calculate-wam-D-req").val("");
    $("#calculate-wam-sum-req").val("");
})
