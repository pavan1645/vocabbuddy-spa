(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6YKC":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("Tjgg"),r=t("r2F1"),u=(new o.a).progress,i=function(){function n(n,l){this.router=n,this.sharedService=l,this.sections=u}return n.prototype.ngOnInit=function(){this.sections.forEach(function(n,l){var t=n.words.findIndex(function(n){return 0==n.isRemembered});n.isLocked=t>-1?1:0})},n.prototype.navigateTest=function(n){var l=this.sections[n];if(1==l.isLocked)return this.router.navigateByUrl("/learn/"+l.name);this.router.navigateByUrl("/practice/"+l.name)},n}(),a=new o.a,s=a.progress,c=a.words,d=function(){function n(n,l){this.activatedRoute=n,this.sharedService=l,this.wordDefs=c,this.currentScore=0,this.bestScore=0,this.currentWord={wordIndex:-1,defs:[]},this.correctIndex=-1,this.answeredIndex=-1,this.animating=!1,this.showNext=!1,this.showScore=!1}return n.prototype.ngOnInit=function(){var n=this;this.activatedRoute.params.subscribe(function(l){n.section=s.find(function(n){return n.name==l.section}),n.reset(),n.calcWord()})},n.prototype.calcWord=function(){this.answeredIndex=-1,this.correctIndex=-1,this.showNext=!1;var n=Math.floor(Math.random()*this.remainingWords.length);for(this.currentWord.wordIndex=this.remainingWords[n].wordIndex,this.currentWord.defs=[],this.currentWord.defs.push(this.wordDefs[this.currentWord.wordIndex].definition);this.currentWord.defs.length<4;){n=Math.floor(Math.random()*this.section.words.length);var l=this.wordDefs[this.section.words[n].wordIndex].definition;-1===this.currentWord.defs.indexOf(l)&&this.currentWord.defs.push(l)}this.shuffleArray(this.currentWord.defs)},n.prototype.answer=function(n){var l=this,t=this.wordDefs[this.currentWord.wordIndex].definition;this.answeredIndex=n,this.correctIndex=this.currentWord.defs.indexOf(t),n==this.correctIndex&&this.currentScore++,this.currentScore>this.bestScore&&this.sharedService.updateScore(this.section.name,this.currentScore),this.remainingWords.splice(this.remainingWords.findIndex(function(n){return n.wordIndex==l.currentWord.wordIndex}),1),this.showNext=!0},n.prototype.next=function(){var n=this;if(0==this.remainingWords.length)return this.showNext=!1,this.showScore=!0;this.animating=!0,setTimeout(function(){n.calcWord()},500),setTimeout(function(){n.animating=!1},1300)},n.prototype.shuffleArray=function(n){for(var l,t=n.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1));n[t]=(l=[n[e],n[t]])[0],n[e]=l[1]}},n.prototype.reset=function(){this.remainingWords=this.section.words.slice(),this.currentScore=0,this.bestScore=this.section.score,void 0===this.bestScore&&(this.bestScore=0),this.showScore=!1},n}(),b={animation:"Practice"},f={animation:"PracticeSection"},h=function(){return function(){}}(),g=function(){return function(){}}(),p=t("pMnS"),m=t("3t8D"),w=t("fOCe"),v=t("Ip0R"),x=t("ZYCi"),k=e.mb({encapsulation:0,styles:[[".icon[_ngcontent-%COMP%]{width:1rem;fill:#fff}li[_ngcontent-%COMP%]{position:relative;padding:1rem 1.5rem}li[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{top:0;left:0;position:absolute;background-color:rgba(255,255,255,.9);width:100%;height:100%}li[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:13px;margin:4px;fill:#e91e63}"]],data:{}});function C(n){return e.Bb(0,[(n()(),e.ob(0,0,null,null,1,"p",[["class","text-gray"]],null,null,null,null,null)),(n()(),e.Ab(-1,null,["Not Attempted"]))],null,null)}function O(n){return e.Bb(0,[(n()(),e.ob(0,0,null,null,1,"p",[["class","text-green"]],null,null,null,null,null)),(n()(),e.Ab(1,null,[""," / ",""]))],null,function(n,l){n(l,1,0,l.parent.context.$implicit.score,l.parent.context.$implicit.words.length)})}function M(n){return e.Bb(0,[(n()(),e.ob(0,0,null,null,3,"div",[["class","overlay perfect-center"]],null,null,null,null,null)),(n()(),e.ob(1,0,null,null,1,"svg-lock",[["class","icon"]],null,null,null,m.o,m.e)),e.nb(2,49152,null,0,w.f,[],null,null),(n()(),e.Ab(3,null,[" Complete learning "," "]))],null,function(n,l){n(l,3,0,l.parent.context.$implicit.name)})}function y(n){return e.Bb(0,[(n()(),e.ob(0,0,null,null,11,"li",[["class","row justify-content-between f14"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.navigateTest(n.context.index)&&e),e},null,null)),(n()(),e.ob(1,0,null,null,1,"p",[["class","my-auto"]],null,null,null,null,null)),(n()(),e.Ab(2,null,["",""])),(n()(),e.ob(3,0,null,null,6,"div",[["class","f12 text-center"]],null,null,null,null,null)),(n()(),e.ob(4,0,null,null,1,"p",[["class","text-red mb-1"]],null,null,null,null,null)),(n()(),e.Ab(-1,null,["Best Score:"])),(n()(),e.eb(16777216,null,null,1,null,C)),e.nb(7,16384,null,0,v.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,O)),e.nb(9,16384,null,0,v.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,M)),e.nb(11,16384,null,0,v.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,7,0,void 0===l.context.$implicit.score),n(l,9,0,void 0!==l.context.$implicit.score),n(l,11,0,1==l.context.$implicit.isLocked)},function(n,l){n(l,2,0,l.context.$implicit.name)})}function P(n){return e.Bb(0,[(n()(),e.ob(0,0,null,null,8,"div",[],null,null,null,null,null)),(n()(),e.ob(1,0,null,null,4,"nav",[["class","p-3 border-bottom f18 d-flex bg-red text-white"]],null,null,null,null,null)),(n()(),e.ob(2,0,null,null,2,"div",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.sharedService.goBack()&&e),e},null,null)),(n()(),e.ob(3,0,null,null,1,"svg-arrow-left",[["class","icon mr-2 d-flex-column justify-content-center"]],null,null,null,m.k,m.a)),e.nb(4,49152,null,0,w.a,[],null,null),(n()(),e.Ab(-1,null,[" Practice "])),(n()(),e.ob(6,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,y)),e.nb(8,278528,null,0,v.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,8,0,l.component.sections)},null)}function _(n){return e.Bb(0,[(n()(),e.ob(0,0,null,null,1,"app-practice",[],null,null,null,P,k)),e.nb(1,114688,null,0,i,[x.k,r.a],null,null)],function(n,l){n(l,1,0)},null)}var I=e.kb("app-practice",i,_,{},{},[]),S=t("JSOy"),W=e.mb({encapsulation:0,styles:[['@charset "UTF-8";.main[_ngcontent-%COMP%]{height:100vh;width:100vw}nav[_ngcontent-%COMP%]{position:absolute;top:0;width:100%}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:1rem}nav[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{fill:#fff;width:1rem;display:block}.next[_ngcontent-%COMP%]{background-color:#28a745;padding:1rem;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);transition:all .2s .3s;position:absolute;bottom:12.5vw}.next.show[_ngcontent-%COMP%]{-webkit-transform:scale(1);transform:scale(1)}.next[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:1rem;height:1rem;fill:#fff;display:block;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.card[_ngcontent-%COMP%]{width:75vw;border:1px solid #fff;border-radius:10px;line-height:initial;position:relative;z-index:1;overflow:hidden}.card.animate[_ngcontent-%COMP%]:nth-of-type(1){-webkit-animation:.5s ease-out forwards removeCard;animation:.5s ease-out forwards removeCard}.card.animate[_ngcontent-%COMP%]:nth-of-type(2){display:block;-webkit-animation:.5s ease-out .6s forwards addCard;animation:.5s ease-out .6s forwards addCard}.card[_ngcontent-%COMP%]:nth-of-type(2){position:absolute;opacity:0;-webkit-transform:rotate(45deg) translateY(-100%);transform:rotate(45deg) translateY(-100%);z-index:0;display:none}.card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-align:left;font-size:12px;padding:1rem 2rem;position:relative;transition:all .3s;border-top:1px solid #d3d3d3;border-bottom:none}.card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before{content:"";position:absolute;width:1rem;height:1rem;border-radius:50%;left:9px;top:0;background-color:#d3d3d3;color:#fff;bottom:0;margin:auto;display:flex;align-items:center;justify-content:center}.card[_ngcontent-%COMP%]   li.right[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   li.wrong[_ngcontent-%COMP%]{-webkit-animation:.2s ease-out scaleUpDown;animation:.2s ease-out scaleUpDown}.card[_ngcontent-%COMP%]   li.wrong[_ngcontent-%COMP%]{background:rgba(233,30,99,.7)}.card[_ngcontent-%COMP%]   li.wrong[_ngcontent-%COMP%]::before{content:"\u2715";background-color:#e91e63}.card[_ngcontent-%COMP%]   li.right[_ngcontent-%COMP%]{background:rgba(76,175,80,.7)}.card[_ngcontent-%COMP%]   li.right[_ngcontent-%COMP%]::before{content:"\u2713";background-color:#4caf50}.score[_ngcontent-%COMP%]{position:absolute;opacity:0;transition:all .3s}.score[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px;text-shadow:0 3px 2px #000000a8}.score[_ngcontent-%COMP%]   .reload[_ngcontent-%COMP%], .score[_ngcontent-%COMP%]   .reload[_ngcontent-%COMP%]:focus{border:1px solid #fff;border-radius:50px;color:#e91e63}.score.show[_ngcontent-%COMP%]{opacity:1}@-webkit-keyframes removeCard{100%{-webkit-transform:rotate(-45deg) translateY(-100%);transform:rotate(-45deg) translateY(-100%);opacity:0}}@keyframes removeCard{100%{-webkit-transform:rotate(-45deg) translateY(-100%);transform:rotate(-45deg) translateY(-100%);opacity:0}}@-webkit-keyframes addCard{100%{-webkit-transform:rotate(0) translateY(0);transform:rotate(0) translateY(0);opacity:1}}@keyframes addCard{100%{-webkit-transform:rotate(0) translateY(0);transform:rotate(0) translateY(0);opacity:1}}@-webkit-keyframes scaleUpDown{50%{-webkit-transform:scale(1.07);transform:scale(1.07)}}@keyframes scaleUpDown{50%{-webkit-transform:scale(1.07);transform:scale(1.07)}}']],data:{}});function B(n){return e.Bb(0,[(n()(),e.ob(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function D(n){return e.Bb(0,[(n()(),e.ob(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function A(n){return e.Bb(0,[(n()(),e.ob(0,0,null,null,4,"li",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.answer(n.context.index)&&e),e},null,null)),e.yb(512,null,v.t,v.u,[e.s,e.t,e.k,e.D]),e.nb(2,278528,null,0,v.h,[v.t],{ngClass:[0,"ngClass"]},null),e.xb(3,{wrong:0,right:1}),(n()(),e.Ab(4,null,["",""]))],function(n,l){var t=l.component,e=n(l,3,0,t.answeredIndex==l.context.index,t.correctIndex==l.context.index);n(l,2,0,e)},function(n,l){n(l,4,0,l.context.$implicit)})}function Y(n){return e.Bb(0,[(n()(),e.ob(0,0,null,null,1,"p",[["class","py-3 bg-light"]],null,null,null,null,null)),(n()(),e.Ab(1,null,["",""])),(n()(),e.ob(2,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,A)),e.nb(4,278528,null,0,v.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,4,0,l.component.currentWord.defs)},function(n,l){var t=l.component;n(l,1,0,t.wordDefs[t.currentWord.wordIndex].word)})}function j(n){return e.Bb(0,[(n()(),e.ob(0,0,null,null,35,"div",[["class","main bg-red perfect-center"]],null,null,null,null,null)),(n()(),e.ob(1,0,null,null,5,"nav",[["class","row justify-content-between"]],null,null,null,null,null)),(n()(),e.ob(2,0,null,null,2,"div",[["class","p-3"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.sharedService.goBack()&&e),e},null,null)),(n()(),e.ob(3,0,null,null,1,"svg-arrow-left",[["class","icon"]],null,null,null,m.k,m.a)),e.nb(4,49152,null,0,w.a,[],null,null),(n()(),e.ob(5,0,null,null,1,"p",[["class","f12 text-white"]],null,null,null,null,null)),(n()(),e.Ab(6,null,[""," words remaining"])),(n()(),e.ob(7,0,null,null,5,"div",[["class","card bg-white shadow"]],null,null,null,null,null)),e.yb(512,null,v.t,v.u,[e.s,e.t,e.k,e.D]),e.nb(9,278528,null,0,v.h,[v.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.xb(10,{animate:0}),(n()(),e.eb(16777216,null,null,1,null,B)),e.nb(12,540672,null,0,v.n,[e.O],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),e.ob(13,0,null,null,5,"div",[["class","card bg-white shadow"]],null,null,null,null,null)),e.yb(512,null,v.t,v.u,[e.s,e.t,e.k,e.D]),e.nb(15,278528,null,0,v.h,[v.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.xb(16,{animate:0}),(n()(),e.eb(16777216,null,null,1,null,D)),e.nb(18,540672,null,0,v.n,[e.O],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),e.ob(19,0,null,null,6,"button",[["appWave",""],["class","next shadow"]],null,[[null,"click"]],function(n,l,t){var o=!0,r=n.component;return"click"===l&&(o=!1!==e.wb(n,20).onClick(t)&&o),"click"===l&&(o=!1!==r.next()&&o),o},null,null)),e.nb(20,16384,null,0,S.a,[e.k],null,null),e.yb(512,null,v.t,v.u,[e.s,e.t,e.k,e.D]),e.nb(22,278528,null,0,v.h,[v.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.xb(23,{show:0}),(n()(),e.ob(24,0,null,null,1,"svg-chevron-up",[["class","icon"]],null,null,null,m.l,m.b)),e.nb(25,49152,null,0,w.b,[],null,null),(n()(),e.ob(26,0,null,null,9,"div",[["class","score text-white"]],null,null,null,null,null)),e.yb(512,null,v.t,v.u,[e.s,e.t,e.k,e.D]),e.nb(28,278528,null,0,v.h,[v.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.xb(29,{show:0}),(n()(),e.ob(30,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Ab(-1,null,["Your score:"])),(n()(),e.ob(32,0,null,null,1,"h1",[["class","mt-2 mb-3"]],null,null,null,null,null)),(n()(),e.Ab(33,null,["","/",""])),(n()(),e.ob(34,0,null,null,1,"a",[["class","reload f12 bg-white font-bold py-1 px-3"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.ngOnInit()&&e),e},null,null)),(n()(),e.Ab(-1,null,["Take test again !"])),(n()(),e.eb(0,[["card",2]],null,0,null,Y))],function(n,l){var t=l.component,o=n(l,10,0,t.animating||t.showScore);n(l,9,0,"card bg-white shadow",o),n(l,12,0,e.wb(l,36));var r=n(l,16,0,t.animating);n(l,15,0,"card bg-white shadow",r),n(l,18,0,e.wb(l,36));var u=n(l,23,0,t.showNext);n(l,22,0,"next shadow",u);var i=n(l,29,0,t.showScore);n(l,28,0,"score text-white",i)},function(n,l){var t=l.component;n(l,6,0,t.remainingWords.length),n(l,33,0,t.currentScore,t.section.words.length)})}function T(n){return e.Bb(0,[(n()(),e.ob(0,0,null,null,1,"app-section",[],null,null,null,j,W)),e.nb(1,114688,null,0,d,[x.a,r.a],null,null)],function(n,l){n(l,1,0)},null)}var F=e.kb("app-section",d,T,{},{},[]),L=t("DWhP"),N=t("V6mR");t.d(l,"PracticeRoutingModuleNgFactory",function(){return $}),t.d(l,"PracticeModuleNgFactory",function(){return U});var $=e.lb(h,[],function(n){return e.ub([e.vb(512,e.j,e.Z,[[8,[p.a,I,F]],[3,e.j],e.x]),e.vb(1073742336,x.m,x.m,[[2,x.r],[2,x.k]]),e.vb(1073742336,h,h,[]),e.vb(1024,x.i,function(){return[[{path:"",component:i,data:b},{path:":section",component:d,data:f}]]},[])])}),U=e.lb(g,[],function(n){return e.ub([e.vb(512,e.j,e.Z,[[8,[p.a,I,F]],[3,e.j],e.x]),e.vb(4608,v.l,v.k,[e.u,[2,v.y]]),e.vb(1073742336,x.m,x.m,[[2,x.r],[2,x.k]]),e.vb(1073742336,h,h,[]),e.vb(1073742336,v.b,v.b,[]),e.vb(1073742336,L.a,L.a,[]),e.vb(1073742336,N.a,N.a,[]),e.vb(1073742336,g,g,[]),e.vb(1024,x.i,function(){return[[{path:"",component:i,data:b},{path:":section",component:d,data:f}]]},[])])})}}]);