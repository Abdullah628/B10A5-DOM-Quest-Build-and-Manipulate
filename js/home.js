let totalAmount = parseFloat(document.getElementById("total-amount").innerText);

function addHistory(donationName, amount) {
  const div = document.createElement("div");
  const date = new Date();
  div.innerHTML = `
        <div class="border p-6 rounded-md mb-4">
          <h1 class="text-md font-bold mb-2">
            ${amount} ${donationName}
          </h1>
          <p class="text-sm text-[#808080]">Date: ${date.toString()}</p>
        </div>
    `;

  document.getElementById("history-part").appendChild(div);
}

function updateFund(idName, donation){
    let fund = parseFloat(document.getElementById(idName).innerText);

    fund += donation;
    totalAmount -= donation;

    document.getElementById(idName).innerText = fund;
    document.getElementById("total-amount").innerText = totalAmount;
}

document
  .getElementById("noakhali-donation-btn")
  .addEventListener("click", function () {
    
    const noakhaliDonation = parseFloat(
      document.getElementById("noakhali-donation").value
    );
    const nokhaliDonationName = document.getElementById(
      "noakhali-donation-name"
    ).innerText;

    if (isNaN(noakhaliDonation) || noakhaliDonation < 0 || noakhaliDonation > totalAmount) {
      alert("Invalid input !!");
      return;
    }

    updateFund("noakhali-fund", noakhaliDonation);

    addHistory(nokhaliDonationName, noakhaliDonation);
    document.getElementById("openModal").click();
  });

document
  .getElementById("feni-donation-btn")
  .addEventListener("click", function () {
    const feniDonation = parseFloat(
      document.getElementById("feni-donation").value
    );
    const feniDonationName =
      document.getElementById("feni-donation-name").innerText;

    if (isNaN(feniDonation) || feniDonation < 0 || feniDonation > totalAmount) {
      alert("Invalid input !!");
      return;
    }

    updateFund("feni-fund", feniDonation);

    addHistory(feniDonationName, feniDonation);
    document.getElementById("openModal").click();
  });

document
  .getElementById("quota-donation-btn")
  .addEventListener("click", function () {
    const quotaDonation = parseFloat(document.getElementById("quota-donation").value);
    const quotaDonationName = document.getElementById("quota-donation-name").innerText;

    if (isNaN(quotaDonation) || quotaDonation < 0 || quotaDonation > totalAmount) {
      alert("Invalid input !!");
      return;
    }

    updateFund("quota-fund", quotaDonation);

    addHistory(quotaDonationName, quotaDonation);
    document.getElementById("openModal").click();
  });

  document.getElementById("blog-btn").addEventListener("click", function () {
    window.location.href = "/blog.html";
  });
