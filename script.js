//Footer year
document.getElementById("year").textContent = new Date().getFullYear();

//Mobile nav
(function () {
  var btn  = document.getElementById("navToggle");
  var menu = document.getElementById("navMobile");
  if (!btn || !menu) return;

  btn.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "Close" : "Menu";
  });

  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "Menu";
    });
  });
})();

//Profile photo
(function () {
  var img = document.getElementById("avatarImg");
  var ph  = document.getElementById("avatarPh");
  if (!img || !img.src || img.src === window.location.href) return;
  img.addEventListener("load",  function () { if (ph) ph.style.display = "none"; });
  img.addEventListener("error", function () { img.style.display = "none"; });
})();

//Certifications
var certs = [
  { name: "AWS Cloud Quest: Cloud Practitioner", issuer: "Amazon Web Services Training and Certification", date: "06/06/2026", badge: "assets/CloudPractitioner.png", url: "https://www.credly.com/badges/4d8965ca-d504-4a2a-a73b-e4fec435ce4a/public_url" },
  { name: "AWS Cloud Quest: Generative AI Practitioner", issuer: "Amazon Web Services Training and Certification", date: "12/06/2026", badge: "assets/AIPractitioner.png", url: "https://www.credly.com/badges/4329c261-3be8-4589-85c4-2d8d85d197d5/public_url" },
  { name: "Google AI Essentials", issuer: "Google", date: "16/05/2026", badge: "assets/GoogleBadge.png", url: "https://coursera.org/verify/specialization/CEVL9SQNATQ4" },
  { name: "Intro to Cybersecurity", issuer: "Cisco", date: "In progress", badge: "", url: "" },
];

(function () {
  var grid = document.getElementById("certGrid");
  if (!grid) return;

  certs.forEach(function (c) {
    var li   = document.createElement("li");
    var tag  = c.url ? "a" : "div";
    var wrap = document.createElement(tag);
    wrap.className = "cert";
    if (c.url) { wrap.href = c.url; wrap.target = "_blank"; wrap.rel = "noreferrer"; }

    // Badge
    var badge = document.createElement("div");
    badge.className = "cert-badge";
    if (c.badge) {
      var bimg = document.createElement("img");
      bimg.src = c.badge; bimg.alt = c.name;
      badge.appendChild(bimg);
    } else {
      var ph = document.createElement("span");
      ph.className = "cert-placeholder";
      ph.textContent = "Badge";
      badge.appendChild(ph);
    }

    // Text
    var meta   = document.createElement("div");
    meta.className = "cert-meta";
    var name   = document.createElement("div"); name.textContent = c.name;
    var issuer = document.createElement("div"); issuer.className = "cert-issuer";
    issuer.textContent = c.issuer + " · " + c.date;
    meta.appendChild(name);
    meta.appendChild(issuer);

    wrap.appendChild(badge);
    wrap.appendChild(meta);
    li.appendChild(wrap);
    grid.appendChild(li);
  });
})();

//Projects
var projects = [
  {
    title: "Earth Invaders",
    description: "A browser-based arcade game built with vanilla JavaScript and OOP principles. You play as a UFO defending Earth against waves of enemy planes falling from the sky. Features a shooting mechanic, a time-based exponential scoring system, progressive difficulty scaling, explosion animations, and a top-9 leaderboard with username entry. Includes a start screen, game mode selection, and game over flow.",
    stack: "JavaScript · DOM · OOP",
    github: "https://github.com/djmsixx/earth-invaders.git",
    images: []
  },
  {
    title: "Personal Portfolio Website",
    description: "Designed and built a personal portfolio website from scratch without any frameworks or build tools. Features a bilingual about section, data-driven project and certification rendering, a responsive mobile nav, and placeholder support for images and badges. Deployed as a static site.",
    stack: "HTML · CSS · JavaScript",
    github: "https://github.com/djmsixx/Portfolio.git",
    images: []
  },
  {
    title: "Ray Tracer",
    description: "A ray tracer built from scratch in C++, supporting Blinn-Phong shading, soft shadows from area light sources, and anti-aliasing via stratified sampling. Parses scene data from JSON (geometry, cameras, lights, render settings) and outputs rendered images. Built using the Eigen library for vector/matrix math.",
    stack: "C++ · Eigen · JSON Parsing",
    github: "https://github.com/djmsixx/Raytracer.git",
    images: ["assets/test_scene1B.png", "assets/test_scene3B_aa.png", "assets/cornell_box.png"]
  },
  {
    title: "OpenGL Real-Time Renderer",
    description: "A real-time 3D rendering engine in OpenGL featuring four custom shaders (Phong, Flat, Circle, and Voronoi) with interactive keyboard-driven mode switching. Extended with a mouse-picking interface that projects triangles into screen space, computes barycentric coordinates under the cursor, and identifies the closest intersected triangle in real time.",
    stack: "C++ · OpenGL · GLSL · GLM",
    github: "https://github.com/djmsixx/OpenGL-Real-Time-Renderer.git",
    images: ["assets/teapot.png", "assets/voronoi.png", "assets/circle.png"]
  },
];

(function () {
  var list = document.getElementById("projectList");
  if (!list) return;

  projects.forEach(function (p) {
    var li = document.createElement("li");

    // Header row
    var head = document.createElement("div");
    head.className = "project-head";

    var h3 = document.createElement("h3");
    h3.className = "project-title";
    h3.textContent = p.title;

    var gh = document.createElement("a");
    gh.className = "project-github";
    gh.href = p.github;
    gh.target = "_blank";
    gh.rel = "noreferrer";
    gh.textContent = "GitHub →";

    head.appendChild(h3);
    head.appendChild(gh);

    // Description
    var desc = document.createElement("p");
    desc.className = "project-desc";
    desc.textContent = p.description;

    // Stack
    var stack = document.createElement("p");
    stack.className = "project-stack";
    stack.textContent = p.stack;

    li.appendChild(head);
    li.appendChild(desc);
    li.appendChild(stack);

    // Image grid (only if there are images)
    var hasImages = p.images && p.images.some(function (s) { return s !== ""; });
    var showGrid  = p.images && p.images.length > 0;

    if (showGrid) {
      var grid = document.createElement("div");
      grid.className = "project-images";

      p.images.forEach(function (src, idx) {
        var slot = document.createElement("div");
        slot.className = "project-image";

        if (src) {
          var im = document.createElement("img");
          im.src = src;
          im.alt = p.title + " render " + (idx + 1);
          im.addEventListener("error", function () { im.style.display = "none"; });
          slot.appendChild(im);
        }

        // Show placeholder text in empty slots
        var ph = document.createElement("span");
        ph.className = "render-placeholder";
        ph.textContent = "Render " + (idx + 1);
        slot.appendChild(ph);

        // Hide placeholder once image loads
        if (src) {
          var phRef = ph;
          slot.querySelector("img").addEventListener("load", function () {
            phRef.style.display = "none";
          });
        }

        grid.appendChild(slot);
      });

      li.appendChild(grid);
    }

    list.appendChild(li);
  });
})();
