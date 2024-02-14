import type { Handler, HandlerEvent } from "@netlify/functions";

export async function handler(event: HandlerEvent): Promise<Handler> {
  const body = JSON.parse(event.body)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello, ${body.name}` }),
  };
}
