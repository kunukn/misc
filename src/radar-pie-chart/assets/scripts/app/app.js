(function(data) {

    // Dom tool
    function $(query) {
        return document.querySelector(query)
    };

    // String formatter
    if (!String.prototype.format) {
        String.prototype.format = function() {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] != 'undefined' ? args[number] : match;
            });
        };
    }

    // Data to render mappers
    function levelToTextMapper(level) {
        switch (level) {
            case 0:
                return 'Empty';
            case 1:
                return 'Very low';
            case 2:
                return 'Low';
            case 3:
                return 'Medium';
            case 4:
                return 'High';
            default:
                return 'Error';
        }
    }

    function levelToColorMapper(level) {
        switch (level) {
            case 0:
                return empty;
            case 1:
                return veryLow;
            case 2:
                return low;
            case 3:
                return medium;
            case 4:
                return high;
            default:
                return error;
        }
    }

    function levelToColorArrayMapper(level) {
        switch (level) {
            case 0:
                return [empty, empty, empty, empty];
            case 1:
                return [veryLow, empty, empty, empty];
            case 2:
                return [low, low, empty, empty];
            case 3:
                return [medium, medium, medium, empty];
            case 4:
                return [high, high, high, high];
            default:
                [error, error, error, error];
        }
    }

    function circleMapper(data) {
        var a = levelToColorArrayMapper(data.a),
            b = levelToColorArrayMapper(data.b),
            c = levelToColorArrayMapper(data.c),
            d = levelToColorArrayMapper(data.d),
            e = levelToColorArrayMapper(data.e),
            f = levelToColorArrayMapper(data.f),
            g = levelToColorArrayMapper(data.g),
            h = levelToColorArrayMapper(data.h);

        var circles = [];
        for (var i = 0; i < 4; i++) {
            circles.push('{0} 12.5%, {1} 0 25%, {2} 0 37.5%, {3} 0 50%, {4} 0 62.5%, {5} 0 75%, {6} 0 87.5%, {7} 0'.format(a[i], b[i], c[i], d[i], e[i], f[i], g[i], h[i]));
        }
        return circles;
    }

    // Color scheme in css names
    var high = 'tomato',
        medium = 'orange',
        low = 'MediumSeaGreen',
        veryLow = 'lime',
        empty = 'white',
        error = 'gray';

    // Render circles
    var circles = circleMapper(data),
        renderedCircles = [];
    for (var i = 0; i < circles.length; i++) {
        renderedCircles.push(new ConicGradient({
            stops: circles[i]
        }));
    }


    document.addEventListener("DOMContentLoaded", function(event) {

        // Set text
        $('.label.a').style.borderColor =
            levelToColorMapper(data.a);
        $('.label.a div:nth-child(2)').innerText =
            levelToTextMapper(data.a);

        $('.label.b').style.borderColor =
            levelToColorMapper(data.b);
        $('.label.b div:nth-child(2)').innerText =
            levelToTextMapper(data.b);

        $('.label.c').style.borderColor =
            levelToColorMapper(data.c);
        $('.label.c div:nth-child(2)').innerText =
            levelToTextMapper(data.c);

        $('.label.d').style.borderColor =
            levelToColorMapper(data.d);
        $('.label.d div:nth-child(2)').innerText =
            levelToTextMapper(data.d);

        $('.label.e').style.borderColor =
            levelToColorMapper(data.e);
        $('.label.e div:nth-child(2)').innerText =
            levelToTextMapper(data.e);

        $('.label.f').style.borderColor =
            levelToColorMapper(data.f);
        $('.label.f div:nth-child(2)').innerText =
            levelToTextMapper(data.f);

        $('.label.g').style.borderColor =
            levelToColorMapper(data.g);
        $('.label.g div:nth-child(2)').innerText =
            levelToTextMapper(data.g);

        $('.label.h').style.borderColor =
            levelToColorMapper(data.h);
        $('.label.h div:nth-child(2)').innerText =
            levelToTextMapper(data.h);


        // Draw circles
        for (var i = 0; i < renderedCircles.length; i++) {
            ! function(i) {
                var elem = $('.circle--{0}'.format(i + 1));
                elem.innerHTML = renderedCircles[i].svg;
            }(i);
        }

    });

})(
    // Insert your data here
    {
        a: 4,
        b: 2,
        c: 2,
        d: 4,
        e: 3,
        f: 4,
        g: 2,
        h: 3
    });
