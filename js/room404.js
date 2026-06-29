AOS.init({
    duration: 800,
    once: true
});

const tooltip =
    document.getElementById(
        "tooltip"
    );

const modal =
    new bootstrap.Modal(
        document.getElementById(
            "roomModal"
        ));

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalBody =
    document.getElementById(
        "modalBody"
    );

const names = {

    deskBtn: "✦ 關於我",

    bookBtn: "✦ 技能樹",

    globeBtn: "✦ 經歷",

    gramophoneBtn: "✦ 影音作品",

    projectBtn: "✦ 作品集",

    treasureBtn: "✦ 彩蛋",

    doorBtn: "✦ 返回森林"

};

document
    .querySelectorAll(".hotspot")
    .forEach(item => {

        item.addEventListener(

            "mousemove",

            e => {

                tooltip.innerHTML =
                    names[item.id];

                tooltip.style.left =
                    e.pageX + 15 + "px";

                tooltip.style.top =
                    e.pageY + 15 + "px";

                tooltip.style.opacity = 1;

            });

        item.addEventListener(

            "mouseleave",

            () => {

                tooltip.style.opacity = 0;

            });

        item.addEventListener(

            "click",

            () => {

                openContent(item.id);

            });

    });

function openContent(id) {

    switch (id) {

        case "deskBtn":

            modalTitle.innerHTML =
                "關於我";

            modalBody.innerHTML =

                `
<div data-aos="fade-up">

<h3>無名先生</h3>

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

</div>
`;

            break;

        case "bookBtn":

            modalTitle.innerHTML =
                "技能樹";

            modalBody.innerHTML =

                `
<div class="skill-item"
data-aos="fade-right">

HTML5
</div>

<div class="skill-item"
data-aos="fade-right"
data-aos-delay="100">

CSS3
</div>

<div class="skill-item"
data-aos="fade-right"
data-aos-delay="200">

JavaScript
</div>

<div class="skill-item"
data-aos="fade-right"
data-aos-delay="300">

Bootstrap
</div>

<div class="skill-item"
data-aos="fade-right"
data-aos-delay="400">

AOS
</div>

<div class="skill-item"
data-aos="fade-right"
data-aos-delay="500">

Web Design
</div>
`;

            break;

        case "globeBtn":

            modalTitle.innerHTML =
                "經歷";

            modalBody.innerHTML =

                `
<div data-aos="fade-up">

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

</div>
`;

            break;

        case "gramophoneBtn":

            modalTitle.innerHTML =
                "影音作品";

            modalBody.innerHTML =

                `
<div class="video-grid">

<a class="video-card"
href="https://youtu.be/Q2qZrRZolSQ"
target="_blank">

<img src="https://img.youtube.com/vi/Q2qZrRZolSQ/maxresdefault.jpg">

<h5>作品一</h5>

</a>

<a class="video-card"
href="https://youtu.be/oN6YJ5yFLVM"
target="_blank">

<img src="https://img.youtube.com/vi/oN6YJ5yFLVM/maxresdefault.jpg">

<h5>作品二</h5>

</a>

<a class="video-card"
href="https://youtu.be/CW_auslhOrw"
target="_blank">

<img src="https://img.youtube.com/vi/CW_auslhOrw/maxresdefault.jpg">

<h5>作品三</h5>

</a>

</div>
`;

            break;

        case "projectBtn":

            modalTitle.innerHTML =
                "作品集";

            modalBody.innerHTML =

                `
<div data-aos="zoom-in">

<h3>ROOM404</h3>

<p>
404森林探索企劃
</p>

<hr>

<h3>Project 02</h3>

<p>
未來新增
</p>

</div>
`;

            break;

        case "treasureBtn":

            modalTitle.innerHTML =
                "彩蛋";

            modalBody.innerHTML =

                `
<div data-aos="flip-left">

<h2>🗝 恭喜找到彩蛋</h2>

<p>
你已進入 ROOM404 的秘密區域。
</p>

</div>
`;

            break;

        case "doorBtn":

            location.href = "index.html";
            return;

    }

    modal.show();

    setTimeout(() => {

        AOS.refresh();

    }, 100);

}