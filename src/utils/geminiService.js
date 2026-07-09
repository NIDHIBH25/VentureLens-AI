// Optional live integration with Google's Gemini API.

export async function generateGeminiReport(inputs, apiKey) {
  const {
    name = "My Startup",
    description = "",
    category = "General",
    location = "Global",
    budget = "Medium",
    customers = "General Customers",
    type = "Online",
    experience = "Intermediate",
    goals = "Sustainable Growth"
  } = inputs;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const prompt = `You are a professional startup consultant and venture capitalist. 
Analyze the following business idea and return a detailed JSON object that EXACTLY matches the JSON structure specified below.

Input Business Details:
- Name: "${name}"
- Industry Category: "${category}"
- Business Description: "${description}"
- Target Location: "${location}"
- Budget Range: "${budget}"
- Expected Customers: "${customers}"
- Business Type: "${type}"
- Experience Level: "${experience}"
- Business Goals: "${goals}"

Your response MUST be a single, valid JSON object with NO markdown formatting, NO \`\`\`json blocks, and NO surrounding text. It must match this JSON structure:
{
  "name": "string",
  "category": "string",
  "location": "string",
  "feasibilityScore": number (between 0 and 100),
  "feasibilityExplanation": "string (detailed explanation)",
  "problemStatement": "string (what core problem does this solve)",
  "targetAudience": {
    "personas": [
      {
        "role": "string",
        "age": "string",
        "income": "string",
        "painPoints": "string",
        "needs": "string"
      },
      {
        "role": "string",
        "age": "string",
        "income": "string",
        "painPoints": "string",
        "needs": "string"
      }
    ],
    "generalAgeGroup": "string",
    "generalIncomeLevel": "string",
    "generalPainPoints": "string",
    "generalNeeds": "string"
  },
  "swot": {
    "strengths": ["string", "string", "string", "string"],
    "weaknesses": ["string", "string", "string", "string"],
    "opportunities": ["string", "string", "string", "string"],
    "threats": ["string", "string", "string", "string"]
  },
  "marketPotential": {
    "demandLevel": "string (Low/Medium/High)",
    "growthPotential": "string",
    "trends": ["string", "string", "string"]
  },
  "competitorAnalysis": {
    "list": [
      {
        "name": "string",
        "strength": "string",
        "differentiation": "string"
      },
      {
        "name": "string",
        "strength": "string",
        "differentiation": "string"
      }
    ],
    "differentiationSummary": "string"
  },
  "revenueModel": {
    "models": [
      { "type": "string", "feasibility": "string", "details": "string" },
      { "type": "string", "feasibility": "string", "details": "string" },
      { "type": "string", "feasibility": "string", "details": "string" },
      { "type": "string", "feasibility": "string", "details": "string" }
    ],
    "recommendation": "string"
  },
  "investment": {
    "lowBudget": "string (e.g. $5,000)",
    "mediumBudget": "string (e.g. $25,000)",
    "highBudget": "string (e.g. $75,000)",
    "expensesBreakdown": [
      { "name": "string", "value": number (percentage 0-100), "color": "string (hex code)" },
      { "name": "string", "value": number (percentage 0-100), "color": "string (hex code)" },
      { "name": "string", "value": number (percentage 0-100), "color": "string (hex code)" },
      { "name": "string", "value": number (percentage 0-100), "color": "string (hex code)" }
    ],
    "expensesExplanation": "string"
  },
  "riskAssessment": {
    "financial": { "level": "Low/Medium/High", "desc": "string" },
    "market": { "level": "Low/Medium/High", "desc": "string" },
    "operational": { "level": "Low/Medium/High", "desc": "string" },
    "competition": { "level": "Low/Medium/High", "desc": "string" }
  },
  "recommendations": ["string", "string", "string", "string"],
  "roadmap": [
    { "month": "Month 1", "title": "string", "tasks": ["string", "string"] },
    { "month": "Month 2", "title": "string", "tasks": ["string", "string"] },
    { "month": "Month 3", "title": "string", "tasks": ["string", "string"] },
    { "month": "Month 6", "title": "string", "tasks": ["string", "string"] }
  ],
  "pitch": "string (investor pitch paragraph)",
  "extraFeatures": {
    "nameSuggestions": ["string", "string", "string", "string", "string"],
    "slogans": ["string", "string", "string", "string", "string"],
    "marketingIdeas": [
      { "title": "string", "desc": "string" },
      { "title": "string", "desc": "string" },
      { "title": "string", "desc": "string" }
    ],
    "socialMediaStrategy": {
      "instagramTikTok": "string",
      "linkedInTwitter": "string",
      "postingFrequency": "string"
    },
    "customerAcquisition": ["string", "string", "string"],
    "growthSuggestions": ["string", "string", "string"],
    "usp": "string"
  }
}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json"
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  const jsonText = data.candidates[0].content.parts[0].text;
  return JSON.parse(jsonText.trim());
}
