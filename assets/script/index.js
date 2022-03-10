const myWork = $('#myWork');


// function for rendering workcards

function renderWork(array){
    array.forEach(workCard => {
        myWork.append(`${workCard.renderHtml()}\n`)
    })
}

renderWork(workArray);

const videos = $('.video')

for(let i=0; i<videos.length;i++) {
    $(videos[i]).mouseover(playVideo)
    $(videos[i]).mouseout(pauseVideo)
}

function playVideo(e){
    e.target.loop = true;
    e.target.play();
}

function pauseVideo(e){
    e.target.pause();
}
