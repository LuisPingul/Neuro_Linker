// --- 1. Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });
}

// --- 2. Console Easter Egg ---
console.log("%c APPLE NEURAL SYSTEM v1.0 ONLINE ", "background: #000; color: #39ff14; font-size: 20px; border: 1px solid #39ff14;");

// --- 3. Pricing Toggle Logic (Monthly vs Yearly) ---
const toggleSwitch = document.getElementById('billing-toggle');
const dynamicPrices = document.querySelectorAll('.dynamic-price');
const periodTexts = document.querySelectorAll('.text-period');

if (toggleSwitch) {
    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            // Switch to YEARLY
            dynamicPrices.forEach(price => {
                price.innerText = '¥' + price.getAttribute('data-yearly');
            });
            periodTexts.forEach(text => {
                text.innerText = '/year';
            });
        } else {
            // Switch back to MONTHLY
            dynamicPrices.forEach(price => {
                price.innerText = '¥' + price.getAttribute('data-monthly');
            });
            periodTexts.forEach(text => {
                text.innerText = '/month';
            });
        }
    });
}

// --- 4. MODAL POP-UP LOGIC (Fixed) ---
const modal = document.getElementById('cyber-modal');
const modalText = document.getElementById('modal-text');
const closeModalBtn = document.getElementById('close-modal');
const popupTriggers = document.querySelectorAll('.js-popup');

// A. Open Modal when a Plan is clicked
popupTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault(); // Stop default jumps
        
        // Get the custom message
        const message = trigger.getAttribute('data-msg');
        
        // Show the Cyber-Modal FIRST
        modalText.innerHTML = message;
        modal.style.display = 'flex';
    });
});

// B. Close Modal & Trigger Final Alert
closeModalBtn.addEventListener('click', () => {
    // 1. Hide the Modal
    modal.style.display = 'none';
    
    // 2. Trigger the System Alert LAST (Small delay looks better)
    setTimeout(() => {
        alert("SYSTEM ALERT: Neural Link integration initialized. Welcome to the future.");
    }, 100);
});

// C. Close when clicking outside (Optional: No alert here, just close)
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});