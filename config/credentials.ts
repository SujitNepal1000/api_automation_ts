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
    baseUrl: "https://ens-fe-stage.yipl.com.np", // Update to your actual API URL
    users: {
      admin: {
        username: "admin@gmail.com",
        password: "Secret@password1234"
      },
      user: {
        username: "sujit.nepal+user1@yipl.com.np",
        password: "Admin@123"
      }
    }
  };
  