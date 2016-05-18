import './main-layout.scss';

import {BaseComponent} from "../../common/component";
import {BindingType} from '../../common/bindingTypes';

class MainLayoutController {
}

class MainLayout extends BaseComponent {

    public scope = {
        name: BindingType.ONE_WAY
    };

    public controllerAs = 'mainLayoutCtrl';

    public controller = MainLayoutController;

    public template = require('./main-layout.html');
}

angular
    .module('app')
    .directive('mainLayout', () => new MainLayout());
