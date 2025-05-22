# Attack on Titan MBTI Personality Quiz

This is a multi-page MBTI-style Attack on Titan personality quiz app built with HTML, CSS, and JavaScript.

## Features
- Multi-page quiz with 8 questions and image options
- Each MBTI type (16 total) is mapped to a unique Attack on Titan character
- Result page shows character name, description, enjoy/avoid lists, quote, and a unique character image
- All images must be placed in `frontend/image/` and named exactly as referenced in the code (e.g., `Erwin_Smith.png`)
- Fully responsive and styled with a historical/gothic theme
- Comprehensive Jest test suite to ensure all logic and assets are correct

## How to Add/Update Character Images
- Place your character images in `frontend/image/`
- The filename must match the `img` property in `backend/mbti-logic.js` (e.g., `Historia_Reiss.png`)
- All 16 MBTI types must have a unique image

## Running Tests
1. Make sure you have Node.js and npm installed
2. Install dependencies:
   ```
   npm install
   ```
3. Run the Jest test suite:
   ```
   npx jest backend/mbti-logic.test.js --env=node --runInBand
   ```
   - This will check:
     - All MBTI types are mapped
     - All required character properties exist
     - All images exist in `frontend/image/`
     - The quiz logic can reach every character as a result

## Deployment
- All code is in the `frontend` and `backend` folders
- No external JS frameworks are used
- To deploy, push to your GitHub repository and serve the `frontend/html/index.html` file

## Contributing
- Please ensure all tests pass before pushing changes
- Use descriptive commit messages

---

Enjoy discovering your Attack on Titan personality!
