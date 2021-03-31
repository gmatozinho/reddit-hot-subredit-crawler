const request = require("supertest");
const { app } = require("../app");
const { post } = require("../controllers");
jest.mock("../controllers");

describe("Get By Date Endpoint", () => {
  it("should get posts with sucess", async () => {
    const mock_response = [
      {
        id: 23,
        title: '"Artificial Imagination" - AI generated',
        author_name: "glenniszen",
        create_date: "2021-03-28T15:05:37.000Z",
        ups: 232,
        comments: 42,
        createdAt: "2021-03-31T03:35:01.441Z",
        updatedAt: "2021-03-31T03:35:01.441Z",
      },
    ];
    post.read.mockResolvedValue(mock_response);

    const query = {
      init_date: "2016-03-27",
      end_date: "2021-03-31",
      orderBy: "ups",
    };

    const res = await request(app).get("/post/byDate").query(query);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(expect.arrayContaining(mock_response));
  });

  it("shouldn't  get posts with invalid query", async () => {
    post.read.mockImplementation(() => {
      throw new Error("Test error");
    });
    const query = {};

    const res = await request(app).get("/post/byDate").query(query);
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message");
  });
});

describe("Get User Endpoint", () => {
  it("should get users with sucess", async () => {
    const mock_response = [
      {
        author_name: "glenniszen",
        ups: 232,
        comments: 42,
      },
    ];
    post.read.mockResolvedValue(mock_response);

    const query = {
      orderBy: "ups",
    };

    const res = await request(app).get("/post/user").query(query);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(expect.arrayContaining(mock_response));
  });

  it("shouldn't  get users with invalid query", async () => {
    post.read.mockImplementation(() => {
      throw new Error("Test error");
    });
    const query = {};

    const res = await request(app).get("/post/user").query(query);
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message");
  });
});
