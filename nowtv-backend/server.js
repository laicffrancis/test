const express = require("express");
const app = express();

// 模拟生成新的直播 URL
app.get("/get-nowtv-url", (req, res) => {
    // 假设动态生成 Token
    const newToken = "new-generated-token"; // 替换为动态生成逻辑
    https://ewcdn102.nowe.com/session/10-ce05c1f086a249827d6131579cf3a/Content/DASH_VOS3/Live/channel(VOS_CH332N)/manifest.mpd?token=1eb4cbe0abfd0e6471a49bc4f76096f9_1744344498
    const newUrl = `https://ewcdn102.nowe.com/session/10-${newToken}/Content/DASH_VOS3/Live/channel(VOS_CH332N)/manifest.mpd?token=${newToken}_1744344498`;

    res.json({ url: newUrl });
});

// 启动服务
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
