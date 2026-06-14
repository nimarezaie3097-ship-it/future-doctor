function scrollToSection(id){
    document
    .getElementById(id)m
    .scrollIntoView({
        behavior:"smooth"
    });
}
const hiddenElements =
document.querySelectorAll('.section');

const observer =
new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

hiddenElements.forEach(el=>{
    el.classList.add('hidden');
    observer.observe(el);
});
const text =
"Future Doctor & Developer";

let i = 0;

function typeWriter(){

    if(i < text.length){

        document
        .getElementById("typing")
        .innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,100);
    }
}

typeWriter();
