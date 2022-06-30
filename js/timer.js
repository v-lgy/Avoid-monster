// 毫秒值
let t = 0

// 显示时间的容器
const timerWrap = $(".time");

let timerId;

// 记录分钟秒和毫秒
let m;
let s;
let ms;

// 开始计时
export function startTime() {
    timerId = setInterval(() => {
        const result = new Date(t);
        m = parseInt(result.getMinutes());
        s = parseInt(result.getSeconds());
        ms = parseInt(result.getMilliseconds() / 10);

        timerWrap.text(`${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}.${ms.toString().padStart(2, "0")}`);
        t += 10;
    }, 10);
}

// 停止计时
export function stopTime() {
    clearInterval(timerId)
    timerId = null;
}

// 获取时间对象
export function getTime() {
    return {
        m,
        s,
        ms
    }
}