import { ApiRobots, Robot } from "../types";

export const mockRobots: Robot[] = [
  {
    id: "1",
    name: "Chronodroid",
    image:
      "https://img.freepik.com/premium-photo/character-design-little-robot-isolated-background-created-with-generative-ai-technology_67092-2464.jpg",
    speed: 9,
    endurance: 7,
  },
  {
    id: "2",
    name: "QuantaBot",
    image:
      "https://as1.ftcdn.net/v2/jpg/05/65/51/00/1000_F_565510061_UvmZhOGicRUkxNW0v9K2t81XInzJPiPm.jpg",
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
    name: "BlitzBot",
    image:
      "https://png.pngtree.com/thumb_back/fw800/background/20230704/pngtree-white-background-depicts-the-fast-speed-technology-concept-illustrated-by-a-image_3754627.png",
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
        "https://img.freepik.com/premium-photo/character-design-little-robot-isolated-background-created-with-generative-ai-technology_67092-2464.jpg",
      speed: 9,
      endurance: 7,
    },
    {
      _id: "2",
      name: "QuantaBot",
      image:
        "https://as1.ftcdn.net/v2/jpg/05/65/51/00/1000_F_565510061_UvmZhOGicRUkxNW0v9K2t81XInzJPiPm.jpg",
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
      name: "BlitzBot",
      image:
        "https://png.pngtree.com/thumb_back/fw800/background/20230704/pngtree-white-background-depicts-the-fast-speed-technology-concept-illustrated-by-a-image_3754627.png",
      speed: 9,
      endurance: 9,
    },
  ],
};

export const newRobotMock: Robot = {
  id: "15",
  name: "BlitzBot",
  image:
    "https://png.pngtree.com/thumb_back/fw800/background/20230704/pngtree-white-background-depicts-the-fast-speed-technology-concept-illustrated-by-a-image_3754627.png",
  speed: 5,
  endurance: 9,
};

export const newRobotMockApi: Omit<Robot, "id"> = {
  name: "BlitzBot",
  image:
    "https://png.pngtree.com/thumb_back/fw800/background/20230704/pngtree-white-background-depicts-the-fast-speed-technology-concept-illustrated-by-a-image_3754627.png",
  speed: 5,
  endurance: 9,
};
