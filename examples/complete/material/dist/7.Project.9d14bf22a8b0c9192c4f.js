webpackJsonp([7],{554:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,l,a,u,c,f=r(563),s=n(f),p=r(4),i=n(p),_=r(2),d=n(_),j=r(3),m=n(j),x=r(6),y=n(x),P=r(5),v=n(P),C=r(1),b=n(C),h=r(634),T=n(h),g=r(81),N=n(g),w=r(22),E=r(29),J=E.helpers.isLoaded,O=E.helpers.dataToJS,S=(o=(0,E.firebase)(function(e){var t=e.params;return["projects/"+t.projectname]}),l=(0,w.connect)(function(e,t){var r=e.firebase,n=t.params;return{project:O(r,"projects/"+n.projectname)}}),o(a=l((c=u=function(e){function t(){return(0,d.default)(this,t),(0,y.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this.props.project;return J(e)?b.default.createElement("div",{className:T.default.container},b.default.createElement("h2",null,"Project Container"),b.default.createElement("pre",null,(0,s.default)(e,null,2))):b.default.createElement("div",{className:T.default.progress},b.default.createElement(N.default,null))}}]),t}(C.Component),u.contextTypes={router:b.default.PropTypes.object.isRequired},u.propTypes={project:C.PropTypes.object,params:C.PropTypes.object.isRequired,children:C.PropTypes.object},a=c))||a)||a);t.default=S},563:function(e,t,r){e.exports={default:r(573),__esModule:!0}},573:function(e,t,r){var n=r(24),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},634:function(e,t){e.exports={flex:"ProjectContainer__flex___2KpL-","flex-column":"ProjectContainer__flex-column___1WU2p","flex-column-center":"ProjectContainer__flex-column-center___1jrPD","flex-row":"ProjectContainer__flex-row___IllzX","flex-row-center":"ProjectContainer__flex-row-center___39yNf",progress:"ProjectContainer__progress___2VQ9C"}}});