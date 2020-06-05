var myobj = {
    data: [{
            url: "images/user001.jpg"
        }, {
            url: "images/user002.jpg"
        },
        {
            url: "images/user002.jpg"
        }, {
            url: "images/user002.jpg"
        }, {
            url: "images/user002.jpg"
        }, {
            url: "images/user002.jpg"
        }
    ]
}

$.ajax({
        url: "http://47.114.189.73:8080/GameUserQuery/SelectOrderBy?currentPage&pageSize=5",
        async: true,
        success: function(json) {
            console.log('shuju:', json)
            console.log(json.data.list)
            console.log('shuju:', json.data.list.length)

            var jsonLength = json.data.list.length;
            var QuestionLi1 = document.getElementById('QuestionLi1');
            for (var i = 0; i < jsonLength; i++) {
                var li = document.createElement('li');
                QuestionLi1.appendChild(li);
                QuestionLi1.getElementsByTagName('li')[i].classList.add('ques-card-list-noe')
            }
            for (var j = 0; j < jsonLength; j++) {
                var div = document.createElement('div');
                QuestionLi1.getElementsByClassName('ques-card-list-noe')[j].appendChild(div);
                QuestionLi1.getElementsByClassName('ques-card-list-noe')[j].getElementsByTagName('div')[0].className = 'ques-list-box clearfix'
            }
            for (var j = 0; j < jsonLength; j++) {
                var div2 = document.createElement('div');
                var div3 = document.createElement('div');
                var span = document.createElement('span');
                //点击
                // var div11 = document.createElement('div')
                // var input = document.createElement('input')

                QuestionLi1.getElementsByClassName('ques-list-box')[j].appendChild(div2);
                QuestionLi1.getElementsByClassName('ques-list-box')[j].appendChild(div3);
                QuestionLi1.getElementsByClassName('ques-list-box')[j].appendChild(span);
                // QuestionLi1.getElementsByClassName('ques-list-box')[j].appendChild(input);
                // QuestionLi1.getElementsByClassName('ques-list-box')[j].appendChild(div11);
                QuestionLi1.getElementsByClassName('ques-list-box')[j].getElementsByTagName('div')[0].className = 'ques-list-head'
                QuestionLi1.getElementsByClassName('ques-list-box')[j].getElementsByTagName('div')[1].className = 'ques-list-name'
                QuestionLi1.getElementsByClassName('ques-list-box')[j].getElementsByTagName('span')[0].className = 'ques-list-name-icon item-icon001'
                    //点击
                    // QuestionLi1.getElementsByClassName('ques-list-box')[j].getElementsByTagName('input')[0].setAttribute('value', '查看效果')
                    // QuestionLi1.getElementsByClassName('ques-list-box')[j].getElementsByTagName('input')[0].setAttribute('id', 'bt')
                    // QuestionLi1.getElementsByClassName('ques-list-box')[j].getElementsByTagName('input')[0].setAttribute('type', 'button')
                    // QuestionLi1.getElementsByClassName('ques-list-box')[j].getElementsByTagName('div')[2].setAttribute('id', 'antzone')
                    // QuestionLi1.getElementsByClassName('ques-list-box')[j].getElementsByTagName('div')[2].innerHTML = '0'
                    //给input添加style
                    // QuestionLi1.getElementsByClassName('ques-list-box')[j].getElementsByTagName('input')[0].setAttribute('style', 'margin-top:100px;')


                // 在ques-list-head创建一个div
                var div4 = document.createElement('div');
                QuestionLi1.getElementsByClassName('ques-list-head')[j].appendChild(div4);
                QuestionLi1.getElementsByClassName('ques-list-head')[j].getElementsByTagName('div')[0].className = 'ques-list-image';
                // 在ques-list-image创建一个div
                var img = document.createElement('img');
                QuestionLi1.getElementsByClassName('ques-list-image')[j].appendChild(img);
                QuestionLi1.getElementsByClassName('ques-list-head')[j].getElementsByTagName('img')[0].src = myobj.data[j].url;

                // 在ques-list-name创建二个div
                var div5 = document.createElement('div');
                var div6 = document.createElement('div');
                QuestionLi1.getElementsByClassName('ques-list-name')[j].appendChild(div5);
                QuestionLi1.getElementsByClassName('ques-list-name')[j].appendChild(div6);
                QuestionLi1.getElementsByClassName('ques-list-name')[j].getElementsByTagName('div')[0].className = 'ques-list-name-head';
                QuestionLi1.getElementsByClassName('ques-list-name')[j].getElementsByTagName('div')[1].className = 'ques-list-name-text';

                QuestionLi1.getElementsByClassName('ques-list-name')[j].getElementsByTagName('div')[0].innerHTML = json.data.list[j].userName;
                QuestionLi1.getElementsByClassName('ques-list-name')[j].getElementsByTagName('div')[1].innerHTML = "积分:" + "&nbsp" + json.data.list[j].userDistance;

                QuestionLi1.getElementsByClassName('ques-list-name-icon')[j].innerHTML = j + 1;

            }
        }

    })
    // window.onload = function() {
    //     var odiv = document.getElementById("antzone");
    //     var obt = document.getElementById("bt");
    //     var count = 0;
    //     obt.onclick = function() {
    //         count = count + 1;
    //         odiv.innerHTML = count;
    //     }
    // }