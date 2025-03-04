// /config/auth.ts
interface UserCredentials {
    username: string;
    password: string;
  }
  
  interface AuthConfig {
    baseUrl: string;
    users: {
      admin: UserCredentials;
      user: UserCredentials;
    };
  }
  
  export const authConfig: AuthConfig = {
    baseUrl: "https://www.example", // Update to your actual API URL your url
    users: {
      admin: {
        username: "admin@gmail.com",
        password: "admin@123"
      },
      user: {
        username: "superadmin@gmail.com",
        password: "Admin@123"
      }
    }
  };
  
