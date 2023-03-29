<template>
  <Filters />

  <div class="card">
    <div
      class="card__item"
      v-for="market in marketStore.searchFilter"
      :key="market.id"
    >
      <div class="leftside">
        <div class="leftside__image">
          <img
            :src="market.url"
            :alt="market.title"
          />
        </div>
        <div class="leftside__content">
          <p class="leftside__content-type">{{ market.type }}</p>
          <h3 class="leftside__content-title">{{ market.title }}</h3>
          <div class="leftside__content-city">
            <img
              src="https://svgshare.com/i/rWF.svg"
              title="geo"
            />&nbsp;{{ market.city }}
          </div>
          <div class="leftside__content-salesman">
            Продавец &nbsp;<span>{{ market.salesman }}</span>
          </div>
          <div class="leftside__content-typegood">
            <p>Вид товара</p>
            <span>{{ market.typeGoods }}</span>
          </div>
          <p class="leftside__content-description">{{ market.description }}</p>
        </div>
      </div>
      <div class="rightside">
        <div>
          <h3 class="rightside__price">{{ market.price }} ₽</h3>
          <div class="rightside__quantity">
            <p>Количество:</p>
            <span>{{ market.quantity }} шт.</span>
          </div>
          <div class="rightside__quantity">
            <p>Стоимость за штуку:</p>
            <span>{{ market.costPerPiece }} ₽</span>
          </div>
        </div>

        <div class="rightside__buttons">
          <button
            class="btn btn-deals"
            @click="marketStore.isDeal(market.id)"
          >
            Добавить в сделки
          </button>
          <button
            class="btn btn-favorite"
            @click="marketStore.isFavorite(market.id)"
          >
            <img
              src="https://svgshare.com/i/rYg.svg"
              alt="Favorite"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMarketStore } from '../store/index';
import Filters from '@/components/Filters.vue';

const marketStore = useMarketStore();
components: {
  Filters;
}
</script>
