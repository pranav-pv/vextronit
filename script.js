document.addEventListener('DOMContentLoaded', () => {
    console.log('VextronIT Website Loaded');

    // Mobile Menu Toggle (Basic Implementation)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');

            // Animation for hamburger to X (optional simple version)
            mobileBtn.classList.toggle('open');
        });
    }

    // Contact Form Handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const fullMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

            // 1. Send via WhatsApp
            // Using +91 code for India based on the number format
            const whatsappUrl = `https://wa.me/918590566309?text=${fullMessage}`;
            window.open(whatsappUrl, '_blank');

            // 2. Draft Email
            // Using timeout to ensure the browser handles both actions if possible
            setTimeout(() => {
                const mailtoUrl = `mailto:vextronit@gmail.com?subject=New Inquiry from Website&body=${fullMessage}`;
                window.location.href = mailtoUrl;
            }, 1000);
        });
    }
});
