
const topic = document.querySelector('.topic')
const easy_btn = document.querySelector('.easy_btn')
const medium_btn = document.querySelector('.medium_btn')
const difficulty_btn = document.querySelector('.difficulty_btn')

var click_number = 0;

const data = {
    "簡單": `<div class="topic-title">
                <h1>題目：小君的網頁按鈕壞掉了，請試著幫他修好程式碼</h1>
                <img src="./images-removebg-preview.png" alt="">
            </div>
    <iframe src="https://codesandbox.io/embed/v6g3ll?view=split"
                style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;" title="useReducer"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
            </iframe>`,
    "中等": `<div class="topic-title">
                <h1>題目：蘿拉今天嘗試做了代辦事項，但不知道為什麼壞掉了，請你幫幫她</h1>
                <img src="./對她是羅拉.png" alt="">
            </div>
    <iframe src="https://codesandbox.io/embed/zysw7x?view=split"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="useReducer2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
    "困難": `<h1 class="ha">你難道沒有覺得中等就很困難了嗎?(下課)</h1>`,
}



easy_btn.addEventListener("click", (e) => {
    topic.innerHTML = data[e.target.textContent];
})
medium_btn.addEventListener("click", (e) => {
    topic.innerHTML = data[e.target.textContent];
    click_number++;
    console.log(click_number);

})

difficulty_btn.addEventListener("click", (e) => {
    if (click_number != 0) {
        topic.innerHTML = data[e.target.textContent];

    } else {
        alert("尚未完成中等")
    }
})

