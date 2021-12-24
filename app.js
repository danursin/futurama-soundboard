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

    $(".button-sound")
        .click(async (e) => {
            const elem = $(e.currentTarget);
            const character = elem.data("character");
            await playSound(character);
        })
        .draggable({
            revert: true,
            opacity: 0.8,
            zIndex: 1,
            revertDuration: 0
        })
        .droppable({
            hoverClass: "drop",
            tolerance: "pointer",
            drop: async (event, ui) => {
                const sourceCharacter = ui.draggable.attr("data-character");
                const destinationCharacter = $(event.target).data("character");
                const name = `${sourceCharacter}_${destinationCharacter}`;
                console.log(`Dropped ${sourceCharacter} to ${destinationCharacter}`);
                try {
                    await playSound(name);
                } catch (err) {
                    await playSound("no_sound");
                }
            }
        });
});
