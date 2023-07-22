import * as fs from 'fs'

export default function handler(req, res) {

    fs.readFile(`blogdata/${req.query.slug}.json`, 'utf8', (err, data) => {
        if (!err) {
            const parsedData = JSON.parse(data)
            res.status(200).json(parsedData)
        }

        res.status(400).send('This blog is not found')

    })

}