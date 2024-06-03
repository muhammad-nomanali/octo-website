
// scripts.js



// count



document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.num');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = counter.getAttribute('data-val');
            const suffix = target.includes('%') ? '%' : '';
            const targetValue = parseFloat(target.replace('%', ''));
            const count = parseFloat(counter.innerText.replace('%', ''));
            const speed = 100; // Change animation speed here
            const increment = (targetValue - count) / speed;

            if (count < targetValue) {
                counter.innerText = `${Math.ceil(count + increment)}${suffix}`;
                setTimeout(updateCount, 10); // Increase delay for smoother animation
            } else if (count > targetValue) {
                counter.innerText = `${Math.floor(count + increment)}${suffix}`;
                setTimeout(updateCount, 10); // Increase delay for smoother animation
            } else {
                counter.innerText = `${targetValue}${suffix}`;
            }
        };

        updateCount();
    });
});


// 

// copy address
function copyToClipboard() {
    const contractAddress = document.getElementById("contract-address").innerText;
    const textarea = document.createElement("textarea");
    textarea.value = contractAddress;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Copied to clipboard: " + contractAddress);
}
