$(() => {
    const playSound = (name) => {
        return new Promise((resolve, reject) => {
            const src = `sounds/${name}.mp3`;
            const audio = new Audio(src);
            audio.addEventListener("ended", () => resolve());
            audio.addEventListener("error", () => reject());
            audio.play();
        });
    };

    $(".button-sound").click(async (e) => {
        const elem = $(e.currentTarget);
        const character = elem.data("character");
        await playSound(character);
    });

    $(".button-sound").draggable({
        delay: 200,
        opacity: 0.8,
        revert: true,
        revertDuration: 0,
        zIndex: 1
    });

    $(".button-sound").droppable({
        hoverClass: "drop",
        tolerance: "pointer",
        drop: async (event, ui) => {
            const sourceCharacter = ui.draggable.attr("data-character");
            const destinationCharacter = $(event.target).data("character");
            const [char1, char2] = [sourceCharacter, destinationCharacter].sort();
            const name = `${char1}_${char2}`;
            console.log(`Dropped ${sourceCharacter} to ${destinationCharacter}`);
            try {
                await playSound(name);
            } catch (err) {
                await playSound("no_sound");
            }
        }
    });
});
