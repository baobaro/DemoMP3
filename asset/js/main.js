const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
var audio = $('audio')
const app = {
    songTimes:[

    ],
    songs: [
        {
            id:1,
            name: 'Chìm Sâu',
            author: 'MCK',
            path: 'chimsau.mp3',
            img: 'album.jpg',
        },
        {
            id:2,
            name: 'Va Vào Giai Điệu Này',
            author: 'MCK',
            path: 'vavaogiaidieu.mp3',
            img: 'album.jpg',
        },
        {
            id:3,
            name: 'Thờ Er',
            author: 'MCK',
            path: 'thoer.mp3',
            img: 'album.jpg',
        },
        {
            id:4,
            name: 'Badtrip',
            author: 'MCK',
            path: 'badtrip.mp3',
            img: 'album.jpg',
        },
        {
            id:5,
            name: 'Cuốn Cho Anh Một Điếu Nữa Đi',
            author: 'MCK',
            path: 'cuonchoanhmotdieu.mp3',
            img: 'album.jpg',
        },
        {
            id:6,
            name: '50/50',
            author: 'MCK',
            path: '5050.mp3',
            img: 'album.jpg',
        },
        {
            id:7,
            name: 'thôi em đừng đi',
            author: 'MCK',
            path: 'thoiemdungdi.mp3',
            img: 'album.jpg',
        },
        {
            id:8,
            name: 'chỉ một đêm nữa thôi',
            author: 'MCK',
            path: 'chimotdemnuathoi.mp3',
            img: 'album.jpg',
        },
        {
            id:9,
            name: 'anh đã ổn hơn',
            author: 'MCK',
            path: 'anhdaonhon.mp3',
            img: 'album.jpg',
        },
        {
            id:10,
            name: 'suit tie',
            author: 'MCK',
            path: 'suit-tie.mp3',
            img: 'album.jpg',
        },
        {
            id:11,
            name: 'tối nay ta đi đâu nhờ',
            author: 'MCK',
            path: 'toinaytadidaunho.mp3',
            img: 'album.jpg',
        }
    ],
    activeSideBar: function(){
        const sideBarItems = $$('.navigation__bar li')
        for (var sideBarItem of sideBarItems){
            sideBarItem.addEventListener('click',function(e){
                for (var sideBarItem of sideBarItems){
                    sideBarItem.classList.remove('active')
                }
                e.target.classList.add('active')
            })
        }
    },
    doWithSearchBar: function(){
        const inputItem = $('.main__search-input')
        const searchBarItem = $('.main__search')
        // Add history item
        const historyList = $('.main__search-history__list')
        var historyItems =""
        historySearch =[
             "đùa hơi quá",
             "đã yêu người có ước mơ",
             "hành lang cũ",
             "lối nhỏ"
        ]
        historySearch.forEach(function(historyItem){
            historyItems+=
            `<li>
                <i class="fa-solid fa-arrow-trend-up"></i>
                ${historyItem}
            </li>`
        })
        historyList.innerHTML = historyItems;

        // Show history search
        const historyBlock = $('.main__search-history')
        inputItem.addEventListener('click',function(e){
            historyBlock.style.display = 'block'
            searchBarItem.classList.add('active-search-bar')
        })
        inputItem.addEventListener('blur',function(e){
            historyBlock.style.display = null;
            searchBarItem.classList.remove('active-search-bar')
        })
        //Change theme
        const backgroundItem = $('.main__extension-background')
        const backgroundItemBox = $('.main__extension-background--theme')
        const closeBackgroundItem = $('.close-icon')
        closeBackgroundItem.onclick = function(){
            backgroundItemBox.classList.remove('open')
        }
        backgroundItem.onclick = function(){
            backgroundItemBox.classList.add('open')
        }
        //Prevent Default
        spanHistory = $('.main__search-history span')
        spanHistory.addEventListener('mousedown',function(e){
            e.preventDefault();
        })
    },
    themeApp: function(){
        const themeBox = $('.main__extension-background--theme-box .row')
        themes = [
            {
                id:1,
                searchBarColor: '#1F3462',
                activeColor: '#2B3F69',
                appColor: '#061D4F',
                navigationColor: '#132958',
                songBarColor: '#051740',
                buttonColor:'#3056DC',
                name:'Xanh'
            },
            {
                id:2,
                searchBarColor: '#353535',
                activeColor: '#3F3F3F',
                appColor: '#1E1E1E',
                navigationColor: '#292929',
                songBarColor: '#181818',
                buttonColor:'#8B45CA',
                name:'Tối'
            },
            {
                id:3,
                searchBarColor: '#2F2739',
                activeColor: '#393243',
                appColor: '#170F23',
                navigationColor: '#231B2E',
                songBarColor: '#130C1C',
                buttonColor:'#8B45CA',
                name:'Tím'
            },
            {
                id:4,
                searchBarColor: '#542E4A',
                activeColor: '#5D3954',
                appColor: '#411636',
                navigationColor: '#4B2240',
                songBarColor: '#4C1A3F',
                buttonColor:'#CA4974',
                name:'Hồng'
            },
            {
                id:5,
                searchBarColor: '#3B3230',
                activeColor: '#453D3A',
                appColor: '#251B18',
                navigationColor: '#302724',
                songBarColor: '#30201D',
                buttonColor:'#A4551D',
                name:'Nâu'
            },
            {
                id:6,
                searchBarColor: '#2C3F39',
                activeColor: '#374943',
                appColor: '#142922',
                navigationColor: '#20342D',
                songBarColor: '#19342C',
                buttonColor: '#138673',
                name:'Xanh rêu'
            }
        ]
        var themeItems = ''
        themes.forEach(function(theme){
            themeItems+=
            `
                <div class="col l-2-4 m-4 c-6">
                    <div class="main__extension-background--theme__item" 
                    style="background-color: ${theme.appColor}">
                        <span>${theme.name}</span>
                        <div class="change-background">
                            <button id="background__button" value="${theme.id}">Áp Dụng</button>
                        </div>
                    </div>
                </div>
            `
        })
        themeBox.innerHTML = themeItems

        // Change
        var rootStyle = document.documentElement.style;
        function changeTheme(result){
            rootStyle.setProperty('--app-color',result.appColor)
            rootStyle.setProperty('--navigation-color',result.navigationColor)
            rootStyle.setProperty('--search-bar-color',result.searchBarColor)
            rootStyle.setProperty('--active-color',result.activeColor)
            rootStyle.setProperty('--song-bar-color',result.songBarColor)
            rootStyle.setProperty('--button-color',result.buttonColor)
        }
        const buttonThemes = $$('.change-background button')
        for (var buttonTheme of buttonThemes){
            buttonTheme.addEventListener('click',function(e){
                var result = themes.find(function(theme){
                    return e.target.value == theme.id;
                })
                changeTheme(result)
            })
        }
    },
    doWithContainer: function(){
        var _this = this
        var html = ""
        const songList = $('.main__personal-song__list ul')
        this.songs.forEach(function(song){
            html +=
            `
            <li>
                <div class="main__personal-song__item">
                    <span>${song.id}</span>
                    <div class="main__personal-song__item-img">
                        <button class="main__personal-song__item-button--play" value="${song.id}">
                            <i class="fa-solid fa-play"></i>
                        </button>
                        <button class="main__personal-song__item-button--pause hide" value="${song.id}">
                            <div class="sound__bar">
                                <div class="bar"></div>
                                <div class="bar"></div>
                                <div class="bar"></div>
                                <div class="bar"></div>
                            </div>
                        </button>
                    </div>
                    <div class="main__personal-song__item-info">
                        <span class="song-name">${song.name}</span>
                        <span class="song-author">${song.author}</span>
                    </div>
                </div>
                <div class="main__personal-time__item">
                    <span class="song-time"></span>
                </div>
            </li>
            `
            songList.innerHTML = html;
        })
        //Change Songs 
        var isPlaying = false;
        var indexSong = 1;
        const buttonsChangeSong = $$('.main__personal-song button')
        const buttonsPlayPauseSong = $$('.main__personal-album button, .button-play, .button-pause')
        console.log(buttonsPlayPauseSong);
        const songItems = $$('.main__personal-song__list li')
        var newButtons =[]
        createNewButtons(indexSong)
        onclickNewButton();
        changeSong(indexSong);
        function changeSong(indexSong){
            const songBarInfo = $('.song-bar__song-item')
            console.log(songBarInfo)
            song = _this.songs.find(function(song){
                return song.id == indexSong;
            })
            audio.src = `asset/music/${song.path}`
            songBarInfo.innerHTML = 
            `
                <div class="song-bar__song-item__img" 
                style="background: url('asset/img/${song.img}') top center / contain no-repeat">
                </div>
                <div class="song-bar__song-item__info">
                    <span class="name">${song.name}</span>
                    <span class="author">
                        <i class="bi bi-explicit"></i>
                        ${song.author}
                    </span>
                </div>
            `
            for (var buttonChangeSong of buttonsChangeSong){
                if (buttonChangeSong.className.includes('play'))
                    buttonChangeSong.classList.remove('hide')
                else buttonChangeSong.classList.add('hide')
            }
            //Select the song playing
            for (var songItem of songItems)
                songItem.classList.remove('playing')
            songItems[indexSong-1].classList.add('playing')
        }
        function playPauseSong(){
            if (isPlaying) audio.play();
            else audio.pause();
        }
        function createNewButtons (indexSong){
            arrayButtons =[]
            for (var button of buttonsPlayPauseSong)
                arrayButtons.push(button)
            for (var button of buttonsChangeSong)
                if (button.value == indexSong)
                    arrayButtons.push(button)
            newButtons = arrayButtons;
        }
        // Play/Pause Song
        function changeButton(){
            for (var button of newButtons){
                if (button.className.includes('play')){
                    if (isPlaying) button.classList.add('hide')
                    else button.classList.remove('hide')
                }else{
                    if (isPlaying) button.classList.remove('hide')
                    else button.classList.add('hide')
                }
            }
        }
        //Onclick newButton 
        function onclickNewButton (){
            for(var button of newButtons){
                button.addEventListener('click',function(){
                    if (this.className.includes('play'))
                        isPlaying = true;
                    else isPlaying = false;
                    playPauseSong();
                    changeButton();
                })
            }
        }
        for (var buttonChangeSong of buttonsChangeSong){
            buttonChangeSong.addEventListener('click',function(){
                if (indexSong != this.value && this.className.includes('play')){
                    indexSong = this.value
                    changeSong(indexSong)
                    createNewButtons(indexSong)
                }
                onclickNewButton();
                if (this.className.includes('play'))
                    isPlaying = true;
                else isPlaying = false;
                playPauseSong()
                changeButton()
            })
        }
        //Select the song selected
        for (var songItem of songItems){
            songItem.addEventListener('click',function(){
                for (var songItem of songItems)
                    songItem.classList.remove('selecting')
                this.classList.add('selecting')
            })
        }
        //Next song
        audio.addEventListener('ended',function(){
            console.log('end');
            isPlaying = true
            ++indexSong
            if (indexSong==_this.songs.length+1)
                indexSong=1
            changeSong(indexSong)
            createNewButtons(indexSong)
            onclickNewButton();
            playPauseSong()
            changeButton()
        })

        //Song Bar
        const volumeBar = $('.volume-bar')
        const muted = $('.muted-volume')
        const unmuted = $('.unmuted-volume')
        volumeBar.addEventListener('input',function(){
            audio.volume = this.value; 
            if (this.value == 0) {
                muted.classList.remove('hide')
                unmuted.classList.add('hide')
                console.log('muted')
            }else{
                muted.classList.add('hide')
                unmuted.classList.remove('hide')
            } 
        })
        // Next/Back Song
        const backButton = $('.button-back')
        const nextButton = $('.button-next')
        nextButton.addEventListener('click',function(){
            isPlaying = true
            ++indexSong
            if (indexSong == _this.songs.length+1)
                indexSong=1
            changeSong(indexSong)
            createNewButtons(indexSong)
            onclickNewButton();
            playPauseSong()
            changeButton()
        })
        backButton.addEventListener('click',function(){
            isPlaying = true
            --indexSong
            if (indexSong == 0)
                indexSong = _this.songs.length
            changeSong(indexSong)
            createNewButtons(indexSong)
            onclickNewButton();
            playPauseSong()
            changeButton()
        })
        //Seek Song
        var seekBar = $('.time-bar')
        audio.addEventListener('timeupdate',function(){
            seekBar.max = Math.floor(this.duration)
            seekBar.value = Math.floor(this.currentTime)
            var percent = seekBar.value / seekBar.max * 100
            seekBar.style.background = 
            `
            linear-gradient(to right, white ${percent}%,#586276 ${percent}%)
            `
        })
        seekBar.addEventListener('input',function(){
            audio.currentTime = seekBar.value   
        })
        //Slider Input Range 
        const inputRanges = $$('input[type="range"]')
        for (var inputRange of inputRanges){
            var percent = inputRange.value / inputRange.max * 100
            inputRange.style.background =
            `
            linear-gradient(to right, white ${percent}%,#586276 ${percent}%)
            `
            inputRange.addEventListener('input',function(e){
                var percent = e.target.value / e.target.max * 100
                console.log(percent)
                e.target.style.background = 
                `
                    linear-gradient(to right, white ${percent}%,#586276 ${percent}%)
                `
            })
        }
        //Seek Bar Time 
        var currentTime = $('.current-time')
        var totalTime = $('.total-time')
        var totalTimeMin
        var totalTimeSec
        var currentTimeMin
        var currentTimeSec
        audio.addEventListener('durationchange',function(){
            //Set total time minute
            totalTimeMin = Math.floor(this.duration / 60)
            if (totalTimeMin < 10) totalTimeMin = `0${totalTimeMin}`
            //Set total time second
            totalTimeSec = Math.floor (this.duration) % 60
            if (totalTimeSec < 10) totalTimeSec = `0${totalTimeSec}`
            totalTime.innerHTML = `${totalTimeMin}:${totalTimeSec}`
            //Time 00:00
            currentTime.innerHTML = '00:00'
        })
        //Current time
        audio.addEventListener('timeupdate',function(){
            currentTimeMin = Math.floor(this.currentTime / 60)
            currentTimeSec = Math.floor(this.currentTime) % 60
            //Set current time minute
            if (currentTimeMin < 10) currentTimeMin = `0${currentTimeMin}`
            //Set current time second
            if (currentTimeSec < 10) currentTimeSec = `0${currentTimeSec}`
            currentTime.innerHTML = `${currentTimeMin}:${currentTimeSec}`
        })
    },
    start: function(){
        this.activeSideBar()
        this.doWithSearchBar()
        this.themeApp()
        this.doWithContainer()
    }
}
app.start();
