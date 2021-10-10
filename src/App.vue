<template>
  <div class="container px-4 py-4">
    <TabGroup :defaultIndex="2">
      <TabList class="p-2 bg-green-500">
        <Tab class="text-white text-lg font-bold px-2">
          Bad UI/UX
        </Tab>
        <Tab v-for="tab in tabs" :key="tab.name"
             v-slot="{ selected }" as="template">
          <button :class="'btn tab ' + [selected ? 'active' : '']"
                  :title="tab.title">
            <fa :icon="tab.icon"></fa>
          </button>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel></TabPanel>
        <TabPanel v-for="tab in tabs" :key="tab.name">
          <component :is="tab.component" />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script>
  import { shallowRef } from 'vue'
  import PhoneNumbers from './components/PhoneNumbers.vue'
  import Volumes from './components/Volumes.vue'

  export default {
    name: 'App',
    components: {
      PhoneNumbers,
      Volumes
    },
    data() {
      return {
        tabs: [
          {
            title: 'Phone Numbers',
            icon: 'phone',
            component: shallowRef(PhoneNumbers)
          },
          {
            title: 'Volumes',
            icon: 'volume-up',
            component: shallowRef(Volumes)
          },
        ]
      }
    }
  }
</script>

<style lang="scss">
  .select {
    @apply bg-white;
    @apply rounded;
    @apply border;
    @apply border-gray-400;
    @apply hover:border-green-700;
    @apply px-1;
    @apply py-1;
    @apply m-1;
  }

  .btn {
    @apply rounded;
    @apply border;
    @apply px-2;
    @apply py-1;
    @apply m-1;

    &.tab {
      @apply py-2;
      @apply text-white;

      &.active {
        @apply text-black;
        @apply bg-white;
        @apply hover:bg-gray-100;
      }
    }

    &.outline {
      @apply border-green-600;
      @apply hover:bg-gray-100;
    }

    &.link {
      @apply text-green-500;
      @apply border-white;
      @apply hover:text-green-700;
    }

    &.full {
      @apply text-white;
      @apply bg-green-500;
      @apply border-green-500;
      @apply hover:bg-green-700;
      @apply hover:border-green-700;
    }
  }
</style>
