import { ApiRobots, Robot } from "../types";

export const mockRobots: Robot[] = [
  {
    id: "1",
    name: "Chronodroid",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Toyota_Robot_at_Toyota_Kaikan.jpg",
    speed: 9,
    endurance: 7,
  },
  {
    id: "2",
    name: "QuantaBot",
    image:
      "https://w7.pngwing.com/pngs/847/520/png-transparent-robot-action-toy-figures-character-action-fiction-robot-electronics-fictional-character-action-film.png",
    speed: 6,
    endurance: 4,
  },
  {
    id: "3",
    name: "ElectraSphere",
    image:
      "https://www.mundoconsumible.com/29067/irobot-roomba-675-wifi-aspiradora.jpg",
    speed: 1,
    endurance: 4,
  },
  {
    id: "4",
    name: "Maximus",
    image:
      "https://www.enter.co/wp-content/uploads/2023/04/pexels-pavel-danilyuk-8294618.jpg",
    speed: 9,
    endurance: 9,
  },
];

export const apiMockRobots: ApiRobots = {
  robots: [
    {
      _id: "1",
      name: "Chronodroid",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/84/Toyota_Robot_at_Toyota_Kaikan.jpg",
      speed: 9,
      endurance: 7,
    },
    {
      _id: "2",
      name: "QuantaBot",
      image:
        "https://w7.pngwing.com/pngs/847/520/png-transparent-robot-action-toy-figures-character-action-fiction-robot-electronics-fictional-character-action-film.png",
      speed: 6,
      endurance: 4,
    },
    {
      _id: "3",
      name: "ElectraSphere",
      image:
        "https://www.mundoconsumible.com/29067/irobot-roomba-675-wifi-aspiradora.jpg",
      speed: 1,
      endurance: 4,
    },
    {
      _id: "4",
      name: "Maximus",
      image:
        "https://www.enter.co/wp-content/uploads/2023/04/pexels-pavel-danilyuk-8294618.jpg",
      speed: 9,
      endurance: 9,
    },
  ],
};
