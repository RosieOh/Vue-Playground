package com.springvue.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class VueController {
    @GetMapping("/")
    public String showVuePage() {
        return "/index.html";
    }
}
