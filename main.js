var phoneInput=document.querySelector(".phone");phoneInput.addEventListener("keydown",function(o){"ArrowLeft"!=o.key&&"ArrowRight"!=o.key&&"Backspace"!=o.key&&"Tab"!=o.key&&o.preventDefault();var t="+7 (111) 111-11-11";if(/[0-9\+\ \-\(\)]/.test(o.key)){var e=this.value,n=e.length;if(/[0-9]/.test(o.key))if("1"==t[n])this.value=e+o.key;else for(var l=n;l<t.length;l++){if("1"==t[l]){this.value=e+o.key;break}e+=t[l]}}}),$(window).on("scroll",function(){$(window).scrollTop()>0&&$("#header").css({background:"rgba(255, 255, 255, 0.8)"}),0==$(window).scrollTop()&&$("#header").css({background:"#fff"})}),$(document).ready(function(){$("#button").click(function(){$(".line1").toggleClass("open1"),$(".line2").toggleClass("open2"),$(".line3").toggleClass("open3")}),$("#button").click(function(){$(".hidden-menu").slideToggle(100)}),$("a").click(function(o){o.preventDefault()}),$(".colBack").click(function(){$("body, html").animate({scrollTop:$("#footForm").offset().top},666)}),$(".button").click(function(){$("body, html").animate({scrollTop:$("#contactForm").offset().top},666)}),$(".intor a:eq(0)").click(function(){$("body, html").animate({scrollTop:$("#contactForm").offset().top},666)}),$(".zamer").click(function(){$("body, html").animate({scrollTop:$("#contactForm").offset().top},666)}),$(".intor a:eq(1)").click(function(){$("body, html").animate({scrollTop:$(".titlecalculDiv").offset().top},666)}),$(".into-two a:eq(0)").click(function(){$("body, html").animate({scrollTop:$(".titleSliderDiv").offset().top},666)}),$(".into-two a:eq(1)").click(function(){$("body, html").animate({scrollTop:$("#priceList").offset().top},666)}),$(".top-navigation> a").click(function(){$("body, html").animate({scrollTop:$("#contentPopup").offset().top},666)}),$(".infoBlock> a").click(function(){$("body, html").animate({scrollTop:$("#footForm").offset().top},666)}),$(".ssilk a:eq(0)").click(function(){$("body, html").animate({scrollTop:$("#contactForm").offset().top},666)}),$(".ssilk a:eq(1)").click(function(){$("body, html").animate({scrollTop:$(".mainSlider").offset().top},666)}),$(".ssilk a:eq(2)").click(function(){$("body, html").animate({scrollTop:$("#priceList").offset().top},666)}),$(".ssilk a:eq(3)").click(function(){$("body, html").animate({scrollTop:$("#contentPopup").offset().top},666)}),$(".ssilk a:eq(4)").click(function(){$("body, html").animate({scrollTop:$(".titlecalculDiv").offset().top},666)}),$(".arDown").click(function(){$("body, html").animate({scrollTop:$(".titleSliderDiv").offset().top},666)}),$(".forArrowKriv> a").click(function(){$("body, html").animate({scrollTop:$(".plavniy").offset().top},666)}),$(".colBack").click(function(){$("body, html").animate({scrollTop:$(".plavniy").offset().top},666)}),$(".polzun").slider({animate:!0,range:"min",value:1,min:5,max:100,step:1,slide:function(o,t){$("#polzun-result-money").html(200*t.value),$("#polzun-result-money2").html(400*t.value),$("#polzun-result-metr").html(t.value),$(".zakra").width(t.value+"%")},change:function(o,t){$("#hidden").attr("value",109e3*t.value)}}),$(".my-slider").slick({prevArrow:'<button class="prev-arrow" type="button"><img src="/img/left.png"></button>',nextArrow:'<button class="next-arrow" type="button"><img src="/img/right.png"></button>',dots:!0,adaptiveHeight:!0})}),$(function(o){o("#phone2").mask("+7 (999) 999-9999",{selectOnFocus:!0})}),$(function(o){o(".forDerf").mask("99:99",{selectOnFocus:!0})});