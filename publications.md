---
layout: page
title: Publications
permalink: /publications/
---

{% assign pubs_by_year = site.data.publications | group_by: "year" | sort: "name" | reverse %}

{% for year_group in pubs_by_year %}
<div class="year-section">
  <h3>{{ year_group.name }}</h3>
  {% for pub in year_group.items %}
  {% include publication.html pub=pub %}
  {% endfor %}
</div>
{% endfor %}
