"use strict";var NumberModule=function(){return{formatNumber:function(r,e){for(var t=1<arguments.length&&void 0!==e?e:",",u=String(r),n="",o=0,i=u.length-1;0<=i;i--)n=u[i]+n,++o%3==0&&0!=i&&(n=t+n);return n}}};module.exports=NumberModule();