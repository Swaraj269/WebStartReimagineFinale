const container = document.querySelector("#container");

tile = document.querySelector(".tile");

for (let i = 0; i < 399; i++) {
  container.appendChild(tile.cloneNode());
}

gsap.set(".loaderinnertext h1, #loaderfinaltext h1", { opacity: 0, y: 200 });
gsap.set("#wave, #secondwave", { opacity: 0 });
gsap.set(".homepageheadingdivcontainer h1", { opacity: 0, y: 200 });
gsap.set("#homepagepara1, #page1ctadiv, #nav", {
  opacity: 0,
});
gsap.set("#page1innerdiv", {
  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
});

var tl = gsap.timeline();

tl.to(
  ".loaderinnertext h1",
  {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "expo.out",
    stagger: 0.02,
  },
  "a"
);

tl.to(
  "#wave, #secondwave",
  {
    delay: 0.4,
    opacity: 1,
    duration: 1.2,
    ease: "expo.out",
    stagger: 0.02,
  },
  "a"
);

tl.to(".loaderinnertext h1", {
  delay: 0.1,
  opacity: 0,
  y: 0,
  duration: 0.9,
  ease: "expo.in",
  stagger: 0.03,
});

tl.to("#loaderfinaltext h1", {
  opacity: 1,
  y: 0,
  duration: 1.1,
  ease: "power4",
});

tl.to("#welcome", {
  opacity: 0,
  duration: 0.8,
  ease: "expo.in",
  onComplete: () => {
    var tl2 = gsap.timeline();
    tl2.to(
      "#welcome",
      {
        duration: 1.2,
        ease: "power4",
        opacity: 0,
        display: "inline-block",
        width: "0%",
      },
      "a"
    );
    tl2.to(
      "#hear",
      {
        duration: 1.5,
        marginTop: "-0.8vw",
        ease: "power4.out",
        fontWeight: "500",
        letterSpacing: "20px",
        fontSize: "3.8vw",
      },
      "a"
    );
    tl2.to(
      "#wave video",
      {
        opacity: 0,
        duration: 0.4,
      },
      "a"
    );
    tl2.to(
      "#secondwave .waveline",
      {
        opacity: 1,
        height: "0.02vw",
        backgroundColor: "white",
        duration: 0.8,
      },
      "a"
    );
    tl2.to(
      "#secondwave .waveline",
      {
        width: 0,
        duration: 2.5,
        ease: "expo.out",
      },
      "b"
    );
    tl2.to(
      "#hear",
      {
        duration: 0.4,
        ease: "linear",
        letterSpacing: "8px",
      },
      "b"
    );
    tl2.to("#hear", {
      y: -200,
      duration: 0.8,
      ease: "expo.in",
    });
    tl2.to("#loader", {
      display: "none",
      onComplete: function () {
        afterloaderanimation();
      },
    });
  },
});

function afterloaderanimation() {
  var tl3 = gsap.timeline();
  tl3.to("#page1innerdiv", {
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
  });
  tl3.to(
    ".homepageheadingdivcontainer h1",
    {
      y: 0,
      delay: -0.1,
      opacity: 1,
      stagger: 0.02,
      duration: 1,
      ease: "expo.out",
    },
    "a"
  );
  tl3.to(
    "#homepagepara1, #page1ctadiv, #nav",
    {
      opacity: 1,
      duration: 1.5,
      ease: "expo.out",
    },
    "a"
  );
}

gsap.set("#flotingcta1,#flotingcta2,#flotingcta3,#flotingcta4", {
  y: 5,
  opacity: 0,
});
var maincta = document.querySelector("#maincta");
maincta.addEventListener("mouseenter", () => {
  gsap.to("#flotingcta1,#flotingcta2,#flotingcta3,#flotingcta4", {
    y: 0,
    delay: -0.3,
    opacity: 1,
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
    ease: "expo.out",
  });
});
maincta.addEventListener("mouseleave", () => {
  gsap.to("#flotingcta1,#flotingcta2,#flotingcta3,#flotingcta4", {
    y: 5,
    opacity: 0,
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    ease: "expo.out",
  });
});

var pg6FAQ = document.querySelectorAll(".pg6FAQ");
var pg6Lower = document.querySelectorAll(".pg6Lower");
var pg6Plus = document.querySelectorAll(".pg6Plus");
pg6FAQ.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (pg6Lower[index].style.display === "block") {
      pg6Lower[index].style.display = "none";
      pg6Plus[index].style.rotate = "0deg";
    } else {
      pg6Lower[index].style.display = "block";
      pg6Plus[index].style.rotate = "90deg";
    }
  });
});

const circle2 = document.querySelector("#pg5cir2");
const circle3 = document.querySelector("#pg5cir3");
const color = document.querySelector("#pg5barcolor");
const img = document.querySelector("#page5img img");
const f1 = document.querySelectorAll(".pg5h21");
const f2 = document.querySelectorAll(".pg5h22");
const f3 = document.querySelectorAll(".pg5h23");

gsap.to("#pg5barcolor", {
  height: "100%",
  scrollTrigger: {
    trigger: "#page_blog",
    scroller: "body",
    pin: "#page_blog",
    start: "top 0%",
    scrub: 1,
    end: "top -300%",
    onUpdate: function (elem) {
      if (elem.progress > 0.33) {
        circle2.style.backgroundColor = "#003366";
        img.src = "./Photos/ai-in-healthcare.webp";
        f1.forEach((element) => {
          element.style.color = "#6d4c41";
        });
        f2.forEach((element) => {
          element.style.color = "#003366";
        });
      } else if (elem.progress < 0.3) {
        circle2.style.backgroundColor = "white";
        img.src = "./Photos/The-Future-of-Healthcare-Technology.jpg";
        f2.forEach((element) => {
          element.style.color = "#6d4c41";
        });
        f1.forEach((element) => {
          element.style.color = "#003366";
        });
      }

      if (elem.progress > 0.91) {
        circle3.style.backgroundColor = "#003366";
        img.src =
          "https://img.freepik.com/premium-photo/healthcare-medicine-medical-technology-doctor-using-ai-robots-diagnosis-medical-research_820340-18406.jpg";
        f2.forEach((element) => {
          element.style.color = "#6d4c41";
        });
        f3.forEach((element) => {
          element.style.color = "#003366";
        });
      } else if (elem.progress < 0.9 && elem.progress > 0.34) {
        circle3.style.backgroundColor = "white";
        img.src = "/Photos/ai-in-healthcare.webp";
        f3.forEach((element) => {
          element.style.color = "#6d4c41";
        });
        f2.forEach((element) => {
          element.style.color = "#003366";
        });
      }
    },
  },
});
