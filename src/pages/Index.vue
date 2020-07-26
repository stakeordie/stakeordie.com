<template>
    <div class="cover">
        <g-image class="cover__image" src="~/assets/images/sod_moshed_small.gif" alt="Stake or Die"></g-image>
        <!--p class="cover__copy">Please wait...</p-->
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

    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

    .cover {
        height: 100%;
        width: 100%;
        background-color: #020102;
        display: grid;
        grid-gap: 1rem;
        place-content: center center;
        color: white;

        &__copy {
            font-family: 'VT323', monospace;
            text-transform: uppercase;
            text-align: center;
        }
    }


</style>