// Dynamic consulting engine that generates detailed business validation reports.

export function generateMockReport(inputs) {
  const {
    name = "My Startup",
    description = "",
    category = "General",
    location = "Global",
    budget = "Medium ($10k - $50k)",
    customers = "General Consumers",
    type = "Online",
    experience = "Intermediate",
    goals = "Sustainable Growth"
  } = inputs;

  // Clean description and extract some keywords
  const descLower = description.toLowerCase();
  
  // Calculate a realistic feasibility score based on experience, budget, and business type
  let baseScore = 65;
  if (experience === "Experienced") baseScore += 10;
  if (experience === "Beginner") baseScore -= 5;
  if (type === "Online") baseScore += 8; // Online is easier to start
  if (type === "Offline" && (budget.includes("Under") || budget.includes("Low"))) baseScore -= 10; // Offline needs more budget
  if (description.length > 50) baseScore += 5; // Detailed planning increases feasibility

  // Clamp score between 45 and 95
  const score = Math.max(45, Math.min(95, baseScore));
  
  // Get score description
  let scoreExplanation = "";
  if (score >= 85) {
    scoreExplanation = `Excellent feasibility. The combination of an ${type.toLowerCase()} presence, your ${experience.toLowerCase()} background, and a targeted customer segment makes this highly viable. Barriers to entry are moderate, and your business goals align well with the selected budget.`;
  } else if (score >= 70) {
    scoreExplanation = `Good feasibility. This is a solid business concept with a clear path to profitability. Starting as a ${type.toLowerCase()} model in the ${category} sector is a strong move. To optimize execution, focus on managing initial capital tightly and refining your marketing strategy to lower customer acquisition costs.`;
  } else {
    scoreExplanation = `Moderate feasibility. While the core idea has merit, there are operational challenges to address. Your budget may be constrained for an ${type.toLowerCase()}-heavy or capital-intensive ${category} model. We recommend starting with a Minimum Viable Product (MVP) to test market demand before committing significant resources.`;
  }

  // Segment budgets
  let lowEst = "$5,000";
  let medEst = "$25,000";
  let highEst = "$75,000";
  let expenses = [];
  
  if (budget.toLowerCase().includes("under $10k") || budget.toLowerCase().includes("low")) {
    lowEst = "$1,500";
    medEst = "$5,000";
    highEst = "$10,000";
    expenses = [
      { name: "Platform & Software License", value: 30, color: "#6366f1" },
      { name: "Initial Inventory / Assets", value: 25, color: "#a855f7" },
      { name: "Marketing & Launch Ads", value: 25, color: "#3b82f6" },
      { name: "Legal & Registration", value: 20, color: "#10b981" }
    ];
  } else if (budget.toLowerCase().includes("above $100k") || budget.toLowerCase().includes("high")) {
    lowEst = "$50,000";
    medEst = "$120,000";
    highEst = "$250,000";
    expenses = [
      { name: "Operations & Office / Retail Lease", value: 35, color: "#6366f1" },
      { name: "Staffing & Hiring", value: 25, color: "#a855f7" },
      { name: "Inventory & Equipment", value: 20, color: "#3b82f6" },
      { name: "Marketing & Customer Acquisition", value: 20, color: "#10b981" }
    ];
  } else {
    // Medium
    lowEst = "$10,000";
    medEst = "$30,000";
    highEst = "$60,000";
    expenses = [
      { name: "Product Development / Tech Stack", value: 35, color: "#6366f1" },
      { name: "Marketing & Content Creation", value: 25, color: "#a855f7" },
      { name: "Working Capital & Operations", value: 20, color: "#3b82f6" },
      { name: "Legal, Permits & Admin", value: 20, color: "#10b981" }
    ];
  }

  // Generate industry-specific competitor suggestions
  let competitors = [];
  if (category.toLowerCase().includes("tech") || category.toLowerCase().includes("ai") || category.toLowerCase().includes("software")) {
    competitors = [
      { name: "Established SaaS Corporations", strength: "High capital, broad feature set, trusted brand status.", differentiation: "Focus on a hyper-specific niche, offer a vastly simpler UX, and provide superior localized customer support." },
      { name: "Open-source projects", strength: "Free to use, highly customizable, large technical communities.", differentiation: "Provide a fully hosted, zero-setup premium experience with expert consultation included." }
    ];
  } else if (category.toLowerCase().includes("food") || category.toLowerCase().includes("bakery") || category.toLowerCase().includes("restaurant")) {
    competitors = [
      { name: "Large Franchise Chains", strength: "Consistency, cheap pricing due to economies of scale, mass marketing.", differentiation: "Offer artisanal, organic, locally sourced ingredients and custom hyper-personalized packaging/catering options." },
      { name: "Local neighborhood shops", strength: "Strong neighborhood presence, regular foot traffic, loyal local base.", differentiation: "Use a modern hybrid model (easy online preorder, subscription boxes, and social-first community branding)." }
    ];
  } else if (category.toLowerCase().includes("health") || category.toLowerCase().includes("skincare") || category.toLowerCase().includes("beauty")) {
    competitors = [
      { name: "Global Drugstore Brands", strength: "Massive retail distribution, low price points, enormous ad budgets.", differentiation: "Zero-toxin, cruelty-free, fully transparent ingredient sourcing, and custom skin/wellness test validation." },
      { name: "Direct-to-Consumer (DTC) Indie Brands", strength: "Vibrant social media followings, aesthetic packaging.", differentiation: "Hyper-personalized formula options or custom subscription services focusing on specific dermatological needs." }
    ];
  } else {
    competitors = [
      { name: "Traditional Market Leaders", strength: "Long history, massive capital, existing customer loyalty.", differentiation: "Leverage AI-driven processes, direct-to-consumer digital channels, and modern sustainability-focused supply chains." },
      { name: "Low-cost Alternative Importers", strength: "Very low prices, mass production capabilities.", differentiation: "Focus on build quality, high-touch support, custom design options, and authentic brand values." }
    ];
  }

  // Recommended revenue model calculation
  let revenueRec = "";
  if (type === "Online" && (category.toLowerCase().includes("software") || category.toLowerCase().includes("tech") || category.toLowerCase().includes("service"))) {
    revenueRec = "Subscription Model (SaaS) paired with Premium Add-on Services is recommended to secure recurring revenue.";
  } else if (type === "Online") {
    revenueRec = "Direct Product Sales via E-commerce, combined with selective Affiliate partnerships and bundling.";
  } else if (type === "Offline" && (category.toLowerCase().includes("food") || category.toLowerCase().includes("retail"))) {
    revenueRec = "Direct retail sales / Premium Services, supplemented by a local Subscription Box delivery program.";
  } else {
    revenueRec = "Hybrid Model: Direct Service/Product fees for transactional revenue, combined with a retainer or Subscription Model for stability.";
  }

  return {
    name,
    category,
    location,
    // 1. Feasibility Score
    feasibilityScore: score,
    feasibilityExplanation: scoreExplanation,
    
    // 2. Problem Statement
    problemStatement: `Currently, ${customers} experience significant pain points in ${location}. Specifically, they face friction, high costs, or lack of high-quality access when trying to address issues related to: "${description.substring(0, 100)}...". The existing market solutions are either too generalized, outdated, or hard to navigate, leaving a gap for a dedicated, optimized solution.`,

    // 3. Target Audience Analysis
    targetAudience: {
      personas: [
        {
          role: `The Busy Professional (${customers.split(" ")[0]} focus)`,
          age: "25 - 40 years old",
          income: "Moderate to High ($50k - $120k)",
          painPoints: "Time constraints, difficulty finding trusted custom solutions, lack of guidance.",
          needs: "High-quality, convenient, and reliable results that integrate easily into their busy schedules."
        },
        {
          role: `The Conscious Consumer / Enthusiast`,
          age: "18 - 34 years old",
          income: "Low to Moderate ($25k - $60k)",
          painPoints: "Skeptical of mass-market products, looking for authentic value, wants clear sustainability or tech-savviness.",
          needs: "Transparency, curated options, personalization, and modern digital interfaces."
        }
      ],
      generalAgeGroup: "18 - 45 (Primary focus)",
      generalIncomeLevel: budget.includes("High") ? "High Income ($90k+)" : "Moderate Income ($35k - $85k)",
      generalPainPoints: `Lack of personalization, high entry costs, poor customer service in existing ${category} platforms, and general frustration with generic options.`,
      generalNeeds: "Speed, digital convenience, cost transparency, and highly reliable outcomes."
    },

    // 4. SWOT Analysis
    swot: {
      strengths: [
        `Highly specialized focus on "${name}" matching specific customer needs`,
        `Low operational overhead model compared to traditional competitors`,
        `Agile adaptation to feedback due to modern tech stack and workflows`,
        `Proprietary branding that highlights authenticity and sustainability`
      ],
      weaknesses: [
        "Limited initial brand recognition and marketing capital",
        "High dependence on targeted digital channel advertising",
        "Founder constraint: managing product, operations, and support simultaneously",
        "Lack of historical sales data to optimize pricing metrics"
      ],
      opportunities: [
        `Rapidly growing interest in ${category} within the ${location} region`,
        "Strategic partnerships with micro-influencers and industry blogs",
        "Expansion into B2B packages or corporate gifting/memberships",
        "Leveraging generative AI tools to scale content marketing rapidly"
      ],
      threats: [
        "Rapid imitation by established competitors with larger budgets",
        "Fluctuating customer acquisition costs on major ad platforms",
        "Changing local economic regulations or platform policies",
        "Economic downturns reducing discretionary spending on premium products"
      ]
    },

    // 5. Market Potential Analysis
    marketPotential: {
      demandLevel: descLower.includes("health") || descLower.includes("skincare") || descLower.includes("ai") || descLower.includes("online") ? "High (Rapidly growing customer interest)" : "Medium (Stable, consistent demand with established niches)",
      growthPotential: "Strong double-digit annual growth projected within this category over the next 5 years, driven by digital transformation and shift in customer spending habits.",
      trends: [
        "Increased consumer expectation for hyper-personalization",
        "Rise in mobile-first and chat-based transactions",
        "Strong preference for brands showing green credentials or tech sophistication"
      ]
    },

    // 6. Competitor Analysis
    competitorAnalysis: {
      list: competitors,
      differentiationSummary: `Unlike standard options, ${name} will focus on absolute transparency and direct relationship-building. By highlighting customized experiences, leveraging efficient digital distribution, and avoiding retail middlemen markup, we provide twice the quality at a competitive price.`
    },

    // 7. Revenue Model Suggestions
    revenueModel: {
      models: [
        { type: "Subscription Model", feasibility: "High", details: "Recurring monthly memberships or retainer plans for service/products." },
        { type: "Product Sales", feasibility: "High", details: "Direct-to-consumer transactions through digital checkout store." },
        { type: "Premium Services", feasibility: "Medium", details: "One-on-one consultations, expedited processing, or premium custom builds." },
        { type: "Marketplace / Commission", feasibility: "Low", details: "Taking a percentage fee for matching suppliers with buyers (if platform grows)." }
      ],
      recommendation: revenueRec
    },

    // 8. Investment Estimation
    investment: {
      lowBudget: lowEst,
      mediumBudget: medEst,
      highBudget: highEst,
      expensesBreakdown: expenses,
      expensesExplanation: `Major upfront costs will be allocated to product development and setting up the ${type.toLowerCase()} infrastructure. Marketing & Ads are kept high because scaling early customer acquisition is vital to prove validation. Legal and admin fees cover basic company setup and trademarking.`
    },

    // 9. Risk Assessment
    riskAssessment: {
      financial: { level: "Medium", desc: "Risk of high customer acquisition costs outpacing customer lifetime value. Mitigation: Focus on organic content and referral loops." },
      market: { level: "Medium", desc: `Risk that the audience in ${location} moves slower than anticipated. Mitigation: Presell concepts using simple landing pages before product builds.` },
      operational: { level: "Low", desc: "Risk of supply chain delays or software downtime. Mitigation: Utilize reliable cloud platforms and multiple component suppliers." },
      competition: { level: "High", desc: "Low barriers to entry could lead to copycats. Mitigation: Double down on brand identity and customer experience, which are harder to replicate." }
    },

    // 10. AI Recommendations
    recommendations: [
      "Launch a pre-sale or landing page waiting list to collect emails and validate exact interest before spending capital on setup.",
      "Implement a referral program offering discounts/incentives to lower early customer acquisition costs.",
      "Incorporate interactive self-tests or AI filters (e.g., matching skin type, budget size, style) to capture visitor data early in the funnel.",
      "Start content creation (TikTok, Instagram Reels, LinkedIn posts) immediately to build organic momentum, showing the 'build in public' process."
    ],

    // 11. Launch Roadmap
    roadmap: [
      { month: "Month 1", title: "Brand & MVP Validation", tasks: ["Finalize brand name, logo, and core landing page.", "Set up email collection list and run $200 in test ads.", "Develop simple prototypes or service scopes."] },
      { month: "Month 2", title: "Community Building & Feedback", tasks: ["Publish 3 short-form videos weekly to build organic interest.", "Conduct customer interviews with early email signups.", "Refine pricing packages and product formulas/features."] },
      { month: "Month 3", title: "Soft Launch", tasks: ["Launch MVP to the email waiting list.", "Fulfill first 50 orders/clients and gather detailed testimonials.", "Optimize delivery/fulfillment operations based on feedback."] },
      { month: "Month 6", title: "Scale Marketing & Partnerships", tasks: ["Launch official public website & marketing campaign.", "Initiate partnerships with 5 micro-influencers.", "Begin exploring second product tier or expansion features."] }
    ],

    // 12. AI Startup Pitch
    pitch: `Every day, thousands of ${customers} in ${location} struggle with the lack of specialized, reliable options for their needs. ${name} is the answer. We are building a modern, high-touch ${type.toLowerCase()} platform in the ${category} space that solves this core issue directly. With our lean operating model and strong brand focus, we can capture a valuable segment of this growing market. We are seeking partners, early customers, and strategic supporters to join us as we launch our MVP and validate our first 100 customers this quarter. Let's build the future of ${category} together.`,

    // --- Extra features generators ---
    extraFeatures: {
      nameSuggestions: generateNames(name, category),
      slogans: generateSlogans(name, category),
      marketingIdeas: [
        { title: "Build in Public Campaign", desc: "Document your startup journey on TikTok/LinkedIn. Share successes, failures, and product formulations. Authentic stories build strong early communities." },
        { title: "Targeted Micro-Influencer Gifting", desc: "Send free samples or early access trials to 15 creators with 5k-20k followers in exchange for honest video reviews." },
        { title: "Interactive Quiz Funnel", desc: "Create a 5-question personality or diagnostic quiz (e.g., 'What is your Skincare Type?') that recommends your product at the end." }
      ],
      socialMediaStrategy: {
        instagramTikTok: "Focus on highly aesthetic reels, product packaging videos, customer transformations, and educational carousel graphics on how to solve pain points.",
        linkedInTwitter: "Share founder stories, market growth statistics, operations insight, and direct business-to-business benefits of your solution.",
        postingFrequency: "3 videos/reels per week, 5 stories/threads weekly, 1 weekly deep-dive newsletter or blog."
      },
      customerAcquisition: [
        "SEO-Optimized comparative blog posts comparing your solution vs traditional alternatives.",
        "A 'Free First Assessment/Trial' that removes all entry friction for skeptical prospects.",
        "Strategic partnerships with complementary local businesses for cross-promotional bundles."
      ],
      growthSuggestions: [
        "Establish an ambassador program rewarding loyal customers with store credit for referrals.",
        "Upsell with a monthly subscription box or VIP retainer to raise average customer lifetime value.",
        "White-label or license your product/process to regional distributors once local validation succeeds."
      ],
      usp: `The only ${category} solution designed specifically for ${customers} that delivers premium personalization and convenience, without the premium price tags or operational friction of traditional options.`
    }
  };
}

// Helpers for names and slogans
function generateNames(base, cat) {
  const suffixes = ["Flow", "Lens", "Craft", "Sync", "Nest", "Vibe", "Loop", "Hub", "Base", "Scale"];
  const prefixes = ["Aura", "Venture", "Nova", "Apex", "Eco", "Pure", "Optima", "Prime", "Next"];
  const list = [];
  
  // Clean base name
  const cleanBase = base.replace(/AI|App|Software|Company|Store/gi, "").trim();
  
  for (let i = 0; i < 3; i++) {
    list.push(`${cleanBase} ${suffixes[i]}`);
    list.push(`${prefixes[i]} ${cleanBase}`);
  }
  return [...new Set(list)].slice(0, 5);
}

function generateSlogans(base, cat) {
  return [
    `Redefining the standard of ${cat}.`,
    `Simpler, faster, and designed for you.`,
    `Your vision. Our passion. Real results.`,
    `The future of ${cat} has arrived.`,
    `Empowering your daily routine with premium care.`
  ];
}
