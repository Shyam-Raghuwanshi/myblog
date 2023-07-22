import * as fs from 'fs';
const handler = async (req, res) => {
    let data = await fs.promises.readdir('contactdata')
    let userData = JSON.stringify(req.body)
    await fs.promises.writeFile(`contactdata/${data.length + 1}.json`, userData)
    res.status(200).json(req.body);

};

export default handler;