export function sendMail(){
    emailjs.init("H5NrwQP8FJMBqAsmB"); // Initialize EmailJS

    const form = document.getElementById('form');
    const btn = document.getElementById('button');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        btn.value = 'Sending...';

        const serviceID = 'service_tocom8c';  // Your actual service ID
        const templateID = 'template_jf8us3m'; // Your actual template ID

        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                btn.value = 'Send Email';
                alert("Subscription Succesfull!");
                form.reset();
            })
            .catch(error => {
                btn.value = 'Send Email';
                alert(`Failed to Subscribe: ${error.text}`);
            });
    });
}