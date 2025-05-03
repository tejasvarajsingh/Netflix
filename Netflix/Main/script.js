let a = [false, false, false, false, false, false];
        function hello(elid){
            const elem = document.getElementById("faqcontent"+elid);
            const img = document.getElementById("faqimg"+elid);
            if(a[parseInt(elid)-1]){
                img.style.transform="rotate(0deg)";
                elem.style.display="none";
            }else{
                for(let i = 1;i<7;i++){
                    if(a[i-1]){
                        console.log(i);
                        const elem1 = document.getElementById("faqcontent"+i.toString());
                        const img1 = document.getElementById("faqimg"+i.toString());
                        img1.style.transform="rotate(0deg)";
                        elem1.style.display="none";
                        a[i-1]=false;
                    }
                }
                img.style.transform="rotate(45deg)";
                elem.style.display="block";
            }
            a[parseInt(elid)-1]=!a[parseInt(elid)-1];
        }