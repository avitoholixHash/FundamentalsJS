function gramophone(nameBand, nameAlbum, songName) {

    let result = Math.ceil(((nameBand.length * nameAlbum.length) * songName.length / 2) / 2.5);
    console.log(`The plate was rotated ${result} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');