(function($,undefined){function get(self,options,uri,settings,name){var value=options[name];if(typeof value==="function"){return value.call(self,options,uri,settings);}return String(value);}var loadingScript=false;function loadScript(){$(".social_share_privacy_area .pinterest .pinit a[data-pin-log]").attr("data-pin-do","ignore");var prot="https:"===document.location.protocol?"https:":"http:";$.ajax({url:prot+"//assets.pinterest.com/js/pinit.js",dataType:"script",cache:true});loadingScript=false;}$.fn.socialSharePrivacy.settings.services.pinterest={status:true,button_class:"pinit",dummy_line_img:"images/dummy_pinit.png",dummy_box_img:"images/dummy_box_pinit.png",dummy_alt:'"Pin it"-Dummy',txt_info:"Two clicks for more privacy: The Pin it button will be enabled once you click here. Activating the button already sends data to Pinterest &ndash; see <em>i</em>.",txt_off:"not connected to Pinterest",txt_on:"connected to Pinterest",perma_option:true,display_name:"Pinterest",referrer_track:"",title:$.fn.socialSharePrivacy.getTitle,description:$.fn.socialSharePrivacy.getDescription,media:$.fn.socialSharePrivacy.getImage,button:function(options,uri,settings){var prot="https:"===document.location.protocol?"https:":"http:";var params={url:uri+options.referrer_track,media:get(this,options,uri,settings,"media")};var title=get(this,options,uri,settings,"title");var description=get(this,options,uri,settings,"description");if(title){params.title=title;}if(description){params.description=description;}var $code=$('<a data-pin-do="buttonPin"><img /></a>');$code.filter("a").attr({"data-pin-config":settings.layout==="line"?"beside":"above",href:prot+"//pinterest.com/pin/create/button/?"+$.param(params)}).find("img").attr("src",prot+"//assets.pinterest.com/images/pidgets/pin_it_button.png");if(!loadingScript){loadingScript=true;setTimeout(loadScript,10);}return $code;}};})(jQuery);