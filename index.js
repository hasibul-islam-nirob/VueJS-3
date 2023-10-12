var App = Vue.createApp({

    data(){
        return {
           count:0
        };
    },

    methods: {
        inc(){
            this.count++;
        },
        dec(){
            this.count--;
            if (this.count < 0){
                this.count = 0;
            }
        }
    }

});

App.mount("#App");