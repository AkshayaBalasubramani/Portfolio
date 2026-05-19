function toggleMenu(){
        const menu=document.querySelector(".menu-links");
        const icon=document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
}

// Intersection Observer to reveal sections on scroll
document.addEventListener('DOMContentLoaded', function(){
    const sections = document.querySelectorAll('section');
    const io = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('reveal');
            }
        });
    },{ threshold: 0.12 });
    sections.forEach(s=> io.observe(s));
});