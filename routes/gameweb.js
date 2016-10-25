var express = require('express');
var router = express.Router();

var gameserverIp="192.168.1.101";

router.post('/game/user/register.sc', function(req, res, next) {
    var ret = {
        mc: "0",
        mm: ""
    };
    var mm = {
            a:"123456", // 游戏账号
            ra:"012345",// 关联账号
            n:"haha",// 昵称
            t:0, // 玩家类型 0：一般玩家 1：机器人
            b:300000, //金豆
            gs:gameserverIp, // 所在游戏服务器
            cn:"james", // 姓名
            p:"1234", // 账户密码
            mp:"81dc9bdb52d04dc20036dbd8313ed055", // 加密密码
            gd:"2", // 性别 0保密1女2男
            pn:"13999999999", // 联系号码
            e:"test@test.com", // email
            iup:"1", // 是否修改过密码0未修改过1已经修改过
            cd:"", // 创建时间
            ud:"", // 更新时间
            hi:"", // 头像
            so:1, // 用户排名
            ak:"", // 安全验证签名密钥
            rt:"", // 房间更新时间
            hw:0,// 已经赢[钻石挖矿场使用]
            jt:0,// 记牌器剩余有效时间(s)
            nw:0,// 需要赢
            ot:600, //比赛剩余秒数
            lt:"", // 游戏内部登录Token
            gt:1, // 当前玩的游戏类型 1：斗地主 2：麻将 3：锄大地
            ir:false, // 是否参加比赛 true:已参加 false:未参加
            rn:"rom1", // 房间名称
            round:0, // 轮次
            level:1, // 比赛阶段 1:预赛 2:决赛
            rank:2, // 用户排名
            cred:100, // 用户积分
            iq:0, // 等级等级
            //ii: private Map<String, String> iqImg; // 等级头像图标(0女地主,1男地主,2女农民,3男农民)
            tl:"title", // 称号
            in:10000, // 当前经验
            ni:10000, // 达到下一级等级所需经验
            //li:private Map<String, String> levelImg; // 等级图标(key:count,value:imagePath)
            dis:800, // 钻石的数量
            tpm:"no tipMes" // 无记牌器时的提示文本
    };
    ret["mm"] = JSON.stringify(mm);
    console.log(JSON.stringify(ret));
    res.send(JSON.stringify(ret));
});

router.post('/game/server/getServer.sc', function(req, res, next) {
    var ret = {
        mc: "0",
        mm: gameserverIp+":4000"
    };
    console.log(JSON.stringify(ret));
    res.send(JSON.stringify(ret));
});
module.exports = router;
