module.exports = function(ngModule) {
    require('./band-info.directive.js')(ngModule);
    require('./band-list.service.js')(ngModule);
}
