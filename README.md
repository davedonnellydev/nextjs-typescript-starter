# Project [00] #AIAppAugust: [Project name]

![Last Commit](https://img.shields.io/github/last-commit/davedonnellydev/nextjs-typescript-starter)

**📆 Date**: *[Project build date here]*  
**🎯 Project Objective**: *[Write up any project objectives here]*  
**🚀 Features**: *[Main features for MVP]*  
**🛠️ Tech used**: *[Main tech used, including links to libraries/APIs]*  
**Live Demo**: *[https://your-demo-url.com](https://your-demo-url.com)*  
*(Link will be added after deployment)*  

**Starter repo**: [Next.js TypeScript starter](https://github.com/davedonnellydev/nextjs-typescript-starter)  

## 🗒️ Summary
**Lessons learned**  
*A little summary of learnings*

**Blockers**  
*Note any blockers here*  

**Final thoughts**  
*Any final thoughts here*  


This project has been built as part of my AI App August Challenge. You can read more information on the full project here: [https://github.com/davedonnellydev/ai-august-2025-challenge](https://github.com/davedonnellydev/ai-august-2025-challenge).

## 🧪 Testing

![CI](https://github.com/davedonnellydev/nextjs-typescript-starter/actions/workflows/ci.yml/badge.svg) *[Link should be amended so that correct repo is specified]*  
*Note: Test suite runs automatically with each push/merge.*  

## Quick Start

1. **Clone and install:**
   ```bash
   gh repo clone davedonnellydev/nextjs-typescript-starter
   cd nextjs-typescript-starter
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

3. **Start development:**
   ```bash
   npm run dev
   ```

4. **Run tests:**
   ```bash
   npm test
   ```

## 🔧 Configuration

### API Integration

```typescript
import { useApi } from './hooks/useApi';

const { data, isLoading, error, execute } = useApi('get', '/api/endpoint');

// Execute API call
execute({ param: 'value' });
```

## 📦 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm build

# Run test suite
npm test

# Eject from Create React App
npm eject
```


## License
![GitHub License](https://img.shields.io/github/license/davedonnellydev/nextjs-typescript-starter)  
This project is licensed under the MIT License.
