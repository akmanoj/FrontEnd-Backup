$(document).ready(function () {
    $('#close, #dialog-overlay').click(function () {     
        window.location.href="addscribblefeed.action?desc="+myString;
        $('#dialog-overlay, #dialog-box').hide(); 
        if(messageb!=null){
            popup2(messageb);
        }
        return false;
    });   
    $('#add').click(function () {     
        //window.location.href="addbookmarkfeed.action?desc="+myString+"&urls="+message;
        $('#dialog-overlay, #dialog-box').hide(); 
        if(messageb!=null){
            popup2(messageb);
        }
    });   
    $(window).resize(function () {
        if (!$('#dialog-box').is(':hidden')) popup();       
    }); 
    $('#close2, #dialog-overlay2').click(function () {     
        window.location.href="addscribblefeed.action?desc="+myString;
        $('#dialog-overlay2, #dialog-box2').hide(); 
        return false;
    });   
    $(window).resize(function () {
        if (!$('#dialog-box2').is(':hidden')) popup();       
    }); 
    $('#add2').click(function () {     
        //window.location.href="addbookmarkfeed.action?desc="+myString+"&urls="+message;
        $('#dialog-overlay2, #dialog-box2').hide();  
    });   
});
