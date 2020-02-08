<template>
    <div class="main" @click="aa">
        <p class="landIn"></p>
    </div>
</template>

<script>
export default {
    name: "HomeWelcome",
    data() {
        return {
            text: "知其然，知其所以然！"
        };
    },
    mounted() {},
    methods: {
        aa() {
            let landInTexts = document.querySelectorAll(".landIn");
            landInTexts.forEach(landInText => {
                let letters = this.text.split("");
                landInText.textContent = "";
                letters.forEach((letter, i) => {
                    let span = document.createElement("span");
                    span.textContent = letter;
                    span.style.animationDelay = `${i * 5}s`;
                    landInText.append(span);
                });
            });
        }
    }
};
</script>

<style scoped lang="scss">
.main {
    display: flex;
    flex-direction: column;
    height: 48vh;
    justify-content: center;
    align-items: center;
    background-image: url("../../../assets/welcome.jpg");
    background-color: #9b9b9b;
    background-size: 100% 48vh;
}

p {
    margin: 0 9em;
    font-size: 2em;
    font-weight: 600;
}

.landIn {
    display: flex;
    flex-wrap: wrap;
    line-height: 1.8;
    color: white;
    font-family: Lora, serif;
    white-space: pre;

    span {
        animation: landIn 8s ease-out both;
    }
}

@keyframes landIn {
    from {
        opacity: 0;
        transform: translateY(-20%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
