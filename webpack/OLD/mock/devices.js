module.exports = (casual) => {

    const data = [];


    casual.define("device", function () {
        return {
            _id: casual.uuid,
            name: casual.title, // casual.word?,
            room: casual.uuid,
            interfaces: [],
            description: casual.sentence
        };
    });


    for (let i = 0; i < 5; i++) {
        data.push(casual.device);
    }

    return data;

}