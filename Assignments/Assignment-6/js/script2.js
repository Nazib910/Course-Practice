const callPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const datas = await res.json();

  showPost(datas);
};
const showPost = (datas) => {
  const latestContainer = document.getElementById("latest-container");
  datas.forEach((data) => {
    const latestCard = document.createElement("div");
    latestCard.innerHTML = `<div class="flex items-center justify-center">
    <div class=" card bg-base-100 shadow-xl border w-full lg:w-4/5">
        <figure class="px-10 pt-10">
          <img src="${data.cover_image}"  class="rounded-xl" />
        </figure>
        <div class="card-body">
        <div class="flex items-center gap-2">
        <img src="./images/calender.jpg" class="w-4 h-4" alt="">
        <p class="text-[#12132D99] font-mulish">${
          data.author?.posted_date || "No publish date"
        }</p>
        </div>
          <h2 class="font-mulish font-extrabold text-[#12132D]">${
            data.title
          }</h2>
          <p class="text-[#12132D99] font-mulish">${data.description}</p>
          <div class="flex gap-4">
            <div>
            <img src="${data.profile_image}"  class="rounded-full w-11 h-11" />
            </div>
            <div>
            <h4 class="font-mulish font-bold text-[#12132D]">${
              data.author?.name || "Unknown"
            }</h4>
            <p class="text-[#12132D99] font-mulish">
            ${data.author?.designation || "Unknown"}
            </p>
            </div>
          </div>
        </div>
      </div>
      </div>`;
    latestContainer.appendChild(latestCard);
  });
};

callPost();
