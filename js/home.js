let totalAmount = parseFloat(document.getElementById("total-amount").innerText);



let quotaFund = parseFloat(document.getElementById("quota-fund").innerText);



function addHistory(donationName, amount){
    const div = document.createElement("div");
    const date = new Date();
    div.innerHTML = `
        <div class="border p-6 rounded-md mb-4">
          <h1 class="text-md font-bold mb-2">
            ${amount} ${donationName}
          </h1>
          <p class="text-sm text-[#808080]">${date.toString()}</p>
        </div>
    `

    document.getElementById("history-part").appendChild(div);
}


    


document
  .getElementById("noakhali-donation-btn")
  .addEventListener("click", function () {
    let noakhaliFund = parseFloat(document.getElementById("noakhali-fund").innerText);
    const noakhaliDonation = parseFloat(document.getElementById("noakhali-donation").value);
    const nokhaliDonationName = document.getElementById("noakhali-donation-name").innerText;
    
    if(isNaN(noakhaliDonation) || noakhaliDonation < 0) {
        alert("Invalid input !!");
        return;
    }

    
    noakhaliFund += noakhaliDonation;
    totalAmount -= noakhaliDonation;

    document.getElementById("noakhali-fund").innerText = noakhaliFund;
    document.getElementById("total-amount").innerText = totalAmount;

    addHistory(nokhaliDonationName, noakhaliDonation);
    document.getElementById("openModal").click();
  });


  document
  .getElementById("feni-donation-btn")
  .addEventListener("click", function () {
    let feniFund = parseFloat(document.getElementById("feni-fund").innerText);
    const feniDonation = parseFloat(document.getElementById("feni-donation").value);
    const feniDonationName = document.getElementById("feni-donation-name").innerText;
    
    if(isNaN(feniDonation) || feniDonation < 0) {
        alert("Invalid input !!");
        return;
    }
    
    feniFund += feniDonation;
    totalAmount -= feniDonation;

    document.getElementById("feni-fund").innerText = feniFund;
    document.getElementById("total-amount").innerText = totalAmount;

    addHistory(feniDonationName, feniDonation);
    document.getElementById("openModal").click();
  });


  document
  .getElementById("quota-donation-btn")
  .addEventListener("click", function () {
    let quotaFund = parseFloat(document.getElementById("quota-fund").innerText);
    const quotaDonation = parseFloat(document.getElementById("quota-donation").value);
    const quotaDonationName = document.getElementById("quota-donation-name").innerText;
    
    if(isNaN(quotaDonation) || quotaDonation < 0) {
        alert("Invalid input !!");
        return;
    }
    
    quotaFund += quotaDonation;
    totalAmount -= quotaDonation;

    document.getElementById("quota-fund").innerText = quotaFund;
    document.getElementById("total-amount").innerText = totalAmount;

    addHistory(quotaDonationName, quotaDonation);
    document.getElementById("openModal").click();
  });