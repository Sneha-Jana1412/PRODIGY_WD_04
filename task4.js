document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector(".nav-links").classList.remove("open");
    });
  });

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section-card').forEach(section => {
    observer.observe(section);
  });

  // Typing animation
  const text = ["Web Developer", "Problem Solver", "UI Designer", "IT Student"];
  let index = 0;
  let charIndex = 0;
  const typingSpan = document.querySelector(".typing");

  function type() {
    if (charIndex < text[index].length) {
      typingSpan.textContent += text[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingSpan.textContent = text[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      index = (index + 1) % text.length;
      setTimeout(type, 500);
    }
  }

  type();

  // Scroll to top button
  const topBtn = document.getElementById("topBtn");
  window.onscroll = function () {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };
  topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});
