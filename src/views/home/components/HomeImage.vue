<template>
    <div class="text-wrapper">
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
    name: "HomeImage",
    data() {
        return {
            text: "知其然，知其所以然！"
        };
    }
};
</script>

<style scoped lang="scss">
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

.text-wrapper {
    .text {
        text-align: center;
        font-size: 3em;
        font-weight: 600;
        color: #fff;
        opacity: 0.95;
        font-family: "Baloo Bhaijaan", cursive;
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
}
</style>
