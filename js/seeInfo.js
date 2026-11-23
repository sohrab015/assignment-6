function seeInfo(id) {
  fetch(`https://openapi.programming-hero.com/api/word/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const word = data.data;

      const synonyms = word.synonyms && word.synonyms.length > 0
        ? word.synonyms.join(", ") : "পাওয়া যায়নি";

      Swal.fire({
        icon: "info",
        title: word.word,
        html: `
          <p><b>Meaning:</b> ${word.meaning ?? "পাওয়া যায়নি"}</p>
          <p><b>Example:</b> ${word.sentence ?? "পাওয়া যায়নি"}</p>
          <p><b>সমার্থক শব্দ:</b> ${synonyms}</p>
        `,
        confirmButtonText: "Complete Learning",
      });
    });
}