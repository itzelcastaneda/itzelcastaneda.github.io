---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-inner">
    <h1>Itzel Castañeda</h1>
    <p class="tagline">Caminante, no hay camino, se hace camino al andar.</p>
    <p class="lead">Master of Computer Science student at Rice University. I explore the social side of technology — computational social science, HCI, and ethics in AI.</p>
    <p><a class="cta" href="/about">Learn more about my work →</a></p>
  </div>
</section>

<section class="posts-preview">
  <h2>Latest posts</h2>
  <ul class="post-list">
    {% for post in site.posts limit:5 %}
      <li class="post-item">
        <a href="{{ post.url }}">{{ post.title }}</a>
        <span class="post-date">{{ post.date | date: "%B %-d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>
</section>
