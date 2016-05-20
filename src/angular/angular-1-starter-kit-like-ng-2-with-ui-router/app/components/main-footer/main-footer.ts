import './main-footer.scss';

import {BaseComponent} from "../../common/component";
import {BindingType} from '../../common/bindingTypes';

class MainFooterController {   
}

class MainFooter extends BaseComponent {

    public scope = {
        name: BindingType.ONE_WAY
    };

    public controllerAs = 'mainFooterCtrl';

    public controller = MainFooterController;

    public template = require('./main-footer.html');

    public replace = true;
}

angular
    .module('app')
    .directive('mainFooter', () => new MainFooter());
