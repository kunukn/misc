!function (d, $) {
    // Aggregate string array to string
    Handlebars.registerHelper('categoriesFormatted', function (categories) {
        if (!categories) return '';
        if (categories.length === 1) return categories[0];

        return categories.reduce(function (a, b) {
            return a + b + ', ';
        }, '');
    });

    // Format author data
    Handlebars.registerHelper('authorFormatted', function (author) {
        if (!author) return '- Unknown author';
        return '- ' + author
    });

    // Json url
    var url = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0';
    url += '&num=10&q=http://news.google.com/news?output=rss';

    // Get json data from Google service
    $.ajax({
        url: url,
        type: 'GET',
        // Avoid having no CORS policy issues by using jsonp
        // I trust that the google service will do no harm
        dataType: 'jsonp', 
        success: function (result) {                  
            data = result; // save to global var for debugging

            // If download was success, then apply rendering
            if (result.responseStatus === 200) {
                var templateSource = $('#template').html()
                , template = Handlebars.compile(templateSource)
                , html = template(result.responseData.feed);
                $('#rendered').append(html);
            }
        },
        error: function (result) {
            console.log(result);
            $('#rendered').append('ERROR - ' + JSON.stringify(result));
        }
    });
}(document, jQuery);
