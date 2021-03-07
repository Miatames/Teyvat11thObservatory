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
        }else if($("#submit-artifacts-sands").val()==0){
            $("#submit-artifacts-sands-card").addClass("d-none");
        }
    });
    $("#submit-artifacts-goblet").on("input propertychange",function () {
        if($("#submit-artifacts-goblet").val()>0){
            $("#submit-artifacts-goblet-card").removeClass("d-none");
        }else if($("#submit-artifacts-goblet").val()==0){
            $("#submit-artifacts-goblet-card").addClass("d-none");
        }
    });
    $("#submit-artifacts-circlet").on("input propertychange",function () {
        if($("#submit-artifacts-circlet").val()>0){
            $("#submit-artifacts-circlet-card").removeClass("d-none");
        }else if($("#submit-artifacts-circlet").val()==0){
            $("#submit-artifacts-circlet-card").addClass("d-none");
        }
    });

});
$(document).on("click", "#submit-ctm-upload", function () {
    $("#submit-ctm-upload").attr("disabled",true);
    let sumCTM = $("#submit-ctm-sum").val();
    let ctmL = $("#submit-ctm-level").val();
    let ctmA = $("#submit-ctm-a").val();
    let ctmB = $("#submit-ctm-b").val();
    let ctmC = $("#submit-ctm-c").val();
    let timeCTM = getTime();
    if (!ctmA){
        ctmA=0;
    }
    if (!ctmB){
        ctmB=0;
    }
    if (!ctmC){
        ctmC=0;
    }
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
            $("#submit-success-modal").modal("show");
            $("#submit-ctm-sum").val("1");
            $("#submit-ctm-level").val("4");
            $("#submit-ctm-a").val("");
            $("#submit-ctm-b").val("");
            $("#submit-ctm-c").val("");
            $("#submit-ctm-upload").attr("disabled",false);
        },
        error: function (msg) {
            $("#submit-fail-modal").modal("show");
            $("#submit-ctm-upload").attr("disabled",false);
        }
    });
})
$(document).on("click", "#submit-exp-upload", function () {
    $("#submit-exp-upload").attr("disabled",true);
    let sumBOR = $("#submit-exp-sum").val();
    let worldL = $("#submit-exp-worldlevel").val();
    let expA = $("#submit-exp-hero").val();
    let expB = $("#submit-exp-adventurer").val();
    let expC = $("#submit-exp-wanderer").val();
    let timeBOR = getTime();
    if (!expA){
        expA=0;
    }
    if (!expB){
        expB=0;
    }
    if (!expC){
        expC=0;
    }
    $.ajax({
        type: "POST",
        url: "expSubmit",
        data: {
            "sumBOR":sumBOR,
            "expA":expA,
            "expB":expB,
            "expC":expC,
            "worldL":worldL,
            "timeBOR":timeBOR
        },
        timeout: 50000,
        success: function (msg) {
            $("#submit-success-modal").modal("show");
            $("#submit-exp-sum").val("1");
            $("#submit-exp-worldlevel").val("8");
            $("#submit-exp-hero").val("");
            $("#submit-exp-adventurer").val("");
            $("#submit-exp-wanderer").val("");
            $("#submit-exp-upload").attr("disabled",false);
        },
        error: function (msg) {
            $("#submit-fail-modal").modal("show");
            $("#submit-exp-upload").attr("disabled",false);
        }
    });
})
$(document).on("click", "#submit-wam-upload", function () {
    $("#submit-wam-upload").attr("disabled",true);
    let sumWAM = $("#submit-wam-sum").val();
    let wamL = $("#submit-wam-level").val();
    let wamA = $("#submit-wam-a").val();
    let wamB = $("#submit-wam-b").val();
    let wamC = $("#submit-wam-c").val();
    let wamD = $("#submit-wam-d").val();
    let timeWAM = getTime();
    if (!wamA){
        wamA=0;
    }
    if (!wamB){
        wamB=0;
    }
    if (!wamC){
        wamC=0;
    }
    if (!wamD){
        wamD=0;
    }
    $.ajax({
        type: "POST",
        url: "wamSubmit",
        data: {
            "sumWAM":sumWAM,
            "wamL":wamL,
            "wamA":wamA,
            "wamB":wamB,
            "wamC":wamC,
            "wamD":wamD,
            "timeWAM":timeWAM
        },
        timeout: 50000,
        success: function (msg) {
            $("#submit-success-modal").modal("show");
            $("#submit-wam-sum").val("1");
            $("#submit-wam-level").val("4");
            $("#submit-wam-a").val("");
            $("#submit-wam-b").val("");
            $("#submit-wam-c").val("");
            $("#submit-wam-d").val("");
            $("#submit-wam-upload").attr("disabled",false);
        },
        error: function (msg) {
            $("#submit-fail-modal").modal("show");
            $("#submit-wam-upload").attr("disabled",false);
        }
    });
})

$(document).on("click", "#submit-boss-upload", function () {
    $("#submit-boss-upload").attr("disabled",true);
    let sumCAM = $("#submit-boss-sum").val();
    let camL = $("#submit-boss-worldlevel").val();
    let camU = $("#submit-boss-u").val();
    let camA = $("#submit-boss-a").val();
    let camB = $("#submit-boss-b").val();
    let camC = $("#submit-boss-c").val();
    let camD = $("#submit-boss-d").val();
    let timeCAM = getTime();

    if (!camA){
        camA=0;
    }
    if (!camB){
        camB=0;
    }
    if (!camC){
        camC=0;
    }
    if (!camD){
        camD=0;
    }
    if (!camU){
        camU=0;
    }
    $.ajax({
        type: "POST",
        url: "bossSubmit",
        data: {
            "sumCAM":sumCAM,
            "camL":camL,
            "camU":camU,
            "camA":camA,
            "camB":camB,
            "camC":camC,
            "camD":camD,
            "timeCAM":timeCAM
        },
        timeout: 50000,
        success: function (msg) {
            $("#submit-success-modal").modal("show");
            $("#submit-boss-sum").val("1");
            $("#submit-boss-worldlevel").val("8");
            $("#submit-boss-a").val("");
            $("#submit-boss-b").val("");
            $("#submit-boss-c").val("");
            $("#submit-boss-d").val("");
            $("#submit-boss-u").val("");
            $("#submit-boss-upload").attr("disabled",false);
        },
        error: function (msg) {
            $("#submit-fail-modal").modal("show");
            $("#submit-boss-upload").attr("disabled",false);
        }
    });
})

$(document).on("click", "#submit-boss-continue", function () {
    $("#submit-boss-upload").attr("disabled",true);
    let sumCAM = $("#submit-boss-sum").val();
    let camL = $("#submit-boss-worldlevel").val();
    let camU = $("#submit-boss-u").val();
    let camA = $("#submit-boss-a").val();
    let camB = $("#submit-boss-b").val();
    let camC = $("#submit-boss-c").val();
    let camD = $("#submit-boss-d").val();
    let timeCAM = getTime();

    if (!camA){
        camA=0;
    }
    if (!camB){
        camB=0;
    }
    if (!camC){
        camC=0;
    }
    if (!camD){
        camD=0;
    }
    if (!camU){
        camU=0;
    }
    $.ajax({
        type: "POST",
        url: "bossSubmit",
        data: {
            "sumCAM":sumCAM,
            "camL":camL,
            "camU":camU,
            "camA":camA,
            "camB":camB,
            "camC":camC,
            "camD":camD,
            "timeCAM":timeCAM
        },
        timeout: 50000,
        success: function (msg) {
            $("#submit-success-modal-2").modal("show");
            $("#submit-boss-sum").val("1");
            $("#submit-boss-worldlevel").val("8");
            $("#submit-boss-a").val("");
            $("#submit-boss-b").val("");
            $("#submit-boss-c").val("");
            $("#submit-boss-d").val("");
            $("#submit-boss-u").val("");
            $("#submit-boss-upload").attr("disabled",false);

            $("#submit-div-boss").removeClass("active show");
            $("#submit-tab-boss").removeClass("active");
            $("#submit-tab-artifacts").addClass("active");
            $("#submit-div-artifacts").tab("show");
        },
        error: function (msg) {
            $("#submit-fail-modal").modal("show");
            $("#submit-boss-upload").attr("disabled",false);
        }
    });
})

$(document).on("click", "#submit-artifacts-upload", function () {
    $("#submit-artifacts-continue").attr("disabled",true);
    let sumArti = $("#submit-artifacts-sum").val();
    let sumFlower = $("#submit-artifacts-flower").val();
    let sumPlume = $("#submit-artifacts-plume").val();
    let sumSands = $("#submit-artifacts-sands").val();
    let sumGoblet = $("#submit-artifacts-goblet").val();
    let sumCirclet = $("#submit-artifacts-circlet").val();

    let emSands = $("#submit-artifacts-sands-em").val();
    let erSands = $("#submit-artifacts-sands-er").val();
    let atkSands = $("#submit-artifacts-sands-atk").val();
    let defSands = $("#submit-artifacts-sands-def").val();
    let hpSands = $("#submit-artifacts-sands-hp").val();
    let sumSandsB = Number(emSands)+Number(erSands)+Number(atkSands)+Number(defSands)+Number(hpSands);

    let elemGoblet=$("#submit-artifacts-goblet-elem").val();
    let physGoblet=$("#submit-artifacts-goblet-phys").val();
    let atkGoblet=$("#submit-artifacts-goblet-atk").val();
    let defGoblet=$("#submit-artifacts-goblet-def").val();
    let hpGoblet=$("#submit-artifacts-goblet-hp").val();
    let emGoblet=$("#submit-artifacts-goblet-em").val();
    let sumGobletB = Number(elemGoblet)+Number(physGoblet)+Number(atkGoblet)+Number(defGoblet)+Number(hpGoblet)+Number(emGoblet);

    let timeArti = getTime();
    if (!sumArti){      sumArti=0;      }
    if (!sumFlower){    sumFlower=0;    }
    if (!sumPlume){     sumPlume=0;     }
    if (!sumSands){     sumSands=0;     }
    if (!sumGoblet){    sumGoblet=0;    }
    if (!sumCirclet){   sumCirclet=0;   }

    if (!emSands){      emSands=0;      }
    if (!erSands){      erSands=0;      }
    if (!atkSands){     atkSands=0;     }
    if (!defSands){     defSands=0;     }
    if (!hpSands){      hpSands=0;      }


    if (sumSandsB != sumSands || sumGobletB != sumGoblet){
        $("#submit-fail-modal-2").modal("show");
        $("#submit-boss-upload").attr("disabled", false);
    }

    if (sumSandsB == sumSands && sumGobletB == sumGoblet) {
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

        $.when(artiAllSubmitFun, sandsSubmitFun).then(
            function () {
                //成功回调，所有请求正确返回时调用
                $("#submit-success-modal").modal("show");
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

                $("#submit-success-modal").modal("show");
                $("#submit-boss-upload").attr("disabled", false);
            },
            function () {
                //失败回调，任意一个请求失败时返回
                $("#submit-fail-modal").modal("show");
                $("#submit-boss-upload").attr("disabled", false);
            }
        )
    }
})