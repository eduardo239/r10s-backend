<template>
  <n-grid x-gap="12" cols="1">
    <n-gi>
      <n-space justify="center"> </n-space>
      <n-data-table
        :columns="columns"
        :data="course.courses"
        :pagination="pagination"
        :bordered="false"
      />
    </n-gi>
  </n-grid>
</template>

<script>
import { useRouter } from 'vue-router';
import { mapActions } from 'pinia';
import { useCourseStore } from '@/stores/course';
import { defineComponent, h, ref } from 'vue';
import { NDataTable, NGrid, NGi, NSpace, NButton } from 'naive-ui';

const createColumns = ({ view, remove }) => {
  return [
    {
      title: 'ID',
      key: '_id',
    },
    {
      title: 'Question',
      key: 'question',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            round: true,
            type: 'success',
            size: 'small',
            onClick: () => view(row),
          },
          { default: () => 'Ver mais' }
        );
      },
    },
    {
      title: 'Language',
      key: 'language',
    },
    {
      title: 'Alternatives',
      key: 'answers.length',
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            round: true,
            type: 'success',
            size: 'small',
            onClick: () => view(row),
          },
          { default: () => 'Ver mais' }
        );
      },
    },
    {
      title: 'Remove',
      key: 'remove',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: false,
            type: 'error',
            round: true,
            size: 'small',
            onClick: () => remove(row._id),
          },
          { default: () => 'Remover' }
        );
      },
    },
  ];
};

export default defineComponent({
  components: { NDataTable, NGrid, NGi, NSpace },
  setup() {
    const formRef = ref({ answers: [] });
    const answerRef = ref(null);
    const course = useCourseStore();
    const router = useRouter();

    return {
      formRef,
      answerRef,
      course,
      columns: createColumns({
        view(row) {
          router.push(`/course/${row._id}`);
        },
        remove(row) {
          const id = row;
          course.removeChallengeyByIdMDB(id);
        },
      }),
      pagination: false,
    };
  },
  methods: {
    ...mapActions(useCourseStore, []),
  },
  computed: {},
  mounted() {
    this.course.getChallengesMDB();
  },
});
</script>
