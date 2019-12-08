module.exports = (casual) => {

    const data = [];


    casual.define("user", function () {
        return {
            _id: casual.uuid,
            name: casual.first_name,
            email: casual.email
        };
    });


    for (let i = 0; i < 10; i++) {
        data.push(casual.user);
    }

    return data;

}