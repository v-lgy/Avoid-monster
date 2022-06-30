// 英雄每次移动多少距离
export const dis = 2;
// 获取英雄元素
export const hero = $(".hero");
// 判断是否撞到英雄的差值
export const heroW = parseInt(hero.css("width")) - 5;
// 英雄宽度的一半
export const heroHalf = parseInt(hero.css("width")) / 2;
// 游戏容器的宽度
export const wrapWidth = parseInt($(".container").css("width"));
// 游戏容器的高度
export const wrapHeight = parseInt($(".container").css("height"));
