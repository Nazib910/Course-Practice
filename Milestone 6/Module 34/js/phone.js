const loadPhone = async (searchText = "13", isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
  //   console.log(phones);
  const phoneContainer = document.getElementById("phone-container");
  //   clear phone container cards before adding new cards
  phoneContainer.innerHTML = "";

  // Display show all button if there are more then 12 buttons
  const showAllContainer = document.getElementById("show-all-container");
  if (phones.length > 12 && !isShowAll) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }

  //   console.log(phones.length);
  //  diplay only first ten phones if not show all
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    // console.log(phone);
    // 2 create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
    // 3 set inner html
    phoneCard.innerHTML = `<figure><img src="${phone.image}" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-center">
                        <button onclick="handleShowDetail('${phone.slug}'), show_details_modal.showModal()" class="btn btn-primary">Show Details</button>
                    </div>
                </div>
                `;
    // 4 append child
    phoneContainer.appendChild(phoneCard);
  });
  //   hide loading spinner
  toggleLoadingSpinner(false);
};

//
const handleShowDetail = async (id) => {
  // console.log("showing detail off ........", id);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phone = data.data;
  showPhoneDetails(phone);

  const showDetailContainer = document.getElementById("show-detail-container");
  showDetailContainer.innerHTML = `
   <img src="${phone.image}" alt="" />
    <p><span>Storage:</span>${phone.mainFeatures?.storage}</p>
    <p><span>Release Date:</span>${phone.releaseDate}</p>
  `;
};

const showPhoneDetails = (phone) => {
  console.log(phone);
  const phoneName = document.getElementById("show-detail-phone-name");
  phoneName.innerText = phone.name;
  //   show the modal
  show_details_modal.showModal();
};

// Handle search button
const handleSearch = (isShowAll) => {
  setInterval(toggleLoadingSpinner(true), 2000);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText, isShowAll);
};
//  handle search recap
const handleSearch2 = () => {
  toggleLoadingSpinner(true);
  const searchField2 = document.getElementById("search-field2");
  const searchtext2 = searchField2.value;
  loadPhone(searchtext2);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

// handle show all

const handleShowAll = () => {
  handleSearch(true);
};

loadPhone();
