import './main-header.scss';

import {BaseComponent} from "../../common/component";
import {BindingType} from '../../common/bindingTypes';

class MainHeaderController {   
}

class MainHeader extends BaseComponent {

    public scope = {
        name: BindingType.ONE_WAY
    };

    public controllerAs = 'mainHeaderCtrl';

    public controller = MainHeaderController;

    public template = require('./main-header.html');
}

angular
    .module('app')
    .directive('mainHeader', () => new MainHeader());
