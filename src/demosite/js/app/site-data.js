;
var Site;

/* site-data.js */
(function() {

    Site = Site || {}; // global var

    Site.Stub = {
        languagesSupported: [{
            text: 'English',
            url: '#lang-en-us'
        }, {
            text: 'Dansk',
            url: '#lang-da-dk'
        }],
        htmlSpots: {},
        htmlSpotTitleDefault: 'Wood advisory, development and design',
        htmlSpotBodyDefault: 'We are passionate people We are passionate people We are passionate people We are passionate people We are passionate people We are passionate people We are passionate people - Meet us here',
        htmlSpotIconDefault: 'glyphicon glyphicon-headphones',

        globalLinkItems: [{
            text: 'Events',
            url: '#global-events'
        }, {
            text: 'News & Media',
            url: '#global-news'
        }, {
            text: 'Contact',
            url: '#global-contact'
        }, {
            text: 'About us',
            url: '#global-about-us'
        }],

        accordianMenuItems: [{
            text: 'Solutions',
            url: '#',
            children: [{
                text: 'Advisory',
                url: '#',
                children: [{
                    text: 'Page1',
                    url: '#'
                }, {
                    text: 'Page2',
                    url: '#'
                }]
            }, {
                text: 'Support',
                url: '#',
                children: [{
                    text: 'Page1',
                    url: '#'
                }, {
                    text: 'Page2',
                    url: '#'
                }]
            }]
        }, {
            text: 'Cases',
            url: '#',
            children: [{
                text: 'Advisory',
                url: '#',
                children: [{
                    text: 'Page1',
                    url: '#'
                }, {
                    text: 'Page2',
                    url: '#'
                }]
            }, {
                text: 'Support',
                url: '#',
                children: [{
                    text: 'Page1',
                    url: '#'
                }, {
                    text: 'Page2',
                    url: '#'
                }]
            }]
        }, {
            text: 'Your career',
            url: '#',
            children: [{
                text: 'Advisory',
                url: '#',
                children: [{
                    text: 'Page1',
                    url: '#'
                }, {
                    text: 'Page2',
                    url: '#'
                }]
            }, {
                text: 'Support',
                url: '#',
                children: [{
                    text: 'Page1',
                    url: '#'
                }, {
                    text: 'Page2',
                    url: '#'
                }]
            }]
        }],

        megaMenuItems: [{
            text: 'Solutions',
            children: [{
                text: 'Solutions',
                description: 'Solutions description description description description description description description description'
            }, {
                text: 'Advisory',
                description: 'Advisory description description description description description description description description'
            }, {
                text: 'Support',
                description: 'Support description description description description description description description description'
            }, {
                text: 'Outsourcing',
                description: 'Outsourcing description description description description description description description description'
            }]
        }, {
            text: 'Cases',
            children: [{
                text: 'Cases',
                url: '#',
                description: 'Cases description description description description description description description description'
            }, {
                text: 'Big Cases',
                url: '#',
                description: 'Big Cases description description description description description description description description'
            }, {
                text: 'Small Cases',
                url: '#',
                description: 'Small  Cases description description description description description description description description'
            }]
        }],

        leftMenuItems: [{
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
                icon: 'fa fa-eye',
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
                icon: 'fa fa-eye',
                body: Stub.htmlSpotBodyDefault
            },
            htmlSpot6: {
                background: 'spot-background-gray',
                title: 'Responsive centered image',
                icon2: 'fa fa-eye',
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
