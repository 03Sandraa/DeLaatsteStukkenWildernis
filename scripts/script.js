var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
var scene1 = document.getElementById('scene1');
var parallaxInstance = new Parallax(scene1);
var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene2);
var scene3 = document.getElementById('scene3');
var parallaxInstance = new Parallax(scene3);
var scene4 = document.getElementById('scene4');
var parallaxInstance = new Parallax(scene4);
var scene5 = document.getElementById('scene5');
var parallaxInstance = new Parallax(scene5);
var scene6 = document.getElementById('scene6');
var parallaxInstance = new Parallax(scene6);
var scene7 = document.getElementById('scene7');
var parallaxInstance = new Parallax(scene7);
var scene8 = document.getElementById('scene8');
var parallaxInstance = new Parallax(scene8);
var scene9 = document.getElementById('scene9');
var parallaxInstance = new Parallax(scene9);
var scene10 = document.getElementById('scene10');
var parallaxInstance = new Parallax(scene10);
var scene11 = document.getElementById('scene11');
var parallaxInstance = new Parallax(scene11);
var scene12 = document.getElementById('scene12');
var parallaxInstance = new Parallax(scene12);
var scene13 = document.getElementById('scene13');
var parallaxInstance = new Parallax(scene13);
var scene14 = document.getElementById('scene14');
var parallaxInstance = new Parallax(scene14);
var scene15 = document.getElementById('scene15');
var parallaxInstance = new Parallax(scene15);
var scene16 = document.getElementById('scene16');
var parallaxInstance = new Parallax(scene16);
var scene17 = document.getElementById('scene17');
var parallaxInstance = new Parallax(scene17);
var scene18 = document.getElementById('scene18');
var parallaxInstance = new Parallax(scene18);
var scene19 = document.getElementById('scene19');
var parallaxInstance = new Parallax(scene19);
var scene20 = document.getElementById('scene20');
var parallaxInstance = new Parallax(scene20);
var scene21 = document.getElementById('scene21');
var parallaxInstance = new Parallax(scene21);
var scene22 = document.getElementById('scene22');
var parallaxInstance = new Parallax(scene22);
var scene23 = document.getElementById('scene23');
var parallaxInstance = new Parallax(scene23);

var body = document.querySelector("body");
var buttonNiveau1 = document.querySelector(".ContentNiveauNav li:nth-of-type(1)");
var buttonNiveau2 = document.querySelector(".ContentNiveauNav li:nth-of-type(2)");
var buttonNiveau3 = document.querySelector(".ContentNiveauNav li:nth-of-type(3)");

// var Niveau1Part = document.querySelector(".ContentNiveau1");
// var Niveau2Part = document.querySelector(".ContentNiveau2");
// var Niveau3Part = document.querySelector(".ContentNiveau3");

buttonNiveau1.addEventListener("click", e => {
    buttonNiveau1.classList.add("Active");
    buttonNiveau2.classList.remove("Active");
    buttonNiveau3.classList.remove("Active");
});


buttonNiveau2.addEventListener("click", e => {
    buttonNiveau2.classList.add("Active");
    buttonNiveau1.classList.remove("Active");
    buttonNiveau3.classList.remove("Active");
});

buttonNiveau3.addEventListener("click", e => {
    buttonNiveau3.classList.add("Active");
    buttonNiveau1.classList.remove("Active");
    buttonNiveau2.classList.remove("Active");
});

// Zorgt voor een vloeiende overgang wanneer er op een a wordt geklikt
// Bron: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Einde gebruik bron


var scrollers = document.querySelectorAll('main section:not(main section:first-of-type)');

var scrollerDivs = Array.prototype.filter.call(scrollers, function (testElement) {
    return testElement.nodeName === 'DIV';
});

function scrollAll(scrollTop) {
    scrollerDivs.forEach(function (element, index, array) {
        element.scrollTop = scrollTop;
    });
}

scrollerDivs.forEach(function (element, index, array) {
    element.addEventListener('scroll', function (e) {
        scrollAll(e.target.scrollTop);
        console.log(e.target.scrollTop)
    });
});






// var Niveau1 = document.querySelectorAll(".TekstN1");
// var Niveau2 = document.querySelectorAll(".TekstN2");
// var Niveau3 = document.querySelectorAll(".TekstN3");

// function handler(direction) {
//     console.log(this.group.name);
//     if (this.group.name == "Niveau1") {
//         body.classList.add("Niveau1");
//         if (body.classList.contains("Niveau2")) {
//             body.classList.remove("Niveau2");
//         } else if (body.classList.contains("Niveau3")) {
//             body.classList.remove("Niveau3");
//         }
//     }
//     if (this.group.name == "Niveau2"){
//         body.classList.add("Niveau2");
//         if (body.classList.contains("Niveau1")) {
//             body.classList.remove("Niveau1");
//         } else if (body.classList.contains("Niveau3")) {
//             body.classList.remove("Niveau3");
//         }
//     }
//     if (this.group.name == "Niveau3"){
//         body.classList.add("Niveau3");
//         if (body.classList.contains("Niveau2")) {
//             body.classList.remove("Niveau2");
//         } else if (body.classList.contains("Niveau1")) {
//             body.classList.remove("Niveau1");
//         }
//     }
//   }

// Niveau1.forEach(function (element) {
//     new Waypoint({
//         element: element,
//         handler: handler,
//         offset: '50%',
//         group: 'Niveau1',
//         context: document.querySelector('main')
//     })
// })

// Niveau2.forEach(function (element) {
//     new Waypoint({
//         element: element,
//         handler: handler,
//         offset: '50%',
//         group: 'Niveau2',
//         context: document.querySelector('main')
//     })
// })

// Niveau3.forEach(function (element) {
//     new Waypoint({
//         element: element,
//         handler: handler,
//         offset: '50%',
//         group: 'Niveau3',
//         context: document.querySelector('main')
//     })

// })





// var waypointN1 = new Waypoint({
//     element: document.querySelectorAll(".ContentNiveau1"),
//     handler: function (direction) {

//         body.classList.add("Niveau1");
//         if (body.classList.contains("Niveau2")) {
//             body.classList.remove("Niveau2");
//         } else if (body.classList.contains("Niveau3")) {
//             body.classList.remove("Niveau3");
//         }
//     },
//     offset: '90%',
//     group: 'Niveau1',
//     context: document.querySelectorAll('main section:not(main section:first-of-type)')
// });

// var waypointN2 = new Waypoint({
//     element: document.querySelectorAll(".ContentNiveau2"),
//     handler: function (direction) {
//         body.classList.add("Niveau2");
//         if (body.classList.contains("Niveau1")) {
//             body.classList.remove("Niveau1");
//         } else if (body.classList.contains("Niveau3")) {
//             body.classList.remove("Niveau3");
//         }
//     },
//     offset: '90%',
//     group: 'Niveau2',
//     context: document.querySelectorAll('main section:not(main section:first-of-type)')
// });

// var waypointN3 = new Waypoint({
//     element: document.querySelectorAll(".ContentNiveau3"),
//     handler: function (direction) {
//         console.log(this);
//         body.classList.add("Niveau3");
//         if (body.classList.contains("Niveau1")) {
//             body.classList.remove("Niveau1");
//         } else if (body.classList.contains("Niveau2")) {
//             body.classList.remove("Niveau2");
//         }
//     },
//     offset: '90%',
//     group: 'Niveau3',
//     context: document.querySelectorAll('main section:not(main section:first-of-type)')
// });


// if (body.classList.contains("Niveau3") ){
//     document.querySelector("#Paragraph1 .ContentContainer").scrollTop = 2000;
//     document.querySelector("#Paragraph2 .ContentContainer").scrollTop = 2000;
//     document.querySelector("#Paragraph3 .ContentContainer").scrollTop = 2000;
// }

const indexNavigatie = document.querySelectorAll(".IndexNav ol li");
console.log(indexNavigatie);

// // Bron: http://imakewebthings.com/waypoints/
// var waypointHorizontal = new Waypoint({
//     element: document.querySelector("#Paragraph1"),
//     handler: function (direction) {
//         indexNavigatie.classList = "";
//         indexNavigatie[0].classList.add("active");
//         console.log(waypointHorizontal.element)
//         console.log(indexNavigatie)

//     },
//     // Bron: http://imakewebthings.com/waypoints/api/horizontal-option/
//     context: document.querySelector('main'),
//     horizontal: true
//     // Einde bron
// });

// // Einde bron




// if (body.classList.contains("Niveau1") && indexNavigatie[2].classList.contains("active")){
//     P2CON[0].scrollTop(0);
// } else if (body.classList.contains("Niveau2") && indexNavigatie[2].classList.contains("active")){
//     P2CON[0].scrollTop(500);
// } else if (body.classList.contains("Niveau3") && indexNavigatie[2].classList.contains("active")){
//     P2CON[0].scrollTop(1000);
// }

var Hfst1 = document.querySelector(".HoofdstukkenNav ol li:first-of-type");
var Hfst2 = document.querySelector(".HoofdstukkenNav ol li:nth-of-type(2)");
var Hfst3 = document.querySelector(".HoofdstukkenNav ol li:nth-of-type(3)");
var Hfst4 = document.querySelector(".HoofdstukkenNav ol li:nth-of-type(4)");
var Hfst5 = document.querySelector(".HoofdstukkenNav ol li:nth-of-type(5)");

var waypointIntro = new Waypoint({
    element: document.querySelector("#Intro"),
    handler: function (direction) {
        if (indexNavigatie[1].classList.contains("active")) {
            indexNavigatie[1].classList.remove("active")
        }
        Hfst1.classList.add("active");
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: "50%"
});

var waypointP1 = new Waypoint({
    element: document.querySelector("#Paragraph1"),
    handler: function (direction) {
        indexNavigatie[1].classList.add("active");
        if (indexNavigatie[2].classList.contains("active")) {
            indexNavigatie[2].classList.remove("active")
        }

    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: "50%"
});
var waypointP2 = new Waypoint({
    element: document.querySelector("#Paragraph2"),
    handler: function (direction) {
        indexNavigatie[2].classList.add("active");
        // if (indexNavigatie[1].classList.contains("active")) {
        //     indexNavigatie[1].classList.remove("active")
        // } 
        if (indexNavigatie[3].classList.contains("active")) {
            indexNavigatie[3].classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: "50%"
});
var waypointP3 = new Waypoint({
    element: document.querySelector("#Paragraph3"),
    handler: function (direction) {
        indexNavigatie[3].classList.add("active");
        // if (indexNavigatie[2].classList.contains("active")) {
        //     indexNavigatie[2].classList.remove("active")
        // } 
        if (indexNavigatie[4].classList.contains("active")) {
            indexNavigatie[4].classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: "50%"
});
var waypointP4 = new Waypoint({
    element: document.querySelector("#Paragraph4"),
    handler: function (direction) {
        indexNavigatie[4].classList.add("active");
        // if (indexNavigatie[3].classList.contains("active")) {
        //     indexNavigatie[3].classList.remove("active")
        // } 
        if (indexNavigatie[5].classList.contains("active")) {
            indexNavigatie[5].classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});
var waypointP5 = new Waypoint({
    element: document.querySelector("#Paragraph5"),
    handler: function (direction) {
        indexNavigatie[5].classList.add("active");
        // if (indexNavigatie[4].classList.contains("active")) {
        //     indexNavigatie[4].classList.remove("active")
        // } 
        if (indexNavigatie[6].classList.contains("active")) {
            indexNavigatie[6].classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});
var waypointP6 = new Waypoint({
    element: document.querySelector("#Paragraph6"),
    handler: function (direction) {
        indexNavigatie[6].classList.add("active");
        // if (indexNavigatie[5].classList.contains("active")) {
        //     indexNavigatie[5].classList.remove("active")
        // }
        if (indexNavigatie[7].classList.contains("active")) {
            indexNavigatie[7].classList.remove("active")
        }
        Hfst1.classList.add("active");
        if (Hfst2.classList.contains("active")) {
            Hfst2.classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});
var waypointP7 = new Waypoint({
    element: document.querySelector("#Paragraph7"),
    handler: function (direction) {
        indexNavigatie[7].classList.add("active");
        // if (indexNavigatie[6].classList.contains("active")) {
        //     indexNavigatie[6].classList.remove("active")
        // }
        if (indexNavigatie[8].classList.contains("active")) {
            indexNavigatie[8].classList.remove("active")
        }
        Hfst2.classList.add("active");
        if (Hfst1.classList.contains("active")) {
            Hfst1.classList.remove("active")
        }

    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});
var waypointP8 = new Waypoint({
    element: document.querySelector("#Paragraph8"),
    handler: function (direction) {
        indexNavigatie[8].classList.add("active");
        // if (indexNavigatie[7].classList.contains("active")) {
        //     indexNavigatie[7].classList.remove("active")
        // } 
        if (indexNavigatie[9].classList.contains("active")) {
            indexNavigatie[9].classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});
var waypointP9 = new Waypoint({
    element: document.querySelector("#Paragraph9"),
    handler: function (direction) {
        indexNavigatie[9].classList.add("active");
        // if (indexNavigatie[8].classList.contains("active")) {
        //     indexNavigatie[8].classList.remove("active")
        // } 
        if (indexNavigatie[10].classList.contains("active")) {
            indexNavigatie[10].classList.remove("active")
        }
        Hfst2.classList.add("active");
        if (Hfst3.classList.contains("active")) {
            Hfst3.classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});



var waypointP10 = new Waypoint({
    element: document.querySelector("#Paragraph10"),
    handler: function (direction) {
        indexNavigatie[10].classList.add("active");
        // if (indexNavigatie[9].classList.contains("active")) {
        //     indexNavigatie[9].classList.remove("active")
        // }
        if (indexNavigatie[11].classList.contains("active")) {
            indexNavigatie[11].classList.remove("active")
        }
        Hfst3.classList.add("active");
        if (Hfst2.classList.contains("active")) {
            Hfst2.classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});

var waypointP11 = new Waypoint({
    element: document.querySelector("#Paragraph11"),
    handler: function (direction) {
        indexNavigatie[11].classList.add("active");
        // if (indexNavigatie[9].classList.contains("active")) {
        //     indexNavigatie[9].classList.remove("active")
        // }
        if (indexNavigatie[12].classList.contains("active")) {
            indexNavigatie[12].classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});

var waypointP12 = new Waypoint({
    element: document.querySelector("#Paragraph12"),
    handler: function (direction) {
        indexNavigatie[12].classList.add("active");
        // if (indexNavigatie[9].classList.contains("active")) {
        //     indexNavigatie[9].classList.remove("active")
        // }
        if (indexNavigatie[13].classList.contains("active")) {
            indexNavigatie[13].classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});

var waypointP13 = new Waypoint({
    element: document.querySelector("#Paragraph13"),
    handler: function (direction) {
        indexNavigatie[13].classList.add("active");
        // if (indexNavigatie[9].classList.contains("active")) {
        //     indexNavigatie[9].classList.remove("active")
        // }
        if (indexNavigatie[14].classList.contains("active")) {
            indexNavigatie[14].classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});

var waypointP14 = new Waypoint({
    element: document.querySelector("#Paragraph14"),
    handler: function (direction) {
        indexNavigatie[14].classList.add("active");
        // if (indexNavigatie[9].classList.contains("active")) {
        //     indexNavigatie[9].classList.remove("active")
        // }
        if (indexNavigatie[15].classList.contains("active")) {
            indexNavigatie[15].classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});

var waypointP15 = new Waypoint({
    element: document.querySelector("#Paragraph15"),
    handler: function (direction) {
        indexNavigatie[15].classList.add("active");
        // if (indexNavigatie[9].classList.contains("active")) {
        //     indexNavigatie[9].classList.remove("active")
        // }
        if (indexNavigatie[16].classList.contains("active")) {
            indexNavigatie[16].classList.remove("active")
        }
        Hfst3.classList.add("active");
        if (Hfst4.classList.contains("active")) {
            Hfst4.classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});

var waypointP16 = new Waypoint({
    element: document.querySelector("#Paragraph16"),
    handler: function (direction) {
        indexNavigatie[16].classList.add("active");
        // if (indexNavigatie[9].classList.contains("active")) {
        //     indexNavigatie[9].classList.remove("active")
        // }
        if (indexNavigatie[17].classList.contains("active")) {
            indexNavigatie[17].classList.remove("active")
        }
        Hfst4.classList.add("active");
        if (Hfst3.classList.contains("active")) {
            Hfst3.classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});

var waypointP17 = new Waypoint({
    element: document.querySelector("#Paragraph17"),
    handler: function (direction) {
        indexNavigatie[17].classList.add("active");
        // if (indexNavigatie[9].classList.contains("active")) {
        //     indexNavigatie[9].classList.remove("active")
        // }
        if (indexNavigatie[18].classList.contains("active")) {
            indexNavigatie[18].classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});

var waypointP18 = new Waypoint({
    element: document.querySelector("#Paragraph18"),
    handler: function (direction) {
        indexNavigatie[18].classList.add("active");
        // if (indexNavigatie[9].classList.contains("active")) {
        //     indexNavigatie[9].classList.remove("active")
        // }
        if (indexNavigatie[19].classList.contains("active")) {
            indexNavigatie[19].classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});

var waypointP19 = new Waypoint({
    element: document.querySelector("#Paragraph19"),
    handler: function (direction) {
        indexNavigatie[19].classList.add("active");
        // if (indexNavigatie[9].classList.contains("active")) {
        //     indexNavigatie[9].classList.remove("active")
        // }
        if (indexNavigatie[20].classList.contains("active")) {
            indexNavigatie[20].classList.remove("active")
        }
        Hfst4.classList.add("active");
        if (Hfst5.classList.contains("active")) {
            Hfst5.classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});

var waypointP20 = new Waypoint({
    element: document.querySelector("#Paragraph20"),
    handler: function (direction) {
        indexNavigatie[20].classList.add("active");
        // if (indexNavigatie[9].classList.contains("active")) {
        //     indexNavigatie[9].classList.remove("active")
        // }
        if (indexNavigatie[21].classList.contains("active")) {
            indexNavigatie[21].classList.remove("active")
        }
        Hfst5.classList.add("active");
        if (Hfst4.classList.contains("active")) {
            Hfst4.classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});

var waypointP21 = new Waypoint({
    element: document.querySelector("#Paragraph21"),
    handler: function (direction) {
        indexNavigatie[21].classList.add("active");
        // if (indexNavigatie[9].classList.contains("active")) {
        //     indexNavigatie[9].classList.remove("active")
        // }
        if (indexNavigatie[22].classList.contains("active")) {
            indexNavigatie[22].classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});

var waypointP22 = new Waypoint({
    element: document.querySelector("#Paragraph22"),
    handler: function (direction) {
        indexNavigatie[22].classList.add("active");
        // if (indexNavigatie[9].classList.contains("active")) {
        //     indexNavigatie[9].classList.remove("active")
        // }
        if (indexNavigatie[23].classList.contains("active")) {
            indexNavigatie[23].classList.remove("active")
        }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});

var waypointP23 = new Waypoint({
    element: document.querySelector("#Paragraph23"),
    handler: function (direction) {
        indexNavigatie[23].classList.add("active");
        // if (indexNavigatie[9].classList.contains("active")) {
        //     indexNavigatie[9].classList.remove("active")
        // }
    },
    context: document.querySelector('main'),
    horizontal: true,
    offset: '50%'
});
