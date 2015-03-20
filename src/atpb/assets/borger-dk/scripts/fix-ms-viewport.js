    (function(d) {
        // http://mattstow.com/responsive-design-in-ie10-on-windows-phone-8.html
        if ("-ms-user-select" in d.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var msViewportStyle = d.createElement("style");
            msViewportStyle.appendChild(
                d.createTextNode("@-ms-viewport{width:auto!important}")
            );
            d.getElementsByTagName("head")[0].appendChild(msViewportStyle);
        }
    })(document);