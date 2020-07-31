<template>
    <div class="cover">
        <g-image class="cover__image" src="~/assets/images/sod.jpg" alt="Stake or Die"></g-image>
    </div>
</template>

<script>
    export default {
    metaInfo: {
        title: 'Stake or Die',
        titleTemplate: ''
    }
    }
</script>

<style lang="scss" scoped>
    .cover {
        height: 100%;
        width: 100%;
        background-color: #020102;
        display: grid;
        grid-gap: 1rem;
        place-content: center center;
        color: white;

        &__image {
            width: 640px;
            max-width: 100%;
            height: auto;
        }
    }


</style>