var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
/**
 * Generated class for the HideHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var HideHeaderDirective = /** @class */ (function () {
    function HideHeaderDirective(elementRef, render) {
        this.elementRef = elementRef;
        this.render = render;
        console.log('Hello HideHeaderDirective Directive');
    }
    HideHeaderDirective.prototype.ngOnInit = function () {
        this.render.setElementStyle(this.header, 'webkitTransition', '700ms');
        this.scrollContent = this.elementRef.nativeElement.getElementsByClassName('scroll-content')[0];
        this.render.setElementStyle(this.scrollContent, 'webkitTransition', 'margin-top 700ms');
    };
    HideHeaderDirective.prototype.onScrollContent = function (event) {
        if (event.scrollTop > 56) {
            this.render.setElementStyle(this.header, 'top', '-56px');
            this.render.setElementStyle(this.scrollContent, 'margin-top', '0px');
        }
        else {
            this.render.setElementStyle(this.header, 'top', '0px');
            this.render.setElementStyle(this.scrollContent, 'margin-top', '65px');
        }
    };
    __decorate([
        Input('header'),
        __metadata("design:type", HTMLElement)
    ], HideHeaderDirective.prototype, "header", void 0);
    HideHeaderDirective = __decorate([
        Directive({
            selector: '[hide-header]',
            host: {
                '(ionScroll)': 'onScrollContent($event)'
            }
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer])
    ], HideHeaderDirective);
    return HideHeaderDirective;
}());
export { HideHeaderDirective };
//# sourceMappingURL=hide-header.js.map