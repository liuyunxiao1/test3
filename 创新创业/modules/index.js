// 引入数据
import{data} from './data.js';
// 引入选项卡数据
import Tab from './tab.js';
// 实例化
new Tab({
    data:[...data],
    // 一层下标
    oneindex:0,
    //二层下标
    twoindex:0,
    one:document.querySelector('.one'),
    two:document.querySelector('.two'),
    main:document.querySelector('.main'),
})