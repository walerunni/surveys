Vue.createApp({
  data() {
    return {
      forms: [
        {
          title: "Form 001",
          questions: ["Question 01", "Question 02", "Question 03"],
        },
        {
          title: "Form 002",
          questions: ["Question 01", "Question 02", "Question 03"],
        },
      ],
      choices: ["Multiple choice", "Checkboxes", "Short answer"],
    };
  },
}).mount("#root");

Vue.createApp({
  data() {
    return {
      choices: ["Multiple choice", "Checkboxes", "Short answer"],
    };
  },
}).mount("#form-root");
