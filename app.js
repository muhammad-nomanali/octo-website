document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.num');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-val');
            const count = +counter.innerText;
            const speed = 100; // change animation speed here
            const increment = (target - count) / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else if (count > target) {
                counter.innerText = Math.floor(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});