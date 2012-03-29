function urlValidate(string, xml){
    var x=xml.getElementsByTagName("word");
    var findc=[];
    var messageb;
    for (j=0;j<x.length;j++)
    {
        var finda = string.indexOf(x[j].childNodes[0].nodeValue);
        if(finda >= 0){
            findc[findc.length] = x[j].childNodes[0].nodeValue;
        }
    }
    if(findc.length != 0){
        var findd = [];
        var cool2 = string.split(/[\s]/);
        for(i=0;i<cool2.length;i++){
            for(j=0;j<findc.length;j++){
                var find2 = cool2[i].indexOf(findc[j]);
                if(find2 >= 0){
                    findd[findd.length] = cool2[i]
                    break;
                }
            }
        }
        for(i=0;i<findd.length;i++){
            if(i==0){
                messageb = findd[i];
            }
            else{
                messageb = messageb+","+findd[i];
            }
        }
        
    }
    if(messageb != null){
        return messageb;
    }
    else{
        return null;
    }
}
function dateValidateSingleWord(string, xml, findf){
    var cool3 = string.split(/[\s]/);
    var p = xml.getElementsByTagName("sword");
    var find6;
    for(var i=0;i<cool3.length;i++){
        for(k=0;k<p.length;k++){
            var find3 = cool3[i].indexOf(p[k].childNodes[0].nodeValue);
            if(find3 >= 0){
                find6 = o[k].childNodes[0].nodeValue;
                break;
            }
            if(find6 != null){
                findf[findf.length] = find6;
            }
        }
    }
}
function dateValidateDigit(string, xml, findf){
    var cool2 = string.split(/[\s]/);
    var match = /\d{2}/.test(string);
    var o = xml.getElementsByTagName("poword");
    if(match){
        for(i=0;i<cool2.length;i++){
            if(/\d{2}/.test(cool2[i])){
                var regexp = /^(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{2,4})$/
                var valid =regexp.test(cool2[i]);
                if(valid){
                    findf[findf.length] = cool2[i];
                }
                else{
                    var find3;
                    for(k=0;k<o.length;k++){
                        if(cool2[i+1]!=null){
                            find3 = cool2[i+1].indexOf(o[k].childNodes[0].nodeValue);
                            if(find3 >= 0){
                                var find4 = o[k].childNodes[0].nodeValue;
                                break;
                            }
                        }
                    }
                    if(find4 != null){
                        var find5 = cool2[i] + " " + find4;
                    }
                    if(find5 != null){
                        findf[findf.length] = find5;
                        find5 = null;
                        break;
                    }
            
                }
            }
        }
    }
}
function dateValidatePhrase(string, xml, findf){
    var find5;
    var finde = [];
    var y = xml.getElementsByTagName("eword");
    var cool2 = string.split(/[\s]/);
    for (var j=0;j<y.length;j++)
    {
        var finda = string.indexOf(y[j].childNodes[0].nodeValue);
        if(finda >= 0){
            finde[finde.length] = y[j].childNodes[0].nodeValue;
        }
    }

    if(finde.length != 0){   
        var z = xml.getElementsByTagName("pword");
        var find3;
        for(i=0;i<cool2.length;i++){
            for(j=0;j<finde.length;j++){
                var find2 = cool2[i].indexOf(finde[j]);
                if(find2 >= 0){
                    var find4;
                    for(k=0;k<z.length;k++){
                        if(cool2[i-1]!=null){
                            find3 = cool2[i-1].indexOf(z[k].childNodes[0].nodeValue);
                            if(find3 >= 0){
                                find4 = z[k].childNodes[0].nodeValue;
                                break;
                            }
                        }               
                    }
                    if(find4 != null){
                        find5 = find4 + " " +cool2[i];
                    }
                }
                if(find5 != null){
                    findf[findf.length] = find5;
                    find5 = null;
                    break;
                }
            }
        }
                        
    }
}
function timeValidate1(string,xml,findf){
    var cool2 = string.split(/[\s]/);
    var match = /\d{2}/.test(string);
    var o = xml.getElementsByTagName("potime");
    if(match){
        for(i=0;i<cool2.length;i++){
            if(/\d{2}/.test(cool2[i])){
                var regexp = /^(\d{1,2})[:](\d{1,2})$/
                var valid =regexp.test(cool2[i]);
                if(valid){
                    findf[findf.length] = cool2[i];
                }
                else{
                    var find3;
                    for(k=0;k<o.length;k++){
                        if(cool2[i+1]!=null){
                            find3 = cool2[i+1].indexOf(o[k].childNodes[0].nodeValue);
                            if(find3 >= 0){
                                var find4 = o[k].childNodes[0].nodeValue;
                                break;
                            }      
                        }                                 
                    }
                    if(find4 != null){
                        var find5 = cool2[i] + " " + find4;
                    }
                    if(find5 != null){
                        findf[findf.length] = find5;
                        find5 = null;
                        break;
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
    timeValidate1(string, xml, findf);
    return findf;
}
