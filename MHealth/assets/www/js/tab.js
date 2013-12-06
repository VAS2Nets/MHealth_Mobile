 var prevSelection = "tab1";
        $("#navbar ul li").live("click",function(){
            var newSelection = $(this).children("a").attr("data-tab-class");
            $("."+prevSelection).addClass("ui-screen-hidden");
            $("."+newSelection).removeClass("ui-screen-hidden");
            prevSelection = newSelection;
        });