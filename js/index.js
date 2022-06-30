import { startTime } from "./timer.js";
import { move, stopHeroTime, heroPos } from "./hero.js";
import { startCreate } from "./monter.js";
import { hero, wrapWidth, wrapHeight } from "./commonVariable.js";

// 初始化
function init() {

    // 1. 开始计时
    startTime();

    // 2. 开始生成怪物
    startCreate();

    // 3. 让小英雄到中间，并更新英雄位置信息
    const centerX = wrapWidth / 2;
    const centerY = wrapHeight / 2;
    hero.css({
        left: centerX,
        top: centerY
    })
    heroPos.x = centerX;
    heroPos.y = centerY;

    // 4. 绑定键盘事件
    $(document).on("keydown", function (e) {
        if (e.key === "ArrowUp") {
            move("up", "top");
        }
        if (e.key === "ArrowRight") {
            move("right", "left");
        }
        if (e.key === "ArrowDown") {
            move("down", "top")
        }
        if (e.key === "ArrowLeft") {
            move("left", "left");
        }
    })

    // 键盘抬起让小英雄停止
    $(document).on("keyup", function () {
        stopHeroTime();
    })
}
init();

