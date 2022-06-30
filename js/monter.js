import { heroHalf, wrapWidth, wrapHeight, heroW } from "./commonVariable.js";
import { heroPos } from "./hero.js";
import { gameOver } from "./isGameOver.js";

// 怪物的定时器
let montersTimer = [];
let createTime;


// 创建怪物
class Monster {
    constructor() {
        const mon = $("<img>").prop("src", "./img/monster.png").css({
            "left": heroHalf,
            "top": heroHalf
        }).appendTo(".monters");
        this.move(mon);
    }

    // 怪物的移动函数
    move(monster) {
        // 怪物跑多块
        let disX = this.getRandom(0.1, 0.5);
        let disY = this.getRandom(0.1, 0.5);

        const monTimer = setInterval(() => {
            // 当前怪物的位置
            const nowX = parseFloat(monster.css("left"));
            const nowY = parseFloat(monster.css("top"));

            // 撞墙反弹
            if (nowX > wrapWidth - heroHalf || nowX < heroHalf) {
                disX = -disX;
            }
            if (nowY > wrapHeight - heroHalf || nowY < heroHalf) {
                disY = - disY;
            }

            const toX = nowX + disX;
            const toY = nowY + disY;

            monster.css("left", toX);
            monster.css("top", toY);

            if (Math.abs(nowX - heroPos.x) < heroW && Math.abs(nowY - heroPos.y) < heroW) {
                gameOver();
            }
        }, 1);

        montersTimer.push(monTimer);
    }

    // 获取随机数
    getRandom(min, max) {
        return (Math.random() * max) + min;
    }
}

// 开始生成怪物
export function startCreate() {
    // 最多生成20个怪物
    new Monster();
    let num = 1;
    createTime = setInterval(() => {
        num++;
        if (num >= 20) {
            clearInterval(createTime);
        }
        new Monster();
    }, 2000);
}

// 停止生成怪物
export function stopCreate() {
    clearInterval(createTime);
    createTime = null;
}

// 停止所有怪物的移动
export function stopMonterMove() {
    montersTimer.forEach(item => clearInterval(item));
    montersTimer = [];
}