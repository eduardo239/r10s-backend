<template>
  <n-space vertical>
    <n-layout>
      <n-card>
        <n-space vertical>
          <n-h2>Definition of challenge</n-h2>

          <n-space>
            <img :src="image" alt="Challenge" class="poster" />
          </n-space>

          <n-list>
            <n-h3>Noun</n-h3>
            <n-list-item>
              <n-p
                >1 A call or summons to engage in any contest, as of skill,
                strength, etc.</n-p
              >
            </n-list-item>
            <n-list-item>
              <n-p
                >2 Something that by its nature or character serves as a call to
                battle, contest, special effort, etc.:.</n-p
              >
            </n-list-item>
          </n-list>
        </n-space>

        <n-space>
          <router-link to="/challenges">
            <n-button type="primary"> See the Challenges </n-button>
          </router-link>
        </n-space>
      </n-card>
    </n-layout>
  </n-space>
</template>

<script>
import { useUserStore } from '@/stores/user';
import {
  NCard,
  NList,
  NListItem,
  NButton,
  NP,
  NH2,
  NH3,
  NLayout,
  NSpace,
} from 'naive-ui';
import image from '@/assets/images/pic1.jpg';

export default {
  components: {
    NCard,
    NList,
    NListItem,
    NButton,
    NP,
    NH2,
    NH3,
    NLayout,
    NSpace,
  },
  setup() {
    const user = useUserStore();
    return {
      user,
      image,
    };
  },
  methods: {
    // remover sign depois
  },
  computed: {},
};
</script>
