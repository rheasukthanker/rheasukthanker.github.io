---
title: 'Mixtakes to avoid when uploading to arxiv (from overleaf)'
layout : single
collection: blog
permalink: /blog/arxiv-upload-tips
date: 2023-10-28
tags:
  - arxiv
  - research
---
Few tips and tricks on uploading your papers from overleaf to arxiv

1. Try to upload your first project to arxiv on your own, rather than having a senior author do it for you (since you will end up doing this a lot eventually).
2. The .bbl file: Make sure to include the .bbl file in your project directory. You can download this from the overleaf compile logs.
3. Avoid naming your figure with non alpha-numeric characters as much as possible, this will save time in future in fixing the naming when uploading to arxiv.
4. Use ```\usepackage[pdftex]{graphicx}``` instead of ```\usepackage{graphicx}```. This will in future avoid errors with figure formats when uploading to arxiv. 
5. Try to follow the following structure and naming convention, when you start with your project:
   
        1.  ```figures/``` : directory for all possible plots/figures in the paper
        2. ```sections/```: directory for individual main sections of the paper. It is a good practice to have section number at the start of individual tex files eg: ```1_abstract.tex```.
        3. The root project directory should then contain your ```main.tex``` and ```main.bib``` etc.
    

