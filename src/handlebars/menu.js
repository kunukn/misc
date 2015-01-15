! function(d, $) {
    var stub = {
        globalNavigationItems: [{
            text: 'global text',
            url: 'url'
        }, {
            text: 'global text2',
            url: 'url2'
        }],
        mainNavigationItems: [{
            level: 1,
            text: 'main text',
            url: 'url',
            children: [{
                level: 2,
                text: 'main text level2',
                url: 'url'
            }]
        }, {
            level: 1,
            text: 'main text2',
            url: 'url2'
        }],
        leftNavigationItems: [{
            level: 1,
            text: 'left text',
            url: 'url'
        }, {
            level: 1,
            text: 'left text2',
            url: 'url2'
        }]
    };

    var children = [
    { name: "1" },
    { name: "2" },
    { name: "3", children: [
        { name: "4" },
        { name: "5" },
        { name: "6", children: [
            { name: "7" }    
        ]}
    ]},
    { name: "8" }
];

// The main template.
var main = Handlebars.compile( $( "#main" ).html() );

// Register the list partial that "main" uses.
Handlebars.registerPartial( "children", $( "#navigationChildren" ).html() );

// Render the list.
$( "body" ).html( main( { children: children } ) );

return;

    var template = Handlebars.compile($('#template').html());
    var html = template(stub);
   $('#rendered').append(html);

}(document, jQuery);
