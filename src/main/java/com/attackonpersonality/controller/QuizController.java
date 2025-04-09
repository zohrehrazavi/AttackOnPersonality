package com.attackonpersonality.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/quiz")
public class QuizController {

    private final List<String> questions = Arrays.asList(
            "I enjoy being the center of attention.",
            "I prefer to plan things in advance rather than be spontaneous.",
            "I often think about the deeper meaning of things.",
            "I like to keep my options open.",
            "I am more practical than creative.",
            "I enjoy social gatherings.",
            "I rely on my intuition to make decisions.",
            "I prefer to work in a team rather than alone.",
            "I am detail-oriented.",
            "I am open to trying new things."
    );

    @GetMapping
    public String showQuiz(Model model) {
        model.addAttribute("questions", questions);
        return "quiz";
    }

    @PostMapping("/result")
    public String showResult(@RequestParam Map<String, String> answers, Model model) {
        // Calculate the MBTI type and match with an AOT character
        String mbtiType = calculateMBTI(answers);
        String character = matchCharacter(mbtiType);

        model.addAttribute("mbtiType", mbtiType);
        model.addAttribute("character", character);
        return "result";
    }

    private String calculateMBTI(Map<String, String> answers) {
        // Placeholder logic for calculating MBTI type
        return "INTJ";
    }

    private String matchCharacter(String mbtiType) {
        // Placeholder logic for matching character
        return "Levi Ackerman";
    }
}
