import { hero, dis, heroHalf, wrapWidth, wrapHeight } from "./commonVariable.js";

// 英雄移动的定时器
let timer;

// 记录英雄的位置
export const heroPos = {};

// 移动函数
export function move(dire, pos) {
    if (timer) {
        return;
    }

    // 往下和往右为正，往左和往上为负
    let inDis;
    if (dire === "down" || dire === "right") {
        inDis = dis;
    }
    if (dire === "left" || dire === "up") {
        inDis = -dis;
    }

    // 使用定时器移动英雄
    timer = setInterval(() => {
        let toPos = parseInt(hero.css(pos)) + inDis;

        // 边缘判断
        if (toPos < heroHalf) {
            toPos = heroHalf;
        }
        if (dire === "right" && toPos > wrapWidth - heroHalf) {
            toPos = wrapWidth - heroHalf;
        }
        if (dire === "down" && toPos > wrapHeight - heroHalf) {
            toPos = wrapHeight - heroHalf;
        }

        // 让英雄动起来
        hero.css(pos, toPos);

        // 更新英雄位置信息
        heroPos.x = parseInt(hero.css("left"));
        heroPos.y = parseInt(hero.css("top"));
    }, 1);
}

// 停止定时器
export function stopHeroTime() {
    clearInterval(timer);
    timer = null;
}