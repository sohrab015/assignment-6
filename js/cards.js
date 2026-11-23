function showItems(id) {
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
        .then((res) => res.json())
        .then((dat) => getItems(dat.data));
}

function getItems(items) {
    const cardContainer = document.getElementById("cardContainer");
    const lessonFirstSection = document.getElementById("lessonFirstSection");

    lessonFirstSection.classList.add("hidden");
    cardContainer.innerHTML = "";

    for (let item of items) {
        cardContainer.innerHTML += `
      <div class="card bg-base-100 w-[350px] shadow-sm">
        <div class="card-body items-center">

          <h2 class="card-title text-2xl">${item.word}</h2>
          <p class="text-sm text-gray-700">${item.pronunciation ?? ""}</p>
          <p class="text-sm text-gray-700 hind-siliguri-regular">${item.meaning ?? ""}</p>

          <div class="card-actions">
            <button onclick="seeInfo(${item.id})" class="btn btn-outline rounded-full">
              <div class="card-actions">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#000000"><path d="M11,17h2V11H11v6Zm1.71-8.29Q13,8.42 13,8q0-0.43-0.29-0.71T12,7T11.29,7.29T11,8q0,0.42 0.29,0.71T12,9t0.71-0.29ZM12,22q-2.07,0-3.9-0.79q-1.82-0.79-3.17-2.14Q3.58,17.73 2.79,15.9T2,12Q2,9.92 2.79,8.1Q3.58,6.27 4.93,4.93Q6.28,3.57 8.1,2.79Q9.93,2 12,2t3.9,0.79t3.17,2.14q1.35,1.35 2.14,3.17Q22,9.92 22,12t-0.79,3.9t-2.14,3.17q-1.35,1.35-3.17,2.14T12,22Zm0-2q3.35,0 5.68-2.32T20,12T17.68,6.32T12,4T6.33,6.32T4,12t2.33,5.68T12,20Zm0-8Z"/></svg>
            </button>

            <button data-word="${item.word}" onclick="makeSound(this.dataset.word)" class="btn rounded-full btn-outline">
              <span class="material-symbols-outlined">volume_up</span>
            </button>
          </div>

        </div>
      </div>
    `;
    }
}