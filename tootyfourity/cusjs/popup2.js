function popup(message) {
    //$('#urlmessage').html(message);
    var maskHeight = $(document).height();  
    var maskWidth = $(window).width();
    var dialogTop =  (maskHeight/2) - ($('#dialog-box').height());  
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
    $('#dialog-overlay').css({
        height:maskHeight, 
        width:maskWidth
    }).show();
    $('#dialog-box').css({
        top:dialogTop, 
        left:dialogLeft
    }).show();
     $('#dialog-message').html(message);
}

function popup2(message, findf, findh, findi) {

    $('#dialog-message2').html(message);
    
    $('#sdate').val("");
    $('#edate').val("");
    $('#time').val("");
    $('#location').val("");
    $('#note').val("");
    $('#allt').attr('checked', false);
    
    $('#sdate').datepicker('setDate',findf[0]);
    if(findf.length == 1){
        $('#edate').datepicker('setDate',findf[0]);
    }
    else{
        $('#edate').datepicker('setDate',findf[1]);
    }
    /*if(findh.length==0){
        $('#allt').attr('checked', true);
    }*/
    var date = new Date();
    var timezone = date.getTimezoneOffset();
    if(findh.length ==0){
        var d = new Date();
        $('#time').timepicker('setTime',d.toTimeString());
    }
    else{
        $('#time').timepicker('setTime',findh[0]);
    }
    if(findh.length > 1){
        $('#etime').timepicker('setTime',findh[1]);
    }
    else{
        var d2 = $('#time').timepicker('getTime'); 
        var c = d2.split(":");
        var e = parseInt(c[0])+1;
        var f = e + ":"+ c[1];
        var h = Date.parse(f);
        var g = Date.parse($('#sdate').val()+" " + f);
        $('#etime').timepicker('setTime', h.toTimeString());
    }
    //$('#time').val(findh[0]);
    $('#timezoneoffset').val(timezone);
    $('#location').val(findi[0]);
    $('#note').val(myString);
    var maskHeight = $(document).height();  
    var maskWidth = $(window).width();
    var dialogTop =  (maskHeight/3) - ($('#dialog-box2').height());  
    var dialogLeft = (maskWidth/2) - ($('#dialog-box2').width()); 
    $('#dialog-overlay2').css({
        height:maskHeight, 
        width:maskWidth
    }).show();
    $('#dialog-box2').css({
        top:dialogTop/40, 
        left:dialogLeft*5
    }).show();
}

function check(){
    myString =document.getElementById('feed').value ;
    if(myString==""){
        document.getElementById('ins').innerHTML="Please Enter any Feed";
    }
    else{
        var messagea = null;
        var messagec = null;
        messagea = urlValidate(myString, xmlDoc);
        for(i=0;i<messagea.length;i++){
            if(i==0){
                messagec = messagea[i];
            }
            else{
                messagec = messagec+","+messagea[i];
            }
        }
        if(messagec!=null){
            popup(messagec);
        }
        findg = dateValidate(myString, xmlDoc);
        findh = timeValidate(myString, xmlDoc);
        findi = locationValidate(myString, xmlDoc);
        messageb = null;
        for(i=0;i<findg.length;i++){
            if(messageb == null){
                messageb = findg[i];
            }
            else{
                messageb = messageb+","+findg[i];
            }
        }
        if(messageb!=null && messagec==null){
            popup2(messageb, findg, findh, findi);
        }
    }
                
}