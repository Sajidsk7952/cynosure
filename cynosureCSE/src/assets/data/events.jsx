import heackathon from "../eventsgifs/hackathon.gif";
import quizGif from "../eventsgifs/quiz.gif";
import webgif from '../eventsgifs/webgif.gif';
export const TechnicalEvents = [
  {
    id: "1",
    eventName: "Hackathon",
    gif: heackathon,
    description:
      "Calling all programmers and problem solvers! Our hackathon is the highlight of the fest. Participants will be challenged to develop innovative solutions to real-world problems within a limited timeframe. It's a chance to put your coding skills to the test and create something impactful.",
    rules: [
      "this is an 3 hour long coding competition",
      "Here you will be given with 2 questions and you need to solve them within the desired time",
      "based on the speed and accuracy the winner will be announced",
    ],
    prizeWinner: "10,000",
    prizeRunner: "7,500",
  },
  {
    id: "2",
    eventName: "QuizFusion",
    gif: quizGif,
    description:
      "Are you ready for a thrilling journey from the fundamentals of arithmetic to the depths of computer science and engineering? Introducing 'QuizFusion: From Math to Code', a competition that challenges your knowledge and problem-solving skills across two distinct yet interconnected rounds.",
    rules: [
      "this is an interactive competetion with 2 rounds and a competetion",
      "In the first round, the 'ArithmetiCode Challenge,' participants will tackle a series of arithmetic questions that test their mathematical prowess",
      "The second round, 'CSE Conundrums,' is where the competition truly heats up. In this phase, we dive deep into the world of computer science and engineering. Participants will be challenged with questions related to core CSE subjects,",
      "in the final competetion you will facing with the other round winners and here you will be given with code snippets and need to predict the output",
    ],
    prizeWinner:'2,500',
    prizeRunner: '2,000',
  },
  {
    id:'3',
    eventName:'web crafters',
    gif:webgif,
    description:"Do you have what it takes to craft a stunning, functional webpage from scratch? Welcome to 'WebCrafters,' the ultimate web design competition where participants are handed a set of requirements and data, and their task is to create a webpage that not only meets the specifications but also wows the judges with creativity and functionality.",
    rules:[
        "this is an 2 hour long competetion to showcase your frontend developer skills",
        "you can use any of the frontend framework to complete your desired task",
        "you need to design an website as per the given theme and the required data will be provided",
        "based on the competetors web designing skills the winners are announced",
    ],
    prizeWinner:'2,000',
    prizeRunner:'1,500',
  },
];
