const proxy = require('express-http-proxy');
const url = require("url");
const http = require('http');
const express = require("express");
const casual = require("casual").de_DE;

const app = express();
const server = http.Server(app);


const io = require('socket.io')(server);

app.use((req, res, next) => {
    //console.log(req.query);
    next();
});

app.use(express.static("public"));


app.use("/api/:model", (req, res, next) => {

    const data = require(`./mock/${req.params.model}.js`)(casual);

    res.json(data);

});

/*
app.use('/api/*', proxy('http://192.168.2.121/api', {
    //forwardPath: req => url.parse(req.baseUrl).path,
    proxyReqPathResolver: function (req) {


        let parts = req.url.split('?');
        let queryString = parts[1];

        let path = req.baseUrl + (queryString ? "?" + queryString : "");
        console.log(path)

        return path;

    }
}));
*/

io.on('connection', function (socket) {

    /*
        setTimeout(function () {
            console.log("Emit data event");
            socket.emit("data", [
                {
                    _id: "e49c3151-49d3-4fb1-9de0-fb31f8eb1b17",
                    title: "葉問外傳：張天志",
                    poster:
                        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/puPdv7xyTM8Zidli3TPjWbAPcWJ.jpg"
                },
                {
                    _id: "d49b3393-9725-4319-8549-8f2ec95a2989",
                    title: "Spider-Man: A New Universe",
                    poster:
                        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iSV8qnNhnOgQ1TyQbQfqEDGroFW.jpg"
                },
                {
                    _id: "d49b3393-9725-4319-8549-8f2ec95b2989",
                    title: "Phantastische Tierwesen: Grindelwalds Verbrechen",
                    poster:
                        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wNGupBYMeUCmXCT3nUUQzIVLmuf.jpg"
                },
                {
                    _id: "b6e7ce5d-d419-4747-8246-bbd8943a6590",
                    title: "Aquaman",
                    poster:
                        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/i2dF9UxOeb77CAJrOflj0RpqJRF.jpg"
                },
                {
                    _id: "b6e7ce5d-d419-4747-8246-ade8943a6590",
                    title: "Avengers: Infinity War",
                    poster:
                        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9mvgmX2b05SERQWC1IAGIdkfd8n.jpg"
                },
                {
                    _id: "a6e7ce5d-d419-4747-8246-ade8943a6590",
                    title: "Mary Poppins‘ Rückkehr",
                    poster:
                        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uIJLCtJ3iMmSh0F68NZN3QMyxUk.jpg"
                }
            ])
        }, 5000);
    
        console.log('a user connected');
    */

});



// Custom shell launcher (app autostart)
// https://www.askvg.com/how-to-apply-and-safely-use-custom-user-interface-shell-or-explorer-in-windows/
// https://docs.microsoft.com/en-us/windows-hardware/customize/enterprise/shell-launcher
// https://superuser.com/questions/1016380/how-do-i-replace-the-system-shell-explorer-exe-with-another-process-in-windows






server.listen(80, "0.0.0.0", function () {
    const addr = this.address();
    console.log("HTTP listen on %s:%d", addr.address, addr.port);
});