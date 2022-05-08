let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];
console.log(submissions);

function addSubmission(array, newName, newScore, newDate) {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60 ? true : false,
  };
  array.push(newSubmission);
}

addSubmission(submissions, "Tom", 92, "2022-05-08");
console.log(submissions);

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}

// deleteSubmissionByIndex(submissions, 2);
// console.log(submissions);

function deleteSubmissionByName(array, name) {
  const index = array.findIndex(
    (submissionsObject) => submissionsObject.name === name
  );
  array.splice(index, 1);
}
// deleteSubmissionByName(submissions, "Tom");
// console.log(submissions);

function editSubmission(array, index, score) {
  array[index].score = score;
  score >= 60 ? (array[index].passed = true) : (array[index].passed = false);
}

// editSubmission(submissions, 1, 50);
// console.log(submissions);

function findSubmissionByName(array, name) {
  return array.find((x) => x.name === name);
}

console.log(findSubmissionByName(submissions, "Joe"));

function findLowestScore(array) {
  let lowScore = 100;
  array.forEach(function checkLowScore(x) {
    x.score <= lowScore ? (lowScore = x.score) : (lowScore = lowScore);
    console.log(x, lowScore);
  });
  return array.find((y) => (y.score = lowScore));
}
// console.log(findLowestScore(submissions));

function findAverageScore(array) {
  let average = 0;
  for (let x of array) {
    average += x.score;
  }
  return average / array.length;
}
console.log("Average score: " + findAverageScore(submissions));

function filterPassing(array) {
  const newArray = [];
  for (x of array) {
    if (x.passed === true) {
      newArray.push(x);
    }
  }
  return newArray;
}

console.log(filterPassing(submissions));

function filter90AndAbove(array) {
  const newArray = array.filter((z) => z.score >= 90);
  return newArray;
}
console.log(filter90AndAbove(submissions));

//EXTENDED CHALLENGES
function createRange(start, end) {
  const rangeArray = [];
  while (start <= end) {
    rangeArray.push(start);
    start++;
  }
  return rangeArray;
}
console.log(createRange(2, 6));
