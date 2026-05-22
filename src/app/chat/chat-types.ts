export type ChatMessageRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatMessageRole;
  content: string;
  createdAt: number;
};

export type ChatSubmitResult =
  | {
      ok: true;
      message: ChatMessage;
    }
  | {
      ok: false;
      error: string;
    };
