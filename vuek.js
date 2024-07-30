new Vue({
    el: '#app',
    data: {
        newtext: '',
        textArray: []
    },
    methods: {
        ajouterText() {
            if (this.newtext.trim() !== '') {
                this.textArray.push({ text: this.newtext, fait: false });
                this.newtext = '';
            }
        },
        marquerFait(index) {
            this.textArray[index].fait = !this.textArray[index].fait;
        },
        suppLigne(index) {
            this.textArray.splice(index, 1);
        }
    }
})
