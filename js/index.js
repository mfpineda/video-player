        const $video = document.querySelector("#video");
        const $play = document.querySelector('#play');
        const $pausa = document.querySelector('#pause');
        const $backward = document.querySelector('#backward');
        const $forward = document.querySelector('#forward');

        $play.addEventListener("click", handlePlay);
        $pausa.addEventListener("click", handlePause);
        $backward.addEventListener("click", handleBackward);
        $forward.addEventListener("click", handleforward );

        function handlePlay(){
            $video.play();
            $play.hidden = true;
            $pausa.hidden = false;
            console.log("Click Play");
        }

        function handlePause(){
            $video.pause();
            play.hidden = false;
            $pausa.hidden = true;
            console.log("Click Pause");
        }

        function handleBackward(){
            console.log("Click backward");
            $video.currentTime -= 10;
        }

        function handleforward(){
            console.log("click forward");
            $video.currentTime += 10;  
        }

        const $progress = document.querySelector("#progress")
        $video.addEventListener("loadedmetadata", handleLoaded);
        $video.addEventListener("timeupdate", handleTimeUpdate);

        function handleLoaded(){
            $progress.max = $video.duration;
            console.log("ha cargado mi video", $video.duration);
        }

        function handleTimeUpdate() {
            $progress.value = $video.currentTime;
            // console.log("tiempo actual", $video.currentTime)
        }

        $progress.addEventListener("input", handleInput);

        function handleInput(){
            $video.currentTime = $progress.value;
            console.log($progress.value);
        }
