;

/*
Atp barsel namespace

Use capitalization naming
http://www.emberist.com/2012/04/09/naming-conventions.html
*/

define(['atpBarselData'], function(atpBarselData) {

    var AtpBarsel = window.AtpBarsel || {};
    AtpBarsel.Utils = {};

    var getQueryStringParameterByName = function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);

        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    AtpBarsel.Utils.getQueryStringParameterByName = getQueryStringParameterByName;

    AtpBarsel.Stub = {};
    AtpBarsel.Stub.personas = atpBarselData;

    var persona = getQueryStringParameterByName('persona');
    AtpBarsel.Stub.personaInUse = persona === 'mona' ? atpBarselData[0] : atpBarselData[1];

    return AtpBarsel;

});
