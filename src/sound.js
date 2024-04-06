

class Sound {

    path = null;
    isMute = false;

    constructor(path, isMute) {
        this.path = path;
        this.isMute = isMute;

        var sound = new Audio(path);
        if(!isMute) {
            sound.play()
            .catch(e => console.error('Error al reproducir el sonido:', e));
        }
    }
}