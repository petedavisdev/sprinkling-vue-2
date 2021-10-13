export const clickCounter = {
    template: /*HTML*/ `
        <button @click="count = count + +increment">
            {{ count }}
            <slot />
        </button>
    `,
    props: {
        increment: {
            type: Number,
            default: 1,
        },
    },
    data() {
        return {
            count: 0,
        };
    },
};
