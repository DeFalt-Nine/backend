const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!process.env.API_KEY) {
        return res.status(500).json({ error: 'API_KEY is not configured on the server.' });
    }

    // Call the OpenRouter API
    const openRouterResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.API_KEY}`,
            'HTTP-Referer': 'https://visit-la-trinidad.example.com', // Optional: Replace with your site URL
            'X-Title': 'Visit La Trinidad', // Optional: Replace with your site name
        },
        body: JSON.stringify({
            model: 'tngtech/deepseek-r1t2-chimera:free',
            messages: [
                {
                    role: 'system',
                    content: "You are a friendly and helpful tour guide for La Trinidad, Benguet in the Philippines. Your knowledge is focused on this specific location. Answer the user's question about visiting the area concisely and in a conversational tone."
                },
                {
                    role: 'user',
                    content: message
                }
            ],
        }),
    });

    const data = await openRouterResponse.json();

    if (!openRouterResponse.ok) {
        console.error('OpenRouter API Error:', data);
        if (openRouterResponse.status === 401) {
            return res.status(401).json({ error: 'API key not found or invalid. Please check the server configuration.' });
        }
        const errorMessage = data.error?.message || 'Failed to get response from AI model';
        return res.status(openRouterResponse.status).json({ error: errorMessage });
    }
    
    const text = data.choices[0].message.content;
    
    res.json({ text });

  } catch (error) {
    console.error('Error calling OpenRouter API:', error);
    res.status(500).json({ error: 'Failed to get response from AI model' });
  }
});

module.exports = router;