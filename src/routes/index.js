module.exports = (app) => {
    app.get('/',
            function (req, res) {
                res.render("index")
            }
        ),
        app.get('/timestamp/:time',
            function (req, res) {
                try {
                    let time = req.params.time
                    let dateFormatOptions = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }
                    if (isNaN(time)) {
                        let naturalDate = new Date(time)
                        naturalDate = naturalDate.toLocaleDateString("en-us", dateFormatOptions)
                        let unixDate = new Date(time).getTime() / 1000
                        res.send({
                            unix: unixDate,
                            natural: naturalDate
                        })
                    } else {
                        let unixDate = time
                        let naturalDate = new Date(time * 1000)
                        naturalDate = naturalDate.toLocaleDateString("en-us", dateFormatOptions)
                        res.send({
                            unix: unixDate,
                            natural: naturalDate
                        })
                    }
                } catch (err) {
                    res.status(500).send({
                        error: "error occured trying to get time"
                    })
                }
            }
        )
}