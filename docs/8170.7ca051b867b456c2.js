"use strict";(self.webpackChunkSkeletonJWTAngular=self.webpackChunkSkeletonJWTAngular||[]).push([[8170],{8170:(A,m,i)=>{i.r(m),i.d(m,{CustomerOrdersModule:()=>X});var d=i(6814),u=i(4581),_=i(3416),p=i(5219),l=i(9720),e=i(8926),U=i(1831),c=i(9232),h=i(707),x=i(4480),Z=i(3259),v=i(1865),f=i(6223),C=i(6760),T=i(6128),O=i(3714),b=i(4104);const q=["topOfDetail"];function y(r,s){if(1&r){const t=e.EpF();e.TgZ(0,"div",12)(1,"p-radioButton",13),e.NdJ("onClick",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.updateTable(n))})("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.selectedStatus=n)}),e.qZA(),e.TgZ(2,"label",14),e._uU(3),e.qZA()()}if(2&r){const t=s.$implicit,o=e.oxw();e.xp6(1),e.Q6J("inputId",t)("value",t)("ngModel",o.selectedStatus),e.xp6(1),e.Q6J("for",t),e.xp6(1),e.Oqu(t)}}function N(r,s){1&r&&(e.TgZ(0,"tr"),e._UZ(1,"th",15),e.TgZ(2,"th",16),e._uU(3,"Order Nr "),e._UZ(4,"p-sortIcon",17),e.qZA(),e.TgZ(5,"th",18),e._uU(6,"Order Date "),e._UZ(7,"p-sortIcon",19),e.qZA(),e.TgZ(8,"th",20),e._uU(9,"Installation Date/Time "),e._UZ(10,"p-sortIcon",21),e.qZA(),e.TgZ(11,"th",22),e._uU(12,"Sub Total "),e._UZ(13,"p-sortIcon",23),e.qZA(),e.TgZ(14,"th",22),e._uU(15,"VAT "),e._UZ(16,"p-sortIcon",24),e.qZA(),e.TgZ(17,"th",22),e._uU(18,"Total Amount "),e._UZ(19,"p-sortIcon",25),e.qZA(),e.TgZ(20,"th",22),e._uU(21,"Status "),e._UZ(22,"p-sortIcon",25),e.qZA(),e._UZ(23,"th",26),e.qZA())}function w(r,s){1&r&&(e.TgZ(0,"div",33)(1,"span",34),e._UZ(2,"i",35),e.qZA(),e.TgZ(3,"span",36),e._uU(4,"Installed"),e.qZA()()),2&r&&e.Udp("border-radius","2.5rem")}function I(r,s){1&r&&(e.TgZ(0,"div",37)(1,"span",38),e._UZ(2,"i",39),e.qZA(),e.TgZ(3,"span",40),e._uU(4,"Open"),e.qZA()()),2&r&&e.Udp("border-radius","2.5rem")}function S(r,s){1&r&&(e.TgZ(0,"div",41)(1,"span",42),e._UZ(2,"i",43),e.qZA(),e.TgZ(3,"span",40),e._uU(4,"Cancelled"),e.qZA()()),2&r&&e.Udp("border-radius","2.5rem")}function M(r,s){if(1&r){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._UZ(2,"button",27),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.ALo(7,"date"),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.ALo(10,"date"),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"currency"),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.ALo(16,"currency"),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.ALo(19,"currency"),e.qZA(),e.TgZ(20,"td"),e.YNc(21,w,5,2,"div",28),e.YNc(22,I,5,2,"div",29),e.YNc(23,S,5,2,"div",30),e.qZA(),e.TgZ(24,"td")(25,"div",31)(26,"p-button",32),e.NdJ("onClick",function(){const a=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.viewOrder(a))}),e.qZA()()()()}if(2&r){const t=s.$implicit,o=s.expanded;e.xp6(2),e.Q6J("pRowToggler",t)("icon",o?"pi pi-chevron-down":"pi pi-chevron-right"),e.xp6(2),e.Oqu(t.orderNumber),e.xp6(2),e.Oqu(e.xi3(7,11,t.createDate,"YYYY-MM-dd")),e.xp6(3),e.Oqu(e.xi3(10,14,t.shoppingcart.installationDate,"YYYY-MM-dd HH:mm")),e.xp6(3),e.Oqu(e.xi3(13,17,t.subTotal,"R")),e.xp6(3),e.Oqu(e.xi3(16,20,t.vat,"R")),e.xp6(3),e.Oqu(e.xi3(19,23,t.total,"R")),e.xp6(3),e.Q6J("ngIf","INSTALLED"==t.supplierOrderStatus),e.xp6(1),e.Q6J("ngIf","OPEN"==t.supplierOrderStatus),e.xp6(1),e.Q6J("ngIf","CANCELLED"==t.supplierOrderStatus)}}function J(r,s){if(1&r&&(e.TgZ(0,"tr")(1,"td",44),e._uU(2,"No orders with a status of "),e.TgZ(3,"b"),e._uU(4),e.qZA()()()),2&r){const t=e.oxw();e.xp6(4),e.Oqu(t.selectedStatus)}}function Y(r,s){1&r&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Package"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Description"),e.qZA(),e.TgZ(5,"th",48),e._uU(6,"Quantity "),e._UZ(7,"p-sortIcon",49),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Price"),e.qZA(),e.TgZ(10,"th",50),e._uU(11,"Total "),e._UZ(12,"p-sortIcon",51),e.qZA()())}function D(r,s){if(1&r&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"div",52),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.ALo(9,"currency"),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.ALo(12,"currency"),e.qZA()()),2&r){const t=s.$implicit;e.xp6(2),e.Oqu(t.pack.name),e.xp6(2),e.Q6J("innerHTML",t.pack.description,e.oJD),e.xp6(2),e.Oqu(t.count),e.xp6(2),e.Oqu(e.xi3(9,5,t.pack.price,"R")),e.xp6(3),e.Oqu(e.xi3(12,8,t.linePrice,"R"))}}function L(r,s){1&r&&(e.TgZ(0,"tr")(1,"td",53),e._uU(2,"There are no products for this package yet."),e.qZA()())}function Q(r,s){if(1&r&&(e.TgZ(0,"tr")(1,"td",45)(2,"div",46)(3,"p-table",47),e.YNc(4,Y,13,0,"ng-template",7),e.YNc(5,D,13,11,"ng-template",8),e.YNc(6,L,3,0,"ng-template",9),e.qZA()()()()),2&r){const t=s.$implicit;e.xp6(3),e.Q6J("value",null==t.shoppingcart?null:t.shoppingcart.shoppingcartdetails)}}function R(r,s){if(1&r&&(e.TgZ(0,"div",75)(1,"span"),e._uU(2),e.qZA()()),2&r){const t=e.oxw(3);e.xp6(2),e.Oqu(t.order.address.addressLine2)}}function P(r,s){if(1&r&&(e.TgZ(0,"div",75)(1,"span"),e._uU(2),e.qZA()()),2&r){const t=e.oxw(3);e.xp6(2),e.Oqu(t.order.address.addressLine3)}}function H(r,s){if(1&r&&(e.TgZ(0,"div",71)(1,"div",31)(2,"div")(3,"span",72),e._uU(4,"Installation address"),e.qZA(),e.TgZ(5,"div",73)(6,"div",74)(7,"div")(8,"div",75)(9,"span"),e._uU(10),e.qZA()(),e.YNc(11,R,3,1,"div",76),e.YNc(12,P,3,1,"div",76),e.TgZ(13,"div",75)(14,"span"),e._uU(15),e.qZA()(),e.TgZ(16,"div",31)(17,"span"),e._uU(18),e.qZA()()()()()()()()),2&r){const t=e.oxw(2);e.xp6(10),e.Oqu(t.order.address.addressLine1),e.xp6(1),e.Q6J("ngIf",t.order.address.addressLine2),e.xp6(1),e.Q6J("ngIf",t.order.address.addressLine3),e.xp6(3),e.Oqu(null==t.order.address.province?null:t.order.address.province.provinceDescription),e.xp6(3),e.Oqu(t.order.address.postcode)}}function k(r,s){if(1&r&&(e.TgZ(0,"span"),e._UZ(1,"i",77),e._uU(2),e.qZA()),2&r){const t=e.oxw(3);e.xp6(2),e.hij("\xa0",null==t.order.shoppingcart||null==t.order.shoppingcart.user?null:t.order.shoppingcart.user.cellNumber,"")}}function E(r,s){if(1&r&&(e.TgZ(0,"span"),e._UZ(1,"i",78),e._uU(2),e.qZA()),2&r){const t=e.oxw(3);e.xp6(2),e.hij("\xa0",null==t.order.shoppingcart||null==t.order.shoppingcart.user?null:t.order.shoppingcart.user.email,"")}}function B(r,s){if(1&r&&(e.TgZ(0,"div",71)(1,"div",31)(2,"div")(3,"span",72),e._uU(4,"Customer details"),e.qZA(),e.TgZ(5,"div",73)(6,"div",74)(7,"div")(8,"div",75)(9,"span"),e._uU(10),e.qZA()(),e.TgZ(11,"div",75),e.YNc(12,k,3,1,"span",11),e.qZA(),e.TgZ(13,"div",31),e.YNc(14,E,3,1,"span",11),e.qZA()()()()()()()),2&r){const t=e.oxw(2);e.xp6(10),e.AsE("",null==t.order.shoppingcart||null==t.order.shoppingcart.user?null:t.order.shoppingcart.user.firstname," ",null==t.order.shoppingcart||null==t.order.shoppingcart.user?null:t.order.shoppingcart.user.lastname,""),e.xp6(2),e.Q6J("ngIf",null==t.order.shoppingcart||null==t.order.shoppingcart.user?null:t.order.shoppingcart.user.cellNumber),e.xp6(2),e.Q6J("ngIf",null==t.order.shoppingcart||null==t.order.shoppingcart.user?null:t.order.shoppingcart.user.email)}}function F(r,s){if(1&r&&(e.TgZ(0,"ul",90)(1,"li",91),e._UZ(2,"i",92),e.TgZ(3,"span",93),e._uU(4),e.qZA()()()),2&r){const t=s.$implicit;e.xp6(4),e.Oqu(t.name)}}function j(r,s){if(1&r&&(e.TgZ(0,"div",79)(1,"div",80)(2,"div",81)(3,"div",82),e._uU(4),e.TgZ(5,"span",83),e._uU(6,"x"),e.qZA(),e.TgZ(7,"span",84),e._uU(8),e.qZA()(),e.TgZ(9,"div",85),e._UZ(10,"div",52),e.qZA(),e._UZ(11,"hr",86),e.TgZ(12,"div",12)(13,"span",87),e._uU(14),e.ALo(15,"currency"),e.qZA()(),e._UZ(16,"hr",86),e.YNc(17,F,5,1,"ul",88),e._UZ(18,"hr",89),e.qZA()()()),2&r){const t=s.$implicit;e.xp6(4),e.hij("",t.pack.name," "),e.xp6(4),e.hij(" ",t.count,""),e.xp6(2),e.Q6J("innerHTML",t.pack.description,e.oJD),e.xp6(4),e.Oqu(e.xi3(15,5,t.pack.price,"R")),e.xp6(3),e.Q6J("ngForOf",t.pack.products)}}function z(r,s){if(1&r){const t=e.EpF();e.TgZ(0,"div",null,54)(2,"div",55)(3,"div",56)(4,"div",57)(5,"label",58),e._uU(6,"Order number"),e.qZA(),e.TgZ(7,"input",59),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.order.orderNumber=n)}),e.qZA()(),e.TgZ(8,"div",57)(9,"label",60),e._uU(10,"Preferred Installation Date"),e.qZA(),e.TgZ(11,"p-calendar",61),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.order.shoppingcart.installationDate=n)}),e.qZA()(),e.TgZ(12,"div",57)(13,"label",62),e._uU(14,"Status"),e.qZA(),e.TgZ(15,"p-selectButton",63),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.order.supplierOrderStatus=n)}),e.qZA()(),e.TgZ(16,"div",57)(17,"p-button",64),e.NdJ("onClick",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.updateOrder())}),e.qZA()()()(),e.TgZ(18,"div",65),e._UZ(19,"div",66),e.TgZ(20,"div",67),e.YNc(21,H,19,5,"div",68),e.qZA(),e.TgZ(22,"div",67),e.YNc(23,B,15,4,"div",69),e.qZA()(),e.TgZ(24,"div",65),e.YNc(25,j,19,8,"div",70),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(7),e.Q6J("ngModel",t.order.orderNumber),e.xp6(4),e.Q6J("ngModel",t.order.shoppingcart.installationDate)("showIcon",!0)("disabled","OPEN"!=t.order.supplierOrderStatus)("showTime",!0)("readonlyInput",!0),e.xp6(4),e.Q6J("options",t.supplierOrderStatus)("ngModel",t.order.supplierOrderStatus)("disabled",!1),e.xp6(2),e.Q6J("loading",t.loadingButton),e.xp6(4),e.Q6J("ngIf",t.order.address),e.xp6(2),e.Q6J("ngIf",null==t.order.shoppingcart?null:t.order.shoppingcart.user),e.xp6(2),e.Q6J("ngForOf",null==t.order.shoppingcart?null:t.order.shoppingcart.shoppingcartdetails)}}const G=function(){return{"min-width":"50rem"}},K=function(){return[5,10,25,50]},$=[{path:"",component:(()=>{var r;class s extends _.k{constructor(o,n){super(n),this.httpHelperService=o,this.messageService=n,this.orders=[],this.order={},this.loading=!1,this.totalRecords=0,this.loadingButton=!1,this.selectedStatus="Open",this.addpaytransactions={},this.statuses=Object.keys(l.sA),this.supplierOrderStatus=[{label:"Open",value:l.sA.Open},{label:"Installed",value:l.sA.Installed},{label:"Cancelled",value:l.sA.Cancelled}]}ngOnInit(){this.fetchOrders(this.selectedStatus)}fetchOrders(o){let n=localStorage.getItem("selectedC");if(n){this.loading=!0;let a={guid:n,status:o.toUpperCase()};this.httpHelperService.post("/api/sas/allopenforcompany",a).subscribe({next:g=>{this.orders=g,this.loading=!1,this.orders.length>0&&(this.totalRecords=this.orders[0].totalRecords)},error:g=>{this.loading=!1,super.processError(g)},complete:()=>{this.loading=!1,console.log("complete")}})}}updateTable(o){this.fetchOrders(o.value)}scroll(){setTimeout(()=>{this.topOfDetail.nativeElement.scrollIntoView({behavior:"smooth"})},200)}viewOrder(o){this.order=JSON.parse(JSON.stringify(o)),this.httpHelperService.getWithParm("/api/sas/shppingcartdetail",String(this.order?.shoppingcart?.id)).subscribe({next:n=>{this.order.shoppingcart=n,this.order.shoppingcart.installationDate=new Date(this.order.shoppingcart?.installationDate),this.loading=!1,this.scroll()},error:n=>{this.loading=!1,super.processError(n)},complete:()=>{this.loading=!1,console.log("complete")}})}updateOrder(){this.loadingButton=!0,this.httpHelperService.save("/api/sas/updateorder",String(this.order.id),this.order).subscribe({next:o=>{this.loadingButton=!1,this.fetchOrders(this.selectedStatus),super.showInfo("Order Updated"),o.supplierOrderStatus!=this.selectedStatus.toUpperCase()&&(this.order={})},error:o=>{this.loadingButton=!1,super.processError(o)},complete:()=>{this.loadingButton=!1,console.log("complete")}})}payNow(o){this.order=JSON.parse(JSON.stringify(o)),this.order.shoppingcart.address=this.order.address,this.loading=!0,this.httpHelperService.post("/api/shoppingcart/createtransaction",this.order.shoppingcart).subscribe({next:n=>{this.addpaytransactions=n,window.location.href=this.addpaytransactions?.addPayPaymentLink,this.loading=!1},error:n=>{this.loading=!1,this.messages=n.message.includes("Unknown Error")?[{severity:"error",summary:"Error",detail:"Server is not responding. Please try again later."}]:[{severity:"error",summary:"Error",detail:n.error.error}],super.processError(n)},complete:()=>{console.log("complete"),this.loading=!1}})}}return(r=s).\u0275fac=function(o){return new(o||r)(e.Y36(U.x),e.Y36(p.ez))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-customer-orders"]],viewQuery:function(o,n){if(1&o&&e.Gf(q,5),2&o){let a;e.iGM(a=e.CRH())&&(n.topOfDetail=a.first)}},features:[e._Bn([p.ez]),e.qOj],decls:14,vars:13,consts:[[1,"card","flex","justify-content-center"],[1,"flex","flex-wrap","gap-3"],[1,"flex","align-items-center","text-900","font-medium"],["class","flex align-items-center",4,"ngFor","ngForOf"],[1,"card"],["dataKey","id","styleClass","p-datatable-sm","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","lazy","tableStyle","paginator","rows","totalRecords","loading","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","rowexpansion"],[4,"ngIf"],[1,"flex","align-items-center"],["name","status",3,"inputId","value","ngModel","onClick","ngModelChange"],[1,"ml-2",3,"for"],[2,"width","5rem"],["pSortableColumn","orderNumber"],["field","orderNumber"],["pSortableColumn","createDate"],["field","createDate"],["pSortableColumn","installDate"],["field","installDate"],["pSortableColumn","total"],["field","subTotal"],["field","vat"],["field","total"],[2,"width","100px"],["type","button","pButton","","pRipple","",1,"p-button-text","p-button-rounded","p-button-plain",3,"pRowToggler","icon"],["class","mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center","style","background-color: rgba(76, 175, 80, 0.1)",3,"border-radius",4,"ngIf"],["class","mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center cursor-pointer","style","background-color: rgba(33, 150, 243, 0.1)",3,"border-radius",4,"ngIf"],["class","mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center","style","background-color: rgba(211, 47, 47, 0.2)",3,"border-radius",4,"ngIf"],[1,"flex"],["pRipple","","icon","pi pi-search-plus","styleClass","p-button-rounded p-button-success p-button-outlined mr-2","tooltipPosition","left","pTooltip","View Detail",3,"onClick"],[1,"mr-0","lg:mr-3","mt-4","lg:mt-0","p-2","flex","align-items-center",2,"background-color","rgba(76, 175, 80, 0.1)"],[1,"bg-green-500","text-white","flex","align-items-center","justify-content-center","border-circle","mr-2",2,"min-width","2rem","min-height","2rem"],[1,"pi","pi-check"],[1,"text-green-500"],[1,"mr-0","lg:mr-3","mt-4","lg:mt-0","p-2","flex","align-items-center","cursor-pointer",2,"background-color","rgba(33, 150, 243, 0.1)"],[1,"bg-blue-500","text-white","flex","align-items-center","justify-content-center","border-circle","mr-2",2,"min-width","2rem","min-height","2rem"],[1,"pi","pi-lock-open"],[1,"text-black-alpha-90"],[1,"mr-0","lg:mr-3","mt-4","lg:mt-0","p-2","flex","align-items-center",2,"background-color","rgba(211, 47, 47, 0.2)"],[1,"bg-red-500","text-white","flex","align-items-center","justify-content-center","border-circle","mr-2",2,"min-width","2rem","min-height","2rem"],[1,"pi","pi-times"],["colspan","8"],["colspan","7"],[1,"p-6"],["dataKey","id","styleClass","p-datatable-striped",3,"value"],["pSortableColumn","count"],["field","count"],["pSortableColumn","linePrice"],["field","linePrice"],[3,"innerHTML"],["colspan","6"],["topOfDetail",""],[1,"surface-card","shadow-2","p-3","text-lg"],[1,"formgrid","grid"],[1,"field","col-12","md:col-3"],["for","onmuber"],["id","onmuber","type","text","pInputText","","readonly","readonly",1,"w-full",3,"ngModel","ngModelChange"],["for","idate"],["id","idate","styleClass","w-full","dateFormat","D, d M yy",3,"ngModel","showIcon","disabled","showTime","readonlyInput","ngModelChange"],["for","status"],["id","status","optionLabel","label","optionValue","value",3,"options","ngModel","disabled","ngModelChange"],["id","btn","pRipple","","label","Save","styleClass","mt-5 p-button-outlined","icon","pi pi-save",3,"loading","onClick"],[1,"grid"],[1,"col-12"],[1,"col-12","md:col-4","lg:col-6"],["class","surface-card shadow-2 p-3 h-full",4,"ngIf"],["class","surface-card shadow-2 p-3  h-full",4,"ngIf"],["class","col-12 lg:col-4",4,"ngFor","ngForOf"],[1,"surface-card","shadow-2","p-3","h-full"],[1,"block","text-500","font-medium","mb-3"],[1,"text-900","font-medium","text-lg"],[1,"flex","flex-wrap"],[1,"my-2","flex"],["class","my-2 flex",4,"ngIf"],[1,"pi","pi-phone"],[1,"pi","pi-envelope"],[1,"col-12","lg:col-4"],[1,"p-3","h-full"],[1,"shadow-2","p-3","h-full","flex","flex-column","surface-card",2,"border-radius","6px"],[1,"text-900","font-medium","text-xl","mb-2"],[1,"font-light","text-base"],[1,"text-xl","font-light"],[1,"text-600","mb-2"],[1,"my-3","mx-0","border-top-1","border-none","surface-border"],[1,"font-bold","text-2xl","text-900"],["class","list-none p-0 m-0 flex-grow-1",4,"ngFor","ngForOf"],[1,"mb-3","mx-0","border-top-1","border-none","surface-border","mt-auto"],[1,"list-none","p-0","m-0","flex-grow-1"],[1,"flex","align-items-center","mb-3"],[1,"pi","pi-check-circle","text-green-500","mr-2"],[1,"text-900"]],template:function(o,n){1&o&&(e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2),e._uU(4,"Order Status"),e.qZA(),e.YNc(5,y,4,5,"div",3),e.qZA()(),e.TgZ(6,"div",4)(7,"p-table",5,6),e.YNc(9,N,24,0,"ng-template",7),e.YNc(10,M,27,26,"ng-template",8),e.YNc(11,J,5,1,"ng-template",9),e.YNc(12,Q,7,1,"ng-template",10),e.qZA()(),e.YNc(13,z,26,13,"div",11)),2&o&&(e.xp6(5),e.Q6J("ngForOf",n.statuses),e.xp6(2),e.Q6J("value",n.orders)("lazy",!1)("tableStyle",e.DdM(11,G))("paginator",!0)("rows",5)("totalRecords",n.totalRecords)("loading",n.loading)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(12,K)),e.xp6(6),e.Q6J("ngIf",n.order.id))},dependencies:[d.sg,d.O5,c.iA,p.jx,c.lQ,c.jB,c.fz,h.Hq,h.zx,x.H,Z.u,v.EU,f.Fj,f.JJ,f.On,C.f,T.UN,O.o,b.FN,d.H9,d.uU]}),s})()}];let V=(()=>{var r;class s{}return(r=s).\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[u.Bz.forChild($),u.Bz]}),s})();var W=i(9502);let X=(()=>{var r;class s{}return(r=s).\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[d.ez,c.U$,V,h.hJ,x.T,Z.z,v.cc,f.u5,W.$,C._8,T.Qy,O.j,b.EV]}),s})()},9720:(A,m,i)=>{i.d(m,{m3:()=>p,qs:()=>u,sA:()=>_});var u=function(l){return l.YES="YES",l.NO="NO",l}(u||{}),_=function(l){return l.Open="OPEN",l.Installed="INSTALLED",l.Cancelled="CANCELLED",l}(_||{}),p=function(l){return l.Physical="PHYSICAL",l.Installation="INSTALLATION",l.Postal="POSTAL",l.Other="OTHER",l}(p||{})}}]);