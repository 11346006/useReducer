
const topic = document.querySelector('.topic')
const BtnAll = document.querySelectorAll('button')


const data = {
    "簡單": `<div class="topic-title">
                <h1>簡單題目：小君的網頁按鈕壞掉了，請試著幫她修好程式碼</h1>
                <img src="./images-removebg-preview.png" alt="">
            </div>
    <iframe src="https://codesandbox.io/embed/v6g3ll?view=split"
                style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;" title="useReducer"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
            </iframe>`,
    "中等": `<div class="topic-title">
                <h1>中等題目：蘿拉今天嘗試做了代辦事項，但不知道為什麼壞掉了，請你幫幫她修好程式碼</h1>
                <img src="./對她是羅拉.png" alt="">
            </div>
    <iframe src="https://codesandbox.io/embed/zysw7x?view=split"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="useReducer2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
    "提示": `<h1 class="ha">提示：試著自己練習看看吧DWD~</h1>`,
    "小遊戲":`
    <div class="topic-title">
        <h1>小遊戲：不知道要幹嘛的小遊戲</h1>
    </div>
    <iframe src="https://codesandbox.io/embed/2z7pnm?view=split"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Rhythm Game-useReducer"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`
}

BtnAll.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        topic.innerHTML = data[e.target.textContent];
    })
})



