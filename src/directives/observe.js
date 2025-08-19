export default {
  mounted(el, binding) {
    const animationClass = binding.value || "animate-fade-in"; 

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view", animationClass);
        } else {
          el.classList.remove("in-view", animationClass); 
        }
      },
      { threshold: 0.1 }
    );

    el.classList.add("before-view"); 
    observer.observe(el);
  }
};
