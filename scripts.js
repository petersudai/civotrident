document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_4udm563', 'template_uk7c5wj', this)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert('Your question has been sent successfully!');
        }, function(error) {
           console.log('FAILED...', error);
           alert('There was an error sending your question. Please try again.');
        });
});

// Scroll Animation
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});