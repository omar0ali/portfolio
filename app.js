const app = Vue.createApp({
    data() {
        return {
            email: "bajunaidomar@outlook.com",
            phone: "(613)890-9697",
            home: "Home",
            work_exp: "Work Experience",
            projects: "Projects",
            contactInfo: "Contact Me",
            showExp: false,
            showContact: false,
            showProjects: false,
            showHome: true,
            menu: false,
            toggleExp: function () {
                this.menu = false;
                this.showExp = true;
                this.showProjects = false;
                this.showContact = false;
                this.showHome = false;
            },
            toggleProject: function () {
                this.menu = false;
                this.showExp = false;
                this.showProjects = true;
                this.showContact = false;
                this.showHome = false;
            },
            toggleContact: function () {
                this.menu = false;
                this.showExp = false;
                this.showProjects = false;
                this.showContact = true;
                this.showHome = false;
            },
            toggleHome: function() {
                this.menu = false;
                this.showExp = false;
                this.showProjects = false;
                this.showContact = false;
                this.showHome = true;
            },
            toggleMenu: function() {
                this.menu = true;
                this.showExp = false;
                this.showProjects = false;
                this.showContact = false;
                this.showHome = false;
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