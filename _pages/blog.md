---
title: "Jewellery Blog"
description: "Read jewellery tips and guides about gold jewellery, diamond jewellery, bridal jewellery, custom jewellery, rings, bangles, earrings and necklace styling."
image: "/assets/images/gold-necklace.jpg"
---

<section class="page-hero compact-hero" style="background-image: linear-gradient(90deg, rgba(9,7,4,.88), rgba(9,7,4,.32)), url('{{ "/assets/images/gold-necklace.jpg" | relative_url }}');">
  <div class="container">
    <p class="eyebrow reveal">Jewellery journal</p>
    <h1 class="reveal">Guides for choosing jewellery with confidence.</h1>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="row g-4">
      {% for post in site.posts %}
      <div class="col-md-6 col-lg-4 reveal">
        <article class="lux-card blog-card">
          <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
          <div class="card-body">
            <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
            <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
            <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
          </div>
        </article>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
