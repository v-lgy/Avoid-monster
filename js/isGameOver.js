import { stopCreate, stopMonterMove } from "./monter.js";
import { stopHeroTime } from "./hero.js";
import { stopTime,getTime } from "./timer.js";


export function gameOver() {
    // 停止创建怪物
    stopCreate();

    // 停止英雄的移动
    stopHeroTime();

    // 停止怪物移动
    stopMonterMove();

    // 停止计时
    stopTime();

    // 注销事件
    $(document).off("keydown");
    $(document).off("keyup");

    // 获取结结束的时间对象
    const resultTime = getTime();

    // 设置结束的提示文本
    let resultText;
    if (resultTime.m !== 0) {
        resultText = `游戏结束，你坚持了${resultTime.m}分${resultTime.s}秒就不行了你真太菜了！！！`;
    } else {
        resultText = `游戏结束，你坚持了${resultTime.s}秒。你真太菜了！！！`;
    }

    alert(resultText);
}