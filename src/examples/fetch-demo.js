async function main() {
  console.log("Fetch initiated!");

  const url = "https://opentdb.com/api.php?amount=10&category=15";

  try {
    const response = await fetch(url);
    console.log(response);
    console.log(`Response ok? ${response.ok}`);
    console.log(`Response status? ${response.status}`);

    //Stop the processing of the response and kick us over to the catch block
    if (!response.ok) {
      throw new Error(
        `Something went wrong, server responded with ${response.status}`
      );
    }

    const json = await response.json();
    const { response_code, results } = json;

    if (response_code === 1) {
      throw new Error("Bad API request - no results!");
    } else if (response_code === 2) {
      throw new Error("Bad API requestion - invalid parameter!");
    }

    //Ta-daaaa~!
    results.forEach((triviaItem, index) => {
      const { question, difficulty, correct_answer } = triviaItem;
      console.log(`
        Question Number: ${index + 1}
        Difficulty: ${difficulty}
        Question: ${question}
        Answer: ${correct_answer}`);
    });

    const main = document.querySelector("main");
    results.forEach((triviaItem) => {
      main.insertAdjacentHTML("beforeend", `<p>${triviaItem.question}</p>`);
    });
  } catch (err) {
    console.log("An error has occurred");
    console.error(err);
  }
}

main();
