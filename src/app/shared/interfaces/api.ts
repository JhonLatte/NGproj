export interface ErrorResponse {
    documentation: string;
    error: string;
    errorKeys: string[];
    help: string;
    path: string;
    statusCode: number;
    swagger: string;
    timestamp: string;
  }

  export interface RecoveryResponse {
    status: number;
    message: string;
  }