class Playable {
    id: string | number
    title: string
    duration: number

    constructor(newId: string | number, newTitle: string, newDuration: number) {
        this.id = newId
        this.title = newTitle
        this.duration = newDuration
    }

    play() {
        console.log(`Playing "${this.title}"...`)
    }
}

class Film extends Playable {
    director: string

    constructor(newId: string, newTitle: string, newDuration: number, newDirector: string) {
        super(newId, newTitle, newDuration)
        this.director = newDirector
    }
}


class Song extends Playable {
    artist: string

    constructor(newId: number, newTitle: string, newDuration: number, newArtist: string) {
        super(newId, newTitle, newDuration)
        this.artist = newArtist
    }
}

const myFilm = new Film('200', 'A Space Odyssey', 141, 'Stanley Kubrick')
myFilm.play()

const mySong = new Song(2000, 'Smells Like Teen Spirit', 438, 'Nirvana')
mySong.play()
