function maskify(cc) {
    if (cc.length > 4) {


        var tabCC = [cc]; //tablica z hasla

        var a = cc.length - 4; //ilosc #

        var tab2 = []; //pusta tablica do wypelnienia #
        tab2.fill("#", 0, a + 3);

        var hashTab= tabCC.slice(a);

        console.log( toString(hashTab) + toString(tab2) );
    }

    else { console.log(cc); }

}
maskify("Maciek");
