---
layout: post
title: The Needlessly Complex Fledgling Mission to Autonomously Propagate Plants
date: 2022-05-13
categories: ["Kotlin", "React", "DIY", "Electronics", "Irrigation Project"]
---

At the start of 2022 I set out on a goal to build an automated irrigation system for my sad and vacant courtyard garden. Rather than walking down the sane path of purchasing an off-the-shelf system, I chose to build a completely custom set-up from scratch.

There are a few reasons why I chose this avenue; firstly, my frontend development skills have become rusty over the past few months of nothing but backend development work, and secondly, I like a challenge. This project would involve working with small electronics, 3D modelling and printing, carpentry and programming. Out of those listed 4 core aspects, the only thing I held experience in was programming. So I had a lot to learn. The final reason I chose this project was privacy. So many of our devices have tracking systems in them in one way or another, and although I probably shouldn’t care if a third party can track when I water my plants, I do.

#### The Plan
At the start I was a little ambitious, below is a list of all the key factors.

![Original Idea List]({{BASEURL}}/assets/images/01_original_idea_list.png)

With this list I was able to draft up a little diagram of how the backend system would work.

![Backend Diagram]({{BASEURL}}/assets/images/01_original_backend_diagram.png)

Although my focus was set on getting the backend system up and running, which would allow me to worry about the frontend later, I still drafted a simplistic high- level view of the entire system.

![High Level View]({{BASEURL}}/assets/images/01_origina_high_level_view.png)

#### The Components
For the brains of the operation I chose to use my old Raspberry Pi Zero Wireless. This little computer would control the flow of information and save all data to a non- relational database (MongoDB). The planter nodes would be controlled via an ESP8266 node with a capacitive moisture sensor – this node would use Wi-Fi to communicate with the server. The user interface would be built using the ReactJS framework which would be hosted on the Raspberry Pi.

The plans had been drawn up, and the technology selected. I felt unstoppable, I had a plan fueled by confidence and blind arrogance, blissfully unaware of the sole crushing hurdles that lay ahead.
