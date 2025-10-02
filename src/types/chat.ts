export interface Source {
  title: string;
  lastUpdated: string | null;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  creditsUsed?: number;
  sources?: Source[];
  error?: string;
}

export interface ApiSuccessResponse {
  success: true;
  error: null;
  data: {
    message: string;
    creditsUsed: number;
    sources: Source[];
  };
}

export interface ApiErrorResponse {
  success: false;
  error: string;
  data: null;
}

export type ApiResponse = ApiSuccessResponse | ApiErrorResponse;
