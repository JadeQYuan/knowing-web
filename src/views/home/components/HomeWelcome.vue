<template>
    <div class="main">
        <div v-for="i in 200" class="snow" :key="i"></div>
        <p class="text">
            <template v-for="(item, index) in text">
                <span :key="index" :style="{ animationDelay: index * 0.25 + 's' }">
                    {{ item }}
                </span>
            </template>
        </p>
    </div>
</template>

<script>
export default {
    name: "HomeWelcome",
    data() {
        return {
            text: "知其然，知其所以然！"
        };
    }
};
</script>

<style scoped lang="scss">
.main {
    height: 48vh;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    background-size: 100% 48vh;
    overflow: hidden;
    filter: drop-shadow(0 0 10px white);
}

@function random_range($min, $max) {
    $rand: random();
    $random_range: $min + floor($rand * (($max - $min) + 1));
    @return $random_range;
}

@function float-text-3d($shadow-color: #bbb, $depth: 10) {
    $shadows: ();

    // When dropped, it will shrink like a spring. When floating, it grows into its shape.
    @for $i from 1 to $depth {
        @if ($i > $depth / 2) {
            $shadow-color: transparent;
        }
        $shadows: append($shadows, 0 ($i * 1px) $shadow-color, comma);
    }

    $shadows: append($shadows, 0 10px 10px rgba(0, 0, 0, 0.4), comma);
    @return $shadows;
}

.snow {
    $total: 200;
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;

    @for $i from 1 through $total {
        $random-x: random(1000000) * 0.0001vw;
        $random-offset: random_range(-100000, 100000) * 0.0001vw;
        $random-x-end: $random-x + $random-offset;
        $random-x-end-yoyo: $random-x + ($random-offset / 2);
        $random-yoyo-time: random_range(30000, 80000) / 100000;
        $random-yoyo-y: $random-yoyo-time * 100vh;
        $random-scale: random(10000) * 0.0001;
        $fall-duration: random_range(10, 30) * 1s;
        $fall-delay: random(30) * -1s;

        &:nth-child(#{$i}) {
            opacity: random(10000) * 0.0001;
            transform: translate($random-x, -10px) scale($random-scale);
            animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
        }

        @keyframes fall-#{$i} {
            #{percentage($random-yoyo-time)} {
                transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
            }
            to {
                transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
            }
        }
    }
}

.text {
    opacity: 0.95;
    width: 12em;
    height: 2em;
    position: absolute;
    top: calc(50% - 1em);
    left: calc(50% - 6em);
    font-size: 3em;
    font-weight: 600;
    display: flex;
    color: #fff;
    font-family: "Baloo Bhaijaan", cursive;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126), 0 0.9px 1.7px rgba(0, 0, 0, 0.179),
        0 1.8px 3.5px rgba(0, 0, 0, 0.224), 0 3.7px 7.3px rgba(0, 0, 0, 0.277),
        0 10px 20px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(20px);
    transition: 0.5s ease;

    &:hover {
        box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.157), 0 1.7px 2.6px rgba(0, 0, 0, 0.224),
            0 3.5px 5.3px rgba(0, 0, 0, 0.28), 0 7.3px 11px rgba(0, 0, 0, 0.346),
            0 20px 30px rgba(0, 0, 0, 0.5);
    }

    span {
        text-shadow: float-text-3d();
        animation: land 0.8s ease-out both;
    }
}

@keyframes land {
    from {
        opacity: 0;
        transform: translateY(-50%);
    }
    65% {
        opacity: 1;
        text-shadow: 0 0 25px white;
    }
    75% {
        opacity: 1;
    }
    to {
        opacity: 0.7;
        transform: translateY(0);
    }
}
</style>
