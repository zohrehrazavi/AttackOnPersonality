const fs = require('fs');
const path = require('path');

let matchCharacter, calculateMBTI;
let mbtiLogicLoadError = null;
try {
  ({ matchCharacter, calculateMBTI } = require('./mbti-logic'));
} catch (e) {
  mbtiLogicLoadError = e;
}

const MBTI_TYPES = [
  'INTJ', 'INTP', 'INFJ', 'INFP',
  'ISTJ', 'ISFJ', 'ISTP', 'ISFP',
  'ENTJ', 'ENTP', 'ENFJ', 'ENFP',
  'ESTJ', 'ESFJ', 'ESTP', 'ESFP'
];

// Helper to generate answers for a given MBTI type
function answersForType(type) {
  // Q1: I/E, Q2: T/F, Q3: S/N, Q4: J/P, Q5: E/I, Q6: S/N, Q7: J/P, Q8: T/F
  return [
    type[0] === 'I' ? 'A' : 'B', // Q1: I/E
    type[2] === 'T' ? 'A' : 'B', // Q2: T/F
    type[1] === 'S' ? 'A' : 'B', // Q3: S/N
    type[3] === 'J' ? 'A' : 'B', // Q4: J/P
    type[0] === 'E' ? 'A' : 'B', // Q5: E/I
    type[1] === 'S' ? 'A' : 'B', // Q6: S/N
    type[3] === 'J' ? 'A' : 'B', // Q7: J/P
    type[2] === 'T' ? 'A' : 'B', // Q8: T/F
  ];
}

describe('MBTI Character Mapping', () => {
  test('mbti-logic.js should load without errors', () => {
    if (mbtiLogicLoadError) {
      throw new Error('Failed to load mbti-logic.js: ' + mbtiLogicLoadError.message);
    }
  });

  if (!mbtiLogicLoadError) {
    test('All 16 MBTI types return a valid character with required properties', () => {
      MBTI_TYPES.forEach(type => {
        const character = matchCharacter(type);
        expect(character).toBeDefined();
        expect(typeof character.name).toBe('string');
        expect(character.name.length).toBeGreaterThan(0);
        expect(typeof character.desc).toBe('string');
        expect(character.desc.length).toBeGreaterThan(0);
        expect(typeof character.img).toBe('string');
        expect(character.img.length).toBeGreaterThan(0);
        expect(Array.isArray(character.enjoy)).toBe(true);
        expect(character.enjoy.length).toBeGreaterThan(0);
        expect(Array.isArray(character.avoid)).toBe(true);
        expect(character.avoid.length).toBeGreaterThan(0);
        expect(typeof character.quote).toBe('string');
        expect(character.quote.length).toBeGreaterThan(0);
      });
    });

    test('All 16 MBTI types return unique characters', () => {
      const names = MBTI_TYPES.map(type => matchCharacter(type).name);
      const uniqueNames = new Set(names);
      expect(uniqueNames.size).toBe(16);
    });

    test('Image files exist for all characters', () => {
      MBTI_TYPES.forEach(type => {
        const character = matchCharacter(type);
        const fullPath = path.join(__dirname, '..', 'frontend', 'image', path.basename(character.img));
        if (!fs.existsSync(fullPath)) {
          console.log('Missing image for', character.name, 'at', fullPath);
        }
        expect(fs.existsSync(fullPath)).toBe(true);
      });
    });

    test('Quiz logic can reach every character', () => {
      MBTI_TYPES.forEach(type => {
        const answers = answersForType(type);
        const calculatedType = calculateMBTI(answers);
        expect(calculatedType).toBe(type);
        const character = matchCharacter(calculatedType);
        expect(character).toBeDefined();
        expect(typeof character.name).toBe('string');
        expect(character.name.length).toBeGreaterThan(0);
      });
    });
  }
});