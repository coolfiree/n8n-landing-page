// pages/api/n8n-proxy.js
/**
 * Next.js API route to proxy requests to n8n webhook
 * This keeps your webhook URL secret on the server side
 */

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Get webhook URL from environment
  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.error("N8N_WEBHOOK_URL environment variable not set");
    res.status(500).json({ error: "Webhook URL not configured" });
    return;
  }

  try {
    // Forward the request to n8n webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    // Get the response
    const contentType = response.headers.get("content-type");
    let data;

    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      // If not JSON, return as text
      data = await response.text();
    }

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Return the response with the same status code
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Error proxying to n8n webhook:", error);
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(500).json({ 
      error: "Failed to connect to webhook",
      message: error.message 
    });
  }
}
