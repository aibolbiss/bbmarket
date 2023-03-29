<template>
  <div class="filters">
    <div class="filters__types">
      <div
        class="filters__types-tabs"
        v-for="(item, index) in filters"
        :key="index"
        @click="tabs(item)"
      >
        {{ item }}
      </div>
    </div>

    <form
      @submit.prevent="onSubmit()"
      class="filters__search"
    >
      <input
        class="filters__search-input"
        type="text"
        v-model="marketStore.inputValue"
        placeholder="Поиск"
      />
      <button
        class="filters__search-btn"
        type="submit"
      >
        <img
          src="https://svgshare.com/i/rWz.svg"
          alt="Search"
        />
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useMarketStore } from '../store/index';

const filters = reactive(['Все типы', 'Прямые продажи', 'Аукцион']);
const marketStore = useMarketStore();

function tabs(item) {
  console.log(item);
}
</script>
