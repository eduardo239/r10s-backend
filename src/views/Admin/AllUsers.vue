<template>
  <n-data-table
    :columns="columns"
    :data="getAllUsers()"
    :pagination="pagination"
  />
</template>

<script>
import { useUserStore } from '@/stores/user';
import { defineComponent, reactive } from 'vue';
import { mapState } from 'pinia';

const columns = [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Email',
    key: 'email',
  },
  {
    title: 'uid',
    key: 'uid',
  },
  {
    title: 'isAdmin',
    key: 'isAdmin',
  },
];

// const data = Array.from({ length: 46 }).map((_, index) => ({
//   key: index,
//   name: `Edward King ${index}`,
//   age: 32,
//   address: `London, Park Lane no. ${index}`,
// }));

export default defineComponent({
  setup() {
    const user = useUserStore();

    const paginationReactive = reactive({
      page: 1,
      pageSize: 7,
      showSizePicker: true,
      pageSizes: [3, 5, 7, 10, 50, 100],
      onChange: (page) => {
        paginationReactive.page = page;
      },
      onUpdatePageSize: (pageSize) => {
        paginationReactive.pageSize = pageSize;
        paginationReactive.page = 1;
      },
    });

    return {
      user,
      columns,
      pagination: paginationReactive,
    };
  },
  methods: {
    // remover add
    ...mapState(useUserStore, ['getAllUsers']),
  },
  mounted() {
    this.user.getAllUsersMDB();
  },
});
</script>
