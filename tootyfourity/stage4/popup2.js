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
    if(findh.length==0){$('#allt').attr('checked', true);}
    $('#time').timepicker('setTime',findh[0]);
        if(findh.length == 1){
         $('#etime').timepicker('setTime',findh[0]+1);
    }
    else{
        $('#etime').timepicker('setTime',findh[1]);
    }
    //$('#time').val(findh[0]);
    $('#timezoneoffset').val(timezone);
    $('#location').val(findi[0]);
    $('#note').val(myString);
    $( "#dialog-form" ).dialog( "open" );
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

                var title;
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

            }
            
           $( "#dialog-content" ).dialog( "open" );
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