export interface ErrorResponse {
  error: {
    message: string;
  };
  success: boolean;
  ok: boolean;
  status: string;
  statusText: string;
  message: string;
  url: string;
}
