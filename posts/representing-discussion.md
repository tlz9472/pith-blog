---
title: "Representing Discussion"
date: "2020-05-24"
author: "Sydney Zheng"
summary: "How do we represent discussion in a way people can easily interact with? Discussion is more than just decision-making/debating. There are also the small conversations around this high-level process when people come to agreement on the meaning of related concepts"
---
## What Discussion is

How do we represent discussion in a way people can easily interact with?

- Discussion is more than just decision-making/debating. There are also the small conversations around this high-level process when people come to agreement on the meaning of related concepts.  Furthermore, discussion encompasses the sharing of experience or expertise, which may not always directly apply to the main discussion thread at the current moment, but may be found to apply at a later in time.

- Though a static/objective entity like a wiki has extensive knowledge, humans are the more natural, flexible interface we have for coming to understand the human world. Therefore, we should help people focus mostly on the human aspect of interaction. This is in contrast to argument map framework, where people spend a significant time considering and manipulating the argument diagram.

- A lot of argument map frameworks choose to organize information by *topic* vs time. [Enabling On-Line Deliberation and Collective Decision-Making through Large-Scale Argumentation](https://www.researchgate.net/profile/Mark_Klein/publication/279408090_Enabling_On-Line_Deliberation_and_Collective_Decision-Making_through_Large-Scale_Argumentation/links/559a7c5908ae21086d26de2b/Enabling-On-Line-Deliberation-and-Collective-Decision-Making-through-Large-Scale-Argumentation.pdf) argues that a topic-based organization can compact information over time, thereby minimizing the possibility of repeated conversations of a topic.  However, the way people consider a topic *is* based heavily on context and time.  There is a world of difference in talking about your high school from when you are in high school to when you leave high school.  Another issue with topic-based organization is the difficulty in knowing where to place your information. A platform like Reddit may address this by the use of categorization and a search functionality. Twitter uses tagging. However, these methods do not address the fact that some types of discussion do not easily lie within a topic, especially as it mutates over its course. Perhaps in the course of the discussion, you draw in knowledge from other domain—you talk about chemical compounds when discussing old-world art. Or, you may have a meta-discussion on the course of the discussion.

- The process of solving problems needs to avoid ideology and polarization. There are a lot of "camps": capitalist, socialist, communist, anarchist, Republican, Democrat, libertarian, progressive etc. In the end, good ideas exist between and outside of these camps. From some of the examples we examined, such as Argentina's [DemocracyOS](https:, , democraciaos.org, en, ), an overuse of *voting* tends to cause hyper-polarization, populism as people fall into camps, talk past each other, and focus less on solving the problem. There, we suspect that the way people interact with a platform (voting or some other method) influences how they will approach problem-solving.

## What we should do

After examining about 20-30 real or theoretical examples of conversational platforms, we considered the following features for our design:

- We should offer some notion of time as people examine past conversation. We can do this through a time-scaled resolution view. The more the discussion occurred in the past, the more "summarized" it will appear to the person. The more current it is, the more detailed appears. What this means for the visual interface is still being considered.

- Users can refer to prior conversation or external resources through hypertext at the very least. Our system should be interoperable so that the system acts as a convergence of these diverse resources.

- We should make the *infrastructure* as well as the process of discussion *decentralized* just as [Mastodon](https://joinmastodon.org/) and [Beaker Browser](https://beakerbrowser.com/) do.
