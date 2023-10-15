var app = Vue.createApp({
    data() {
        return {
            skills: [],
            newSkill: ''
        };
    },

    methods: {
        addSkill() {
            this.skills.push({ name: this.newSkill, experience: 0 });
            this.newSkill = '';
        },
        removeSkill(i) {
            this.skills.splice(i, 1);
        }
    }
});

app.mount("#app");