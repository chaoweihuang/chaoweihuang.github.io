---
layout: page
title: Blog
permalink: /blog/
---

<div class="blog-list">
  {% if site.posts.size > 0 %}
    {% for post in site.posts %}
    <div class="post-item">
      <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
      <h3 class="h5 mb-1">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      {% if post.description %}
      <p class="text-muted mb-0">{{ post.description }}</p>
      {% endif %}
    </div>
    {% endfor %}
  {% else %}
    <p class="text-muted">No posts yet. Check back later!</p>
  {% endif %}
</div>

{% if paginator.total_pages > 1 %}
<nav class="mt-4">
  <ul class="pagination justify-content-center">
    {% if paginator.previous_page %}
    <li class="page-item">
      <a class="page-link" href="{{ paginator.previous_page_path | relative_url }}">&laquo; Previous</a>
    </li>
    {% endif %}
    {% if paginator.next_page %}
    <li class="page-item">
      <a class="page-link" href="{{ paginator.next_page_path | relative_url }}">Next &raquo;</a>
    </li>
    {% endif %}
  </ul>
</nav>
{% endif %}
