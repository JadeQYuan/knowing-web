<template>
    <div class="trunk">
        <div v-for="i1 in 2" :key="i1">
            <div v-for="i2 in 2" :key="i2">
                <div v-for="i3 in 2" :key="i3">
                    <div v-for="i4 in 2" :key="i4">
                        <div v-for="i5 in 2" :key="i5">
                            <div v-for="i6 in 2" :key="i6">
                                <div v-for="i7 in 2" :key="i7"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DanceTree"
};
</script>

<style scoped lang="scss">
.trunk,
.trunk div {
    background: #136086;
    width: 100px;
    height: 10px;
    position: fixed;
    left: 0;
    top: 95%;
    margin-left: -10px;
    animation-name: rot;
    animation-duration: 2.02s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-origin: 5px 5px;
    animation-timing-function: ease-in-out;
    z-index: -1;
}
.trunk,
.trunk div.trunk {
    bottom: 0;
    left: 12%;
    animation-name: rot-root;
    animation-duration: 2.5s;
}
.trunk > div,
.trunk div > div {
    /*opacity:0.9;*/
    top: 0;
    left: 100px;
    animation-duration: calc(inherit / 2);
    /* don't works  */
}
.trunk > div:nth-child(2),
.trunk div > div:nth-child(2) {
    /*animation-duration:15s;*/
    animation-name: rot-inv;
    animation-duration: 1.7s;
}

@keyframes rot {
    from {
        transform: rotate(15deg) scale(0.72);
    }
    to {
        transform: rotate(45deg) scale(0.72);
    }
}
@keyframes rot-inv {
    from {
        transform: rotate(-45deg) scale(0.72);
    }
    to {
        transform: rotate(-15deg) scale(0.72);
    }
}
@keyframes rot-root {
    from {
        transform: rotate(-95deg);
    }
    to {
        transform: rotate(-85deg);
    }
}
</style>
