<template>
  <n-grid x-gap="12" cols="1">
    <n-gi>
      <n-space justify="center">
        <n-h2 align-text type="success" style="padding: 1rem 1rem 0">
          <n-text type="success">Course</n-text>
        </n-h2>
      </n-space>
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
import { defineComponent, h, ref } from 'vue';
import { mapActions } from 'pinia';
import { useCourseStore } from '@/stores/course';
import { NDataTable, NGrid, NGi, NSpace, NH2, NText, NButton } from 'naive-ui';
import { useRouter } from 'vue-router';

const createColumns = ({ play }) => {
  return [
    {
      title: 'No',
      key: 'id',
    },
    {
      title: 'Question',
      key: 'question',
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
            onClick: () => play(row),
          },
          { default: () => 'Ver' }
        );
      },
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: false,
            type: 'error',
            round: true,
            size: 'small',
            onClick: () => play(row),
          },
          { default: () => 'Remover' }
        );
      },
    },
  ];
};

export default defineComponent({
  components: { NDataTable, NGrid, NGi, NSpace, NH2, NText },
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
        play(row) {
          router.push(`/course/${row.id}`);
        },
      }),
      pagination: false,
    };
  },
  methods: {
    ...mapActions(useCourseStore, ['remove']),
  },
  computed: {},
});
</script>
