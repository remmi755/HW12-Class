class Watch {
    constructor() {
        this.newWatch = document.createElement("div");
        this.startWatch()
        this.addElement()
    }

    addElement() {
        this.newWatch.innerHTML = this.createFullFormat()
        document.body.prepend(this.newWatch);
        this.newWatch.className = 'full'
        this.newWatch.addEventListener('click', this.toggles.bind(this))
    }

    format() {
        this.hh = new Date().getHours();
        if (this.hh < 10) this.hh = '0' + this.hh;
        this.mm = new Date().getMinutes();
        if (this.mm < 10) this.mm = '0' + this.mm;
        this.ss = new Date().getSeconds();
        if (this.ss < 10) this.ss = '0' + this.ss;
    }

    createFullFormat() {
        this.format()
        return  `${this.hh}:${this.mm}:${this.ss}`
    }

    creatShotFormat() {
        this.format()
        return   `${this.hh}:${this.mm}`
    }

    render() {
        if (this.newWatch.classList.contains('full')) {
            this.newWatch.innerHTML = this.createFullFormat()
        } else {
            this.newWatch.innerHTML = this.creatShotFormat()
        }
    }

    startWatch() {
        setInterval(() => this.render(), 250);
    }

    toggles() {
        this.newWatch.classList.toggle('full')
    }
}

let watch = new Watch()
let watch2 = new Watch()
let watch3 = new Watch()
let watch4 = new Watch()
let watch5 = new Watch()

