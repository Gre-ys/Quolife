// Ubah Gambar About & Topic Tiap 5 Detik
let about = document.getElementById("img-about");
let topic = document.getElementById("img-topic");
let index = 0;
let list_gambar_about = ["https://storage.googleapis.com/img-quolife/life-1.svg", "https://storage.googleapis.com/img-quolife/life-2.svg", "https://storage.googleapis.com/img-quolife/life-3.svg", "https://storage.googleapis.com/img-quolife/life-4.svg"];
let list_gambar_topic = ["https://storage.googleapis.com/img-quolife/love-1.svg", "https://storage.googleapis.com/img-quolife/love-2.svg", "https://storage.googleapis.com/img-quolife/love-3.svg", "https://storage.googleapis.com/img-quolife/love-4.svg"];

setInterval(() => {
  console.log("Image-" + index);
  about.src = list_gambar_about[index];
  topic.src = list_gambar_topic[index];
  if (index < 3) {
    index++;
  } else {
    index = 0;
  }
}, 5000);

// Ubah Content Card Tips Ketika di Hover
let tips1 = document.getElementById("tips-1");
let tips2 = document.getElementById("tips-2");
let tips3 = document.getElementById("tips-3");

tips1.addEventListener("mouseenter", () => {
    console.log("tips-1");
    tips1.innerHTML = "<p class='text-card-long'>Tiap Manusia itu Unik dan Mempunyai Jalannya Masing-masing</p>"
})
tips1.addEventListener("mouseleave", () => {
    console.log("tips-1");
    tips1.innerHTML = "<p class='text-card-short'>Unique</p>"
})

tips2.addEventListener("mouseenter", () => {
    console.log("tips-2");
    tips2.innerHTML = "<p class='text-card-long'>Jadilah Dirimu Sendiri, Jangan Fokus Mengikuti Orang Lain</p>"
})
tips2.addEventListener("mouseleave", () => {
    console.log("tips-2");
    tips2.innerHTML = "<p class='text-card-short'>Be Yourself</p>"
})

tips3.addEventListener("mouseenter", () => {
    console.log("tips-3");
    tips3.innerHTML = "<p class='text-card-long'>Fokus Pada Pengembangan Diri</p>"
})
tips3.addEventListener("mouseleave", () => {
    console.log("tips-3");
    tips3.innerHTML = "<p class='text-card-short'>Growth</p>"
})
