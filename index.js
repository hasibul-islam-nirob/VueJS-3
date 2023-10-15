var app = Vue.createApp({
    data() {
        return {
            aboutMe: {
                name: "Hasibul Islam",
                nickName: "Nirob",
                website: "https://hinirob.com"
            },

            skills: [
                { name: "HTML", experience: 5 },
                { name: "CSS", experience: 10 },
                { name: "JS", experience: 15 }
            ]
        };
    },

    methods: {}
});

app.mount("#app");