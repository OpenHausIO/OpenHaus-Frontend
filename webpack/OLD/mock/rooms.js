module.exports = (casual) => {

    const data = [];


    casual.define("room", function () {
        return {
            _id: casual.uuid,
            name: casual.title,
            floor: casual.integer(-2, 10)
        };
    });


    for (let i = 0; i < 8; i++) {
        data.push(casual.room);
    }

    return data;

}