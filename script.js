document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("🎉 Thank you for registering! We will contact you soon.");

    this.reset();
});