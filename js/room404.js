const tooltip =
    document.getElementById("tooltip");

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalBody =
    document.getElementById("modalBody");

const closeBtn =
    document.getElementById("closeBtn");

/* =====================
   Tooltip名稱
===================== */

const names = {

    deskBtn: "✦ 關於我",

    bookBtn: "✦ 技能樹",

    globeBtn: "✦ 經歷",

    gramophoneBtn: "✦ 影音作品",

    projectBtn: "✦ 作品集",

    treasureBtn: "✦ 彩蛋",

    doorBtn: "✦ 離開房間"

};

/* =====================
   Modal內容
===================== */

const content = {

    deskBtn: {

        title: "關於我",

        body: `
        <p>
        「先生不知何許人也，亦不詳其姓字。但這不重要，重要的是我知道薪水該匯到哪個帳戶。」<br>
        <br><br>
         <h3>職涯目標</h3><br>
        在不犯法的前提下，用最少的工作量換取最大的經濟回報。終極夢想是成為一名「專業被動收入領取者」或「床鋪壓力測試員」。  <br>
        <br><br>
         <h3>聯絡資訊</h3><br>
        Email：dont_call_me_after_6pm@gmail.com（下班後聯絡一律視為靈異事件） <br>
        電話：0912-XXX-XXX（如果我沒接，代表我正在逃避現實） <br>
        地址：地球防衛總部 2 樓左轉底部的辦公桌 <br>
        </p>
        `
    },

    bookBtn: {

        title: "技能樹",

        body: `
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>AOS</li>
            <li>Adobe Edge Animate</li>
            <li>Web AR</li>
        </ul>
        `
    },

    globeBtn: {

        title: "經歷",

        body: `
        <p>
<h3>專長項目：</h3><br>
時間管理大師：能精準將 5 分鐘的工作量，完美分配並延伸至整個 8 小時的工作天。<br>
危機處理：當電腦當機或專案搞砸時，能以最快速度露出無辜且困惑的表情。<br>
多工處理：可以一邊聽主管訓話，一邊在腦海裡播放周杰倫的歌，同時思考晚餐要吃排骨飯還是雞排飯。<br>
<br><br>
<h3>語言能力：</h3><br>
中文（母語，擅長講廢話）<br>
英文（僅限於 Error 404、Confirm 與 Cancel）<br>
晶片語（能與公司的咖啡機進行靈魂深處的溝通）<br>
        </p>
        `
    },

    gramophoneBtn: {

        title: "影音作品",

        body: `

    <div class="video-grid">

        <a
            class="video-card"
            href="https://youtu.be/Q2qZrRZolSQ"
            target="_blank">

            <img
            src="images/video1.jpg"
            alt="作品一">

            <h3>作品一</h3>

        </a>

        <a
            class="video-card"
            href="https://youtu.be/oN6YJ5yFLVM"
            target="_blank">

            <img
            src="images/video2.jpg"
            alt="作品二">

            <h3>作品二</h3>

        </a>

        <a
            class="video-card"
            href="https://youtu.be/CW_auslhOrw"
            target="_blank">

            <img
            src="images/video3.jpg"
            alt="作品三">

            <h3>作品三</h3>

        </a>

    </div>

    `
    },

    projectBtn: {

        title: "作品集",

        body: `
        <p>
        Project 01<br>
        Project 02<br>
        Project 03
        </p>
        `
    },

    treasureBtn: {

        title: "彩蛋",

        body: `
        <p>
        恭喜找到 ROOM404 的秘密寶箱！
        </p>
        `
    }

};

/* =====================
   Hotspots
===================== */

document
    .querySelectorAll(".hotspot")
    .forEach(item => {

        item.addEventListener(
            "mousemove",
            e => {

                tooltip.innerHTML =
                    names[item.id];

                tooltip.style.left =
                    (e.clientX + 15) + "px";

                tooltip.style.top =
                    (e.clientY + 15) + "px";

                tooltip.style.opacity = 1;
            }
        );

        item.addEventListener(
            "mouseleave",
            () => {
                tooltip.style.opacity = 0;
            }
        );

        item.addEventListener(
            "click",
            () => {

                if (item.id === "doorBtn") {

                    location.href =
                        "index.html";

                    return;
                }

                modalTitle.innerHTML =
                    content[item.id].title;

                modalBody.innerHTML =
                    content[item.id].body;

                modal.classList.add(
                    "show"
                );
            }
        );

    });

/* =====================
/* =====================
   關閉 Modal
===================== */

closeBtn.addEventListener(
    "click",
    () => {
        modal.classList.remove(
            "show"
        );
    }
);

modal.addEventListener(
    "click",
    e => {

        if (e.target === modal) {

            modal.classList.remove(
                "show"
            );
        }

    }
);