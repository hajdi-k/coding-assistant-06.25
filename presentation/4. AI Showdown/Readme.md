# AI Coding Landscape up to 15th June 2025

The AI coding landscape in June 2025 is quite competitive, with Claude Opus, GPT-4.1, and Gemini 2.5 Pro each excelling in different areas:

- Claude Opus leads in software engineering benchmarks, scoring **72.7%** on SWE-bench, making it the strongest choice for complex coding tasks and optimization.
- GPT-4.1 offers a balanced approach, with **54.6%** on SWE-bench, strong instruction-following, and a 1M token context window, making it ideal for diverse programming needs.
- Gemini 2.5 Pro with **46.8%** on SWE-bench shines in multimodal reasoning and long-context comprehension, handling large codebases and documents efficiently, with configurable compute budgets for cost-effective coding.

Honorable mention:
- Claude Sonnet 4 – **65.0%** on SWE-bench, leading in accuracy and cost efficiency

Claude Opus for deep reasoning, Claude Sonnet 4 is the most accurate, GPT-4.1 is the fastest and most versatile, and Gemini 2.5 Pro is best for handling massive codebases. 

## AI showdown event by Lovable

The AI Showdown by Lovable is a public AI model comparison event featuring OpenAI, Anthropic, and Google. It aims to evaluate AI coding performance beyond traditional benchmarks by allowing users to test multiple models inside Lovable

https://aishowdown.lovable.app/ 

### Anthropic:

https://lovable.dev/projects/be7ca759-146a-4a2b-827a-434fa81c1d83

https://temp-sense-compare-insight.lovable.app 

Made open weather API key optional, automatically randomized "outside temp" data, added auto polling of data on a toggle, not automatic. Added manual "retake" button. Nice UI for recent reading, and API key configuration.

### Google:

https://lovable.dev/projects/d49c9a2b-2312-4aac-a664-88da7a3bcc8c

https://temp-tales-weather-wise.lovable.app

Made the API key as required first step. When prompted to make it optional, threw error, then on retry managed to complete.

### OpenAI:

https://lovable.dev/projects/c308522b-94f9-4586-91c0-7d1c8429625e

https://temp-tales-weather-watch.lovable.app

Didn't start polling until the key was provided. Prompted to make it optional successfully,  but still didn't poll data at an interval, until prompted. Added inputs for LAT LON, showed logs in terminal-like UI which can be cleared.

