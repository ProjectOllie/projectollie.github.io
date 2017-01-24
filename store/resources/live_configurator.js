$(document).ready(function()
{$('a').each(function()
{var href=$(this).attr('href');var search=this.search;var href_add='live_configurator_token='+ get('live_configurator_token')
+'&id_shop='+ get('id_shop')
+'&id_employee='+ get('id_employee')
+'&theme='+ get('theme')
+'&theme_font='+ get('theme_font');var baseDir_=baseDir.replace('https','http');if(typeof(href)!='undefined'&&href.substr(0,1)!='#'&&href.replace('https','http').substr(0,baseDir_.length)==baseDir_)
{if(search.length==0)
this.search=href_add;else
this.search+='&'+ href_add;}});$('#color-box').find('li').click(function()
{location.href=location.href.replace(/&theme=[^&]*/,'')+'&theme='+$(this).attr('class');});$('#reset').click(function()
{location.href=location.href.replace(/&theme=[^&]*/,'').replace(/&theme_font=[^&]*/,'');});$('#font').change(function()
{location.href=location.href.replace(/&theme_font=[^&]*/,'')+'&theme_font='+$('#font option:selected').val();});$('#gear-right').click(function()
{if($(this).css('left')=='215px')
{$('#tool_customization').animate({left:'-215px'},500);$(this).animate({left:'0px'},500);$.totalStorage('live_configurator_visibility',0);}
else
{$('#tool_customization').animate({left:'0px'},500);$(this).animate({left:'215px'},500);$.totalStorage('live_configurator_visibility',1);}});$('#font-title').click(function()
{if($(this).children('i').hasClass('icon-caret-down'))
{$(this).children('i').removeClass('icon-caret-down').addClass('icon-caret-up');$('#font-box').slideUp();}
else
{$(this).children('i').removeClass('icon-caret-up').addClass('icon-caret-down');$('#font-box').slideDown();}});$('#theme-title').click(function()
{if($(this).children('i').hasClass('icon-caret-down'))
{$(this).children('i').removeClass('icon-caret-down').addClass('icon-caret-up');$('#color-box').slideUp();}
else
{$(this).children('i').removeClass('icon-caret-up').addClass('icon-caret-down');$('#color-box').slideDown();}});if(parseInt($.totalStorage('live_configurator_visibility'))==1)
{$('#tool_customization').animate({left:'0px'},200);$('#gear-right').animate({left:'215px'},200);}
else
{$('#tool_customization').animate({left:'-215px'},200);$('#gear-right').animate({left:'0px'},200);}});function get(name)
{var regexS="[\\?&]"+ name+"=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(window.location.href);if(results==null)
return"";else
return results[1];}