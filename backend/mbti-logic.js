// MBTI to AOT Character mapping
const characterMap = {
    INTJ: { 
        name: "Erwin Smith", 
        desc: "Strategic, steadfast, and ready to sacrifice.",
        img: "../image/Erwin_Smith.png",
        enjoy: [
            "Duty-driven missions",
            "Deep one-on-one conversations",
            "Thinking about the big picture",
            "Quiet time to reflect on purpose"
        ],
        avoid: [
            "Meaningless chatter",
            "Crowded rooms with no exit",
            "Unclear goals",
            "Repeating the same failures"
        ],
        quote: "If you begin to regret, you'll dull your future decisions."
    },
    INTP: { 
        name: "Armin Arlert", 
        desc: "Analytical, creative, and deeply thoughtful.",
        img: "../image/Armin_Arlert.png",
        enjoy: [
            "Reading and research",
            "Solving complex puzzles",
            "Exploring new ideas",
            "Deep intellectual discussions"
        ],
        avoid: [
            "Social performances",
            "Strict schedules",
            "Physical confrontation",
            "Making quick decisions"
        ],
        quote: "The world is cruel, but also very beautiful."
    },
    INFJ: { 
        name: "Zeke Yeager", 
        desc: "Complex, strategic, and enigmatic.",
        img: "../image/Zeke_Yeager.png",
        enjoy: [
            "Long-term planning",
            "Philosophical discussions",
            "Understanding others' motives",
            "Reading between the lines"
        ],
        avoid: [
            "Superficial socializing",
            "Impulsive actions",
            "Being misunderstood",
            "Breaking from routine"
        ],
        quote: "The only way to win is to change the rules of the game."
    },
    INFP: { 
        name: "Historia Reiss", 
        desc: "Gentle, empathetic, and quietly strong.",
        img: "../image/Historia_Reiss.png",
        enjoy: [
            "Helping others grow",
            "Creative expression",
            "Deep connections",
            "Peaceful moments"
        ],
        avoid: [
            "Social expectations",
            "Conflict and violence",
            "Rigid structures",
            "Large crowds"
        ],
        quote: "I want to live my life with pride."
    },
    ISTJ: { 
        name: "Dot Pixis", 
        desc: "Dependable, pragmatic, and disciplined.",
        img: "../image/Dot_Pixis.png",
        enjoy: [
            "Following procedures",
            "Clear objectives",
            "Reliable teamwork",
            "Historical knowledge"
        ],
        avoid: [
            "Unnecessary drama",
            "Sudden changes",
            "Disorganized chaos",
            "Unclear expectations"
        ],
        quote: "Humanity's greatest strength is its ability to adapt."
    },
    ISFJ: { 
        name: "Marco Bott", 
        desc: "Loyal, supportive, and kind-hearted.",
        img: "../image/Marco_Bott.png",
        enjoy: [
            "Helping others",
            "Learning from experience",
            "Clear responsibilities",
            "Team cooperation"
        ],
        avoid: [
            "Conflict situations",
            "Being in the spotlight",
            "Sudden changes",
            "Large gatherings"
        ],
        quote: "We need to work together to survive."
    },
    ISTP: { 
        name: "Levi Ackerman", 
        desc: "Fierce but kind, calm under pressure.",
        img: "../image/Levi_Ackerman.png",
        enjoy: [
            "Practical challenges",
            "Solving problems",
            "Clear objectives",
            "Reliable allies"
        ],
        avoid: [
            "Unnecessary talk",
            "Emotional drama",
            "Large crowds",
            "Unpredictable situations"
        ],
        quote: "I don't know which option you should choose. I can only tell you that you won't regret it."
    },
    ISFP: { 
        name: "Ymir", 
        desc: "Independent, bold, and true to yourself.",
        img: "../image/Ymir.png",
        enjoy: [
            "Personal freedom",
            "Deep connections",
            "Creative expression",
            "Authentic moments"
        ],
        avoid: [
            "Social expectations",
            "Rigid rules",
            "Large groups",
            "Being controlled"
        ],
        quote: "I'll live my life the way I want to."
    },
    ESTJ: { 
        name: "Nile Dok", 
        desc: "Responsible, organized, and steadfast.",
        img: "../image/Nile_Dok.png",
        enjoy: [
            "Clear structures",
            "Achieving goals",
            "Leading teams",
            "Practical knowledge"
        ],
        avoid: [
            "Unnecessary drama",
            "Chaos and disorder",
            "Unpredictable situations",
            "Breaking rules"
        ],
        quote: "Duty comes before personal feelings."
    },
    ESFJ: { 
        name: "Petra Ral", 
        desc: "Caring, reliable, and team-spirited.",
        img: "../image/Petra_Ral.png",
        enjoy: [
            "Helping others",
            "Clear goals",
            "Learning from experience",
            "Social harmony"
        ],
        avoid: [
            "Conflict situations",
            "Being alone",
            "Sudden changes",
            "Unclear expectations"
        ],
        quote: "We must protect our comrades."
    },
    ESTP: { 
        name: "Jean Kirstein", 
        desc: "Realistic, quick-thinking, and adaptable.",
        img: "../image/Jean_Kirstein.png",
        enjoy: [
            "Practical challenges",
            "Team dynamics",
            "Physical activities",
            "Social situations"
        ],
        avoid: [
            "Theoretical discussions",
            "Emotional drama",
            "Routine tasks",
            "Long-term planning"
        ],
        quote: "I want to live a long life."
    },
    ESFP: { 
        name: "Sasha Blouse", 
        desc: "Energetic, fun-loving, and spontaneous.",
        img: "../image/Sasha_Blouse.png",
        enjoy: [
            "Social gatherings",
            "Good food",
            "Quick action",
            "Making friends"
        ],
        avoid: [
            "Long discussions",
            "Serious situations",
            "Strict routines",
            "Complex planning"
        ],
        quote: "Thank you for the food!"
    },
    ENTJ: { 
        name: "Theo Magath", 
        desc: "Commanding, tactical, and determined.",
        img: "../image/Theo_Magath.png",
        enjoy: [
            "Strategic planning",
            "Leading teams",
            "Learning new skills",
            "Taking charge"
        ],
        avoid: [
            "Inefficiency",
            "Unnecessary conflict",
            "Disorganized chaos",
            "Breaking from plans"
        ],
        quote: "Victory requires sacrifice."
    },
    ENTP: { 
        name: "Hange Zoë", 
        desc: "Inventive, curious, and enthusiastic.",
        img: "../image/Hange_Zoe.png",
        enjoy: [
            "New discoveries",
            "Intellectual debates",
            "Solving puzzles",
            "Learning everything"
        ],
        avoid: [
            "Routine tasks",
            "Social conventions",
            "Boring situations",
            "Being restricted"
        ],
        quote: "The more we learn, the more we realize how little we know."
    },
    ENFJ: { 
        name: "Eren Yeager", 
        desc: "Passionate, driven, and inspiring.",
        img: "../image/Eren_Yeager_Season1.png",
        enjoy: [
            "Achieving goals",
            "Leading others",
            "Taking action",
            "Deep discussions"
        ],
        avoid: [
            "Being controlled",
            "Feeling powerless",
            "Staying still",
            "Giving up"
        ],
        quote: "I'll destroy all the titans."
    },
    ENFP: { 
        name: "Connie Springer", 
        desc: "Optimistic, loyal, and lighthearted.",
        img: "../image/Connie_Springer.png",
        enjoy: [
            "Making friends",
            "Social activities",
            "Quick action",
            "New experiences"
        ],
        avoid: [
            "Long planning",
            "Serious situations",
            "Being alone",
            "Complex tasks"
        ],
        quote: "We'll find a way to survive."
    }
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