// /impl/auth/apiClient.ts
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { baseConfig } from "../../config/baseconfig.js";

class APIClient {
  private client: AxiosInstance;

  constructor(userType: "admin" | "user") {
    const user = baseConfig.authConfig.users[userType];
    this.client = axios.create({
      baseURL: baseConfig.baseURL,
      auth: { username: user.username, password: user.password },
      headers: { "Content-Type": "application/json" }
    });
  }

  public async post<T>(endpoint: string, data: any): Promise<AxiosResponse<T>> {
    return this.client.post<T>(endpoint, data);
  }

  public async get<T>(endpoint: string): Promise<AxiosResponse<T>> {
    return this.client.get<T>(endpoint);
  }

  // Additional methods (put, patch, delete) can be added as needed.
}

export default APIClient;