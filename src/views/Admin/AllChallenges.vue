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
    <n-gi>
      <alert-message
        :error="course.error"
        :message="course.error"
        type="warning"
      ></alert-message>
    </n-gi>
  </n-grid>
</template>

<script>
import { useRouter } from 'vue-router';
import { mapActions } from 'pinia';
import { useCourseStore } from '@/stores/course';
import { defineComponent, h, ref } from 'vue';
import { NDataTable, NGrid, NGi, NSpace, NButton } from 'naive-ui';
import AlertMessage from '@/components/ui/AlertMessage';

const createColumns = ({ view, remove }) => {
  return [
    {
      title: 'ID',
      key: '_id',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            round: true,
            type: 'default',
            size: 'tiny',
            onClick: () => view(row),
          },
          { default: () => row._id }
        );
      },
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
            type: 'info',
            size: 'tiny',
            onClick: () => {
              console.log(row);
            },
          },
          {
            default: () => {
              const q = row.question;
              if (q.length > 20) return q.slice(0, 20) + ' ...';
              else return q;
            },
          }
        );
      },
    },
    {
      title: 'Language',
      key: 'language',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            round: true,
            type: 'info',
            size: 'tiny',
            onClick: () => view(row),
          },
          { default: () => row.language }
        );
      },
    },
    {
      title: 'Alternatives',
      key: 'answers.length',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            round: true,
            type: 'info',
            size: 'tiny',
            onClick: () => view(row),
          },
          { default: () => row.answers.length }
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
            round: true,
            type: 'success',
            size: 'tiny',
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
            size: 'tiny',
            onClick: () => remove(row._id),
          },
          { default: () => 'Remover' }
        );
      },
    },
  ];
};

export default defineComponent({
  components: { AlertMessage, NDataTable, NGrid, NGi, NSpace },
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
          router.push(`/challenge-description/${row._id}`);
        },
        remove(row) {
          const id = row;
          course.removeChallengeyByIdMDB(id);
        },
      }),
      pagination: true,
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
