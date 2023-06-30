const faqs=document.querySelectorAll('.faq');
const faqsA=document.querySelectorAll('.faq-a');

faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('active');
    });
});
