<template>
<q-card-actions align="right">
    <q-btn 
    flat 
    :label="lable" 
    color="primary" 
    type="submit"

    />
</q-card-actions>

</template>

<script>
export default {
    props:['lable']
}
</script>