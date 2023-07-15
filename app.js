const app = Vue.createApp({
    data() {
        return {
            showExp: false,
            showContact: false,
            showProjects: false,
            showHome: true,
            btnTitle: "Show Experience",
            toggleExp: function () {
                this.showExp = true;
                this.showProjects = false;
                this.showContact = false;
                this.showHome = false;
            },
            toggleProject: function () {
                this.showExp = false;
                this.showProjects = true;
                this.showContact = false;
                this.showHome = false;
            },
            toggleContact: function () {
                this.showExp = false;
                this.showProjects = false;
                this.showContact = true;
                this.showHome = false;
            },
            toggleHome() {
                this.showExp = false;
                this.showProjects = false;
                this.showContact = false;
                this.showHome = true;
            },
            isMobile() {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            }
        }
    }
});

app.mount('#app');//Mount app in the DOM.