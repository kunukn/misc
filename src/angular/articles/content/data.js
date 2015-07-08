;
'use strict';

(function() {
    window.app = window.app || {};
    window.app.storage = {
        topics: [{
            title: 'All',
            value: '*'
        }, {
            title: 'Corporate',
            value: 'tag-corporate'
        }, {
            title: 'Customers',
            value: 'tag-customers'
        }, {
            title: 'Financials',
            value: 'tag-financials'
        }, {
            title: 'Technology',
            value: 'tag-technology'
        }, {
            title: 'NNIT Way',
            value: 'tag-nnit-way'
        }],


        frontpageArticlesDefaultVolume: 'frontpageArticlesVolume1',

        frontpageArticlesAllVolumes: ['frontpageArticlesVolume1','frontpageArticlesVolume2'],

        frontpageArticlesVolume1: [{
            type: 'basic',
            width: 'x2',
            title: 'article 1',
            description: 'description 1',
            tags: ['tag-corporate', 'tag-nnit-way'],
            image: 'content/images/image-2x.png',
            volume: '1'
        }, {
            type: 'popup',
            width: 'x2',
            title: 'article 2',
            description: 'description 2',
            tags: ['tag-corporate', 'tag-technology'],
            detail: 'big-image',
            image: 'content/images/image-2x.png',
            volume: '1'
        }, {
            type: 'video',
            width: 'x1',
            title: 'article 3',
            description: 'description 3',
            tags: ['tag-technology', 'tag-financials'],
            image: 'content/images/image-1x.png',
            volume: '1'

        }, {
            type: 'basic',
            width: 'x1',
            title: 'article 4',
            description: 'description 4',
            tags: ['tag-corporate', 'tag-customers'],
            volume: '1'
        }, {
            type: 'popup',
            width: 'x2',
            title: 'article 5',
            description: 'description 5',
            tags: ['tag-corporate', 'tag-financials'],
            detail: 'small-image',
            volume: '1'
        }, {
            type: 'popup',
            width: 'x2',
            title: 'article 6',
            description: 'description 6',
            tags: ['tag-financials'],
            detail: 'carousel',
            volume: '1'
        }],
        frontpageArticles: [{
            type: 'basic',
            width: 'x2',
            title: 'article 1',
            description: 'description 1',
            tags: ['tag-corporate', 'tag-nnit-way'],
            image: 'content/images/image-2x.png',
            volume: '1'
        }, {
            type: 'popup',
            width: 'x2',
            title: 'article 2',
            description: 'description 2',
            tags: ['tag-corporate', 'tag-technology'],
            detail: 'big-image',
            image: 'content/images/image-2x.png',
            volume: '1'
        }, {
            type: 'video',
            width: 'x1',
            title: 'article 3',
            description: 'description 3',
            tags: ['tag-technology', 'tag-financials'],
            image: 'content/images/image-1x.png',
            volume: '1'

        }, {
            type: 'basic',
            width: 'x1',
            title: 'article 4',
            description: 'description 4',
            tags: ['tag-corporate', 'tag-customers'],
            volume: '1'
        }, {
            type: 'popup',
            width: 'x2',
            title: 'article 5',
            description: 'description 5',
            tags: ['tag-corporate', 'tag-financials'],
            detail: 'small-image',
            volume: '1'
        }, {
            type: 'popup',
            width: 'x2',
            title: 'article 6',
            description: 'description 6',
            tags: ['tag-financials'],
            detail: 'carousel',
            volume: '1'
        }],

        frontpageArticlesVolume2: [{
            type: 'basic',
            width: 'x2',
            title: 'vol2 article 1',
            description: 'description 1',
            tags: ['tag-corporate', 'tag-nnit-way'],
            image: 'content/images/image-2x.png',
            volume: '2'
        }, {
            type: 'popup',
            width: 'x2',
            title: 'vol2 article 2',
            description: 'description 2',
            tags: ['tag-corporate', 'tag-technology'],
            detail: 'big-image',
            image: 'content/images/image-2x.png',
            volume: '2'
        }, {
            type: 'video',
            width: 'x1',
            title: 'vol2 article 3',
            description: 'description 3',
            tags: ['tag-technology', 'tag-financials'],
            image: 'content/images/image-1x.png',
            volume: '2'

        }, {
            type: 'basic',
            width: 'x1',
            title: 'vol2 article 4',
            description: 'description 4',
            tags: ['tag-corporate', 'tag-customers'],
            volume: '2'
        }, {
            type: 'popup',
            width: 'x2',
            title: 'vol2 article 5',
            description: 'description 5',
            tags: ['tag-corporate', 'tag-financials'],
            detail: 'small-image',
            volume: '2'
        }, {
            type: 'popup',
            width: 'x2',
            title: 'vol2 article 6',
            description: 'description 6',
            tags: ['tag-financials'],
            detail: 'carousel',
            volume: '2'
        }]
    };

})();
