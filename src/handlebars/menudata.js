var WEB = WEB || {};

! function() {
    WEB.stub = {
        globalNavigationItems: [
        {
            text: 'Events'
            ,url: '#'
        },
        {
            text: 'Kontakt'
            ,url: '#'
        },
        {
            text: 'Nyheder & medier'
            ,url: '#'
        },
        {
            text: 'Om os'
            ,url: '#'
        }
        ],

        mainNavigationItems: [{
            text: 'main text1',
            url: '#',
            description: 'main description Lorem ipsum dolor sit amet, graeco virtute feugiat ex sea. Vide suscipiantur duo ea, has eu alia ceteros. An vidit alienum gubergren vis, mei at doming legendos, has ex scaevola comprehensam. Quem putant scribentur usu et, ad tota noluisse principes mel, nec suscipit invidunt singulis ut.',
            children: [
            {
                text: 'main text 11',
                url: '#',
                description: 'main description 11',
                 children: [
                {
                    text: 'main text 111',
                    url: '#',
                    description: 'main description 111 Lorem ipsum dolor sit amet, graeco virtute feugiat ex sea. Vide suscipiantur duo ea, has eu alia ceteros. An vidit alienum gubergren vis, mei at doming legendos, has ex scaevola comprehensam. Quem putant scribentur usu et, ad tota noluisse principes mel, nec suscipit invidunt singulis ut.',
                }
                ]
            },
            {
                text: 'main text 12',
                url: '#',
                description: 'main description 12',
                children: [
                {
                    text: 'main text 112'
                    ,url: '#'
                    ,description: 'main description 112'
                }
                ]
            }
            ]
        }, {
            text: 'main text2',
            url: '#',
             children: [
            {
                text: 'main text 21'
                ,url: '#'
                ,description: 'main description 21'
            },
            {
                text: 'main text 22',
                url: '#',
                description: 'main description 22',
                children: [
                {
                    text: 'main text 212'
                    ,url: '#'
                    ,description: 'main description 212'
                }
                ]
            }
            ]
        }],

        leftNavigationItems: [
        {
            text: 'left text1'
            ,url: '#'
            ,children: [
            {
                text: 'left text 11'
                ,url: '#'
            },
            {
                text: 'left text 12'
                ,url: '#'
            }
            ]
        },
        {
            text: 'left text2',
            url: '#',
             children: [
            {
                text: 'left text 21'
                ,url: '#'
            },
            {
                text: 'left text 22'
                ,url: '#'
            }
            ]
        },
         {
            text: 'left text3'
            ,url: '#'
        },
        {
            text: 'left text4'
            ,url: '#'
        },
        {
            text: 'left text5',
            url: '#',
            children: [
            {
                text: 'left text 51'
                ,url: '#'
            },
            {
                text: 'left text 52'
                ,url: '#'
            }
            ]
        }
        ]
    };
}();
