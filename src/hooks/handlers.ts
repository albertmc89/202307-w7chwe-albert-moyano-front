import { rest } from "msw";
import { apiMockRobots } from "../mocks/robotsMock";

export const handlers = [
  rest.get(`${import.meta.env.VITE_API_ROBOTS_URL}robots`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(apiMockRobots));
  }),
];

export const errorHandlers = [
  rest.get(`${import.meta.env.VITE_API_ROBOTS_URL}robots`, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get any robot"));
  }),
];
