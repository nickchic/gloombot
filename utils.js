import fs, { promises as fsPromises } from 'fs'

const FILENAME = "./data.json"


export const write = async (key, value) => {
    const json = getJSON()
    json[key] = value
    await overwriteJSON(json)
}

export const read = async (key) => {
    const json = getJSON()
    return json[key] || null
}

export const getJSON = () => {
    return JSON.parse(fs.readFileSync(FILENAME, 'utf8'))
}

export const overwriteJSON = async (json) => {
    await fsPromises.writeFile(FILENAME, JSON.stringify(json), "utf8")
}