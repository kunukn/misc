! function(d, $) {
 
    var stub = {
        globalNavigationItems: [
        {
            text: 'global text',
            url: '#'
        }, 
        {
            text: 'global text2',
            url: '#'
        },
        {
            text: 'global text3',
            url: '#'
        },
        {
            text: 'global text4',
            url: '#'
        }
        ],

        mainNavigationItems: [{            
            text: 'main text',
            url: '#',
            description: 'description text',
            children: [
            {                
                text: 'main text level2',
                url: '#',
                description: 'description text',
            },
            {                
                text: 'main2 text level2',
                url: '#',
                description: 'description text',
                children: [
                {                
                    text: 'main text level3',
                    url: '#',
                    description: 'description text level 3',
                }
                ]
            }
            ]
        }, {            
            text: 'main text2',
            url: '#'
        }],
        leftNavigationItems: [{            
            text: 'left text',
            url: '#'
        }, {            
            text: 'left text2',
            url: '#'
        }]
    };

    var template = Handlebars.compile($('#template').html());
    var html = template(stub);
   $('#rendered').append(html);

}(document, jQuery);
