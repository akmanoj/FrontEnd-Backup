function urlValidate(string, xml){
    var x=xml.getElementsByTagName("word");
    var findc=[];
    var findd = [];
    for (j=0;j<x.length;j++)
    {
        var finda = string.indexOf(x[j].childNodes[0].nodeValue);
        if(finda >= 0){
            findc[findc.length] = x[j].childNodes[0].nodeValue;
        }
    }
    if(findc.length != 0){
        
        var cool2 = string.split(/[\s]/);
        for(i=0;i<cool2.length;i++){
            for(j=0;j<findc.length;j++){
                var find2 = cool2[i].indexOf(findc[j]);
                if(find2 >= 0){
                    if(cool2[i].indexOf("http://") < 0)
                    {
                        findd[findd.length]= "http://" + cool2[i];
                    }
                    else{
                        findd[findd.length] = cool2[i];
                    }
                    
                    break;
                }
            }
        }

    }
    return findd;
}
function dateValidateSingleWord(string, xml, findf){
    var cool3 = string.split(/[\s]/);
    var p = xml.getElementsByTagName("sword");
    for(var i=0;i<cool3.length;i++){
        for(k=0;k<p.length;k++){
            var find3 = cool3[i].indexOf(p[k].childNodes[0].nodeValue);
            if(find3 >= 0){
                var date = nextDay(p[k].childNodes[0].nodeValue);
                findf[findf.length] = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
                break;
            }

        }
    }
}
function dateValidateDigit(string, xml, findf){
    var cool2 = string.split(/[\s]/);
    var match = /\d{2}/.test(string);
    var o = xml.getElementsByTagName("poword");
    var z = xml.getElementsByTagName("pword");
    var date;
    if(match){
        for(i=0;i<cool2.length;i++){
            if(/\d{2}/.test(cool2[i])){
                var regexp = /^(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{2,4})$/
                var valid =regexp.test(cool2[i]);
                if(valid){
                    date = nextDay(cool2[i]);
                    findf[findf.length] = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
                }
                else{
                    var find4;
                    var find7;
                    find4 = prePostValidate(cool2[i+1],o)
                    find7 = prePostValidate(cool2[i-1],z);
                    if(find4 !=null && find7 != null){
                        date = nextDay(find7 + " " + cool2[i] + " " + find4);
                        findf[findf.length] = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
                    }
                    else if(find4 != null){
                        date = nextDay(cool2[i] + " " + find4);
                        findf[findf.length] = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
                    }
                    else if(find7 != null){
                        date = nextDay(find7 + " " + cool2[i]);
                        findf[findf.length] = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
                    }
                }
            }
        }
    }
}
function nextDay(day){
    return Date.parse(day);
}
function dateValidatePhrase(string, xml, findf){
    var finde = [];
    var y = xml.getElementsByTagName("eword");
    var cool2 = string.split(/[\s]/);
    for (j=0;j<y.length;j++)
    {

        if(string.indexOf(y[j].childNodes[0].nodeValue) >= 0){
            finde[finde.length] = y[j].childNodes[0].nodeValue;
            if(y[j].childNodes[0].nodeValue.indexOf(y[j+1].childNodes[0].nodeValue)>= 0 ){
                j++;
            }
        }
    }
    if(finde.length != 0){   
        var date;
        var z = xml.getElementsByTagName("pword");
        for(i=0;i<cool2.length;i++){
            for(j=0;j<finde.length;j++){
                var find2 = cool2[i].indexOf(finde[j]);
                if(find2 >= 0){
                    var find4;
                    find4 = prePostValidate(cool2[i-1],z);
                    if(find4 != null){
                        date = nextDay("next " + cool2[i]);
                        findf[findf.length] = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
                    //findf[findf.length] = find4 + " " + cool2[i];
                    }
                    else{
                        date = nextDay(cool2[i]);
                        findf[findf.length] = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
                    }
                }
            }
            
        }
    }
                        
}

function timeValidate1(string,xml,findh){
    var cool2 = string.split(/[\s]/);
    var match = /\d{1,2}/.test(string);
    var o = xml.getElementsByTagName("potime");
    var date;
    if(match){
        for(i=0;i<cool2.length;i++){
            if(/\d{1,2}/.test(cool2[i])){
                var regexp = /^(\d{1,2})[:](\d{1,2})$/
                var valid =regexp.test(cool2[i]);
                var find4;
                if(valid){
                    //findh[findh.length] = cool2[i];
                    
                    find4 = prePostValidate(cool2[i+1],o);
                    
                    if(find4 != null){
                        date = nextDay(cool2[i] + " " + find4);
                        //findh[findh.length] = date.toTimeString();
                    findh[findh.length] = date.toTimeString();
                    }
                    else{
                        date = nextDay(cool2[i]);
                        findh[findh.length] = date.toTimeString();
                    }
                }
                else{
                    find4 = prePostValidate(cool2[i+1],o);
                    
                    if(find4 != null){
                        date = nextDay(cool2[i] + " " + find4);
                        //findh[findh.length] = date.toTimeString();
                        findh[findh.length] = date.toTimeString();
                        
                    //findh[findh.length] = cool2[i] + " " + find4;
                    }
                }
            }
            
        }
    }
}
function dateValidate(string, xml){
    var findf = [];
    dateValidateDigit(string, xml, findf);
    dateValidatePhrase(string, xml, findf);
    dateValidateSingleWord(string, xml, findf);
    return findf;
}
function timeValidate(string, xml){
    var findh = [];
    timeValidate1(string, xml, findh);
    return findh;
}
function prePostValidate(string, xmlquery){
    for(k=0;k<xmlquery.length;k++){
        if(string!=null){
            var find3;
            var find4;
            find3 = string.indexOf(xmlquery[k].childNodes[0].nodeValue);
            if(find3 >= 0){
                find4 = xmlquery[k].childNodes[0].nodeValue;
                break;
            }      
        }                                 
    }
    return find4;
}
function locationValidate(string, xml){
    var cool3 = string.split(/[\s]/);
    var findi = [];
    var p = xml.getElementsByTagName("location");
    for(var i=0;i<cool3.length;i++){
        for(k=0;k<p.length;k++){
            var find3 = cool3[i].indexOf(p[k].childNodes[0].nodeValue);
            if(find3 >= 0){
                findi[findi.length] = cool3[i+1];
                break;
            }

        }
    }
    return findi;
}
function validate(){
    for(j=0;j<finde.length;j++){
        var find2 = cool2[i].indexOf(finde[j]);
    }
    return find2;
}