

let prompts = [
    "If you could raise yourself, would you do anything different from the people who raised you?",
    "What's your favorite lyric(s) from your favorite song? And why does it connect with you so much?",
    "What is one thing you did well today?",
    "Describe a place that only exists in your imagination.",
    "Write a letter to your younger self. What advice would you give?",
    "Write a letter to your future self. What do you hope to have achieved by then?",
    "If you were transported into the world/setting of your favorite tv show, what do you think would happen to you?",
    "What does your ideal day look like?",
    "Make a list of 10 things you are grateful for. Describe how each one makes you feel.",
    "If you could see them again, what would you say? Would you say anything?",
    "Pick a photograph from your phone or album. Describe the story behind it. Or make up one!",
    "What is something that has been bothering you for a long time, but you haven't been able to talk about it?",
    "What is a recent mistake or failure you experienced, and how did it make you feel?",
    "Write about a time you truly felt loved and cared for, and how that has changed you. If you haven't experienced it yet, write about what that would look like for you.",
    "What is something you're scared to try, but would love to have the courage to?",
    "Write about your favorite place. Why is it so important to you? What memories do you associate with that place? Is there anyone you would like to bring back there?",
    "What emotions are you feeling right now?",
    "What's something new you want to accomplish this month?",
    "Name one thing you're grateful for today.",
    "What are three things you can do today to take of yourself?",
    "What are your deal-breakers when it comes to relationships, both platonic and romantic?",
    "What are your thoughts on getting older? Are you scared or eager to age? Why?",
    "Name at least one person whose life you impacted in a positive way.",
    "What did you eat as a child that you can't stand now as an adult?",
    "Why is it important to be genuine?",
    "How did you meet your first love?",
    "When was the last time you lied and why?",
    "Write about the last time weather scared you.",
    "If the world ends tomorrow, what is the first thing you want to do?",

  ];
  
  function newPrompt() {
    let randomNumber = Math.floor(Math.random() * (prompts.length));
    document.getElementById('journalPrompt').innerHTML = prompts[randomNumber];
  }