(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6YKC":function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),o=t("Tjgg"),r=t("r2F1");let i=(new o.a).progress;class u{constructor(n,l){this.router=n,this.sharedService=l,this.sections=i}ngOnInit(){this.sections.forEach((n,l)=>{let t=n.words.findIndex(n=>0==n.isRemembered);n.isLocked=t>-1?1:0})}navigateTest(n){let l=this.sections[n];if(1==l.isLocked)return this.router.navigateByUrl("/learn/"+l.name);this.router.navigateByUrl("/practice/"+l.name)}}let s=new o.a;const c=s.progress,a=s.words;class d{constructor(n,l){this.activatedRoute=n,this.sharedService=l,this.wordDefs=a,this.currentScore=0,this.bestScore=0,this.remainingWords=[],this.currentWord={wordIndex:-1,defs:[]},this.correctIndex=-1,this.answeredIndex=-1,this.animating=!1,this.showNext=!1,this.showScore=!0}ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.section=c.find(l=>l.name==n.section),this.section.score?this.currentScore=this.section.score:this.reset()})}calcWord(){this.answeredIndex=-1,this.correctIndex=-1,this.showNext=!1;let n=Math.floor(Math.random()*this.remainingWords.length);for(this.currentWord.wordIndex=this.remainingWords[n].wordIndex,this.currentWord.defs=[],this.currentWord.defs.push(this.wordDefs[this.currentWord.wordIndex].definition);this.currentWord.defs.length<4;){n=Math.floor(Math.random()*this.section.words.length);const l=this.wordDefs[this.section.words[n].wordIndex].definition;-1===this.currentWord.defs.indexOf(l)&&this.currentWord.defs.push(l)}this.shuffleArray(this.currentWord.defs)}answer(n){const l=this.wordDefs[this.currentWord.wordIndex].definition;this.answeredIndex=n,this.correctIndex=this.currentWord.defs.indexOf(l),n==this.correctIndex&&this.currentScore++,this.currentScore>this.bestScore&&this.sharedService.updateScore(this.section.name,this.currentScore),this.remainingWords.splice(this.remainingWords.findIndex(n=>n.wordIndex==this.currentWord.wordIndex),1),this.showNext=!0}next(){if(0==this.remainingWords.length)return this.showNext=!1,this.showScore=!0;this.animating=!0,setTimeout(()=>{this.calcWord()},500),setTimeout(()=>{this.animating=!1},1300)}shuffleArray(n){for(let l=n.length-1;l>0;l--){const t=Math.floor(Math.random()*(l+1));[n[l],n[t]]=[n[t],n[l]]}}reset(){this.remainingWords=[...this.section.words],this.currentScore=0,this.bestScore=this.section.score,void 0===this.bestScore&&(this.bestScore=0),this.showScore=!1,this.calcWord()}}const f={animation:"Practice"},g={animation:"PracticeSection"};class b{}class p{}var h=t("pMnS"),m=t("3t8D"),x=t("fOCe"),w=t("JSOy"),C=t("SVse"),M=t("iInd"),O=e.kb({encapsulation:0,styles:[[".f10[_ngcontent-%COMP%]{font-size:10px}.f11[_ngcontent-%COMP%]{font-size:11px}.f12[_ngcontent-%COMP%]{font-size:12px}.f13[_ngcontent-%COMP%]{font-size:13px}.f14[_ngcontent-%COMP%]{font-size:14px}.f16[_ngcontent-%COMP%]{font-size:16px}.f18[_ngcontent-%COMP%]{font-size:18px}.f20[_ngcontent-%COMP%]{font-size:20px}.f22[_ngcontent-%COMP%]{font-size:22px}.f25[_ngcontent-%COMP%]{font-size:25px}.f30[_ngcontent-%COMP%]{font-size:30px}@media screen and (min-width:992px){.f10[_ngcontent-%COMP%]{font-size:12px}.f11[_ngcontent-%COMP%]{font-size:13px}.f12[_ngcontent-%COMP%]{font-size:14px}.f13[_ngcontent-%COMP%]{font-size:15px}.f14[_ngcontent-%COMP%]{font-size:16px}.f16[_ngcontent-%COMP%]{font-size:18px}.f18[_ngcontent-%COMP%]{font-size:20px}.f20[_ngcontent-%COMP%]{font-size:22px}.f22[_ngcontent-%COMP%]{font-size:24px}.f25[_ngcontent-%COMP%]{font-size:27px}.f30[_ngcontent-%COMP%]{font-size:32px}}.icon[_ngcontent-%COMP%]{width:1rem;fill:#fff}ul[_ngcontent-%COMP%]{height:calc(100vh - 57px)}li[_ngcontent-%COMP%]{position:relative;padding:1rem 1.5rem}li[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{top:0;left:0;position:absolute;background-color:rgba(255,255,255,.9);width:100%;height:100%}li[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:13px;margin:4px;fill:#e91e63}"]],data:{}});function P(n){return e.zb(0,[(n()(),e.mb(0,0,null,null,1,"p",[["class","text-gray"]],null,null,null,null,null)),(n()(),e.yb(-1,null,["Not Attempted"]))],null,null)}function _(n){return e.zb(0,[(n()(),e.mb(0,0,null,null,1,"p",[["class","text-green"]],null,null,null,null,null)),(n()(),e.yb(1,null,[""," / ",""]))],null,function(n,l){n(l,1,0,l.parent.context.$implicit.score,l.parent.context.$implicit.words.length)})}function k(n){return e.zb(0,[(n()(),e.mb(0,0,null,null,3,"div",[["class","overlay perfect-center"]],null,null,null,null,null)),(n()(),e.mb(1,0,null,null,1,"svg-lock",[["class","icon"]],null,null,null,m.o,m.e)),e.lb(2,49152,null,0,x.f,[],null,null),(n()(),e.yb(3,null,[" Complete learning "," "]))],null,function(n,l){n(l,3,0,l.parent.context.$implicit.name)})}function v(n){return e.zb(0,[(n()(),e.mb(0,0,null,null,12,"li",[["appWave",""],["class","row justify-content-between f14 pointer"]],null,[[null,"click"]],function(n,l,t){var o=!0,r=n.component;return"click"===l&&(o=!1!==e.ub(n,1).onClick(t)&&o),"click"===l&&(o=!1!==r.navigateTest(n.context.index)&&o),o},null,null)),e.lb(1,16384,null,0,w.a,[e.k],null,null),(n()(),e.mb(2,0,null,null,1,"p",[["class","my-auto"]],null,null,null,null,null)),(n()(),e.yb(3,null,["",""])),(n()(),e.mb(4,0,null,null,6,"div",[["class","f12 text-center"]],null,null,null,null,null)),(n()(),e.mb(5,0,null,null,1,"p",[["class","text-red mb-1"]],null,null,null,null,null)),(n()(),e.yb(-1,null,["Best Score:"])),(n()(),e.cb(16777216,null,null,1,null,P)),e.lb(8,16384,null,0,C.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.cb(16777216,null,null,1,null,_)),e.lb(10,16384,null,0,C.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.cb(16777216,null,null,1,null,k)),e.lb(12,16384,null,0,C.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,8,0,void 0===l.context.$implicit.score),n(l,10,0,void 0!==l.context.$implicit.score),n(l,12,0,1==l.context.$implicit.isLocked)},function(n,l){n(l,3,0,l.context.$implicit.name)})}function z(n){return e.zb(0,[(n()(),e.mb(0,0,null,null,8,"div",[],null,null,null,null,null)),(n()(),e.mb(1,0,null,null,4,"nav",[["class","p-3 border-bottom f18 d-flex bg-red text-white"]],null,null,null,null,null)),(n()(),e.mb(2,0,null,null,2,"div",[["class","pointer perfect-center"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.sharedService.goBack()&&e),e},null,null)),(n()(),e.mb(3,0,null,null,1,"svg-arrow-left",[["class","icon mr-2 d-flex-column justify-content-center"]],null,null,null,m.k,m.a)),e.lb(4,49152,null,0,x.a,[],null,null),(n()(),e.yb(-1,null,[" Practice "])),(n()(),e.mb(6,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),e.cb(16777216,null,null,1,null,v)),e.lb(8,278528,null,0,C.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,8,0,l.component.sections)},null)}function y(n){return e.zb(0,[(n()(),e.mb(0,0,null,null,1,"app-practice",[],null,null,null,z,O)),e.lb(1,114688,null,0,u,[M.k,r.a],null,null)],function(n,l){n(l,1,0)},null)}var I=e.ib("app-practice",u,y,{},{},[]),S=e.kb({encapsulation:0,styles:[['@charset "UTF-8";.f10[_ngcontent-%COMP%]{font-size:10px}.f11[_ngcontent-%COMP%]{font-size:11px}.card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .f12[_ngcontent-%COMP%]{font-size:12px}.f13[_ngcontent-%COMP%]{font-size:13px}.f14[_ngcontent-%COMP%]{font-size:14px}.f16[_ngcontent-%COMP%]{font-size:16px}.f18[_ngcontent-%COMP%]{font-size:18px}.f20[_ngcontent-%COMP%]{font-size:20px}.f22[_ngcontent-%COMP%]{font-size:22px}.f25[_ngcontent-%COMP%]{font-size:25px}.f30[_ngcontent-%COMP%]{font-size:30px}@media screen and (min-width:992px){.f10[_ngcontent-%COMP%]{font-size:12px}.f11[_ngcontent-%COMP%]{font-size:13px}.card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .f12[_ngcontent-%COMP%]{font-size:14px}.f13[_ngcontent-%COMP%]{font-size:15px}.f14[_ngcontent-%COMP%]{font-size:16px}.f16[_ngcontent-%COMP%]{font-size:18px}.f18[_ngcontent-%COMP%]{font-size:20px}.f20[_ngcontent-%COMP%]{font-size:22px}.f22[_ngcontent-%COMP%]{font-size:24px}.f25[_ngcontent-%COMP%]{font-size:27px}.f30[_ngcontent-%COMP%]{font-size:32px}}.main[_ngcontent-%COMP%]{height:100vh;width:100%;overflow:hidden;position:relative}nav[_ngcontent-%COMP%]{position:absolute;top:0;width:100%}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:1rem}nav[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{fill:#fff;width:1rem;display:block}.next[_ngcontent-%COMP%]{background-color:#28a745;padding:1rem;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);transition:all .2s .3s;position:absolute;bottom:12.5vw}.next.show[_ngcontent-%COMP%]{-webkit-transform:scale(1);transform:scale(1)}.next[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:1rem;height:1rem;fill:#fff;display:block;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.card[_ngcontent-%COMP%]{width:75%;border:1px solid #fff;border-radius:10px;line-height:initial;position:relative;z-index:1;overflow:hidden}.card.animate[_ngcontent-%COMP%]:nth-of-type(1){-webkit-animation:.5s ease-out forwards removeCard;animation:.5s ease-out forwards removeCard}.card.animate[_ngcontent-%COMP%]:nth-of-type(2){display:block;-webkit-animation:.5s ease-out .6s forwards addCard;animation:.5s ease-out .6s forwards addCard}.card[_ngcontent-%COMP%]:nth-of-type(2){position:absolute;opacity:0;-webkit-transform:rotate(45deg) translateY(-100%);transform:rotate(45deg) translateY(-100%);z-index:0;display:none}.card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-align:left;padding:1rem 2rem;position:relative;transition:all .3s;border-top:1px solid #d3d3d3;border-bottom:none}.card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before{content:"";position:absolute;width:1rem;height:1rem;border-radius:50%;left:9px;top:0;background-color:#d3d3d3;color:#fff;bottom:0;margin:auto;display:flex;align-items:center;justify-content:center}.card[_ngcontent-%COMP%]   li.right[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   li.wrong[_ngcontent-%COMP%]{-webkit-animation:.2s ease-out scaleUpDown;animation:.2s ease-out scaleUpDown}.card[_ngcontent-%COMP%]   li.wrong[_ngcontent-%COMP%]{background:rgba(233,30,99,.7)}.card[_ngcontent-%COMP%]   li.wrong[_ngcontent-%COMP%]::before{content:"\u2715";background-color:#e91e63}.card[_ngcontent-%COMP%]   li.right[_ngcontent-%COMP%]{background:rgba(76,175,80,.7)}.card[_ngcontent-%COMP%]   li.right[_ngcontent-%COMP%]::before{content:"\u2713";background-color:#4caf50}.score[_ngcontent-%COMP%]{position:absolute;opacity:0;transition:all .3s}.score[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px;text-shadow:0 3px 5px rgba(255,255,255,.15)}.score[_ngcontent-%COMP%]   .reload[_ngcontent-%COMP%], .score[_ngcontent-%COMP%]   .reload[_ngcontent-%COMP%]:focus{border:1px solid #fff;box-shadow:0 .5rem 1rem rgba(255,255,255,.15);border-radius:50px;color:#e91e63}.score.show[_ngcontent-%COMP%]{opacity:1}@-webkit-keyframes removeCard{100%{-webkit-transform:rotate(-45deg) translateY(-100%);transform:rotate(-45deg) translateY(-100%);opacity:0}}@keyframes removeCard{100%{-webkit-transform:rotate(-45deg) translateY(-100%);transform:rotate(-45deg) translateY(-100%);opacity:0}}@-webkit-keyframes addCard{100%{-webkit-transform:rotate(0) translateY(0);transform:rotate(0) translateY(0);opacity:1}}@keyframes addCard{100%{-webkit-transform:rotate(0) translateY(0);transform:rotate(0) translateY(0);opacity:1}}@-webkit-keyframes scaleUpDown{50%{-webkit-transform:scale(1.07);transform:scale(1.07)}}@keyframes scaleUpDown{50%{-webkit-transform:scale(1.07);transform:scale(1.07)}}']],data:{}});function W(n){return e.zb(0,[(n()(),e.mb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function j(n){return e.zb(0,[(n()(),e.mb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function Y(n){return e.zb(0,[(n()(),e.mb(0,0,null,null,19,null,null,null,null,null,null,null)),(n()(),e.mb(1,0,null,null,5,"div",[["class","card bg-white shadow"]],null,null,null,null,null)),e.wb(512,null,C.t,C.u,[e.q,e.r,e.k,e.B]),e.lb(3,278528,null,0,C.h,[C.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.vb(4,{animate:0}),(n()(),e.cb(16777216,null,null,1,null,W)),e.lb(6,540672,null,0,C.n,[e.M],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),e.mb(7,0,null,null,5,"div",[["class","card bg-white shadow"]],null,null,null,null,null)),e.wb(512,null,C.t,C.u,[e.q,e.r,e.k,e.B]),e.lb(9,278528,null,0,C.h,[C.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.vb(10,{animate:0}),(n()(),e.cb(16777216,null,null,1,null,j)),e.lb(12,540672,null,0,C.n,[e.M],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),e.mb(13,0,null,null,6,"button",[["appWave",""],["class","next shadow pointer"]],null,[[null,"click"]],function(n,l,t){var o=!0,r=n.component;return"click"===l&&(o=!1!==e.ub(n,14).onClick(t)&&o),"click"===l&&(o=!1!==r.next()&&o),o},null,null)),e.lb(14,16384,null,0,w.a,[e.k],null,null),e.wb(512,null,C.t,C.u,[e.q,e.r,e.k,e.B]),e.lb(16,278528,null,0,C.h,[C.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.vb(17,{show:0}),(n()(),e.mb(18,0,null,null,1,"svg-chevron-up",[["class","icon"]],null,null,null,m.l,m.b)),e.lb(19,49152,null,0,x.b,[],null,null)],function(n,l){var t=l.component,o=n(l,4,0,t.animating||t.showScore);n(l,3,0,"card bg-white shadow",o),n(l,6,0,e.ub(l.parent,19));var r=n(l,10,0,t.animating);n(l,9,0,"card bg-white shadow",r),n(l,12,0,e.ub(l.parent,19));var i=n(l,17,0,t.showNext);n(l,16,0,"next shadow pointer",i)},null)}function D(n){return e.zb(0,[(n()(),e.mb(0,0,null,null,4,"li",[["class","pointer"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.answer(n.context.index)&&e),e},null,null)),e.wb(512,null,C.t,C.u,[e.q,e.r,e.k,e.B]),e.lb(2,278528,null,0,C.h,[C.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.vb(3,{wrong:0,right:1}),(n()(),e.yb(4,null,["",""]))],function(n,l){var t=l.component,e=n(l,3,0,t.answeredIndex==l.context.index,t.correctIndex==l.context.index);n(l,2,0,"pointer",e)},function(n,l){n(l,4,0,l.context.$implicit)})}function T(n){return e.zb(0,[(n()(),e.mb(0,0,null,null,1,"p",[["class","py-3 bg-light"]],null,null,null,null,null)),(n()(),e.yb(1,null,["",""])),(n()(),e.mb(2,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),e.cb(16777216,null,null,1,null,D)),e.lb(4,278528,null,0,C.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,4,0,l.component.currentWord.defs)},function(n,l){var t=l.component;n(l,1,0,t.wordDefs[t.currentWord.wordIndex].word)})}function B(n){return e.zb(0,[(n()(),e.mb(0,0,null,null,18,"div",[["class","main bg-red perfect-center"]],null,null,null,null,null)),(n()(),e.mb(1,0,null,null,5,"nav",[["class","row justify-content-between"]],null,null,null,null,null)),(n()(),e.mb(2,0,null,null,2,"div",[["class","p-3 pointer"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.sharedService.goBack()&&e),e},null,null)),(n()(),e.mb(3,0,null,null,1,"svg-arrow-left",[["class","icon"]],null,null,null,m.k,m.a)),e.lb(4,49152,null,0,x.a,[],null,null),(n()(),e.mb(5,0,null,null,1,"p",[["class","f12 text-white"]],null,null,null,null,null)),(n()(),e.yb(6,null,[""," words remaining"])),(n()(),e.cb(16777216,null,null,1,null,Y)),e.lb(8,16384,null,0,C.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.mb(9,0,null,null,9,"div",[["class","score text-white"]],null,null,null,null,null)),e.wb(512,null,C.t,C.u,[e.q,e.r,e.k,e.B]),e.lb(11,278528,null,0,C.h,[C.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.vb(12,{show:0}),(n()(),e.mb(13,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.yb(-1,null,["Your score:"])),(n()(),e.mb(15,0,null,null,1,"h1",[["class","mt-2 mb-3"]],null,null,null,null,null)),(n()(),e.yb(16,null,["","/",""])),(n()(),e.mb(17,0,null,null,1,"a",[["class","reload f12 bg-white font-bold py-1 px-3 pointer"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.reset()&&e),e},null,null)),(n()(),e.yb(-1,null,["Take test again !"])),(n()(),e.cb(0,[["card",2]],null,0,null,T))],function(n,l){var t=l.component;n(l,8,0,!t.showScore);var e=n(l,12,0,t.showScore);n(l,11,0,"score text-white",e)},function(n,l){var t=l.component;n(l,6,0,t.remainingWords.length),n(l,16,0,t.currentScore,t.section.words.length)})}function J(n){return e.zb(0,[(n()(),e.mb(0,0,null,null,1,"app-section",[],null,null,null,B,S)),e.lb(1,114688,null,0,d,[M.a,r.a],null,null)],function(n,l){n(l,1,0)},null)}var F=e.ib("app-section",d,J,{},{},[]),N=t("DWhP"),$=t("V6mR");t.d(l,"PracticeRoutingModuleNgFactory",function(){return q}),t.d(l,"PracticeModuleNgFactory",function(){return U});var q=e.jb(b,[],function(n){return e.sb([e.tb(512,e.j,e.X,[[8,[h.a,I,F]],[3,e.j],e.v]),e.tb(1073742336,M.m,M.m,[[2,M.r],[2,M.k]]),e.tb(1073742336,b,b,[]),e.tb(1024,M.i,function(){return[[{path:"",component:u,data:f},{path:":section",component:d,data:g}]]},[])])}),U=e.jb(p,[],function(n){return e.sb([e.tb(512,e.j,e.X,[[8,[h.a,I,F]],[3,e.j],e.v]),e.tb(4608,C.l,C.k,[e.s,[2,C.y]]),e.tb(1073742336,M.m,M.m,[[2,M.r],[2,M.k]]),e.tb(1073742336,b,b,[]),e.tb(1073742336,C.b,C.b,[]),e.tb(1073742336,N.a,N.a,[]),e.tb(1073742336,$.a,$.a,[]),e.tb(1073742336,p,p,[]),e.tb(1024,M.i,function(){return[[{path:"",component:u,data:f},{path:":section",component:d,data:g}]]},[])])})}}]);