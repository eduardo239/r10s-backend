<template>
  <n-upload
    multiple
    directory-dnd
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :max="5"
  >
    <n-upload-dragger>
      <div style="margin-bottom: 12px">
        <n-icon size="48" :depth="3">
          <archive-icon />
        </n-icon>
      </div>
      <n-text style="font-size: 1rem">
        Click or drag a file to this area to upload
      </n-text>
      <n-p depth="3" style="margin: 8px 0 0 0">
        Strictly prohibit from uploading sensitive information.
      </n-p>
    </n-upload-dragger>
  </n-upload>
</template>

<script>
import { defineComponent } from 'vue';
import { Image as ArchiveIcon } from '@vicons/carbon';
import { NUpload, NP, NText, NIcon, NUploadDragger } from 'naive-ui';

export default defineComponent({
  components: {
    ArchiveIcon,
    NUpload,
    NP,
    NText,
    NIcon,
    NUploadDragger,
  },
});
</script>
