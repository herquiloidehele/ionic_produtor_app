var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Network } from "@ionic-native/network";
import { Events } from "ionic-angular";
export var ConnectionStatusEnum;
(function (ConnectionStatusEnum) {
    ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
    ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
})(ConnectionStatusEnum || (ConnectionStatusEnum = {}));
/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NetworkProvider = /** @class */ (function () {
    function NetworkProvider(network, eventCtl) {
        this.network = network;
        this.eventCtl = eventCtl;
        this.networkStatus = ConnectionStatusEnum.Online;
    }
    NetworkProvider.prototype.initializeNetworkEvents = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            _this.eventCtl.publish('network:online');
            _this.networkStatus = ConnectionStatusEnum.Online;
        });
        this.network.onConnect().subscribe(function () {
            _this.eventCtl.publish('network:offline');
            _this.networkStatus = ConnectionStatusEnum.Offline;
        });
        this.network.onchange().subscribe(function () {
            alert(_this.networkStatus);
        });
    };
    NetworkProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Network, Events])
    ], NetworkProvider);
    return NetworkProvider;
}());
export { NetworkProvider };
//# sourceMappingURL=network.js.map