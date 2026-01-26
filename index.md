---
layout: default
title: About
---

<section class="hero-section">
  <div class="profile-card">
    <div class="profile-image-wrapper">
      <img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="{{ site.author.name }}" class="profile-img">
    </div>
    <div class="profile-content">
      <h1 class="profile-name">{{ site.author.name }}</h1>
      <p class="profile-title">Research Scientist at Meta</p>
      <div class="profile-bio">
        <p>
          I received my B.S. and Ph.D. from National Taiwan University, advised by <a href="https://www.csie.ntu.edu.tw/~yvchen/">Prof. Yun-Nung (Vivian) Chen</a>.
        </p>
        <p>
          My research interests include <strong>information retrieval</strong>, <strong>factuality</strong>, <strong>large language models</strong>, and <strong>speech processing</strong>. My work has been published in top-tier venues including ACL, EMNLP, NAACL, ICASSP, Interspeech, and EACL.
        </p>
        <p>
          I am currently a Research Scientist at <strong>Meta</strong>, based in Cambridge, MA. Previously, I worked as a Research Scientist Intern at Amazon Alexa AI and Meta AI Research.
        </p>
      </div>
      <div class="profile-links">
        {% if site.social.github %}
        <a href="https://github.com/{{ site.social.github }}" target="_blank" rel="noopener" class="social-link" title="GitHub">
          <i class="bi bi-github"></i>
        </a>
        {% endif %}
        {% if site.social.linkedin %}
        <a href="https://linkedin.com/in/{{ site.social.linkedin }}" target="_blank" rel="noopener" class="social-link" title="LinkedIn">
          <i class="bi bi-linkedin"></i>
        </a>
        {% endif %}
        {% if site.social.twitter %}
        <a href="https://x.com/{{ site.social.twitter }}" target="_blank" rel="noopener" class="social-link" title="X (Twitter)">
          <i class="bi bi-twitter-x"></i>
        </a>
        {% endif %}
        {% if site.social.scholar %}
        <a href="https://scholar.google.com/citations?user={{ site.social.scholar }}" target="_blank" rel="noopener" class="social-link" title="Google Scholar">
          <i class="ai ai-google-scholar"></i>
        </a>
        {% endif %}
        {% if site.author.email %}
        <a href="mailto:{{ site.author.email }}" class="social-link" title="Email">
          <i class="bi bi-envelope"></i>
        </a>
        {% endif %}
      </div>
    </div>
  </div>
</section>

<hr class="section-divider">

<section class="news-section">
  <h2 class="section-title">News</h2>
  <div class="news-list">
    {% for item in site.data.news %}
    <div class="news-item">
      <span class="news-date">{{ item.date }}</span>
      <span class="news-content">{{ item.content }}</span>
    </div>
    {% endfor %}
  </div>
</section>

<hr class="section-divider">

<section class="publications-section">
  <h2 class="section-title">Selected Publications</h2>
  <div class="selected-papers">
    {% assign selected = site.data.publications | where: "selected", true %}
    {% for pub in selected %}
    <div class="publication-entry">
      <div class="pub-title">{{ pub.title }}</div>
      <div class="pub-authors">{{ pub.authors }}</div>
      <div class="pub-venue">{{ pub.venue }}, {{ pub.year }}</div>
      {% if pub.paper or pub.code %}
      <div class="pub-links">
        {% if pub.paper %}
        <a href="{{ pub.paper }}" class="pub-link" target="_blank">
          <i class="bi bi-file-pdf"></i> Paper
        </a>
        {% endif %}
        {% if pub.code %}
        <a href="{{ pub.code }}" class="pub-link" target="_blank">
          <i class="bi bi-github"></i> Code
        </a>
        {% endif %}
      </div>
      {% endif %}
    </div>
    {% endfor %}
  </div>
  <a href="{{ '/publications/' | relative_url }}" class="view-all-link">
    View all publications <span class="arrow">→</span>
  </a>
</section>
