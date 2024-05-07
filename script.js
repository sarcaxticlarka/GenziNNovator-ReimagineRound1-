document.addEventListener("contextmenu", function (e) {
    e.preventDefault()
}, false)



function page1Half() {

    var tl = gsap.timeline()

    tl.from(".navbar .nav .p1 h3,  .navbar .nav .right .p2, .navbar .nav .right .p3", {
        y: -40,
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
    })
    tl.from(".page1 .content svg", {
        scale: 0.5,
        delay: 0.7,
        duration: 0.6,
        opacity: 0,
        scrub: 2,
        ease: Power2
    })
    tl.from(".page1 .content .shop p, .page1 .content .shop h3", {
        y: 40,
        delay: 0.3,
        duration: 0.3,
        opacity: 0,
    })
    tl.from(".page1 .content .images .img2", {
        x: -80,
        delay: 0.3,
        duration: 0.3,
        opacity: 0,
    }, "a")
    tl.from(".page1 .content .images .img5", {
        x: 80,
        delay: 0.3,
        duration: 0.3,
        opacity: 0,
    }, "a")
    tl.from(".page1 .content .images .img1", {
        y: -80,
        delay: 0.3,
        duration: 0.3,
        opacity: 0,
    }, "a")
    tl.from(".page1 .content .images .img8", {
        y: 80,
        opacity: 0,
        duration: 0.4,
        scrub: 4
    })


}


function page1full() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1",
            scroller: ".main",
            start: "top 50%",
            end: "top -100%",
            scrub: 2,



        }
    })

    tl2.from(".page1 .share", {
        x: -200,
        opacity: 0,
        delay: 0.3,
        duration: 0.4,
    })
    tl2.from(".page1 .content .images .img7", {
        y: 100,
        delay: 0.3,
        duration: 0.4,
    })
    tl2.from(".page1 .content .images .img3", {
        x: -800,
        delay: 0.3,
        duration: 0.5,
        stagger: true
    }, "b")
    tl2.from(".page1 .content .images .img4", {
        x: 800,
        delay: 0.3,
        duration: 0.5,
        stagger: 0.1
    }, "b")
}

function page2Anim() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            scroller: ".main",
            start: "top 50%",
            end: "top 10%",
            scrub: 2,

        }
    })
    tl3.from(".page2 .sweet h2", {
        x: -300,
        opacity: 0,
        duration: 0.5,
        pin: true
    })
    tl3.from(".page2 img", {
        x: 300,
        opacity: 0,
        duration: 0.3,
    })
}

function page3Anim() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page3",
            scroller: ".main",
            start: "top 25%",
            end: "top 10%",
            scrub: 2,

        }
    })
    tl4.from(".page3 .items", {
        x: -300,
        opacity: 0,
        duration: 0.5,
        pin: true
    })
    tl4.from(".page3 .rating", {
        y: 80,
        opacity: 0,
        duration: 0.7,
    })

}


function page4Anim() {
    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page4",
            scroller: ".main",
            start: "top 45%",
            end: "top -10%",
            scrub: 2,

        }
    })
    tl5.from(".page4 .explore", {
        y: 50,
        opacity: 0,
        duration: 0.5,

    })
    tl5.from(".page4 .prod", {
        y: 80,
        opacity: 0,
        duration: 0.2,
        stagger: 0.8

    })
}

function page5Anim() {
    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page5",
            scroller: ".main",
            start: "top 50%",
            end: "top -10%",
            scrub: true,

        }
    })
    tl6.from(".page5 .what", {
        y: -20,
        opacity: 0,
        duration: 0.5,

    })
    tl6.from(".page5 .review .ritem", {
        y: 400,
        delay: 0.3,
        duration: 0.6,
        stagger: 0.1

    })
}

function page6Anim() {
    var tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page6",
            scroller: ".main",
            start: "top 60%",
            end: "top -10%",
            scrub: true,

        }
    })
    tl7.from(".page6 .top h2", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.15

    })
    tl7.from(".page6 .top #rc", {
        y: -50,
        opacity: 0,
        duration: 0.4,
        delay: 0.8,
        stagger: 0.15

    })
    tl7.from(".page6 .discount h1", {
        x: -400,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.4,

    })
    tl7.from(".page6 .bottom img", {
        x: -400,
        opacity: 0,
        delay: 0.3,
        duration: 0.9,
        stagger: 0.4,

    }, "royal")
    tl7.from(".page6 .bottom .royal", {
        x: 400,
        opacity: 0,
        delay: 0.3,
        duration: 0.6,
        stagger: 0.15,

    }, "royal")

}

function page7Anim() {
    var tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page7",
            scroller: ".main",
            start: "top 50%",
            end: "top -105%",
            scrub: true,




        }
    })
    tl8.from(".page7 .ambassdor h1", {
        y: -200,
        opacity: 0,
        duration: 0.8,
    })
    tl8.from(".page7 .ambassdor p", {
        y: 50,
        opacity: 0,
        duration: 0.8,
    })
}

function page8Anim() {
    var tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page8",
            scroller: ".main",
            start: "top 50%",
            end: "top -30%",
            scrub: true,




        }
    })
    tl9.from(".page8 .left", {
        x: -200,
        opacity: 0,
        duration: 0.8,
    })
    tl9.from(".page8 .item h1, .page8 .item p ", {
        y: -110,
        opacity: 0,
        duration: 0.8,
        stagger: 0.5
    })
    tl9.from(".page8 .right .details1 ", {
        x: 210,
        opacity: 0,
        duration: 0.8,
        stagger: 0.5
    })
}

function page9Anim() {
    var tl10 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page9",
            scroller: ".main",
            start: "top 50%",
            end: "top -20%",
            scrub: true,




        }
    })

    tl10.from(".meetfounder h4, .meetfounder h1, .meetfounder p ", {
        y: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15
    })
    tl10.from(".page9img ", {
        scale: 1.3,
        opacity: 0.5,
        duration: 0.8,
    })
}

function page10Anim() {
    var tl11 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page10",
            scroller: ".main",
            start: "top 50%",
            end: "top -20%",
            scrub: true,




        }
    })

    tl11.from(".page10 .top ", {
        y: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15
    })
    tl11.from(".page10 .middle ", {
        x: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.6,
        stagger: 0.15
    })
    tl11.from(".page10 .hotselling ", {
        y: 300,
        opacity: 0,
        delay: 0.5,
        duration: 0.6,
        stagger: 0.15
    })
}

function footerAnim() {
    var tl12 = gsap.timeline({
        scrollTrigger: {
            trigger: ".footer",
            scroller: ".main",
            start: "top 50%",
            end: "top 10%",
            scrub: true,




        }
    })

    tl12.from(" .footer .footpa ", {
        y: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15
    })
    tl12.from(" .footbottom p ", {
        y: -40,
        delay: 0.5,
        opacity: 0,
        duration: 0.6,
    })
    tl12.from(" .footbottom img ", {
        y: 400,
        delay: 0.8,
        opacity: 0,
        duration: 0.8,
    })

}


function cusrorAnimation() {
    var main = document.querySelector(".main");
    var crsr = document.querySelector(".crsr");

    main.addEventListener("mousemove", function (dets) {
        gsap.to(crsr, {
            x: dets.x,
            y: dets.y,
            duration: 0.6,
        })
    })

}

cusrorAnimation()




page1Half()
page1full()
page2Anim()
page3Anim()
page4Anim()
page5Anim()
page6Anim()
page7Anim()
page8Anim()
page9Anim()
page10Anim()
footerAnim()



