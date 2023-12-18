"use strict";(self.webpackChunkSkeletonJWTAngular=self.webpackChunkSkeletonJWTAngular||[]).push([[4177],{708:(M,T,r)=>{r.d(T,{x:()=>Z});var t=r(8926),_=r(5219),P=r(3416),I=r(1046),x=r(1831),d=r(4581),o=r(6814),C=r(4480),u=r(7902),w=r(707),S=r(6223),b=r(8608),D=r(4104);function L(p,m){1&p&&(t.TgZ(0,"div",19)(1,"div",20),t._uU(2," Packages "),t.qZA()())}function O(p,m){if(1&p&&t._UZ(0,"i",23),2&p){const h=t.oxw(2);t.s9C("value",h.itemsInBasket)}}const k=function(){return["/dash/shopping-cart"]};function A(p,m){if(1&p&&(t.TgZ(0,"a",21)(1,"span"),t.YNc(2,O,1,1,"i",22),t.qZA()()),2&p){const h=t.oxw();t.Q6J("routerLink",t.DdM(2,k)),t.xp6(2),t.Q6J("ngIf",h.itemsInBasket>0)}}function E(p,m){1&p&&(t.TgZ(0,"div",20),t._uU(1," Packages "),t.qZA())}function R(p,m){if(1&p&&(t.TgZ(0,"ul",37)(1,"li",38),t._UZ(2,"i",39),t.TgZ(3,"span",40),t._uU(4),t.qZA()()()),2&p){const h=m.$implicit;t.xp6(4),t.Oqu(h.name)}}function F(p,m){if(1&p){const h=t.EpF();t.TgZ(0,"div",24)(1,"div",25)(2,"div",26)(3,"div",27),t._uU(4),t.qZA(),t.TgZ(5,"div",28),t._UZ(6,"div",29),t.qZA(),t.TgZ(7,"div",30),t._uU(8),t.qZA(),t._UZ(9,"hr",31),t.TgZ(10,"div",32)(11,"span",33),t._uU(12),t.ALo(13,"currency"),t.qZA()(),t._UZ(14,"hr",31),t.YNc(15,R,5,1,"ul",34),t._UZ(16,"hr",35),t.TgZ(17,"button",36),t.NdJ("click",function(){const f=t.CHM(h).$implicit,v=t.oxw();return t.KtG(v.addToCart(f))}),t.qZA()()()()}if(2&p){const h=m.$implicit;t.xp6(4),t.Oqu(h.name),t.xp6(2),t.Q6J("innerHTML",h.description,t.oJD),t.xp6(2),t.Oqu(h.company.companyName),t.xp6(4),t.Oqu(t.xi3(13,5,h.price,"R")),t.xp6(3),t.Q6J("ngForOf",h.products)}}let Z=(()=>{var p;class m extends P.k{constructor(c,l,f){super(l),this.httpHelperService=c,this.messageService=l,this.router=f,this.loggedIn=!1,this.value=0,this.min=0,this.max=100,this.shoppingCart={},this.packs=[],this.itemsInBasket=0,this.itemsInBasketEmitter=new t.vpe}ngOnInit(){this.setPriceFromStorage(),this.httpHelperService.getWithNoParmNoSecurity("/api/public/minmaxprices").subscribe({next:c=>{this.minmax=c,this.min=this.minmax.min,this.max=this.minmax.max,this.search()},error:c=>{super.processError(c)},complete:()=>{console.log("complete")}}),this.loggedIn=this.httpHelperService.isLoggedIn,this.shoppingCart.installationDate||(this.shoppingCart.installationDate=I.s.addDays(new Date,1)),this.updateCartCounter()}updateValue(){this.value=localStorage.getItem("af_price")?Number(localStorage.getItem("af_price")):(this.minmax.min+this.minmax.max)/2}setPriceFromStorage(){setTimeout(()=>this.updateValue(),50)}search(){var c=this.value;localStorage.getItem("af_price")&&(c=Number(localStorage.getItem("af_price"))),this.httpHelperService.getWithParmNoSecurity("/api/public/packsinpricerange",c).subscribe({next:l=>{this.packs=l,localStorage.setItem("af_price",String(c))},error:l=>{super.processError(l)},complete:()=>{console.log("complete")}})}addToCart(c){var l={};l.pack=c;var f=!1;this.shoppingCart.shoppingcartdetails?(this.shoppingCart.shoppingcartdetails.forEach(v=>{if(v.pack.id==c.id)return v.count=v.count+1,void(f=!0)}),f||(l.count=1,this.shoppingCart.shoppingcartdetails.push(l))):(l.count=1,this.shoppingCart.shoppingcartdetails=[l]),localStorage.setItem("shoppingCart",JSON.stringify(this.shoppingCart)),this.updateCartCounter()}updateCartCounter(){localStorage.getItem("shoppingCart")&&(this.itemsInBasket=0,this.shoppingCart=JSON.parse(localStorage.getItem("shoppingCart")),this.shoppingCart.shoppingcartdetails&&this.shoppingCart.shoppingcartdetails.forEach(c=>{this.itemsInBasket=this.itemsInBasket+c.count,c.linePrice=c.count*c.pack.price}),this.itemsInBasketEmitter.emit(this.itemsInBasket))}storeValMethod(c){c!=Number(localStorage.getItem("af_price"))&&localStorage.setItem("af_price",this.value.toString())}test(){this.value=1600}}return(p=m).\u0275fac=function(c){return new(c||p)(t.Y36(x.x),t.Y36(_.ez),t.Y36(d.F0))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-search-packages-detail"]],outputs:{itemsInBasketEmitter:"itemsInBasketEmitter"},features:[t._Bn([_.ez]),t.qOj],decls:35,vars:19,consts:[[1,"card"],[1,"grid","align-items-stretch"],["class","col-12 md:col-10",4,"ngIf"],[1,"col-12","md:col-2"],["pRipple","","enterClass","ng-hidden","enterActiveClass","px-fadein","leaveToClass","ng-hidden","class","flex m-0 md:ml-5 md:px-0 px-3 py-3 text-900 font-medium line-height-3 hover:text-primary cursor-pointer",3,"routerLink",4,"ngIf"],["class","text-900 font-medium text-4xl  py-3",4,"ngIf"],[1,"mt-0","p-0","mb-5","text-700","text-2xl"],[1,"formgrid","grid"],[1,"field","col-12","md:col-9"],[1,"grid"],[1,"col-12"],[1,"p-d-block",2,"padding-bottom","5px"],[3,"ngModel","min","max","ngModelChange"],[1,"col-6"],[2,"float","left","font-weight","600"],[2,"float","right","font-weight","600"],[1,"field","col-12","md:col-3"],["pRipple","","icon","pi pi-search","styleClass","p-button-text","label","Search","pTooltip","Click to search",3,"click"],["class","col-12 lg:col-4",4,"ngFor","ngForOf"],[1,"col-12","md:col-10"],[1,"text-900","font-medium","text-4xl","py-3"],["pRipple","","enterClass","ng-hidden","enterActiveClass","px-fadein","leaveToClass","ng-hidden",1,"flex","m-0","md:ml-5","md:px-0","px-3","py-3","text-900","font-medium","line-height-3","hover:text-primary","cursor-pointer",3,"routerLink"],["class","pi pi-shopping-cart mr-4 p-text-secondary","pBadge","","style","font-size: 2rem;float: right;",3,"value",4,"ngIf"],["pBadge","",1,"pi","pi-shopping-cart","mr-4","p-text-secondary",2,"font-size","2rem","float","right",3,"value"],[1,"col-12","lg:col-4"],[1,"p-3","h-full"],[1,"shadow-2","p-3","h-full","flex","flex-column","surface-card",2,"border-radius","6px"],[1,"text-900","font-medium","text-xl","mb-2"],[1,"text-600","mb-2"],[3,"innerHTML"],[1,"font-light"],[1,"my-3","mx-0","border-top-1","border-none","surface-border"],[1,"flex","align-items-center"],[1,"font-bold","text-2xl","text-900"],["class","list-none p-0 m-0 flex-grow-1",4,"ngFor","ngForOf"],[1,"mb-3","mx-0","border-top-1","border-none","surface-border","mt-auto"],["pButton","","pRipple","","label","Add to Cart",1,"p-3","w-full","mt-auto","p-button-outlined",3,"click"],[1,"list-none","p-0","m-0","flex-grow-1"],[1,"flex","align-items-center","mb-3"],[1,"pi","pi-check-circle","text-green-500","mr-2"],[1,"text-900"]],template:function(c,l){1&c&&(t._UZ(0,"p-toast"),t.TgZ(1,"div",0)(2,"div",1),t.YNc(3,L,3,0,"div",2),t.TgZ(4,"div",3),t.YNc(5,A,3,3,"a",4),t.qZA()(),t.YNc(6,E,2,0,"div",5),t._UZ(7,"p",6),t.TgZ(8,"div",7)(9,"div",8)(10,"div",9)(11,"div",10)(12,"label",11),t._uU(13,"Lets look at packages in price range : "),t.TgZ(14,"b"),t._uU(15),t.ALo(16,"currency"),t.qZA()()(),t.TgZ(17,"div",10),t._UZ(18,"br"),t.qZA(),t.TgZ(19,"div",10)(20,"p-slider",12),t.NdJ("ngModelChange",function(v){return l.value=v})("ngModelChange",function(v){return l.storeValMethod(v)}),t.qZA()(),t.TgZ(21,"div",10),t._UZ(22,"br"),t.qZA(),t.TgZ(23,"div",13)(24,"span",14),t._uU(25),t.ALo(26,"currency"),t.qZA()(),t.TgZ(27,"div",13)(28,"span",15),t._uU(29),t.ALo(30,"currency"),t.qZA()()()(),t.TgZ(31,"div",16)(32,"p-button",17),t.NdJ("click",function(){return l.search()}),t.qZA()()(),t.TgZ(33,"div",9),t.YNc(34,F,18,8,"div",18),t.qZA()()),2&c&&(t.xp6(3),t.Q6J("ngIf",l.loggedIn),t.xp6(2),t.Q6J("ngIf",l.loggedIn),t.xp6(1),t.Q6J("ngIf",!l.loggedIn),t.xp6(9),t.Oqu(t.xi3(16,10,l.value,"R")),t.xp6(5),t.Q6J("ngModel",l.value)("min",l.min)("max",l.max),t.xp6(5),t.Oqu(t.xi3(26,13,l.min,"R")),t.xp6(4),t.Oqu(t.xi3(30,16,l.max,"R")),t.xp6(5),t.Q6J("ngForOf",l.packs))},dependencies:[o.sg,o.O5,C.H,u.iR,w.Hq,w.zx,S.JJ,S.On,b.lM,d.rH,D.FN,o.H9]}),m})()},191:(M,T,r)=>{r.d(T,{f:()=>ce});var t=r(6814),_=r(4480),P=r(7902),I=r(707),x=r(6223),d=r(6656),o=r(8926),C=r(5219),u=r(6005),w=r(4562);let V=(()=>{var e;class n{}return e=n,(0,d.Z)(n,"\u0275fac",function(a){return new(a||e)}),(0,d.Z)(n,"\u0275mod",o.oAB({type:e})),(0,d.Z)(n,"\u0275inj",o.cJS({imports:[t.ez,w.X,u.v,C.m8]})),n})();var H=r(2947),z=r(8717),B=r(4713),U=r(2332);let N=(()=>{var e;class n extends B.s{constructor(...a){super(...a),(0,d.Z)(this,"pathId",void 0)}ngOnInit(){this.pathId="url(#"+(0,U.Th)()+")"}}return e=n,(0,d.Z)(n,"\u0275fac",function(){let i;return function(s){return(i||(i=o.n5z(e)))(s||e)}}()),(0,d.Z)(n,"\u0275cmp",o.Xpm({type:e,selectors:[["ThLargeIcon"]],standalone:!0,features:[o.qOj,o.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M1.90909 6.36364H4.45455C4.96087 6.36364 5.44645 6.1625 5.80448 5.80448C6.1625 5.44645 6.36364 4.96087 6.36364 4.45455V1.90909C6.36364 1.40277 6.1625 0.917184 5.80448 0.55916C5.44645 0.201136 4.96087 0 4.45455 0H1.90909C1.40277 0 0.917184 0.201136 0.55916 0.55916C0.201136 0.917184 0 1.40277 0 1.90909V4.45455C0 4.96087 0.201136 5.44645 0.55916 5.80448C0.917184 6.1625 1.40277 6.36364 1.90909 6.36364ZM1.46154 1.46154C1.58041 1.34268 1.741 1.27492 1.90909 1.27273H4.45455C4.62264 1.27492 4.78322 1.34268 4.90209 1.46154C5.02096 1.58041 5.08871 1.741 5.09091 1.90909V4.45455C5.08871 4.62264 5.02096 4.78322 4.90209 4.90209C4.78322 5.02096 4.62264 5.08871 4.45455 5.09091H1.90909C1.741 5.08871 1.58041 5.02096 1.46154 4.90209C1.34268 4.78322 1.27492 4.62264 1.27273 4.45455V1.90909C1.27492 1.741 1.34268 1.58041 1.46154 1.46154ZM1.90909 14H4.45455C4.96087 14 5.44645 13.7989 5.80448 13.4408C6.1625 13.0828 6.36364 12.5972 6.36364 12.0909V9.54544C6.36364 9.03912 6.1625 8.55354 5.80448 8.19551C5.44645 7.83749 4.96087 7.63635 4.45455 7.63635H1.90909C1.40277 7.63635 0.917184 7.83749 0.55916 8.19551C0.201136 8.55354 0 9.03912 0 9.54544V12.0909C0 12.5972 0.201136 13.0828 0.55916 13.4408C0.917184 13.7989 1.40277 14 1.90909 14ZM1.46154 9.0979C1.58041 8.97903 1.741 8.91128 1.90909 8.90908H4.45455C4.62264 8.91128 4.78322 8.97903 4.90209 9.0979C5.02096 9.21677 5.08871 9.37735 5.09091 9.54544V12.0909C5.08871 12.259 5.02096 12.4196 4.90209 12.5384C4.78322 12.6573 4.62264 12.7251 4.45455 12.7273H1.90909C1.741 12.7251 1.58041 12.6573 1.46154 12.5384C1.34268 12.4196 1.27492 12.259 1.27273 12.0909V9.54544C1.27492 9.37735 1.34268 9.21677 1.46154 9.0979ZM12.0909 6.36364H9.54544C9.03912 6.36364 8.55354 6.1625 8.19551 5.80448C7.83749 5.44645 7.63635 4.96087 7.63635 4.45455V1.90909C7.63635 1.40277 7.83749 0.917184 8.19551 0.55916C8.55354 0.201136 9.03912 0 9.54544 0H12.0909C12.5972 0 13.0828 0.201136 13.4408 0.55916C13.7989 0.917184 14 1.40277 14 1.90909V4.45455C14 4.96087 13.7989 5.44645 13.4408 5.80448C13.0828 6.1625 12.5972 6.36364 12.0909 6.36364ZM9.54544 1.27273C9.37735 1.27492 9.21677 1.34268 9.0979 1.46154C8.97903 1.58041 8.91128 1.741 8.90908 1.90909V4.45455C8.91128 4.62264 8.97903 4.78322 9.0979 4.90209C9.21677 5.02096 9.37735 5.08871 9.54544 5.09091H12.0909C12.259 5.08871 12.4196 5.02096 12.5384 4.90209C12.6573 4.78322 12.7251 4.62264 12.7273 4.45455V1.90909C12.7251 1.741 12.6573 1.58041 12.5384 1.46154C12.4196 1.34268 12.259 1.27492 12.0909 1.27273H9.54544ZM9.54544 14H12.0909C12.5972 14 13.0828 13.7989 13.4408 13.4408C13.7989 13.0828 14 12.5972 14 12.0909V9.54544C14 9.03912 13.7989 8.55354 13.4408 8.19551C13.0828 7.83749 12.5972 7.63635 12.0909 7.63635H9.54544C9.03912 7.63635 8.55354 7.83749 8.19551 8.19551C7.83749 8.55354 7.63635 9.03912 7.63635 9.54544V12.0909C7.63635 12.5972 7.83749 13.0828 8.19551 13.4408C8.55354 13.7989 9.03912 14 9.54544 14ZM9.0979 9.0979C9.21677 8.97903 9.37735 8.91128 9.54544 8.90908H12.0909C12.259 8.91128 12.4196 8.97903 12.5384 9.0979C12.6573 9.21677 12.7251 9.37735 12.7273 9.54544V12.0909C12.7251 12.259 12.6573 12.4196 12.5384 12.5384C12.4196 12.6573 12.259 12.7251 12.0909 12.7273H9.54544C9.37735 12.7251 9.21677 12.6573 9.0979 12.5384C8.97903 12.4196 8.91128 12.259 8.90908 12.0909V9.54544C8.91128 9.37735 8.97903 9.21677 9.0979 9.0979Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(a,s){1&a&&(o.O4$(),o.TgZ(0,"svg",0)(1,"g"),o._UZ(2,"path",1),o.qZA(),o.TgZ(3,"defs")(4,"clipPath",2),o._UZ(5,"rect",3),o.qZA()()()),2&a&&(o.Tol(s.getClassNames()),o.uIk("aria-label",s.ariaLabel)("aria-hidden",s.ariaHidden)("role",s.role),o.xp6(1),o.uIk("clip-path",s.pathId),o.xp6(3),o.Q6J("id",s.pathId))},encapsulation:2})),n})(),J=(()=>{var e;class n extends B.s{}return e=n,(0,d.Z)(n,"\u0275fac",function(){let i;return function(s){return(i||(i=o.n5z(e)))(s||e)}}()),(0,d.Z)(n,"\u0275cmp",o.Xpm({type:e,selectors:[["BarsIcon"]],standalone:!0,features:[o.qOj,o.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(a,s){1&a&&(o.O4$(),o.TgZ(0,"svg",0),o._UZ(1,"path",1),o.qZA()),2&a&&(o.Tol(s.getClassNames()),o.uIk("aria-label",s.ariaLabel)("aria-hidden",s.ariaHidden)("role",s.role))},encapsulation:2})),n})(),ae=(()=>{var e;class n{}return e=n,(0,d.Z)(n,"\u0275fac",function(a){return new(a||e)}),(0,d.Z)(n,"\u0275mod",o.oAB({type:e})),(0,d.Z)(n,"\u0275inj",o.cJS({imports:[t.ez,C.m8,H.U,z.L,J,N,C.m8]})),n})();var oe=r(1913),re=r(8608),se=r(4104),le=r(3714);let ce=(()=>{var e;class n{}return(e=n).\u0275fac=function(a){return new(a||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[t.ez,_.T,P.JH,I.hJ,x.u5,V,ae,oe.l,re.TX,se.EV,le.j]}),n})()},4562:(M,T,r)=>{r.d(T,{X:()=>I});var t=r(6656),_=r(8926),P=r(4713);let I=(()=>{var x;class d extends P.s{}return x=d,(0,t.Z)(d,"\u0275fac",function(){let o;return function(u){return(o||(o=_.n5z(x)))(u||x)}}()),(0,t.Z)(d,"\u0275cmp",_.Xpm({type:x,selectors:[["ChevronRightIcon"]],standalone:!0,features:[_.qOj,_.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(C,u){1&C&&(_.O4$(),_.TgZ(0,"svg",0),_._UZ(1,"path",1),_.qZA()),2&C&&(_.Tol(u.getClassNames()),_.uIk("aria-label",u.ariaLabel)("aria-hidden",u.ariaHidden)("role",u.role))},encapsulation:2})),d})()}}]);