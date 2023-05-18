export default class Tab {
    constructor(obj) {
        Object.assign(this, obj);
        //渲染一层
        this.onerender();
        // 渲染第二层
        this.tworender();
        //渲染内容
        this.rendercy();
        //一层切换
        this.oneclick();
        //二层切换
        this.twoclick();
    }
     //渲染一层
     onerender() {
        this.one.innerHTML = this.data.map((item) => {
            return `<li>${item.name}</li>`
        }).join('')
        //默认高亮
        this.one.children[this.oneindex].classList.add('on')
    }
    //渲染二层
    tworender() {
        this.two.innerHTML = this.data[this.oneindex].erlist.map((item) => {
            return `<li>${item.name}</li>`
        }).join('')
        //默认高亮
        this.two.children[this.twoindex].classList.add('on')
    }
    rendercy() {
        //渲染内容
        this.main.innerHTML = this.data[this.oneindex].erlist[this.twoindex].neilist.map((item) => {
            return `
            <p>${item.pp}</p> 
            `
        }).join('')
    }
    oneclick() {
        //第一层切换
        this.one.onclick = (e) => {
            let tar = e.target;
            if (tar.tagName == 'LI') {
                //高亮 查找  删除  增加  
                let onegl = this.one.querySelector('.on');
                onegl && onegl.classList.remove('on');
                tar.classList.add('on');
                //下标
                this.oneindex = [...this.one.children].indexOf(tar);
                //默认的第二层下标
                this.twoindex = 0;
                // 切换第一层
                this.tworender();
                this.rendercy();
            }
        }
    }
    twoclick() {
        //第二层切换
        this.two.onclick = (e) => {
            let tar = e.target;
            if (tar.tagName == 'LI') {
                //高亮 查找  删除  增加  
                let twogl = this.two.querySelector('.on');
                twogl && twogl.classList.remove('on');
                tar.classList.add('on');
                //下标
                this.twoindex = [...this.two.children].indexOf(tar);
                this.rendercy();
            }
        }
    }
}