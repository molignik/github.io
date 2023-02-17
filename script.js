function clock()
   {
     var tekDate = new Date();
     var year = tekDate.getFullYear();
     var month = tekDate.getMonth() + 1;
     var date = tekDate.getDate();
     var hour = tekDate.getHours();
     var minute = tekDate.getMinutes();
     var second = tekDate.getSeconds();
     month=((month < 10) ? "0" : "") + month;
     date=((date < 10) ? "0" : "") + date;
     minute=((minute < 10) ? "0" : "") + minute;
     second =((second < 10) ? "0" : "") + second;
     hour=(hour > 24) ? hour-24 : hour;
     hour=(hour == 0) ? 0 : hour;
     var clock =date + "." + month + "." + year + "г."+ " " + hour + ":" + minute + ":" + second;
     if(clock != document.getElementById('idClock').innerHTML){ 
    document.getElementById('idClock').innerHTML = clock;
    }
     timer = setTimeout("clock()",1000);
   }
   clock();