---
title: "Jewellery Gallery"
description: "View jewellery gallery images for gold jewellery, diamond jewellery, bridal jewellery, necklaces, bangles, rings and earrings."
image: "/assets/images/bridal-jewellery.jpg"
---

<section class="page-hero compact-hero" style="background-image: linear-gradient(90deg, rgba(9,7,4,.88), rgba(9,7,4,.32)), url('{{ "/assets/images/bridal-jewellery.jpg" | relative_url }}');">
  <div class="container">
    <p class="eyebrow reveal">Gallery</p>
    <h1 class="reveal">A closer look at jewellery made for celebration.</h1>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="gallery-filters reveal" aria-label="Gallery filters">
      <button class="active" data-filter="all">All</button>
      <button data-filter="gold">Gold</button>
      <button data-filter="diamond">Diamond</button>
      <button data-filter="bridal">Bridal</button>
    </div>
    <div class="row g-4 gallery-grid">
      {% assign gallery = "gold|assets/images/gold-necklace.jpg|Gold necklace jewellery;diamond|assets/images/diamond-ring.jpg|Diamond ring jewellery;bridal|assets/images/bridal-jewellery.jpg|Bridal jewellery set;gold|assets/images/bangles.jpg|Gold bangles jewellery;diamond|assets/images/earrings.jpg|Diamond earrings jewellery;bridal|assets/images/custom-jewellery.jpg|Custom bridal jewellery" | split: ";" %}
      {% for item in gallery %}
        {% assign data = item | split: "|" %}
        <div class="col-md-6 col-lg-4 gallery-item reveal" data-category="{{ data[0] }}">
          <figure>
            <!-- Replace this placeholder image with your actual {{ data[2] }} photo. -->
            <img src="{{ data[1] | relative_url }}" alt="{{ data[2] }}">
            <figcaption>{{ data[2] }}</figcaption>
          </figure>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
