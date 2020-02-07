function maskify(cc) {
    if (cc.length > 4) {
        
        var a = cc.length - 4; //ilosc # do wyświetlenia

        var tab2 =new Array(a); //pusta tablica do wypelnienia #
        tab2.fill("#"); //tablica z #

        var tab2Str=tab2.join(""); //string z #

        var hashTab= cc.split(""); //tablica z hasła
        hashTab.reverse();         //odwrócenie tablicy z hasła
        
        hashTab=hashTab.slice(0, 4); //ostatnie 4 litery hasła
        hashTab.reverse();           //pierwotna kolejność

        var hashStr=hashTab.join("",4); //string z 4 ostatnich

        console.log(tab2Str+hashStr);  //string z całości
    }

    else { console.log(cc); }

}
maskify("a0123456789");
