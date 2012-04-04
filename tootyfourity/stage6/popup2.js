function popup() {
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
        messagea = null;
        messagea = urlValidate(myString, xmlDoc);
        if(messagea.length!=0){
            $("#cool").empty();
            for(i=0;i<messagea.length;i++){
                
                            
                // Append new divs to the $container with proper class and data.
                // data[length][...] uses the current index stored in the length variable
                /* $('<div/>', {
                    className:'con'
                })
                    .append( $('<div />', {
                    className:'author', 
                    text:messagea[i]
                    } ) )
                .append( $('<div />', {
                    text:messagea[i]
                } ) )
                .append( $('<input>', {
                    type:'text', 
                    val:'adsasdf'
                } ) )
                .append( $('<textarea />', {
                    val:'aaaa'
                } ) ) */
                var title;
                /*$.get("urlget.php?url="+messagea[i],function(response)
                {
                    title=(/<title>(.*?)<\/title>/m).exec(response)[1];
                    

                });*/

                var div1 = document.createElement("div");
                div1.setAttribute("class", "con");
                var input1 = document.createElement("input");
                input1.setAttribute("type", "text");
                input1.setAttribute("value", messagea[i]);
                var input2 = document.createElement("input");
                input2.setAttribute("type", "text");
                input2.setAttribute("value", title);
                var texta = document.createElement("textarea");
                texta.appendChild(document.createTextNode("adfadsfasdf"))
                div1.appendChild(input1);
                div1.appendChild(input2);
                div1.appendChild(texta);
                document.getElementById('cool').appendChild(div1);
            // Prepend $container to the #content div
            // .prependTo( '#cool' );
            }
            
            popup();
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
        if(messageb!=null && messagea.length==0){
            popup2(messageb, findg, findh, findi);
        }
    }
                
}