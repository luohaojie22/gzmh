﻿$(function(){$("#form").validate({rules:{loginName:{required:!0},password:{required:!0},validateCode:{required:!0}},messages:{loginName:{required:"\u767b\u5f55\u540d\u4e0d\u80fd\u4e3a\u7a7a"},password:{required:"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"},validateCode:{required:"\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a"}},onfocusout:!1,showErrors:function(b,a){$.each(a,function(b,a){layer.msg(a.message);return!1})},submitHandler:function(b){$("input[name\x3d'key']").val();$("#password_pbe").val(encode.encode64($("#password").val()));var a=$("#password").val(),a=sm_password(a);$("#password").val(a);document.getElementById("login-submit").disabled="disabled";b.submit()}})});var encode={keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",encode64:function(b){var a="",c,d,e,k,h,f,g=0;do c=b.charCodeAt(g++),d=b.charCodeAt(g++),e=b.charCodeAt(g++),k=c>>2,c=(c&3)<<4|d>>4,h=(d&15)<<2|e>>6,f=e&63,isNaN(d)?h=f=64:isNaN(e)&&(f=64),a=a+encode.keyStr.charAt(k)+encode.keyStr.charAt(c)+encode.keyStr.charAt(h)+encode.keyStr.charAt(f);while(g<b.length);return a}};function sm_password(b){var a=new SM2Cipher("SM2");b=CryptoJS.enc.Utf8.parse(b);var c=a.CreatePoint("049c3e914350086279c0a09ae2e6056d87734bf6d03d33a5d70aad9cb0412abed463ebc5e8510318b5e8cc0a70f14f079e7aa8fb36d561425fe85ed2970168c9ae");b=a.str2Bytes(b.toString());return a.Encrypt(c,b)};