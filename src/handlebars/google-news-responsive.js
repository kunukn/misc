!function(d, $) {
    var stub = {
        entries: [{
            title: 'title data',
            link: 'link data',
            author: 'author data',
            publishedDate: 'publishedDate data',
            categories: [
                'category 1', 'category 2'
            ]
        }, {
            title: 'title data',
            link: 'link data',
            author: 'author data',
            publishedDate: 'publishedDate data',
            categories: [
                'category 1', 'category 2'
            ]
        }]
    };

    // Aggregate string array to string
    Handlebars.registerHelper('categoriesFormatted', function(categories) {
        if (!categories || categories.length === 0) return '';
        if (categories.length === 1) return categories[0];

        return categories.reduce(function(a, b) {
            return a + b + ', ';
        }, '');
    });

    // Format author data
    Handlebars.registerHelper('authorFormatted', function(author) {
        if (!author) return '- Unknown author';
        return '- ' + author
    });

    // Json url
    var url = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0';
    url += '&num=10&q=http://news.google.com/news?output=rss';

    var templateSource = $('#template').html()
        , template = Handlebars.compile(templateSource)
        , html = '';

    // Get json data from Google
    $.ajax({
        url: url,
        type: 'GET',
        // avoid having no CORS policy issues by using jsonp
        dataType: 'jsonp',
        success: function(result) {
            data = result; // save to global var for debugging

            // If download was success, then apply rendering
            if (result.responseStatus === 200) {
                html = template(result.responseData.feed);
            } else {
                html = template(stub);
            }
        },
        error: function(result) {
            html = template(stub);
            console.log(result);
            $('body').append('ERROR - ' + JSON.stringify(result));
        },
        complete: function() {
            $('#rendered').append(html);
        }
    });
}(document, jQuery);
