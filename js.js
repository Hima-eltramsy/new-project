$(document).ready(function(){
    window.onscroll=function(){
        let sticky=document.getElementById("sticky");
        if(window.scrollY > 0){
            sticky.classList.add("sticky")
        }else{
            sticky.classList.remove("sticky")

        }

    }
    const images=["1.png","2.png","3.png","4.png"]
    let index=0
    const gallaryimages=document.getElementById("gal-images")
    if(index<=images.length){
        $("#next").click(function(){
        index++;
        gallaryimages.src= images[index]
    })
    $("#previus").click(function(){
        index--;
        gallaryimages.src= images[index]
    })
    }else{gallaryimages.src= images[0]}
    
    $(".search").click(function (){
        
        $(".search").click(function () {
            if ($(".x").length === 0) {
                $(".header").append("<div class='x'><input class='y' type='search' placeholder='search'><input class='z' type='button' value='search'><strong onclick='f1()' id='close'>x</strong></div>");
            }
            $(".x").toggle();
        });

        

        
    })

    $(document).on("click", "#close", function () {
        $(".x").hide();
      });
    
    // function f1(){
    //     $(".x").hide()
        
    // }
    $(".hide-menu").click(function(){
            
        
            $("#hide").css("opacity","1")

        
            $("#hide").toggle();

        }
    )


    // تحويل الصفحة للغة العربية
    $("#ar").click(function(){
        // document.getElementById("about-me").innerHTML=" نبذة عني :" 
        // document.getElementById("about-me").style.direction="rtl"
        // document.getElementById("about-me").style.padding="30px"
        // document.getElementById("para").innerHTML="أنا العقيد المتقاعد طارق محمد سمير من مصر، مبتكر ومخترع لتقنية ثورية تهدف إلى تطوير وتحسين أداء المقذوفات ذات العيار الصغير المستخدمة في المسدسات والبنادق والمدافع الرشاشة الثقيلة. تسهم هذه التقنية المتقدمة في تعزيز سرعة المقذوفات، مدى وصولها، دقتها، وقوتها، مما يمثل نقلة نوعية في صناعة الذخيرة. يتميز هذا الابتكار بإنتاج منتج فريد من نوعه يلبي احتياجات الأسواق العالمية، ويملك القدرة على تمكين الدولة المنتجة من احتلال مكانة ريادية في مجال تصنيع الذخائر المتقدمة. نظرًا للتحديات المرتبطة بنقص الموارد والتمويل اللازمين لاختبار وتطوير هذا الابتكار في مصر، أتطلع إلى تنفيذ المشروع في المملكة العربية السعودية، لما تتمتع به من بيئة محفزة وداعمة للابتكار والتقدم التكنولوجي. إن التعاون في هذا المشروع يعد بفرص اقتصادية هائلة ويعزز من مكانة المملكة كقوة عالمية رائدة في صناعة الذخيرة المتقدمة. "
        // document.getElementById(".details p").style.direction="rtl"
        // ocument.getElementById(".details p").style.borderRight="5px solid #6B8E23 ;"
        // document.getElementById("body").style.direction="rtl"
        // document.getElementById("h").innerHTML="الطلقة الصاروخية"
        // document.getElementById("hh").innerHTML="الطلقة الصاروخية"
        // document.getElementById("hh").style.direction="rtl"
        window.open("arabic.html")
        

    })
    $("#en").click(function(){
        
        window.open("index.html")
        

    })
    $("#submit").click(function(){
        n=document.getElementById("n").value;
        e=document.getElementById("e").value;
        num=document.getElementById("num").value;
        txt=document.getElementById("txt")
        alert("تم الارسال بنجاح")
        }

    )
})