async function main() {
  const url = "https://openlibrary.org/works/OL262758W.json";

  try {
    const response = await fetch(url);
    console.log(response);

    const json = await response.json();

    console.log(json);

    const { title, description } = json;

    console.log(json.title);
    console.log(json.description);

    // console.log(bookItem.title);

    const main = document.querySelector("main");
    main.insertAdjacentHTML("beforeend", `<h1>${json.title}</h1>`);
    main.insertAdjacentHTML("beforeend", `<p>${json.description}<p>`);
  } catch (err) {
    console.log(`A wild error has appeared..!`);
    console.error(err);
  }
}
main();
