!function(d, $) {
    var stub = {
        entries: [{
            title: 'title 1',
            link: 'link 1',
            author: 'author 1',
            publishedDate: 'publishedDate 1',
            categories: ['category 11', 'category 12']
        }, {
            title: 'title 2',
            link: 'link 2',
            author: 'author 2',
            publishedDate: 'publishedDate 2',
            categories: ['category 21', 'category 22']
        }]
    };

    // Aggregate string array to string
    Handlebars.registerHelper('categoriesFormat', function(categories) {
        if (!categories || categories.length === 0) return '';
        if (categories.length === 1) return categories[0];

        return categories.reduce(function(a, b) {
            return a + b + ', ';
        }, '');
    });

    // Format author data
    Handlebars.registerHelper('authorFormat', function(author) {        
        return author ? '- ' + author : '- Unknown author';
    });

    var 
    templateSource = $('#template').html(),
    template = Handlebars.compile(templateSource),
    html = '',
  
   // Json url
    url = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0';
    url += '&num=10&q=http://news.google.com/news?output=rss';

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
