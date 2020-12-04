const request = require("supertest");
const app = require("../server");

describe("Test the root path", () => {
  test("It should answer to GET requests", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("It should return a Hello message", async () => {
    const response = await request(app).get("/");
    expect(response.body.message).toBe("Hello");
  });
});

describe("Test the `Add` API", () => {
  test("No parameters should return a 404", async () => {
    const response = await request(app).get("/add");
    expect(response.statusCode).toBe(404);
  });
  
  test("One parameters should return a 404", async () => {
    const response = await request(app).get("/add/1");
    expect(response.statusCode).toBe(404);
  });
  
  test("Two parameters should return a 200", async () => {
    const response = await request(app).get("/add/1/2");
    expect(response.statusCode).toBe(200);
  });
  
  test("It should add the two paramters", async () => {
    const response = await request(app).get("/add/1/2");
    expect(response.body.result).toBe(3);
  });
});

describe("Test the `Substract` API", () => {
  test("No parameters should return a 404", async () => {
    const response = await request(app).get("/substract");
    expect(response.statusCode).toBe(404);
  });
  
  test("One parameters should return a 404", async () => {
    const response = await request(app).get("/substract/1");
    expect(response.statusCode).toBe(404);
  });
  
  test("Two parameters should return a 200", async () => {
    const response = await request(app).get("/substract/1/2");
    expect(response.statusCode).toBe(200);
  });
  
  test("It should substract the two paramters", async () => {
    const response = await request(app).get("/substract/5/2");
    expect(response.body.result).toBe(3);
  });
});