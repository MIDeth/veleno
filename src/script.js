gsap.registerPlugin(ScrollTrigger);

let firstImg = document.querySelectorAll(".first_img");
let thirdImg = document.querySelectorAll(".third_img");
let first = document.querySelectorAll(".first");
let second = document.querySelectorAll(".second");
let thirdH = document.querySelectorAll(".thirdH1");
let thirdDiv = document.querySelectorAll(".thirdDiv");

for (let i = 0; i < thirdDiv.length; i++) {
  const element = thirdDiv[i];

  gsap.fromTo(
    element,
    {
      x: 500,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: element,
        start: "center bottom",
      },
      x: 0,
      opacity: 1,
      duration: 2,
    }
  );
}

for (let i = 0; i < thirdH.length; i++) {
  const element = thirdH[i];

  gsap.fromTo(
    element,
    {
      y: -100,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: element,
        start: "center bottom",
      },
      y: 0,
      opacity: 1,
      duration: 2,
    }
  );
}

for (let i = 0; i < second.length; i++) {
  const element = second[i];

  gsap.fromTo(
    element,
    {
      y: 100,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: element,
        start: "center bottom",
      },
      duration: 2,
      y: 0,
      opacity: 1,
    }
  );
}

for (let i = 0; i < first.length; i++) {
  const element = first[i];

  gsap.fromTo(
    element,
    {
      x: -500,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: element,
        start: "center bottom",
      },
      duration: 2,
      x: 0,
      opacity: 1,
    }
  );
}

for (let i = 0; i < firstImg.length; i++) {
  const element = firstImg[i];
  gsap.fromTo(
    element,
    {
      y: -100,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: element,
        start: "center bottom",
      },
      y: 0,
      opacity: 1,
      duration: 2,
    }
  );
}

for (let i = 0; i < thirdImg.length; i++) {
  const element = thirdImg[i];

  gsap.fromTo(
    ".third_img",
    {
      x: 100,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: element,
        start: "center bottom",
      },
      x: 0,
      opacity: 1,
      duration: 2,
    }
  );
}

console.log(firstImg);

gsap.from(".veleno", {
  x: -500,
  duration: 1.4,
  delay: 0.3,
});

gsap.from(".moroccan", {
  y: 100,
  duration: 1.4,
  delay: 0.3,
});

gsap.fromTo(
  ".mainImg",
  {
    x: 500,
    opacity: 0,
    delay: 0.3,
  },
  {
    x: 0,
    duration: 1.4,
    opacity: 1,
  }
);

// ================================================================
