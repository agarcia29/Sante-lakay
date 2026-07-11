/* =====================================================================
   SANTE LAKAY — SHARED SCROLL-REVEAL UTILITY
   Used by: index.html, about.html, how-it-works.html, plans.html

   HOW TO USE:
   Add class="reveal" to any element you want to fade + slide in on scroll.
   That's it — no extra JS needed on the page itself.

   Optional stagger: if several .reveal elements share a parent and you
   want them to appear one after another instead of all at once, add
   nth-child transition-delay rules for that parent in styles.css
   (see the examples already there for .services-grid, .why-grid, etc).
   ===================================================================== */
(function(){
  var targets = document.querySelectorAll('.reveal');
  if(!targets.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(reduceMotion || !('IntersectionObserver' in window)){
    targets.forEach(function(el){ el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function(el){ observer.observe(el); });
})();
