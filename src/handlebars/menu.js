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
            text: 'main text1',
            url: '#',
            description: 'main description',
            children: [
            {                
                text: 'main text 11',
                url: '#',
                description: 'main description 11',
                 children: [
                {                
                    text: 'main text 111',
                    url: '#',
                    description: 'main description 111',
                }
                ]
            },
            {                
                text: 'main text 12',
                url: '#',
                description: 'main description 12',
                children: [
                {                
                    text: 'main text 112',
                    url: '#',
                    description: 'main description 112'
                }
                ]
            }
            ]
        }, {            
            text: 'main text2',
            url: '#',
             children: [
            {                
                text: 'main text 21',
                url: '#',
                description: 'main description 21',
            },
            {                
                text: 'main text 22',
                url: '#',
                description: 'main description 22',
                children: [
                {                
                    text: 'main text 212',
                    url: '#',
                    description: 'main description 212',
                }
                ]
            }
            ]
        }],

        leftNavigationItems: [
        {            
            text: 'left text1',
            url: '#',
            children: [
            {                
                text: 'left text 11',
                url: '#',                
            },
            {                
                text: 'left text 12',
                url: '#',                                
            }
            ]
        }, 
        {            
            text: 'left text2',
            url: '#',
             children: [
            {                
                text: 'left text 21',
                url: '#',                
            },
            {                
                text: 'left text 22',
                url: '#',                                
            }
            ]
        },
         {            
            text: 'left text3',
            url: '#'                      
        },
        {            
            text: 'left text4',
            url: '#'                      
        },
        {            
            text: 'left text5',
            url: '#',
             children: [
            {                
                text: 'left text 51',
                url: '#',                
            },
            {                
                text: 'left text 52',
                url: '#',                                
            }
            ]
        }
        ]
    };

    var template = Handlebars.compile($('#template').html());
    var html = template(stub);
   $('#rendered').append(html);

}(document, jQuery);
