$(document).ready(function() { 
                $(".parts").mouseover(function(){
                    $(".parts").css("width","10%");
                    $(this).css("width","70%");
                });
                $(".stars").each(function(){
                    var stars = $(this).attr("stars");
                    for(i=1;i<=5;i++){
                        if(i<=stars)
                            $(this).append('<i class="fa fa-star"></i>')
                        else
                            $(this).append('<i class="fa fa-star-o"></i>')
                    }
                });

                var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        slidesPerView: 1,
                        centeredSlides: true,
                        paginationClickable: true,
                        
                        lazyLoading: true,
                        nextButton: '.card-left',
                        prevButton: '.card-right',
                        

                    });
            
            $("#tt").click(function(){
                $(".page2").css("top","0px");
                
            });
             $("#tt2").click(function(){
                $(".page3").css("top","0px");
                
            });
            $("#tt3").click(function(){
                $(".page2").css("top","100%");
                $(".page3").css("top","100%");
            });
            $("#tt5").click(function(){
                
                $(".page3").css("top","100%");
            });
            var current = $(window).scrollTop();
            var current_page = 1;
            var size_pages = 6;
            var prev = 1;
            function getSecs(ms){
              if(ms)
                return (new Date().getTime() );
              else
                return (new Date().getTime() / 1000);
            }
            var show_time=getSecs(true);
            function magic (_current_page,_prev){

               $("body").css("background",$(".page"+(_prev)).css("background"));
               
               $(".pages").removeClass("rotateIn");
               $(".pages").addClass("fadeOut");
               $(".page"+_current_page).addClass("rotateIn");

               $(".pages").css("transform","rotateX(90deg)");
               $(".page"+_current_page).css("transform","rotateX(0deg)");

                $(".pages").find(".anis").each(function(){
                    _dis = this;
                    
                    (function(_dis){
                        
                            $(_dis).css("opacity","0");
                            $(_dis).css("margin-left","-200px");
                        
                    }(_dis))
                    
                });
               
               setTimeout(function(){
                    var __t = 600;
                    $(".page"+_current_page).find(".anis").each(function(){
                        _dis = this;
                        
                        (function(_dis){
                            setTimeout(function(){
                                $(_dis).css("opacity","1");
                                $(_dis).css("margin-left","0px");
                            },__t);
                        }(_dis))
                        __t+=300;
                    });
               },300);
               


               
               $(".pages").css("top","100%");
               $(".page"+_current_page).css("top","0px");
              
               $(".list-parts").removeClass("list-button-selected");
               $(".list-parts").addClass("list-button");
               $(".p"+_current_page).removeClass("list-button");
               $(".p"+_current_page).addClass("list-button-selected");
               prev = _current_page;
            }

            $(document).bind('mousewheel  DOMMouseScroll MozMousePixelScroll', function(e) {
                
                if(typeof e.originalEvent.wheelDelta =="undefined"){
                    var delta =e.originalEvent.detail*-1;
                }else{
                    var delta = e.originalEvent.wheelDelta;
                }
                
                if(show_time+300<getSecs(true)){
                    show_time=getSecs(true);
                }else{
                    return;
                }
                
               if(delta <0 ) {
                    

                   current_page++;
                   console.log("up");
               }else{
                    
                    console.log("down");
                   current_page--;
               }
               if(current_page>size_pages)
                current_page=1;
               if(current_page<1)
                current_page=size_pages;
                
                magic(current_page,prev);
               
            });
            $(".list-parts").click(function(){

                var num = $(this).attr("pn");
                if(num==current_page)
                    return;
                prev = num;
                current_page = num;
                magic(num,num);

            });
            current_page=1;
            setTimeout(function(){
                    var __t = 60;
                    $(".page"+current_page).find(".anis").each(function(){
                        _dis = this;
                        
                        (function(_dis){
                            setTimeout(function(){
                                $(_dis).css("opacity","1");
                                $(_dis).css("margin-left","0px");
                            },__t);
                        }(_dis))
                        __t+=300;
                    });
               },0);
            });