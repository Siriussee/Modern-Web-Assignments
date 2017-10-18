"use strict";function ln(t){return limitedEval("log("+t+")/log(e)")}function degrees(t){return limitedEval(t+"deg")}function lev(t){return limitedEval(t+"!")}function calculator(t){if(console.log("Calculating: "+t),"INVALID"==t||"Del"==this.textContent)return"INVALID";t=t.replace(/π/g,"pi");try{if(""==t)return"";var e=limitedEval(t);return(e+"").length>17?e.toPrecision(16)+"":e+""}catch(t){return alert("What you typed in is not a valid formula, please try again"),"INVALID"}}math.config({number:"BigNumber"});var limitedEval=math.eval;math.import({ln:ln,degrees:degrees,lev:lev}),math.import({import:function(){throw new Error("Function import is disabled")},createUnit:function(){throw new Error("Function createUnit is disabled")},eval:function(){throw new Error("Function eval is disabled")},parse:function(){throw new Error("Function parse is disabled")},simplify:function(){throw new Error("Function simplify is disabled")},derivative:function(){throw new Error("Function derivative is disabled")}},{override:!0}),$(document).ready(function(){function t(){s=0}function e(){for(;s>0;--s)r.textContent+=")"}function n(t){++s,r.textContent+=t+"("}function a(t){r.textContent+=t}function o(t){$("#equation").removeClass("animation").removeClass("s0").addClass("s1"),$("#result").removeClass("animation").removeClass("s1").addClass("s0"),void 0!=t&&setTimeout(t,50)}var s=0,i=!1,r=document.getElementById("equation"),l=document.getElementById("result");$("#result").addClass("s0").addClass("animation"),$("#equation").addClass("s1").addClass("animation");var c=function(){$("#equation").removeClass("s1").addClass("animation").addClass("s0"),$("#result").removeClass("s0").addClass("animation").addClass("s1")};$(".button").click(function(){if(o(void 0),isNaN(this.textContent))switch(i&&("INVALID"==l.textContent?r.textContent="":r.textContent=l.textContent,i=!1),this.textContent){case"---":break;case"CE":r.textContent="",t();break;case"(":++s,r.textContent+="(";break;case")":s>0&&(--s,r.textContent+=")");break;case"Del":""!=r.textContent&&(r.textContent=r.textContent.substr(0,r.textContent.length-1));break;case"n!":n("lev");break;case"deg":n("degrees");break;case"sin":case"cos":case"tan":case"asin":case"acos":case"atan":case"ln":case"log":n(this.textContent);break;case"x^y":a("^");break;case"π":r.textContent+="π";break;case"e":r.textContent+="e";break;case"=":e(),t(),l.textContent=calculator(r.textContent),o(c),i=!0;break;default:a(this.textContent)}else i&&(r.textContent="",i=!1),r.textContent+=this.textContent})});
//# sourceMappingURL=calculator.js.map
