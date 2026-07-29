---
title: "VLAs know when they fail"
description: "I implemented a safety stop for VLAs based on methods that where developed in SAFE."
date: "2026-06-28"
---

I wanted to get my hands dirty and build a simple VLA application as a weekend project. Being intersted in safety of data-driven robotics controller, I came across SAFE, a paper that shows that VLAs encode information about the estimated task success in their latent space. 
Adding an additional simple MLP head a task success score can be trained. I used this metric to trigger an automatic safety stop, once it exceed a threshold. Thisallows for a human to intervene when necessary.  

## Training the VLA

![SAFE training data, success episode: overhead camera frames show the policy placing the cube while the cumulative failure score stays flat, well below the threshold of 3.5](/personal/assets/vla_safe/fig1_train_success.png)

<video src="/personal/assets/vla_safe/vid1_train_success.mp4" class="w-full rounded-lg" muted autoplay loop playsinline controls></video>

## Training the classifier

![SAFE training data, failure episode: the grasp fails and the cumulative failure score climbs monotonically past the threshold of 3.5](/personal/assets/vla_safe/fig2_train_failure.png)

<video src="/personal/assets/vla_safe/vid2_train_failure.mp4" class="w-full rounded-lg" muted autoplay loop playsinline controls></video>

## Deployment

![Deployment success: the rollout completes all twelve inference steps with the cumulative failure score peaking at 1.81, far below the threshold of 3.5](/personal/assets/vla_safe/fig3_deploy_success.png)

<video src="/personal/assets/vla_safe/vid3_deploy_success.mp4" class="w-full rounded-lg" muted autoplay loop playsinline controls></video>

![Deployment failure: the cumulative failure score crosses the threshold of 3.5 at inference step 6 and the active probe halts the arm immediately](/personal/assets/vla_safe/fig4_deploy_failure_halt.png)

<video src="/personal/assets/vla_safe/vid4_deploy_failure_halt.mp4" class="w-full rounded-lg" muted autoplay loop playsinline controls></video>

## Thanks
Many thanks to Amanda Prorok and PorokLab in Cambridge that let me use their Trossen Arm setup for experimentation.


