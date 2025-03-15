<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted, nextTick, watch } from 'vue'

const vIcon = ref<HTMLElement | null>(null)

interface IProps {
  path?: string
  name: string
  color?: string
}

const props = withDefaults(defineProps<IProps>(), {
  path: '',
  color: '',
})

const Icon = defineAsyncComponent(() => {
  if (props.path) {
    return import(`@/assets/icons/${props.path}/${props.name}.svg`)
  } else {
    return import(`@/assets/icons/${props.name}.svg`)
  }
})

watch(
  () => props.color,
  () => {
    setColor()
  },
)
onMounted(async () => {
  await nextTick()
  observeDOMChanges()
})

// METHODS
function setColor() {
  if (props.color) {
    vIcon.value?.firstElementChild?.querySelectorAll('path')?.forEach((item: Element) => {
      const strokeAttr = [...item.attributes].find((attr: Attr) => attr.localName === 'stroke')
      if (strokeAttr) {
        strokeAttr.value = props.color
      }
      const fillAttr = [...item.attributes].find((attr: Attr) => attr.localName === 'fill')
      if (fillAttr) {
        fillAttr.value = props.color
      }
    })
  }
}
function observeDOMChanges() {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        setColor()
      }
    }
  })

  if (vIcon.value) {
    observer.observe(vIcon.value, { childList: true, subtree: true })
  }
}
</script>

<template>
  <i class="v-icon" ref="vIcon" :style="{ color: props.color }">
    <Icon />
  </i>
</template>
