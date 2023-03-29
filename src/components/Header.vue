<template>
  <div class="header">
    <div class="header__block"></div>
    <div class="header__navbar">
      <div class="navbar">
        <div
          class="navbar__item"
          v-for="item in navbar"
          :key="item.id"
        >
          <router-link
            class="navbar__item-link"
            :to="item.link"
          >
            <img
              :src="item.url"
              :title="item.title"
            />
            <span class="navbar__item-text">{{ item.text }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const navbar = reactive([
  {
    id: 1,
    link: '/favorites',
    url: 'https://svgshare.com/i/rWa.svg',
    title: 'favorites',
    text: 'Избранное',
  },
  {
    id: 2,
    link: '/',
    url: 'https://svgshare.com/i/rXa.svg',
    title: 'stock',
    text: 'Склад',
  },
  {
    id: 3,
    link: '/deals',
    url: 'https://svgshare.com/i/rWk.svg',
    title: 'deals',
    text: 'Сделки',
  },
]);
</script>
