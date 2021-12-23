$(() => {
    const playSound = (name) => {
        return new Promise((resolve) => {
            const src = `sounds/${name}.mp3`;
            const audio = new Audio(src);
            audio.addEventListener("ended", () => resolve());
            audio.play();
        });
    };

    $(".button-sound").click(async (e) => {
        const elem = $(e.currentTarget);
        const character = elem.data("character");
        await playSound(character);
    });

    $(".col").draggable({
        revert: "invalid",
        opacity: 1,
        zIndex: 3,
        revertDuration: 300,
        start: function (event) {
            console.log(event);
            $(this).next().css("color", "red");
        }
    });

    // $("button").droppable({
    //     hoverClass: "drop",
    //     tolerance: "pointer",
    //     drop: function (event, ui) {
    //         console.log(event);
    //     }
    // });
});
