const loadPosts = async (searchText = "comedy", id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`
  );
  const data = await res.json();
  const posts = data.posts;
  displayPosts(posts); 
};

const displayPosts = (posts, isActive) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  posts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.innerHTML = `<div class="card card-side bg-base-100 shadow-xl my-6 p-4 lg:p-10 bg-[#797DFC1A]">
              <div><img src="${
                post.image
              }" class=" w-[72px] h-[72px] rounded-3xl relative" alt="Given Pic" /></div>
              <div id="change-color-${
                post.id
              }" class="relative top-[-5px] right-[15px] w-5 h-5 rounded-full" style="background-color: ${
      isActive ? "green" : "red"
    };"></div>
              <div class="card-body space-y-2">
                  <div class="flex flex-row w-2/4 text-[#12132DCC] font-medium gap-4 ">
                      <p># ${post.category}</p>
                      <p>Author : ${post.author?.name || "Unknown"}</p>
                  </div>
                  <h2 class="card-title font-bold text-xl font-mulish text-[#12132D]">${
                    post.title
                  }</h2>
                  <p class="text-[#12132D99] font-inter">${post.description}</p>
                  <hr class="border-t-2 border-gray-300 my-8" style="border-style: dotted;">
                  <div class="flex justify-between">
                      <div class="flex flex-row items-center gap-3 justify-around w-1/3 text-[#12132D99]">
                          <div>
                              <img src="./images/comment-icon.png" alt="">
                          </div>
                          <div>
                              <p>${post.comment_count}</p>
                          </div>
                          <div>
                              <img src="./images/view-icon.png" alt="">
                          </div>
                          <div>
                              <p>${post.view_count}</p>
                          </div>
                          <div>
                              <img src="./images/timer-icon.png" alt="">
                          </div>
                          <div>
                              <p> ${post.posted_time}</p>
                          </div>
                      </div>
                      <div class="card-actions items-center">
                          <div id=""><button id="get-button" onclick="appendButton('${
                            post?.title || "Error Detected"
                          }','${
      post?.view_count || "Error Detected"
    }')" class="btn rounded-full"><img class="w-[28px] h-[28px]" src="./images/message-icon.png"
                                      alt=""></button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>`;

    cardContainer.appendChild(postCard);
  });
  toggleLoadingSpinner(false);
};

let numb = 0;
const appendButton = (title, view_count) => {
  numb++;
  const getContainer = document.getElementById("title-count");
  const createSection = document.createElement("div");
  createSection.innerHTML = `<div class="flex justify-between gap-3 bg-[#fff] p-4 rounded-[16px] my-3">
              <div>
                  <h3 class="font-mulish font-semibold">${title}</h3>
              </div>
              <div class="flex items-center justify-center gap-2">
                  <div><img src="./images/view-icon.png" alt=""></div>
                  <div>${view_count}</div>
              </div>
          </div>`;
  getContainer.appendChild(createSection);
  const getCounterContainer = document.getElementById("counter-1");
  getCounterContainer.innerText = numb;
};

const handleSearch = () => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-input");
  const searchText = searchField.value;
  console.log(searchText);
  loadPosts(searchText);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    setTimeout(() => {
      loadingSpinner.classList.add("hidden");
    }, 3500);
  }
};

loadPosts();
