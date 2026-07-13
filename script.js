const weddingDate = new Date("August 1, 2026 18:00:00").getTime();

const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdown = document.getElementById("countdown");

    if (countdown) {
        countdown.innerHTML =
            days + " kun " +
            hours + " soat " +
            minutes + " daqiqa " +
            seconds + " soniya";
    }

    if (distance < 0) {
        clearInterval(timer);
        if (countdown) {
            countdown.innerHTML = "🎉 To'y boshlandi!";
        }
    }
}, 1000);
