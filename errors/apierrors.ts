// /errors/apierrors.ts
export class APIError extends Error {
    public status: number;
    constructor(message: string, status: number) {
      super(message);
      this.status = status;
      this.name = "APIError";
    }
  }