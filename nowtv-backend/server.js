const express = require("express");
const app = express();

// 模拟生成新的直播 URL
app.get("/get-nowtv-url", (req, res) => {
    // 假设动态生成 Token
    const newToken = "new-generated-token"; // 替换为动态生成逻辑
    const newUrl = `https://ewcdn101.nowe.com/session/10-${newToken}/Content/DASH_VOS3/Live/channel(VOS_CH332N)/manifest.mpd?token=${newToken}_1744259720`;

    res.json({ url: newUrl });
});

// 启动服务
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
