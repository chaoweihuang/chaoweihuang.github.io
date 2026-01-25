---
layout: default
title: About
---

<div class="row profile-section">
  <div class="col-md-4 text-center mb-4">
    <img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="{{ site.author.name }}" class="profile-img mb-3">
    <h1 class="h4">{{ site.author.name }}</h1>
    <p class="text-muted">{{ site.author.bio }}</p>
    <div class="social-links">
      {% if site.social.github %}
      <a href="https://github.com/{{ site.social.github }}" target="_blank" rel="noopener" class="me-2"><i class="bi bi-github fs-4"></i></a>
      {% endif %}
      {% if site.social.linkedin %}
      <a href="https://linkedin.com/in/{{ site.social.linkedin }}" target="_blank" rel="noopener" class="me-2"><i class="bi bi-linkedin fs-4"></i></a>
      {% endif %}
      {% if site.social.twitter %}
      <a href="https://x.com/{{ site.social.twitter }}" target="_blank" rel="noopener" class="me-2"><i class="bi bi-twitter-x fs-4"></i></a>
      {% endif %}
      {% if site.social.scholar %}
      <a href="https://scholar.google.com/citations?user={{ site.social.scholar }}" target="_blank" rel="noopener" class="me-2"><i class="ai ai-google-scholar fs-4"></i></a>
      {% endif %}
      {% if site.author.email %}
      <a href="mailto:{{ site.author.email }}"><i class="bi bi-envelope fs-4"></i></a>
      {% endif %}
    </div>
  </div>
  <div class="col-md-8">
    <h2 class="h5 mb-3">About Me</h2>
    <p>
      Hi! My name is Chao-Wei Huang. I received my B.S. and Ph.D. from National Taiwan University, advised by <a href="https://www.csie.ntu.edu.tw/~yvchen/">Prof. Yun-Nung (Vivian) Chen</a>.
    </p>
    <p>
      My research interests include <strong>information retrieval</strong>, <strong>factuality</strong>, <strong>large language models</strong>, and <strong>speech processing</strong>. My research has been published in top-tier speech and natural language processing conferences, e.g., ACL, EMNLP, NAACL, ICASSP, Interspeech, and EACL. Driven by a commitment to fostering academic collaboration, I have co-organized <a href="https://dstc9.dstc.community/">The 9th Dialog System Technology Challenge (DSTC9)</a> and the <a href="https://ctrlnlg.github.io/">1st TamingLLM workshop</a>.
    </p>
    <p>
      Previously, I worked as a Research Scientist Intern at <strong>Amazon Alexa AI</strong> ('20, '21) and <strong>Meta AI Research</strong> ('22, '23).
    </p>
  </div>
</div>

<hr class="my-4">

## News

<div class="news-list">
  {% for item in site.data.news %}
  <div class="news-item d-flex">
    <span class="news-date me-3">{{ item.date }}</span>
    <span>{{ item.content }}</span>
  </div>
  {% endfor %}
</div>

<hr class="my-4">

## Selected Publications

<div class="selected-papers">
  {% assign selected = site.data.publications | where: "selected", true %}
  {% for pub in selected %}
  {% include publication.html pub=pub %}
  {% endfor %}
</div>

<p class="mt-3">
  <a href="{{ '/publications/' | relative_url }}">View all publications →</a>
</p>
