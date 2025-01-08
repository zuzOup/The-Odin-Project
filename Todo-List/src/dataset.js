import moment from "moment";

function daysFromNow(days) {
  const today = new Date();
  const newDate = new Date(today);

  newDate.setDate(today.getDate() + days);

  return moment(newDate).format("yyyy-MM-DD");
}

export const dataset = {
  notes: {
    1: "Stretch your neck and shoulders every hour. Breathe deeply—inhale for 4, hold for 4, exhale for 4. Your body deserves care even during busy days!",
    2: "Don’t forget to read at least 10 pages today. Your next adventure awaits between the pages—progress one chapter at a time!",
    3: "Text or call a friend today. A simple 'Hey, thinking of you!' can brighten both your days.",
  },
  1: {
    name: "Work Project",
    tasks: [
      {
        id: "task-100",
        title: "Write project proposal",
        priority: "low",
        date: daysFromNow(-3),
        details: "Outline the project goals, timeline, and deliverables.",
        checked: false,
        projectid: 1,
      },
      {
        id: "task-101",
        title: "Team meeting",
        priority: "medium",
        date: daysFromNow(4),
        details: "Discuss project updates and challenges.",
        checked: true,
        projectid: 1,
      },
      {
        id: "task-102",
        title: "Submit report",
        priority: "high",
        date: daysFromNow(0),
        details: "Complete the financial report for Q1.",
        checked: true,
        projectid: 1,
      },
      {
        id: "task-103",
        title: "Fix UI bugs",
        priority: "low",
        date: daysFromNow(8), // 8 days from today
        details: "Resolve reported issues in the user interface.",
        checked: true,
        projectid: 1,
      },
      {
        id: "task-104",
        title: "Prepare presentation",
        priority: "medium",
        date: daysFromNow(10),
        details: "Create slides for the quarterly review.",
        checked: true,
        projectid: 1,
      },
      {
        id: "task-105",
        title: "Code review",
        priority: "high",
        date: daysFromNow(-1),
        details: "Review pull requests from team members.",
        checked: false,
        projectid: 1,
      },
      {
        id: "task-106",
        title: "Client follow-up",
        priority: "medium",
        date: daysFromNow(5),
        details: "Email clients regarding feedback on the recent delivery.",
        checked: false,
        projectid: 1,
      },
      {
        id: "task-107",
        title: "Update documentation",
        priority: "low",
        date: daysFromNow(12),
        details: "Revise and update the project's technical documentation.",
        checked: true,
        projectid: 1,
      },
      {
        id: "task-108",
        title: "Testing new features",
        priority: "high",
        date: daysFromNow(7),
        details: "Conduct tests for the newly implemented features.",
        checked: true,
        projectid: 1,
      },
      {
        id: "task-109",
        title: "Plan sprint",
        priority: "medium",
        date: daysFromNow(9), // 9 days from today
        details: "Define goals and tasks for the next sprint cycle.",
        checked: false,
        projectid: 1,
      },
    ],
  },
  2: {
    name: "Cleaning",
    tasks: [
      {
        id: "task-200",
        title: "Clean kitchen",
        priority: "medium",
        date: daysFromNow(0),
        details: "Deep clean counters, appliances, and floors.",
        checked: false,
        projectid: 2,
      },
      {
        id: "task-201",
        title: "Organize garage",
        priority: "high",
        date: daysFromNow(2),
        details: "Sort and label boxes, dispose of unwanted items.",
        checked: false,
        projectid: 2,
      },
      {
        id: "task-202",
        title: "Dust living room",
        priority: "low",
        date: daysFromNow(3),
        details: "Dust shelves, furniture, and electronics.",
        checked: false,
        projectid: 2,
      },
    ],
  },
  3: {
    name: "Buying Gifts",
    tasks: [
      {
        id: "task-300",
        title: "Buy birthday gift for mom",
        priority: "high",
        date: daysFromNow(0),
        details: "Find a nice necklace or a personalized item.",
        checked: true,
        projectid: 3,
      },
      {
        id: "task-301",
        title: "Purchase anniversary gift for friends",
        priority: "medium",
        date: daysFromNow(300),
        details: "Consider a gift card or home decor item.",
        checked: true,
        projectid: 3,
      },
      {
        id: "task-302",
        title: "Get Valentine's Day gift for partner",
        priority: "high",
        date: `${moment().format("yyyy")}-02-10`,
        details: "Buy flowers and a thoughtful card.",
        checked: true,
        projectid: 3,
      },
    ],
  },
};
