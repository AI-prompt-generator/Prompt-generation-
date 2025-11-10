// Application Data
const appData = {
  categories: [
    {
      id: 'coding_agent',
      name: 'Coding Agents',
      description: 'Build agents that write, debug, and optimize code',
      icon: '💻',
      templates: [
        {
          name: 'Full-Stack Developer Agent',
          description: 'Build complete web applications with frontend and backend',
          sample: 'You are an expert full-stack developer specializing in React, Node.js, and PostgreSQL. Your goal is to write clean, maintainable, production-ready code. Follow these steps: 1) Analyze the requirements 2) Design the architecture 3) Implement with best practices 4) Test thoroughly. Never deploy untested code.'
        },
        {
          name: 'Code Reviewer Agent',
          description: 'Review code for quality, security, and best practices',
          sample: 'You are a meticulous code reviewer focused on security, performance, and maintainability. Provide constructive feedback with specific examples and suggestions for improvement.'
        },
        {
          name: 'Debugging Assistant',
          description: 'Systematically identify and fix bugs',
          sample: 'You are a debugging expert who systematically analyzes errors, identifies root causes, and proposes clear solutions. Always explain your reasoning step-by-step.'
        }
      ]
    },
    {
      id: 'customer_support',
      name: 'Customer Support Agents',
      description: 'Handle customer inquiries and support',
      icon: '💬',
      templates: [
        {
          name: 'Technical Support Agent',
          description: 'Help customers resolve technical issues',
          sample: 'You are a friendly technical support specialist who explains complex issues in simple terms. Always remain patient and empathetic. Guide users through solutions step-by-step.'
        },
        {
          name: 'Sales Assistant',
          description: 'Guide customers through sales process',
          sample: 'You are a consultative sales assistant who focuses on understanding customer needs first, then recommending appropriate solutions that genuinely solve their problems.'
        }
      ]
    },
    {
      id: 'research_agent',
      name: 'Research Agents',
      description: 'Gather, analyze, and synthesize information',
      icon: '🔍',
      templates: [
        {
          name: 'Data Analyst Agent',
          description: 'Analyze data and generate insights',
          sample: 'You are a data analyst specialized in statistical analysis and data visualization. Present findings clearly with supporting evidence and actionable recommendations.'
        },
        {
          name: 'Market Research Agent',
          description: 'Conduct market analysis and competitive research',
          sample: 'You are a market research analyst who synthesizes information from multiple sources to provide actionable business insights backed by data.'
        }
      ]
    },
    {
      id: 'creative_agent',
      name: 'Creative Agents',
      description: 'Generate creative content and designs',
      icon: '🎨',
      templates: [
        {
          name: 'Content Writer Agent',
          description: 'Create engaging written content',
          sample: 'You are a versatile content writer who adapts tone and style to audience needs while maintaining brand voice consistency. Create compelling, clear content.'
        },
        {
          name: 'UI/UX Designer Agent',
          description: 'Design user interfaces and experiences',
          sample: 'You are a UI/UX designer focused on creating accessible, intuitive interfaces that delight users. Follow design principles and conduct user research.'
        }
      ]
    },
    {
      id: 'task_automation',
      name: 'Task Automation Agents',
      description: 'Automate workflows and processes',
      icon: '⚙️',
      templates: [
        {
          name: 'Workflow Orchestrator',
          description: 'Coordinate complex multi-step processes',
          sample: 'You are a workflow automation specialist who ensures tasks execute in the correct order with proper error handling and status reporting at each step.'
        },
        {
          name: 'Data Processing Agent',
          description: 'Transform and validate data',
          sample: 'You are a data processing agent that validates input, transforms data according to specifications, and produces structured, reliable output.'
        }
      ]
    }
  ],
  bestPractices: [
    {
      principle: 'Clarity Over Complexity',
      description: 'Use simple, direct language. Avoid ambiguous instructions.',
      impact: 'Reduces hallucinations and improves reliability',
      snippet: 'Be clear and specific in all instructions. Use simple language.'
    },
    {
      principle: 'Iterative Agent Loop',
      description: 'Define explicit steps - Analyze → Select Tool → Execute → Wait → Iterate',
      impact: 'Creates predictable, controllable agent behavior',
      snippet: 'Follow this loop: 1) Analyze 2) Select tool 3) Execute 4) Wait 5) Iterate'
    },
    {
      principle: 'One Tool Per Turn',
      description: 'Limit agents to using one tool per interaction cycle',
      impact: 'Prevents cascading errors and improves debugging',
      snippet: 'Choose ONLY one tool call per iteration. Wait for the result before proceeding.'
    },
    {
      principle: 'Context Engineering',
      description: 'Provide complete context - system state, tool outputs, history',
      impact: 'Enables better decision-making and coherent behavior',
      snippet: 'Always include relevant context: current state, recent actions, and available resources.'
    },
    {
      principle: 'Specificity Wins',
      description: 'Be extremely detailed about expected outcomes and formats',
      impact: 'Dramatically improves output quality and consistency',
      snippet: 'Be specific about expected outputs, formats, and quality standards.'
    },
    {
      principle: 'Test With Edge Cases',
      description: 'Build evaluation datasets with success, edge, and failure scenarios',
      impact: 'Ensures robust performance in production',
      snippet: 'Consider edge cases: empty inputs, malformed data, timeouts, and errors.'
    }
  ],
  techniques: [
    {
      name: 'Chain-of-Thought',
      description: 'Encourage step-by-step reasoning before final output',
      useCase: 'Complex problem-solving, multi-step tasks',
      snippet: 'Think through this step-by-step:\n1. First, identify the problem\n2. Consider possible solutions\n3. Select the best approach'
    },
    {
      name: 'ReAct (Reason + Act)',
      description: 'Combine reasoning, action, and observation',
      useCase: 'Tool-using agents, dynamic environments',
      snippet: 'Use this pattern:\nThought: [your reasoning]\nAction: [tool to use]\nObservation: [result]\nThought: [next step]'
    },
    {
      name: 'Few-Shot Learning',
      description: 'Provide 1-5 examples of input/output pairs',
      useCase: 'Formatting, style consistency',
      snippet: "Example 1:\nInput: Create button\nOutput: <button>Click me</button>\n\nExample 2:\nInput: Create input\nOutput: <input type='text' />"
    },
    {
      name: 'Role Prompting',
      description: 'Assign specific expert identity',
      useCase: 'All agents - establishes expertise',
      snippet: 'You are a senior expert with 15 years of experience in [domain].'
    },
    {
      name: 'Structured Output',
      description: 'Define exact JSON schema or format',
      useCase: 'API integration, data processing',
      snippet: 'Always respond with:\n{\n  "status": "success|error",\n  "data": {},\n  "message": ""\n}'
    }
  ],
  examples: [
    {
      name: 'Cline',
      description: 'Autonomous coding agent with tool use (formerly Claude Dev)',
      features: [
        'Iterative step-by-step confirmation',
        'Plan mode vs Act mode',
        'Comprehensive tool definitions'
      ],
      prompt: 'You are Cline, an autonomous coding assistant. You operate in two modes: PLAN and ACT. In PLAN mode, discuss approach and get approval. In ACT mode, execute changes one tool at a time. Always wait for confirmation after each action. Never make multiple changes without user approval.'
    },
    {
      name: 'Vercel v0',
      description: 'UI generation agent for React/Next.js',
      features: [
        'Clear role and specialization',
        'Design system adherence',
        'Code generation standards'
      ],
      prompt: "You are v0, Vercel's AI-powered React component generator. You specialize in creating production-ready, accessible React components using Next.js, Tailwind CSS, and modern best practices. Always generate semantic HTML with proper ARIA labels and responsive design."
    },
    {
      name: 'Bolt.new',
      description: 'Full-stack web app builder',
      features: [
        'Holistic planning approach',
        'Modular action sequencing',
        'Safety and context awareness'
      ],
      prompt: 'You are Bolt, a full-stack web application builder. Before coding, create a comprehensive plan considering all files, dependencies, and architecture. Break solutions into modular, sequential actions. Always prioritize safety and validate user input before execution.'
    },
    {
      name: 'Manus',
      description: 'General purpose agent with explicit loop',
      features: [
        'Defined agent loop structure',
        'Modular prompt architecture',
        'Tool selection strategy'
      ],
      prompt: 'You operate in an agent loop:\n1. Analyze Events: Review available information\n2. Select Tools: Choose ONE tool for this iteration\n3. Wait for Execution: Pause until results arrive\n4. Iterate: Repeat until task complete\n5. Submit Results: Provide final output\n6. Enter Standby: Wait for next instruction'
    }
  ]
};

// Application State
let appState = {
  selectedCategory: null,
  selectedTemplate: null,
  components: {
    rolePersona: '',
    goalObjective: '',
    instructions: '',
    constraints: '',
    toolDefinitions: { enabled: false, content: '' },
    contextManagement: { enabled: false, content: '' },
    outputFormat: { enabled: false, content: '' },
    examples: { enabled: false, content: '' },
    reasoningStyle: { enabled: false, content: '' },
    errorHandling: { enabled: false, content: '' }
  },
  addedBestPractices: [],
  addedTechniques: []
};

// View Management
function showView(viewName) {
  const views = document.querySelectorAll('.view');
  views.forEach(view => view.classList.remove('active'));
  
  const targetView = document.getElementById(`${viewName}-view`);
  if (targetView) {
    targetView.classList.add('active');
  }
  
  // Initialize view-specific content
  if (viewName === 'categories') {
    renderCategories();
  } else if (viewName === 'examples') {
    renderExamples();
  } else if (viewName === 'guide') {
    showGuideTab('getting-started');
  }
}

// Category Management
function renderCategories() {
  const grid = document.getElementById('categoryGrid');
  grid.innerHTML = appData.categories.map(cat => `
    <div class="category-card" onclick="selectCategory('${cat.id}')">
      <div class="category-icon">${cat.icon}</div>
      <h3>${cat.name}</h3>
      <p>${cat.description}</p>
      <button class="btn btn-primary">Explore Templates</button>
    </div>
  `).join('');
}

function selectCategory(categoryId) {
  const category = appData.categories.find(c => c.id === categoryId);
  if (!category) return;
  
  appState.selectedCategory = category;
  document.getElementById('currentCategory').textContent = category.name;
  document.getElementById('templateCategoryTitle').textContent = category.name;
  document.getElementById('templateCategoryDesc').textContent = category.description;
  
  renderTemplates(category);
  showView('templates');
}

function renderTemplates(category) {
  const list = document.getElementById('templateList');
  list.innerHTML = category.templates.map((template, idx) => `
    <div class="template-card">
      <h4>${template.name}</h4>
      <p>${template.description}</p>
      <button class="btn btn-primary" onclick="useTemplate(${idx})">Use This Template</button>
    </div>
  `).join('');
}

function useTemplate(templateIdx) {
  if (!appState.selectedCategory) return;
  
  const template = appState.selectedCategory.templates[templateIdx];
  appState.selectedTemplate = template;
  
  // Pre-fill with template content
  document.getElementById('rolePersona').value = template.sample;
  appState.components.rolePersona = template.sample;
  
  // Show template info
  const templateInfo = document.getElementById('templateInfo');
  templateInfo.style.display = 'block';
  templateInfo.innerHTML = `<strong>Using Template:</strong> ${template.name}`;
  
  showView('builder');
  updatePreview();
}

function buildFromScratch() {
  appState.selectedTemplate = null;
  document.getElementById('templateInfo').style.display = 'none';
  showView('builder');
}

// Builder Management
function toggleAdvanced(componentName) {
  const checkbox = document.getElementById(`enable${componentName.charAt(0).toUpperCase() + componentName.slice(1)}`);
  const content = document.getElementById(`${componentName}-content`);
  
  if (checkbox.checked) {
    content.classList.add('visible');
    appState.components[componentName].enabled = true;
  } else {
    content.classList.remove('visible');
    appState.components[componentName].enabled = false;
    appState.components[componentName].content = '';
    document.getElementById(componentName).value = '';
  }
  
  updatePreview();
}

// Set up input listeners
function setupInputListeners() {
  const essentialFields = ['rolePersona', 'goalObjective', 'instructions', 'constraints'];
  const advancedFields = ['toolDefinitions', 'contextManagement', 'outputFormat', 'examples', 'reasoningStyle', 'errorHandling'];
  
  essentialFields.forEach(field => {
    const element = document.getElementById(field);
    if (element) {
      element.addEventListener('input', () => {
        appState.components[field] = element.value;
        updatePreview();
      });
    }
  });
  
  advancedFields.forEach(field => {
    const element = document.getElementById(field);
    if (element) {
      element.addEventListener('input', () => {
        appState.components[field].content = element.value;
        updatePreview();
      });
    }
  });
}

// Preview Management
function updatePreview() {
  let prompt = '';
  
  if (appState.components.rolePersona) {
    prompt += `# ROLE & PERSONA\n${appState.components.rolePersona}\n\n`;
  }
  
  if (appState.components.goalObjective) {
    prompt += `# GOAL & OBJECTIVE\n${appState.components.goalObjective}\n\n`;
  }
  
  if (appState.components.instructions) {
    prompt += `# INSTRUCTIONS\n${appState.components.instructions}\n\n`;
  }
  
  if (appState.components.constraints) {
    prompt += `# CONSTRAINTS & GUARDRAILS\n${appState.components.constraints}\n\n`;
  }
  
  // Advanced components
  if (appState.components.toolDefinitions.enabled && appState.components.toolDefinitions.content) {
    prompt += `# TOOL DEFINITIONS\n${appState.components.toolDefinitions.content}\n\n`;
  }
  
  if (appState.components.contextManagement.enabled && appState.components.contextManagement.content) {
    prompt += `# CONTEXT MANAGEMENT\n${appState.components.contextManagement.content}\n\n`;
  }
  
  if (appState.components.outputFormat.enabled && appState.components.outputFormat.content) {
    prompt += `# OUTPUT FORMAT\n${appState.components.outputFormat.content}\n\n`;
  }
  
  if (appState.components.examples.enabled && appState.components.examples.content) {
    prompt += `# EXAMPLES\n${appState.components.examples.content}\n\n`;
  }
  
  if (appState.components.reasoningStyle.enabled && appState.components.reasoningStyle.content) {
    prompt += `# REASONING STYLE\n${appState.components.reasoningStyle.content}\n\n`;
  }
  
  if (appState.components.errorHandling.enabled && appState.components.errorHandling.content) {
    prompt += `# ERROR HANDLING\n${appState.components.errorHandling.content}\n\n`;
  }
  
  // Display preview
  const previewBox = document.getElementById('previewBox');
  if (prompt.trim()) {
    previewBox.textContent = prompt.trim();
  } else {
    previewBox.textContent = 'Your prompt will appear here as you fill in the components...';
  }
  
  // Update stats
  const words = prompt.trim() ? prompt.trim().split(/\s+/).length : 0;
  const chars = prompt.length;
  document.getElementById('wordCount').textContent = `${words} words`;
  document.getElementById('charCount').textContent = `${chars} characters`;
  
  // Update quality score
  updateQualityScore();
}

function updateQualityScore() {
  let score = 0;
  
  // Essential components (25% each)
  if (appState.components.rolePersona) score += 25;
  if (appState.components.goalObjective) score += 25;
  if (appState.components.instructions) score += 25;
  if (appState.components.constraints) score += 25;
  
  // Bonus for advanced components (5% each, max 20%)
  let advancedBonus = 0;
  if (appState.components.toolDefinitions.enabled && appState.components.toolDefinitions.content) advancedBonus += 5;
  if (appState.components.contextManagement.enabled && appState.components.contextManagement.content) advancedBonus += 5;
  if (appState.components.outputFormat.enabled && appState.components.outputFormat.content) advancedBonus += 5;
  if (appState.components.examples.enabled && appState.components.examples.content) advancedBonus += 5;
  if (appState.components.reasoningStyle.enabled && appState.components.reasoningStyle.content) advancedBonus += 3;
  if (appState.components.errorHandling.enabled && appState.components.errorHandling.content) advancedBonus += 3;
  
  score = Math.min(100, score + Math.min(20, advancedBonus));
  
  const badge = document.getElementById('qualityBadge');
  badge.className = 'quality-badge';
  
  if (score >= 91) {
    badge.classList.add('quality-excellent');
    badge.textContent = `${score}% - Excellent`;
  } else if (score >= 76) {
    badge.classList.add('quality-solid');
    badge.textContent = `${score}% - Solid`;
  } else if (score >= 51) {
    badge.classList.add('quality-good');
    badge.textContent = `${score}% - Good Start`;
  } else {
    badge.classList.add('quality-needs');
    badge.textContent = `${score}% - Needs Work`;
  }
}

// Best Practices Modal
function openBestPracticesModal() {
  const modal = document.getElementById('bestPracticesModal');
  const list = document.getElementById('bestPracticesList');
  
  list.innerHTML = appData.bestPractices.map((practice, idx) => `
    <div class="best-practice-item">
      <h4>${practice.principle}</h4>
      <p>${practice.description}</p>
      <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--space-12);"><strong>Impact:</strong> ${practice.impact}</p>
      <button class="btn btn-primary btn-sm" onclick="addBestPractice(${idx})">Add to Prompt</button>
    </div>
  `).join('');
  
  modal.classList.add('active');
}

function closeBestPracticesModal() {
  document.getElementById('bestPracticesModal').classList.remove('active');
}

function addBestPractice(idx) {
  const practice = appData.bestPractices[idx];
  const currentInstructions = document.getElementById('instructions').value;
  const newContent = currentInstructions ? 
    `${currentInstructions}\n\n${practice.snippet}` : 
    practice.snippet;
  
  document.getElementById('instructions').value = newContent;
  appState.components.instructions = newContent;
  
  updatePreview();
  showToast(`Added: ${practice.principle}`);
  closeBestPracticesModal();
}

// Techniques Modal
function openTechniquesModal() {
  const modal = document.getElementById('techniquesModal');
  const list = document.getElementById('techniquesList');
  
  list.innerHTML = appData.techniques.map((technique, idx) => `
    <div class="best-practice-item">
      <h4>${technique.name}</h4>
      <p>${technique.description}</p>
      <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--space-12);"><strong>Use Case:</strong> ${technique.useCase}</p>
      <button class="btn btn-primary btn-sm" onclick="addTechnique(${idx})">Insert Technique</button>
    </div>
  `).join('');
  
  modal.classList.add('active');
}

function closeTechniquesModal() {
  document.getElementById('techniquesModal').classList.remove('active');
}

function addTechnique(idx) {
  const technique = appData.techniques[idx];
  
  // Enable reasoning style if not already
  if (!appState.components.reasoningStyle.enabled) {
    document.getElementById('enableReasoningStyle').checked = true;
    toggleAdvanced('reasoningStyle');
  }
  
  const currentContent = document.getElementById('reasoningStyle').value;
  const newContent = currentContent ? 
    `${currentContent}\n\n${technique.snippet}` : 
    technique.snippet;
  
  document.getElementById('reasoningStyle').value = newContent;
  appState.components.reasoningStyle.content = newContent;
  
  updatePreview();
  showToast(`Added: ${technique.name}`);
  closeTechniquesModal();
}

// Examples Management
function renderExamples() {
  const grid = document.getElementById('examplesGrid');
  grid.innerHTML = appData.examples.map((example, idx) => `
    <div class="example-card">
      <h3>${example.name}</h3>
      <p>${example.description}</p>
      <ul class="example-features">
        ${example.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <div class="example-actions">
        <button class="btn btn-primary btn-sm" onclick="loadExample(${idx})">View Prompt</button>
      </div>
    </div>
  `).join('');
}

function loadExample(idx) {
  const example = appData.examples[idx];
  
  // Clear builder
  clearBuilder();
  
  // Load example prompt
  document.getElementById('rolePersona').value = example.prompt;
  appState.components.rolePersona = example.prompt;
  
  // Show template info
  const templateInfo = document.getElementById('templateInfo');
  templateInfo.style.display = 'block';
  templateInfo.innerHTML = `<strong>Example from:</strong> ${example.name}`;
  
  showView('builder');
  updatePreview();
  showToast(`Loaded example: ${example.name}`);
}

// Guide Management
function showGuideTab(tabName) {
  // Update tabs
  const tabs = document.querySelectorAll('.guide-tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
  
  // Render content
  const content = document.getElementById('guideContent');
  
  if (tabName === 'getting-started') {
    content.innerHTML = `
      <div class="guide-content active">
        <div class="guide-section">
          <h3>Welcome to AI Agent Prompt Engineering</h3>
          <p>Creating effective AI agents requires careful prompt design. This tool helps you structure prompts using proven patterns and best practices.</p>
        </div>
        <div class="guide-section">
          <h3>Quick Start</h3>
          <p><strong>Step 1:</strong> Choose a category that matches your agent's purpose</p>
          <p><strong>Step 2:</strong> Select a template or build from scratch</p>
          <p><strong>Step 3:</strong> Fill in essential components (Role, Goal, Instructions, Constraints)</p>
          <p><strong>Step 4:</strong> Add advanced components as needed</p>
          <p><strong>Step 5:</strong> Use Best Practices and Techniques to enhance your prompt</p>
          <p><strong>Step 6:</strong> Copy or download your finished prompt</p>
        </div>
        <div class="guide-section">
          <h3>Key Principles</h3>
          <ul>
            <li>Be specific and clear - avoid ambiguity</li>
            <li>Define explicit boundaries and constraints</li>
            <li>Structure agents with clear operational loops</li>
            <li>Provide context and examples</li>
            <li>Test with edge cases</li>
          </ul>
        </div>
      </div>
    `;
  } else if (tabName === 'components') {
    content.innerHTML = `
      <div class="guide-content active">
        <div class="guide-section">
          <h3>Essential Components</h3>
          <p><strong>Role & Persona:</strong> Define who the agent is, what expertise it has, and how it should behave. This sets the foundation for all interactions.</p>
          <p><strong>Goal & Objective:</strong> Clearly state what the agent is trying to achieve. Be specific about success criteria.</p>
          <p><strong>Instructions:</strong> Step-by-step operational guidelines. Use numbered lists for clarity.</p>
          <p><strong>Constraints & Guardrails:</strong> Define what the agent should NOT do. Set safety boundaries.</p>
        </div>
        <div class="guide-section">
          <h3>Advanced Components</h3>
          <p><strong>Tool Definitions:</strong> Document available tools, their parameters, and expected outputs.</p>
          <p><strong>Context Management:</strong> Specify how to use conversation history and maintain context.</p>
          <p><strong>Output Format:</strong> Define exact structure for responses (JSON, markdown, etc).</p>
          <p><strong>Examples:</strong> Provide 1-5 sample interactions to demonstrate desired behavior.</p>
          <p><strong>Reasoning Style:</strong> Specify how the agent should think (chain-of-thought, etc).</p>
          <p><strong>Error Handling:</strong> Define how to gracefully handle failures and edge cases.</p>
        </div>
      </div>
    `;
  } else if (tabName === 'best-practices') {
    content.innerHTML = `
      <div class="guide-content active">
        ${appData.bestPractices.map(practice => `
          <div class="guide-section">
            <h3>${practice.principle}</h3>
            <p>${practice.description}</p>
            <p><strong>Impact:</strong> ${practice.impact}</p>
            <p style="background-color: var(--color-bg-1); padding: var(--space-12); border-radius: var(--radius-base); font-family: var(--font-family-mono); font-size: var(--font-size-sm);">${practice.snippet}</p>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tabName === 'techniques') {
    content.innerHTML = `
      <div class="guide-content active">
        ${appData.techniques.map(technique => `
          <div class="guide-section">
            <h3>${technique.name}</h3>
            <p>${technique.description}</p>
            <p><strong>Best for:</strong> ${technique.useCase}</p>
            <p style="background-color: var(--color-bg-1); padding: var(--space-12); border-radius: var(--radius-base); font-family: var(--font-family-mono); font-size: var(--font-size-sm); white-space: pre-wrap;">${technique.snippet}</p>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// Utility Functions
function clearBuilder() {
  // Clear essential fields
  document.getElementById('rolePersona').value = '';
  document.getElementById('goalObjective').value = '';
  document.getElementById('instructions').value = '';
  document.getElementById('constraints').value = '';
  
  // Clear advanced fields
  const advancedFields = ['toolDefinitions', 'contextManagement', 'outputFormat', 'examples', 'reasoningStyle', 'errorHandling'];
  advancedFields.forEach(field => {
    const checkbox = document.getElementById(`enable${field.charAt(0).toUpperCase() + field.slice(1)}`);
    if (checkbox.checked) {
      checkbox.checked = false;
      toggleAdvanced(field);
    }
    document.getElementById(field).value = '';
  });
  
  // Reset state
  appState = {
    selectedCategory: null,
    selectedTemplate: null,
    components: {
      rolePersona: '',
      goalObjective: '',
      instructions: '',
      constraints: '',
      toolDefinitions: { enabled: false, content: '' },
      contextManagement: { enabled: false, content: '' },
      outputFormat: { enabled: false, content: '' },
      examples: { enabled: false, content: '' },
      reasoningStyle: { enabled: false, content: '' },
      errorHandling: { enabled: false, content: '' }
    },
    addedBestPractices: [],
    addedTechniques: []
  };
  
  document.getElementById('templateInfo').style.display = 'none';
  updatePreview();
}

function copyToClipboard() {
  const previewBox = document.getElementById('previewBox');
  const text = previewBox.textContent;
  
  if (!text || text === 'Your prompt will appear here as you fill in the components...') {
    showToast('Nothing to copy yet!');
    return;
  }
  
  navigator.clipboard.writeText(text).then(() => {
    showToast('✓ Copied to clipboard!');
  }).catch(() => {
    showToast('Failed to copy');
  });
}

function downloadTxt() {
  const previewBox = document.getElementById('previewBox');
  const text = previewBox.textContent;
  
  if (!text || text === 'Your prompt will appear here as you fill in the components...') {
    showToast('Nothing to download yet!');
    return;
  }
  
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ai-agent-prompt.txt';
  a.click();
  URL.revokeObjectURL(url);
  showToast('✓ Downloaded as .txt');
}

function downloadMd() {
  const previewBox = document.getElementById('previewBox');
  const text = previewBox.textContent;
  
  if (!text || text === 'Your prompt will appear here as you fill in the components...') {
    showToast('Nothing to download yet!');
    return;
  }
  
  const blob = new Blob([text], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ai-agent-prompt.md';
  a.click();
  URL.revokeObjectURL(url);
  showToast('✓ Downloaded as .md');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setupInputListeners();
  updatePreview();
});