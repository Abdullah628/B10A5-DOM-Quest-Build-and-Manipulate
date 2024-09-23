
document.getElementById("history-btn").addEventListener("click", function () {
    document.getElementById("donation-part").classList.add("hidden");
    document.getElementById("history-part").classList.remove("hidden");

    document.getElementById("donation-btn").classList.remove("bg-[#B4F461]");
    document.getElementById("history-btn").classList.add("bg-[#B4F461]");
})

document.getElementById("donation-btn").addEventListener("click", function () {
    document.getElementById("donation-part").classList.remove("hidden");
    document.getElementById("history-part").classList.add("hidden");

    document.getElementById("donation-btn").classList.add("bg-[#B4F461]");
    document.getElementById("history-btn").classList.remove("bg-[#B4F461]");
})