(function($,undefined){$.fn.socialSharePrivacy.settings.services.twitter={status:true,button_class:"tweet",dummy_line_img:"images/dummy_twitter.png",dummy_box_img:"images/dummy_box_twitter.png",dummy_alt:'"Tweet this"-Dummy',txt_info:"Two clicks for more privacy: The Tweet this button will be enabled once you click here. Activating the button already sends data to Twitter &ndash; see <em>i</em>.",txt_off:"not connected to Twitter",txt_on:"connected to Twitter",perma_option:true,display_name:"Twitter",referrer_track:"",via:"",related:"",hashtags:"",dnt:true,text:$.fn.socialSharePrivacy.getTitle,button:function(options,uri,settings){var text=typeof(options.text)==="function"?options.text.call(this,options,uri,settings):String(options.text);text=$.fn.socialSharePrivacy.abbreviateText(text,120);var params={url:uri+options.referrer_track,counturl:uri,text:text,count:settings.layout==="line"?"horizontal":"vertical",lang:options.language};if(options.via){params.via=options.via;}if(options.related){params.related=options.related;}if(options.hashtags){params.hashtags=options.hashtags;}if(options.dnt){params.dnt=options.dnt;}return $('<iframe allowtransparency="true" frameborder="0" scrolling="no"></iframe>').attr("src",("https:"===document.location.protocol?"https:":"http:")+"//platform.twitter.com/widgets/tweet_button.html?"+$.param(params).replace(/\+/g,"%20"));}};})(jQuery);