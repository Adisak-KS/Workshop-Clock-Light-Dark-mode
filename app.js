const timeEl = document.querySelector(".time");
const btnToggle = document.querySelector(".toggle");

function setTime() {
    const time = new Date()
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    timeEl.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setTime()
setInterval(setTime, 1000)

// เมื่มีการคลิกที่ปุ่ม
btnToggle.addEventListener("click", ($e) => {
    const html = document.querySelector("html")
    if (html.classList.contains("dark")) {
        html.classList.remove("dark")
        e.target.innerHTML = "โหมดกลางคืน"

    } else {
        html.classList.add("dark")
        e.target.innerHTML = "โหมเกลางวัน"
    }
})

