/**
 * Created by Administrator on 2017/3/27.
 */
window.onload=function(){
        let box=document.querySelector(".box");
        let div=document.querySelectorAll("div");
        let nav=document.querySelector("nav");
        let now=0;
        let next=0;
        let height = document.documentElement.clientHeight;
        let flag = true;

        function wheel(box, up, down) {
            box.addEventListener("mousewheel", function(e) {
                let nub = e.wheelDelta || e.detail; //获取滚轮的方向
                if (nub === 120 || nub === -3) {
                    up();
                } else if (nub === -120 || nub === 3) {
                    down();
                }
            }, false);
        }
        wheel(box, () => {
            if (flag) {
                flag = false;
                nav.style.opacity="1";
                next = now - 1;
                if (next < 0) {
                    next = div.length - 1;
                }
                div[next].style.top = "-100%";
                animate(div[next], {
                    top: 0
                }, 1500);
                animate(div[now], {
                    top: height
                }, 1500, function() {
                    flag = true;
                    nav.style.opacity="0";
                });
                now = next;

            }
        }, () => {
            if (flag) {
                flag = false;
                nav.style.opacity="1";
                next = now + 1;
                if (next >= div.length) {
                    next = 0;
                }
                div[next].style.top = "100%";
                animate(div[next], {
                    top: 0
                }, 1500);
                animate(div[now], {
                    top: -height
                }, 1500, function() {
                    flag = true;
                    nav.style.opacity="0";
                });
                now = next;
            }
        });

        //触碰到nav
        nav.onmouseover=function(){
            nav.style.opacity="1";
        };
        nav.onmouseout=function(){
            nav.style.opacity="0";
        };

    };
