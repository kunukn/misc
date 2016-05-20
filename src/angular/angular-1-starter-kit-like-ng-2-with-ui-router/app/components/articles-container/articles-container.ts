import './articles-container.scss';

import {BaseComponent} from "../../common/component";
import {BindingType} from '../../common/bindingTypes';

import {StockService} from "../../services/stock.service";
import {GithubStatusService} from "../../services/github-status.service";
import {Quote} from "../../services/stock.service";



class ArticlesContainerController {   

	
    stockService: StockService;
    githubStatusService: GithubStatusService;

    static $inject = ['$scope', '$attrs', 'stockService', 'githubStatusService'];

    constructor($scope: ng.IScope, $attrs, stockService: StockService, githubStatusService: any) {
    
        this.githubStatusService = githubStatusService;
        this.stockService = stockService;

        //this.githubStatus();

        //this.getQuote();
    }

    githubStatus() {
        this.githubStatusService.getStatus().then(status => { console.log(status); });
    }

    getQuote() {
		this.stockService.getQuote('AAPL').then((response: ng.IHttpPromiseCallbackArg<Quote>) => {

            var quoteResponse: any = response.data;

            var quote: Quote = {
                name: quoteResponse.Name,
                symbol: quoteResponse.Symbol,
                lastPrice: quoteResponse.LastPrice,
                high: quoteResponse.High,
                low: quoteResponse.Low,
                open: quoteResponse.Open
            }

            console.log(quote);
        });
    }

}

class ArticlesContainer extends BaseComponent {

    public scope = {
        name: BindingType.ONE_WAY
    };

    public controllerAs = 'articlesContainerCtrl';

    public controller = ArticlesContainerController;

    public template = require('./articles-container.html');

    public replace = true;
}

angular
    .module('app')
    .directive('articlesContainer', () => new ArticlesContainer());
