var channelToken = '你的channelToken';
var connectionName = 'connectionName';
var user = 'user_name';
var userPwd = 'user_Password';
var db = 'db_name';
var dbUrl = 'jdbc:sqlserver://' + connectionName + db;

// 回覆訊息
function replyMsg(replyToken, userMsg, channelToken) {
  var url = 'https://api.line.me/v2/bot/message/reply';
  var opt = {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelToken,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{'type': 'text', 'text': userMsg }]
    })
  };
  UrlFetchApp.fetch(url, opt);
}

// 回覆圖片
function replyFig(replyToken, pic_url, channelToken) {
  var url = 'https://api.line.me/v2/bot/message/reply';
  var opt = {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelToken,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        type: 'image',
        originalContentUrl: pic_url,
        previewImageUrl: pic_url
      }]
    })
  };
  UrlFetchApp.fetch(url, opt);
}

// 發送訊息
function pushMsg(channelToken, message, usrId) {
  var url = 'https://api.line.me/v2/bot/message/push';
  var opt = {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelToken,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': usrId,
      'messages': [{'type': 'text', 'text': message}]
    })
  };
  UrlFetchApp.fetch(url, opt);
}

//返回 QA carousel
function replyMsg_carousel(replyToken, channelToken){
  var data = goGet()
  var replyMsg_carousel_fig = [data[1][3],data[2][3],data[3][3],data[15][3]]

  var replyMsg_carousel_fig_use = replyMsg_carousel_fig[0]
  var replyMsg_carousel_fig_how = replyMsg_carousel_fig[1]
  var replyMsg_carousel_fig_why = replyMsg_carousel_fig[2]
  var replyMsg_carousel_fig_que = replyMsg_carousel_fig[3]
  var report_url = "https://forms.gle/KXWvuRQGNWnMypJh8"
  var url = 'https://api.line.me/v2/bot/message/reply';
  var opt = {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + channelToken,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'replyToken': replyToken,
        "messages":[{
        "type": "flex",
        "altText" :"Q&A",
        "contents":{
            "type":"carousel",
            "contents":[{
            "type": "bubble",
            "size": "mega",
            "hero": {
                "type": "image",
                "url": replyMsg_carousel_fig_use,
                "position": "relative",
                "size": "full",
                "aspectMode": "cover",
                "action": {
                "type": "message",
                "label": "如何使用AbiGYM",
                "text": "如何使用AbiGYM"
                }
            },
            "body": {
                "type": "box",
                "layout": "horizontal",
                "contents": [{
                    "type": "text",
                    "text": "如何使用AbiGYM",
                    "size": "xxl",
                    "margin": "none",
                    "weight": "bold",
                    "align": "center"
                }],
                "action": {
                "type": "message",
                "label": "如何使用AbiGYM",
                "text": "如何使用AbiGYM"
                }
            }
            },
            {
            "type": "bubble",
            "hero": {
                "type": "image",
                "url": replyMsg_carousel_fig_how,
                "size": "full",
                "action": {
                "type": "message",
                "label": "怎麼做棒式",
                "text": "怎麼做棒式"
                }
            },
            "body": {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                {
                    "type": "text",
                    "text": "怎麼做棒式",
                    "size": "xxl",
                    "margin": "none",
                    "weight": "bold",
                    "align": "center"
                }
                ],
                "action": {
                "type": "message",
                "label": "怎麼做棒式",
                "text": "怎麼做棒式"
                }
            }
            },
            {
            "type": "bubble",
            "hero": {
                "type": "image",
                "url": replyMsg_carousel_fig_why,
                "size": "full",
                "action": {
                "type": "message",
                "label": "棒式的好處",
                "text": "棒式的好處"
                }
            },
            "body": {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                {
                    "type": "text",
                    "text": "棒式的好處",
                    "size": "xxl",
                    "margin": "none",
                    "weight": "bold",
                    "align": "center"
                }
                ],
                "action": {
                "type": "message",
                "label": "棒式的好處",
                "text": "棒式的好處"
                }
            }
            },
            {
            "type": "bubble",
            "hero": {
                "type": "image",
                "url": replyMsg_carousel_fig_que,
                "size": "full",
                "action":  {
                  "type": "uri",
                  "label": "Menu",
                  "uri": report_url
              }
            },
            "body": {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                {
                    "type": "text",
                    "text": "問題回報",
                    "size": "xxl",
                    "margin": "none",
                    "weight": "bold",
                    "align": "center"
                }
                ],
              "action": {
                  "type": "uri",
                  "label": "Menu",
                  "uri": report_url
              }
            }
            }
            ]
        }
    }]
      })
    };
  UrlFetchApp.fetch(url, opt);
}

//返回 QA圖片
function replyMsg_QA_picture(replyToken,postmsg ,channelToken) {
  var data = goGet()
  var replyMsg_QA_picture_fig = [data[4][3],data[5][3],data[6][3]]

  var replyMsg_QA_picture_why = replyMsg_QA_picture_fig[0]
  var replyMsg_QA_picture_use = replyMsg_QA_picture_fig[1]
  var replyMsg_QA_picture_how = replyMsg_QA_picture_fig[2]


  switch(postmsg){
    case '棒式的好處':
      var pic_url = replyMsg_QA_picture_why
      break;
    case '如何使用AbiGYM':
      var pic_url = replyMsg_QA_picture_use
      break;
    case '怎麼做棒式':
      var pic_url = replyMsg_QA_picture_how
      break;
    default :
      break;
  }
  replyFig(replyToken,pic_url ,channelToken)
}

//返回QA 鬧鐘選項
function replyMsg_botton(replyToken, channelToken) {

  var url = 'https://api.line.me/v2/bot/message/reply';
  var opt = {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + channelToken,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'replyToken': replyToken,
        "messages":[{
          "type": "template",
          "altText": "this is an image carousel template",
          "template": {
              "type": "confirm",
              "text": "預約時間提醒",
              "actions": [
                  {
                  "type": "datetimepicker",
                  "label":"設置鬧鐘",

                  "data": "clock",
                  "mode": "time",
                  "initial": "00:00",
                  "max": "23:59",
                  "min": "00:00"
                  },
                  {
                    "type": "message",
                      "label": "取消鬧鐘",
                      "text": "取消鬧鐘"
                  }
              ]
            }
          }
        ]
      })
    };
  UrlFetchApp.fetch(url, opt);
}

//google sheet get all spreadsheet
function goGet() {
  var SpreadSheet = SpreadsheetApp.openById("1l-IzOYDxWSMs5cfQloAJrPsGisS4fRfQFk-yPg721aY");
  var Sheet = SpreadSheet.getSheets()[0]; //
  var data = Sheet.getDataRange().getValues();
  Logger.log(data)
  return data
}
var data = goGet()
var replyMsg_carousel_fig = [data[1][3],data[2][3],data[3][3]]
var replyMsg_QA_picture_fig = [data[4][3],data[5][3],data[6][3]]
var clock_pushMsg_fig = data[7][3]
var replySchedule_check_fig = [data[8][3],data[9][3],data[10][3],data[11][3],data[12][3],data[13][3],data[14][3]]


// 發送每日訓練的訊息 //
function clock_pushMsg(channelToken, usrId) {
  var data = goGet()
  var clock_pushMsg_fig = data[7][3]

  var url = 'https://api.line.me/v2/bot/message/push';
  var opt = {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + channelToken,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'to': usrId,
        "messages":[{
          "type": "template",
          "altText": "this is an image carousel template",
          "template": {
            "type": "buttons",
            "thumbnailImageUrl": clock_pushMsg_fig,
            "imageAspectRatio": "square",
            "imageSize": "contain",
            "imageBackgroundColor": "#FFFFFF",
            "title": "        AutoGym - 棒式731 - ",
            "text": "您今天棒式31秒了嗎？\n趕快繼續挑戰～",
            "actions": [
              {
                "type": "uri",
                "label": "繼續訓練",
                "uri": "https:///newAutoGym"
              }
            ]
          }
        }]
      })
    };
  UrlFetchApp.fetch(url, opt);
}
// 每日發送
function clock_push(){
  var conn = Jdbc.getConnection(dbUrl, user, userPwd);
  var stmt = conn.prepareStatement('SELECT * from push_clock_id');
  stmt.setMaxRows(10000);
  var results = stmt.executeQuery();
  var numCols = results.getMetaData().getColumnCount();
  while (results.next()) {
    for (var col = 0; col < numCols; col++) {
      usrId = results.getString(col + 1);
      clock_pushMsg(channelToken, usrId);
    }
  }
  results.close();
  stmt.close();
}

// 新增、修改鬧鐘
function replyUpdate_clock_id(replyToken,userId,hour,minute,channelToken){

  var conn = Jdbc.getConnection(dbUrl, user, userPwd);

  var stmt_id_check = conn.prepareStatement("WITH present_time AS (SELECT CONVERT(DATE,DATEADD(DAY,-1,DATEADD(HOUR,8,GETDATE())))as present) SELECT COUNT((CONVERT(date,create_time)))as time1 from Plank_Record ,present_time WHERE (id =?)and(CONVERT(date,create_time) =  present) ORDER BY  time1 DESC ");
  stmt_id_check.setString(1,userId);
  stmt_id_check.setMaxRows(10);
  var id_check = stmt_id_check.executeQuery();
  if(id_check.next()){
    rs_id_check = id_check.getString(1);
  }
  Logger.log(rs_id_check);

  var stmt_clock_check = conn.prepareStatement("SELECT COUNT(user_id) FROM Clock_Record WHERE user_id =?");
  stmt_clock_check.setString(1,userId);
  stmt_clock_check.setMaxRows(10);
  var clock_check = stmt_clock_check.executeQuery();
  if(clock_check.next()){
      rs_clock_check = clock_check.getString(1);
  }
  else{rs_clock_check = false}
  Logger.log(rs_clock_check);

  clock_check.close();
  stmt_clock_check.close();
  id_check.close();
  stmt_id_check.close();

  if (rs_id_check ==true && rs_clock_check ==true ){
    var stmt = conn.prepareStatement("UPDATE Clock_Record SET updatetime_time = DATEADD(HOUR,8,GETDATE()) ,clock_time_hour =?,clock_time_minute =? WHERE user_id =?");
    stmt.setString(1,hour);
    stmt.setString(2,minute);
    stmt.setString(3,userId);
    stmt.executeUpdate();
    Logger.log('update pass');
    message = hour +"點"+ minute +"分修改完成";
    stmt.close();
  }
  else if(rs_id_check == true && rs_clock_check == false){
    var stmt = conn.prepareStatement("INSERT INTO Clock_Record VALUES(?,DATEADD(HOUR,8,GETDATE()),?,?)")
    stmt.setString(1,userId);
    stmt.setString(2,hour);
    stmt.setString(3,minute);
    stmt.executeUpdate();
    Logger.log('create pass');
    message = hour +"點"+ minute +"分新增完成";
    stmt.close();
  }
  else{
    Logger.log('error');
    message = '請先開始挑戰';
  }
  replyMsg(replyToken, message, channelToken);
}

//刪除鬧鐘
function replyDelete_clock(replyToken,userId,channelToken){
  var conn = Jdbc.getConnection(dbUrl, user, userPwd);
  var stmt_check = conn.prepareStatement("SELECT COUNT(user_id) FROM Clock_Record WHERE user_id =?");
  stmt_check.setString(1, userId);
  stmt_check.setMaxRows(1000);
  var clock_check = stmt_check.executeQuery();
  if(clock_check.next()){
    rs_clock_check = clock_check.getString(1);
  }
  else{
    rs_clock_check = false
  }
  if (rs_clock_check==true){
    var stmt_delete = conn.prepareStatement("DELETE FROM Clock_Record WHERE user_id=?");
    stmt_delete.setString(1,userId);
    stmt_delete.executeUpdate();
    message = '已成功取消鬧鐘'
    stmt_delete.close()
  }
  else{
    message = '您尚未設置鬧鐘'
  }
  stmt_check.close()
  replyMsg(replyToken, message, channelToken)
}

//查詢進度
function replySchedule_check(replyToken,userId,channelToken){
  var data = goGet()
  var replySchedule_check_fig = [data[8][3],data[9][3],data[10][3],data[11][3],data[12][3],data[13][3],data[14][3]]
  var conn = Jdbc.getConnection(dbUrl, user, userPwd);
  var stmt_plank_check = conn.prepareStatement("SELECT TOP 1 *  FROM Plank_Record WHERE id =? ORDER BY create_time DESC");
  stmt_plank_check.setString(1,userId)
  stmt_plank_check.setMaxRows(10);
  var plank_check = stmt_plank_check.executeQuery();
  while (plank_check.next()) {
    var rs_plank_check = true
    var rs_plank_check_day = plank_check.getString(3);
    var rs_plank_check_time = plank_check.getString(4).split(" ")[0];
    var last_time_day = new Date(rs_plank_check_time+"T00:00:00")
    var today = new Date()
    today.setHours(0,0,0,0)
    }
  differnt_days =(today - last_time_day)/ (1000 * 3600 * 24);



  if (rs_plank_check==true && differnt_days==1 ){
    //var msg = '目前進度為第'+rs_plank_check_round+'輪次，第'+rs_plank_check_day+'天'
    switch(Number(rs_plank_check_day)){
      case 1: var pic_url = replySchedule_check_fig[0];
      break;
      case 2: var pic_url = replySchedule_check_fig[1];
      break;
      case 3: var pic_url = replySchedule_check_fig[2];
      break;
      case 4: var pic_url = replySchedule_check_fig[3];
      break;
      case 5: var pic_url = replySchedule_check_fig[4];
      break;
      case 6: var pic_url = replySchedule_check_fig[5];
      break;
      case 7: var pic_url = replySchedule_check_fig[6];
      break;
    }
  }
  else if(rs_plank_check == true && differnt_days != 1){
    msg = '抱歉，您上次訓練日期為'+rs_plank_check_time+'，已缺席超過一天以上，挑戰將重新開始計算! ';
    var pic_url = false;
  }
  else if(rs_plank_check == true && differnt_days != 1 && Number(rs_plank_check_day)==7 ){
    var pic_url = pic_url = replySchedule_check_fig[6];
  }
  else{
    msg ='您尚未開始進行任何挑戰，趕快按下前往訓練！';
    var pic_url = false;
  }
  if (pic_url){
    replyFig(replyToken, pic_url, channelToken);
    }
  else{
    replyMsg(replyToken, msg, channelToken);
  }
}
//controller
function doPost(e) {
  console.log('info:' + e.postData.contents);
  var value = JSON.parse(e.postData.contents);
  try {
    var events = value.events;
    var message_recall = '目前僅支援Q&A選單詢問哦～' //非QA就一律回覆這個
    if (events != null) {
      for (var i in events) {
        var event = events[i];
        var type = event.type;
        var replyToken = event.replyToken; // 要回復訊息 reToken
        var sourceType = event.source.type;
        var sourceId = LineHelpers.getSourceId(event.source);
        var userId = event.source.userId.toString(); // 取得個人userId
        var groupId = event.source.groupId; // 取得群組Id
        var timeStamp = event.timestamp;
        switch (type) {
          //回傳訊息
          case 'message':
            var messageText = event.message.text; // 使用者的 Message_字串
            switch(messageText){
              case 'Q&A':
                replyMsg_carousel(replyToken, channelToken)
                break;
              case '棒式的好處':
                replyMsg_QA_picture(replyToken,'棒式的好處', channelToken)
                break;
              case '如何使用AbiGYM':
                replyMsg_QA_picture(replyToken,'如何使用AbiGYM', channelToken)
                break;
              case '怎麼做棒式':
                replyMsg_QA_picture(replyToken,'怎麼做棒式', channelToken)
                break;
              case '預約鬧鐘提醒':
                replyMsg_botton(replyToken, channelToken)
                break;
              case '取消鬧鐘':
                replyDelete_clock(replyToken,userId,channelToken)
                break;
              case '查詢進度':
                replySchedule_check(replyToken,userId,channelToken)
                break;
              default:
                replyMsg(replyToken, message_recall, channelToken);
                break;
            }
            break;

          //接受時間的回覆
          case 'postback' :
            try{ //需要寫try才會避免postback裡面不一定會有params.time的問題
              var clock_time = event.postback.params.time;
              var clock_hour = Number(clock_time.toString().split(":")[0]);
              var clock_minute = Number(clock_time.toString().split(":")[1]);
              try{
                replyUpdate_clock_id(replyToken,userId,clock_hour,clock_minute,channelToken);
                break;
              }
              catch{
                replyMsg(replyToken,'鬧鐘設置未成功，請重新設置或是聯絡客服',channelToken)
                break;
              }
            }catch{}

          default:
            break;
        }
      }
    }
  } catch(ex) {
    console.log(ex);
  }
}
