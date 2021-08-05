---
title: "<a href='https://github.com/rheasukthanker/NLU_Task2_Story_Cloze_Test/blob/main/report.pdf'> Data Augmentation to Improve BERT on Story Cloze </a>"
excerpt: "The Story cloze test aimed at targeting the challenge of understanding causal and correlational relations in text. It was a part of the LSDMSem’17 shared task for story understanding and script learning. This system provided four sentence stories with two possible endings, one of which is the correct one. The main challenge of this task is that the training set (ROCstories corpus) does not contain negative endings(ie. it is five sentence story corpus). This means that training set by itself is not enough to train a regular classifier. On the other hand the validation and test set of the task poses more of a binary classification problem between the right and the wrong endings. 

In this project we explored the following approaches to tackle the task. Firstly we aim at understanding the task and getting a notion of why training on the validation set can introduce problems. Secondly we use the state of the art models like BERT (Bidirectional Encoder Representations from Transformers) to get an idea of how it performs. Thirdly we explore data augmentation strategies inspired by methods in [11] to smartly sample negative endings from the training corpus. Finally we measure how BERT performs when fine-tuned on our augmented datasets."
supervisors: "Prof. Dr. Thomas Hoffman"
collection: portfolio
---


