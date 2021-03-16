<template>
    <div class="row q-mb-sm">
    <q-input
    ref="name"
    outlined 
    :value="name"
    @input="$emit('update:name',$event)" 
    label="add Todo" 
    autofocus
    class="col"
    :rules="[val=> !!val || 'the title field is required']"
    >
    <template v-slot:append>
        <q-icon
            v-if="name"
            @click="$emit('update:name','')"
            name=close
            class="cursor-pointer"
        >
        </q-icon>
    </template>
    </q-input>
    </div>
</template>

<script>
export default {
    props:['name']
}
</script>