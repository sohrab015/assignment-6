let lesonButton = document.getElementById("lesonButton");

function lessons() {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((data) => datas(data));
}

function datas(data) {
    for (let item of data.data) {
        lesonButton.innerHTML += `
        <button id = "${item.level_no}" onclick="showItems(${item.level_no})" class="btn btn-outline rounded-lg btn-primary border-2 px-1">
            <span class="flex gap-1 items-center p-2">
                <img class="w-4 h-4" src="assets/fa-book-open.png" alt="">
                    ${item.lessonName} - ${item.level_no}
            </span>
        </button>
        `;
    }
}

lessons();