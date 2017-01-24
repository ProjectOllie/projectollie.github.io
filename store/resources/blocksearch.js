var instantSearchQueries=[];$(document).ready(function()
{var width_ac_results=$("#search_query_"+ blocksearch_type).parent('form').width();if(typeof ajaxsearch!='undefined'&&ajaxsearch&&typeof blocksearch_type!=='undefined'&&blocksearch_type)
$("#search_query_"+ blocksearch_type).autocomplete(search_url,{minChars:3,max:10,width:(width_ac_results>0?width_ac_results:500),selectFirst:false,scroll:false,dataType:"json",formatItem:function(data,i,max,value,term){return value;},parse:function(data){var mytab=new Array();for(var i=0;i<data.length;i++)
mytab[mytab.length]={data:data[i],value:data[i].cname+' > '+ data[i].pname};return mytab;},extraParams:{ajaxSearch:1,id_lang:id_lang}}).result(function(event,data,formatted){$('#search_query_'+ blocksearch_type).val(data.pname);document.location.href=data.product_link;});});function tryToCloseInstantSearch()
{if($('#old_center_column').length>0)
{$('#center_column').remove();$('#old_center_column').attr('id','center_column');$('#center_column').show();return false;}}
function stopInstantSearchQueries()
{for(i=0;i<instantSearchQueries.length;i++)
instantSearchQueries[i].abort();instantSearchQueries=new Array();}