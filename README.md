## beautify-alist
自用的 Alist 自定义，~~抄袭~~ 借鉴自各位大佬

## 使用方法

将以下内容添加进`自定义内容`，欢迎二改

```
<style>
/* === 全局字体设置（优先 Baloo Paaji 2，其次 Noto Sans SC，再次系统 sans-serif）=== */
body {
    font-family: 'Baloo Paaji 2', 'Noto Sans SC', sans-serif;
}

/* === 页面背景美化，白天/夜间模式统一使用指定背景图 === */
.hope-ui-light, .hope-ui-dark {
    background-image: url("https://pic2.ling-yin.top/file/1737789714607_nekofly.webp") !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
}

/* === 主界面各板块：透明美化风格 === */
/* 主列表白天 */
.obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-igScBhH-css {background-color: rgba(255,255,255,0.7) !important;}
/* 主列表夜间 */
.obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-iigjoxS-css {background-color: rgba(0,0,0,0.7) !important;}
/* readme 白天/夜间 */
.hope-c-PJLV.hope-c-PJLV-ikSuVsl-css {background-color: rgba(255,255,255,0.7) !important;}
.hope-c-PJLV.hope-c-PJLV-iiuDLME-css {background-color: rgba(0,0,0,0.7) !important;}
/* 右上/右下按钮白天/夜间 */
.hope-ui-light .hope-c-ivMHWx-hZistB-cv.hope-icon-button,
.hope-ui-light .hope-c-PJLV-ijgzmFG-css {background-color: rgba(255,255,255,0.7) !important;}
.hope-ui-dark .hope-c-ivMHWx-hZistB-cv.hope-icon-button,
.hope-ui-dark .hope-c-PJLV-ijgzmFG-css {background-color: rgba(0,0,0,0.7) !important;}
/* 代码块透明 */
.hope-ui-light pre, .hope-ui-dark pre {background-color: rgba(255,255,255,0.1) !important;}
/* 左侧目录白天/夜间 */
.hope-ui-light .hope-c-PJLV-ieGWMbI-css {background: rgba(255,255,255,0.7) !important;}
.hope-ui-dark .hope-c-PJLV-ieGWMbI-css {background-color: rgba(0,0,0,0.7) !important;}
/* 返回顶部按钮 */
.hope-c-PJLV-ihVEsOa-css {background: rgba(255,255,255,0.7) !important;}
.hope-ui-dark .hope-c-PJLV-ihVEsOa-css {background-color: rgba(0,0,0,0.7) !important;}
/* 未吸附顶部透明 */
.hope-c-PJLV-ikaMhsQ-css {background: rgba(255,255,255,0) !important;}
/* 顶部导航栏明暗切换 */
.hope-ui-light .hope-c-PJLV-idaeksS-css {background-color: rgba(255,255,255,0.7) !important; border-radius: var(--hope-radii-xl) !important;}
.hope-ui-dark .hope-c-PJLV-idaeksS-css {background-color: rgba(0,0,0,0.7) !important; border-radius: var(--hope-radii-xl) !important;}
/* 吸顶透明效果 */
.hope-c-PJLV-icWrYmg-css {background: rgba(255,255,255,0.7) !important;}
.hope-c-PJLV-icKsjdm-css::after, .hope-c-PJLV-ifdXShc-css::after {background: rgba(255,255,255,0.7) !important;}
.hope-ui-light .hope-c-PJLV-icKsjdm-css, .hope-ui-light .hope-c-hrsMRY {background-color: rgba(255,255,255,0.7) !important; border-radius: var(--hope-radii-xl) !important;}
.hope-ui-dark .hope-c-PJLV-icKsjdm-css, .hope-ui-dark .hope-c-hrsMRY {background-color: rgba(0,0,0,0.7) !important; border-radius: var(--hope-radii-xl) !important;}
/* 搜索栏透明 */
.hope-ui-light .hope-c-PJLV-iiBaxsN-css,
.hope-ui-light .hope-c-kvTTWD-hYRNAb-variant-filled {background-color: rgba(255,255,255,0.9) !important;}
.hope-ui-dark .hope-c-PJLV-iiBaxsN-css,
.hope-ui-dark .hope-c-kvTTWD-hYRNAb-variant-filled {background-color: rgba(0,0,0,0.9) !important;}
.hope-ui-light .hope-c-PJLV-ijMezfq-css {background-color: rgba(255,255,255,0.7) !important;}
.hope-ui-dark .hope-c-PJLV-ijMezfq-css{background-color: rgba(0,0,0,0.7) !important;}

/* === 自定义底栏样式，背景透明、圆角，与主内容配套 === */
.hope-ui-light .custom-footer, .custom-footer {
    background-color: rgba(255,255,255,0.7);
    backdrop-filter: blur(10px);
}
.hope-ui-dark .custom-footer {
    background-color: rgba(0,0,0,0.7);
    backdrop-filter: blur(10px);
}
.custom-footer {
    border-radius: 8px;
    padding: 8px 12px;
    margin: 0 auto;
    text-align: center;
    margin-top: 8px;
    max-width: 95vw;
}
.custom-footer p {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    white-space: nowrap;
}
.custom-footer a {
    color: inherit;
    text-decoration: underline;
    transition: color 0.2s;
}
.custom-footer a:hover {color: #409eff;}
</style>

<script>
(function(){
    // === 动态加载 Google Fonts，保证全局字体生效 ===
    function loadFont(url) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      document.head.appendChild(link);
    }
    loadFont('https://fonts.googleapis.com/css2?family=Baloo+Paaji+2');
    loadFont('https://fonts.googleapis.com/css2?family=Noto+Sans+SC');

    /**
     * 清空原始 .footer 内所有节点，避免与自定义底栏冲突
     */
    function cleanFooter(footer) {
        while (footer.firstChild) {
            footer.removeChild(footer.firstChild);
        }
    }

    /**
     * 构建并插入自定义底栏内容到 .footer 容器内
     */
    function insertCustomFooter() {
        var footer = document.querySelector(".footer");
        if (footer && !footer.querySelector(".custom-footer")) {
            cleanFooter(footer);
            var customFooter = document.createElement("div");
            customFooter.className = "custom-footer";
            customFooter.innerHTML = `
    <p>
        &copy; Powered by alist
        <span style="margin: 0 10px;">|</span>
        <a target="_blank" href="https://blog.ling-yin.top/2024/11/03/mp/">服务条款</a>
        <span style="margin: 0 10px;">|</span>
        <a target="_blank" href="https://i.ling-yin.top">个人主页</a>
    </p>
            `;
            footer.appendChild(customFooter);
        }
    }

    /**
     * 确保在 AList 页脚 .footer 渲染后，再插入自定义底栏
     * 避免出现底栏丢失或注入时机过早的问题
     */
    let interval = setInterval(() => {
        var footer = document.querySelector(".footer");
        if (footer) {
            insertCustomFooter();
            clearInterval(interval);
        }
    }, 200);
})();
</script>
```
