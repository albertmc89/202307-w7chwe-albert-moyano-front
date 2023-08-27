import { rest } from "msw";
import { apiMockRobots, newRobotMockApi } from "../mocks/robotsMock";

export const handlers = [
  rest.get(`${import.meta.env.VITE_API_ROBOTS_URL}robots`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(apiMockRobots));
  }),

  rest.post(
    `${import.meta.env.VITE_API_ROBOTS_URL}robots`,
    (_req, res, ctx) => {
      return res(ctx.status(201), ctx.json(newRobotMockApi));
    },
  ),
];

export const errorHandlers = [
  rest.get(`${import.meta.env.VITE_API_ROBOTS_URL}robots`, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get any robot"));
  }),

  rest.post(
    `${import.meta.env.VITE_API_ROBOTS_URL}robots`,
    (_req, res, ctx) => {
      return res(ctx.status(404, "Couldn't add robot"));
    },
  ),
];
