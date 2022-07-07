const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {
  topic: "JS",
  learningGoals: [
    "Build JS programs",
    "Review previous materials",
    "Have fun",
    "Get a job"
  ],
  category: "Front End Development",
  topicImportance: "high"
};
console.log(learning);
learning["topic"] = "JavaScript";
learning["learningGoals"].splice(1, 1);
console.log(learning["learningGoals"]);

topicElement.innerText = `I’m learning ${learning["topic"]}.`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning["learningGoals"].length}.`;
countElement.classList.remove("hide");
