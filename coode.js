function maskify(cc){
    if (cc.length>4){
// var leng=cc.length
// var last=cc.slice(leng-4);
// var a=cc.slice(0, leng-4);

var tabCC =[...cc]; //tablica z hasla

var a=cc.length - 4; //ilosc #

var tab2 =[]; //pusta tablica do wypelnienia #
tab2.fill("#", 0, a+3);

return join(slice.tabCC(a), tab2);
    }        
    
        }
        else {return cc;}
}
document.write(maskify("maciek"));
