// /tests/auth/login_test.ts
import { expect } from "chai";
import { describe, it } from "mocha";
import APIClient from "../../impl/auth/apiclient.js";
import { AuthResponse } from "../../impl/model/authresponse.js";

describe("Login API Authentication tests", () => {
  it("should login successfully and return status 200 with a token", async () => {
    const client = new APIClient("admin");
    const loginEndpoint = "/api/auth/login";
    
    // Make the API call to login
    const response = await client.post<AuthResponse>(loginEndpoint, {
      username: "adminUser",
      password: "Admin@123"
    });
    
    // Validate response is not null and has status 200
    expect(response).to.not.be.null;
    expect(response.status).to.equal(200);
    
    // Validate the response data contains a token and success is true
    expect(response.data).to.have.property("token");
    expect(response.data.success).to.equal(true);
  });
});
