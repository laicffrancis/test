const express = require("express");
const app = express();

// 模拟生成新的直播 URL
app.get("/get-nowtv-url", (req, res) => {
    // 假设动态生成 Token
    const newToken = "new-generated-token"; // 替换为动态生成逻辑
    https://ewcdn03.nowe.com/session/10-7767b1933ac906ea6a98cf47f9195/Content/DASH_VOS3/Live/channel(VOS_CH332N)/manifest.mpd?token=851c961d65415550f4c17f2f2924690b_1744359568
    const newUrl = `https://ewcdn03.nowe.com/session/10-${newToken}/Content/DASH_VOS3/Live/channel(VOS_CH332N)/manifest.mpd?token=${newToken}_1744359568`;

    res.json({ url: newUrl });
});

// 启动服务
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
