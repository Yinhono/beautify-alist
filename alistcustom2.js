<div id="customize" style="display: none;">
    <!-- 自定义页脚内容 -->
    <div class="custom-footer" style="text-align: center;">
        <p align="center">
            &copy; Powered by alist
            <span>|</span>
            <a target="_blank" href="https://blog.ling-yin.top/2024/11/03/mp/" >服务条款</a>
        </p>
        <p align="center">开放、平等、协作、共享 ——互联网精神</p>
    </div>

<!--延迟加载配套使用JS-->
<script>
    let interval = setInterval(() => {
        if (document.querySelector(".footer")) {
            document.querySelector("#customize").style.display = "";
            clearInterval(interval);
        }
    }, 200);
</script>
