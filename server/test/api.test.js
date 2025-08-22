const request = require("supertest");
const express = require("express");

const app = require("../index"); // export your express app in index.js

describe("GET /api/products", () => {
  it("returns products list", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("name");
  });
});
