function play68_init() {
    updateShare(0);
}

function goHome() {
    window.location.href = HOME_PATH;
}

function play68_submitScore(score) {
    updateShareScore(score);
    //show_share();
}

function updateShare(bestScore) {
    /*imgUrl = 'http://appthink.duapp.com/3dbear/3dbearicon.png';
    var domains = ['www.lieqicun.com','www.lieqicun.cn','www.lieqicun.net','115.29.44.52'];
    var domain = domains[new Date().getTime()%4];
    lineLink = 'http://'+domain+'/game/11/game.html';
    descContent = "反向跑酷没玩过吧？快来一起跑！";*/
    /*	updateShareScore(bestScore);
    	appid = '';*/
}

function updateShareScore(bestScore) {
    //这里是完成
    //console.log(bestScore);
    if (bestScore > 0) {
        //shareTitle = "我在《3D熊出没》被追了" + bestScore + "米，你跑了多远？！";
    } else {
        //shareTitle = "超华丽跑酷《3D熊出没》，你能跑多远？";
    }
}
var pointerRand = 0;

function RandQuestion(Questions) {

    var Id = [];
    var Title = [];
    var Content = [];

    $.ajax({
        url: "http://47.114.189.73:8080/question_bank/byAllDelete1",
        async: true,
        success: function(json) {
            for (var i = 0; i < json.data.list.length; i++) {
                Id[i] = json.data.list[i].id;
                Title[i] = json.data.list[i].questionTitle;
                Content[i] = json.data.list[i].questionContent;
            }
            console.log("Id=====" + Id)
            console.log("Title=====" + Title)
            console.log("Content=====" + Content)

            var getQuestionLength = Questions.length;
            var Rando = pointerRand;
            pointerRand++;
            if (pointerRand == getQuestionLength) {
                pointerRand = 0;
            }
            var t = Math.round(Math.random() * 10);
            var istring = '';
            console.log(" Title[t]" + Title[t])
            istring += '<h2 qustionid="' + Questions[Rando].question_id + '" answerid="' + Questions[Rando].answer_id + '">' +
                Title[t] + '</h2>';
            istring += '<ul>';
            //Questions[Rando].answerarr.length
            for (var i = 0; i < 3; i++) {
                istring += '<li><label><input type="radio" name="radioAll" value="' + Questions[Rando].answerarr[i].answer_id + '" >' +
                    Questions[Rando].answerarr[i].answer_title + '</label></li>';
            }
            istring += '<li><label><input type="radio" name="radioAll" value="' + Questions[Rando].answerarr[i].answer_id + '" > D. ' +
                Content[t] + '</label></li>';
            istring += '</ul>';
            $("#QuestionLi").html(istring);
            $("#QustionPop").show();
        }
    });
    // var getQuestionLength = Questions.length;
    // var Rando = pointerRand;
    // pointerRand++;
    // if (pointerRand == getQuestionLength) {
    //     pointerRand = 0;
    // }
    // var istring = '';
    // istring += '<h2 qustionid="' + Questions[Rando].question_id + '" answerid="' + Questions[Rando].answer_id + '">' +
    //     Questions[Rando].title + '</h2>';
    // istring += '<ul>';
    // for (var i = 0; i < Questions[Rando].answerarr.length; i++) {
    //     istring += '<li><label><input type="radio" name="radioAll" value="' + Questions[Rando].answerarr[i].answer_id + '" >' +
    //         Questions[Rando].answerarr[i].answer_title + '</label></li>';
    // }
    // istring += '</ul>';
    // $("#QuestionLi").html(istring);
    // $("#QustionPop").show();
}
var jf = 0,
    qst = 0,
    rightnu = 0;

function SureFun() {
    qst++;
    var getRadioValue = $("input[name=radioAll]:checked").val();
    if (getRadioValue != undefined) {
        var getAnswerId = $("#QuestionLi").find("h2").attr('answerid');
        if (getRadioValue == getAnswerId) {
            jf = jf + 1000;
            rightnu++;
        } else {
            $("#jfen").text(jf + " (" + rightnu + "/" + qst + ")");
        }
        $("#jfen").text(jf + " (" + rightnu + "/" + qst + ")(" + Math.floor((rightnu / qst) * 100) + "%)");
        $("#QustionPop").hide();
        StartG();
    }
}
var questionsArray = questionsCKD;

function ureF(getSJ) {
    //var getSJ = $("#SurType").val(); 

    if (getSJ != "") {
        $("#SelectDKS").hide();
        if (getSJ == "CKD") {
            questionsArray = questionsCKD;
            return false;
        }
        // if (getSJ == "FBU") {
        //     questionsArray = questionsFBU;
        //     return false;
        // }
        // if (getSJ == "HPV") {
        //     questionsArray = questionsHPV;
        //     return false;
        // }
        // if (getSJ == "RS") {
        //     questionsArray = questionsRS;
        //     return false;
        // }

    }
}