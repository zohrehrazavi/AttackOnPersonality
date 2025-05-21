// MBTI to AOT Character mapping
const characterMap = {
    INTJ: { name: "Erwin Smith", desc: "You are Erwin: Visionary, resolute, and inspiring." },
    INTP: { name: "Armin Arlert", desc: "You are Armin: Thoughtful, creative, and insightful." },
    INFJ: { name: "Zeke Yeager", desc: "You are Zeke: Complex, strategic, and enigmatic." },
    INFP: { name: "Historia Reiss", desc: "You are Historia: Gentle, empathetic, and quietly strong." },
    ISTJ: { name: "Dot Pixis", desc: "You are Pixis: Dependable, pragmatic, and disciplined." },
    ISFJ: { name: "Marco Bott", desc: "You are Marco: Loyal, supportive, and kind-hearted." },
    ISTP: { name: "Levi Ackerman", desc: "You are Levi: Fierce but kind, calm under pressure." },
    ISFP: { name: "Ymir", desc: "You are Ymir: Independent, bold, and true to yourself." },
    ESTJ: { name: "Nile Dok", desc: "You are Nile: Responsible, organized, and steadfast." },
    ESFJ: { name: "Petra Ral", desc: "You are Petra: Caring, reliable, and team-spirited." },
    ESTP: { name: "Jean Kirstein", desc: "You are Jean: Realistic, quick-thinking, and adaptable." },
    ESFP: { name: "Sasha Blouse", desc: "You are Sasha: Energetic, fun-loving, and spontaneous." },
    ENTJ: { name: "Theo Magath", desc: "You are Magath: Commanding, tactical, and determined." },
    ENTP: { name: "Hange Zoë", desc: "You are Hange: Inventive, curious, and enthusiastic." },
    ENFJ: { name: "Eren Yeager (Season 1)", desc: "You are Eren: Passionate, driven, and inspiring." },
    ENFP: { name: "Connie Springer", desc: "You are Connie: Optimistic, loyal, and lighthearted." }
};

// Calculate MBTI type based on answers
function calculateMBTI(answers) {
    if (!answers || answers.length !== 8) {
        throw new Error('Invalid answers array');
    }

    const dimensions = {
        EI: 0, // Extraversion vs Introversion
        SN: 0, // Sensing vs Intuition
        FT: 0, // Feeling vs Thinking
        JP: 0  // Judging vs Perceiving
    };

    // Map answers to dimensions
    // Question 1: I/E
    dimensions.EI += answers[0] === 'A' ? -1 : 1;
    // Question 2: T/F
    dimensions.FT += answers[1] === 'A' ? 1 : -1;
    // Question 3: S/N
    dimensions.SN += answers[2] === 'A' ? 1 : -1;
    // Question 4: J/P
    dimensions.JP += answers[3] === 'A' ? 1 : -1;
    // Question 5: E/I
    dimensions.EI += answers[4] === 'A' ? 1 : -1;
    // Question 6: S/N
    dimensions.SN += answers[5] === 'A' ? 1 : -1;
    // Question 7: J/P
    dimensions.JP += answers[6] === 'A' ? 1 : -1;
    // Question 8: T/F
    dimensions.FT += answers[7] === 'A' ? 1 : -1;

    // Determine the final type
    const type = [
        dimensions.EI > 0 ? 'E' : 'I',
        dimensions.SN > 0 ? 'S' : 'N',
        dimensions.FT > 0 ? 'T' : 'F',
        dimensions.JP > 0 ? 'J' : 'P'
    ].join('');

    return type;
}

// Match MBTI type to AOT character
function matchCharacter(mbti) {
    return characterMap[mbti] || { 
        name: "Unknown", 
        desc: "Your personality type doesn't match any known character." 
    };
}

// Export functions for use in frontend
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateMBTI,
        matchCharacter
    };
} 