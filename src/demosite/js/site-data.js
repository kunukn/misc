var Site;

/* site-data.js */
(function() {
    Site = Site || {}; // global var
    Site.Stub = {
        languagesSupportedForWebsite: [{
            text: 'English',
            url: '#'
        },
        {
            text: 'Dansk',
            url: '#'
        }],
        htmlSpots: {},
        htmlSpotTitleDefault: 'Wood advisory, development and design',
        htmlSpotBodyDefault: 'We are passionate people We are passionate people We are passionate people We are passionate people We are passionate people We are passionate people We are passionate people - Meet us here',
        htmlSpotIconDefault: 'glyphicon glyphicon-headphones',
        globalNavigationItems: [{
            text: 'Events',
            url: '#'
        }, {
            text: 'News & Media',
            url: '#'
        }, {
            text: 'Contact',
            url: '#'
        }, {
            text: 'About us',
            url: '#'
        }],

        mainNavigationItems: [{
            text: 'Industries & Solutions',
            children: [{
                text: 'Industries',
                children: [{
                    text: 'IT sciences',
                    url: '#',
                    description: 'With profound domain knowledge, Wood knows how to use IT to optimize business processes while staying compliant'
                }, {
                    text: 'Enterprise',
                    url: '#',
                    description: 'Wood has a proven track record of handling IT challenges, in terms of both size and complexity, for large enterprises'
                }]
            }, {
                text: 'Solutions',
                children: [{
                    text: 'Advisory Services',
                    url: '#',
                    description: 'Wood’s advisory services span a variety of areas and are built to optimize your company’s use of IT'
                }, {
                    text: 'Application Design',
                    url: '#',
                    description: 'Based on best practices, we manage applications in a secure, flexible and scalable way, freeing you to focus on your core business'
                }, {
                    text: 'Application Design2',
                    url: '#',
                    description: 'Based on best practices, we manage applications in a secure, flexible and scalable way, freeing you to focus on your core business'
                }, {
                    text: 'Application Design3',
                    url: '#',
                    description: 'Based on best practices, we manage applications in a secure, flexible and scalable way, freeing you to focus on your core business'
                }, {
                    text: 'Application Design4',
                    url: '#',
                    description: 'Based on best practices, we manage applications in a secure, flexible and scalable way, freeing you to focus on your core business'
                }]
            }]
        }, {
            text: 'Customers & cases',
            children: [{
                text: 'Cases',
                url: '#',
                description: 'main description 21'
            }, {
                text: 'Customers',
                url: '#',
                description: 'main description 22'
            }]
        }],

        leftNavigationItems: [{
            text: 'left text1',
            url: '#',
            children: [{
                text: 'left text 11',
                url: '#'
            }, {
                text: 'left text 12',
                url: '#'
            }]
        }, {
            text: 'left text2',
            url: '#',
            children: [{
                text: 'left text 21',
                url: '#'
            }, {
                text: 'left text 22',
                url: '#'
            }]
        }, {
            text: 'left text3',
            url: '#'
        }, {
            text: 'left text4',
            url: '#'
        }, {
            text: 'left text5',
            url: '#',
            children: [{
                text: 'left text 51',
                url: '#'
            }, {
                text: 'left text 52',
                url: '#'
            }]
        }]
    };

    (function(Stub) {
        Stub.htmlSpots = {
            htmlSpot1: {
                background: 'spot-background-turkish',
                url: '#',
                title: Stub.htmlSpotTitleDefault,
                icon: 'glyphicon glyphicon-headphones',
                body: Stub.htmlSpotBodyDefault
            },
            htmlSpot2: {
                background: 'spot-background-gray',
                title: Stub.htmlSpotTitleDefault,
                icon: 'glyphicon glyphicon-phone',
                body: Stub.htmlSpotBodyDefault
            },
            htmlSpot3: {
                background: 'spot-background-green',
                title: Stub.htmlSpotTitleDefault,
                body: Stub.htmlSpotBodyDefault
            },
            htmlSpot4: {
                background: 'spot-background-gray',
                title: Stub.htmlSpotTitleDefault,
                body: Stub.htmlSpotBodyDefault
            },
            htmlSpot5: {
                background: 'spot-background-turkish',
                title: Stub.htmlSpotTitleDefault,
                body: Stub.htmlSpotBodyDefault
            },
            htmlSpot6: {
                background: 'spot-background-gray',
                title: 'Responsive centered image',
                icon: 'glyphicon glyphicon-map-marker',
                body: '',
                imageUrl: 'http://placehold.it/200x150'
            },
            htmlSpot7: {
                background: 'spot-background-blue',
                title: Stub.htmlSpotTitleDefault,
                icon: 'glyphicon glyphicon-camera',
                body: Stub.htmlSpotBodyDefault
            },
            htmlSpot8: {
                background: 'spot-background-red',
                icon: 'glyphicon glyphicon-facetime-video',
                title: Stub.htmlSpotTitleDefault,
                body: Stub.htmlSpotBodyDefault
            }
        }
    })(Site.Stub);
})();
