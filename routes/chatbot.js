const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!process.env.API_KEY) {
      return res.status(500).json({ error: 'API_KEY is missing on the server' });
    }

    const openRouterResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`,
        'HTTP-Referer': 'https://visit-la-trinidad.example.com',
        'X-Title': 'Visit La Trinidad'
      },
      body: JSON.stringify({
        model: 'tngtech/deepseek-r1t2-chimera:free', // replace if you have a different model
        messages: [
          { role: 'system', content: "You are a friendly tour guide for La Trinidad, Benguet." },
          { role: 'user', content: message }
        ]
      })
    });

    const data = await openRouterResponse.json();

    if (!openRouterResponse.ok) {
      console.error('OpenRouter API Error:', data);
      if (openRouterResponse.status === 401) {
        return res.status(401).json({ error: 'API key invalid or missing' });
      }
      if (openRouterResponse.status === 429) {
        return res.status(429).json({ error: 'Rate limit reached' });
      }
      const errorMessage = data.error?.message || 'Failed to get response from AI';
      return res.status(openRouterResponse.status).json({ error: errorMessage });
    }

    res.json({ text: data.choices[0].message.content });

  } catch (error) {
    console.error('Error calling OpenRouter:', error);
    res.status(500).json({ error: 'Server error contacting AI' });
  }
});

module.exports = router;
