import * as fs from 'fs'

export default async function handler(req, res) {
  let data = await fs.promises.readdir('blogdata')
  data = data.slice(0, req.query.count)
  let allblogs = []
  let myFileData;
  for (let item = 0; item < 5; item++) {
    myFileData = await fs.promises.readFile(`blogdata/${data[item]}`, 'utf8')
    allblogs.push(JSON.parse(myFileData))
  }
  res.status(200).json(allblogs)
}

