---
title: "<a href='https://github.com/rheasukthanker/NLU_Task2_Story_Cloze_Test/blob/main/report.pdf'> Data Augmentation to Improve BERT on Story Cloze </a>"
excerpt: "The Story cloze test aimed at targeting the challenge of understanding causal and correlational relations in text. It was a part of the LSDMSem’17 shared task [1] for story understanding and script learning. This system provided four sentence stories with two possible endings, one of which is the correct one. The main challenge of this task is that the training set (ROCstories corpus) does not contain negative endings(ie. it is five sentence story corpus). This means that training set by itself is not enough to train a regular classifier. On the other hand the validation and test set of the task poses more of a binary classification problem between the right and the wrong endings. </br>
In this project we explored the following approaches to tackle the task. Firstly we aim at understanding the task and getting a notion of why training on the validation set can introduce problems. Secondly we use the state of the art models like BERT [3] (Bidirectional Encoder Representations from Transformers) to get an idea of how it performs. Thirdly we explore data augmentation strategies inspired by methods in [11] to smartly sample negative endings from the training corpus. Finally we measure how BERT performs when fine-tuned on our augmented datasets."
supervisors: "Prof. Dr. Thomas Hoffman"
collection: portfolio
---

In this paper, we propose a new neural architecture search (NAS) problem of Symmetric Positive Definite (SPD) manifold networks, aiming to automate
the design of SPD neural architectures. To address this problem, we first introduce a geometrically rich and diverse SPD neural architecture search space
for an efficient SPD cell design. Further, we model our new NAS problem with a one-shot training process of a single supernet. Based on the supernet
modeling, we exploit a differentiable NAS algorithm on our relaxed continuous search space for SPD neural architecture search. Statistical evaluation of our method on drone, action, and emotion recognition tasks mostly provides better results than the state-of-the-art SPD networks and traditional NAS algorithms. Empirical results show that our algorithm excels in discovering better performing SPD network design and provides models that are
more than three times lighter than searched by the state-of-the-art NAS algorithms.<br/><img src='/images/spdnetnas.png'>
