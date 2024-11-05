// 创建自定义内容
const customContent = `
<div id="customize" style="display: none;">
    <div class="custom-footer" style="text-align: center;">
        <p align="center">
            &copy; Powered by alist
            <span>|</span>
            <a target="_blank" href="https://blog.ling-yin.top/2024/11/03/mp/">服务条款</a>
        </p>
        <p align="center">开放、平等、协作、共享 ——互联网精神</p>
    </div>
</div>
`;

// 等待 DOM 加载完成后插入自定义内容
document.addEventListener('DOMContentLoaded', function() {
    // 将自定义内容插入到页面底部
    document.body.insertAdjacentHTML('beforeend', customContent);

    // 检查并显示自定义内容
    const interval = setInterval(() => {
        if (document.querySelector(".footer")) {
            document.querySelector("#customize").style.display = "";
            clearInterval(interval);
        }
    }, 200);
});
