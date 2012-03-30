function popup(message) {
    var maskHeight = $(document).height();  
    var maskWidth = $(window).width();
    var dialogTop =  (maskHeight/3) - ($('#dialog-box').height());  
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
    var maskHeight = $(document).height();  
    var maskWidth = $(window).width();
    var dialogTop =  (maskHeight/3) - ($('#dialog-box2').height());  
    var dialogLeft = (maskWidth/2) - ($('#dialog-box2').width()); 
    $('#dialog-overlay2').css({
        height:maskHeight, 
        width:maskWidth
    }).show();
    $('#dialog-box2').css({
        top:dialogTop/10, 
        left:dialogLeft*1.5
    }).show();
    $('#dialog-message2').html(message);
    
    $('#sdate').val("");
    $('#edate').val("");
    $('#time').val("");
    $('#location').val("");
    $('#note').val("");
    $('#allt').attr('checked', false);
    
    $('#sdate').val(findf[0]);
    $('#edate').val(findf[1]);
    if(findh.length==0){
        $('#allt').attr('checked', true);
    }
    $('#time').val(findh[0]);
    $('#location').val(findi[0]);
    $('#note').val(myString);
}

function check(){
    myString =document.getElementById('feed').value ;
    if(myString==""){
        document.getElementById('ins').innerHTML="Please Enter any Feed";
    }
    else{
        messagea = urlValidate(myString, xmlDoc);
        if(messagea!=null){
            popup(messagea);
        }
        messageb = null;
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
        if(messageb!=null && messagea==null){
            popup2(messageb, findg, findh, findi);
        }
    }
                
}