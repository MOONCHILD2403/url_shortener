const shawty = require("shortid");
const table = require("../models/database");

async function handlepostlongurl(req,res){
    const short_link = shawty.generate();
    await table.create({
        longurl:req.query.url,
        shorturl: short_link,
        visithistory:[],
        clicks:0,
        last_visited:-1
    })
    res.status(201).send(short_link);
}

async function handlegeturl(req,res){
    const myurl = await table.findOne({
        shorturl:req.params.id
    })
    const thyme = new Date;
    myurl.clicks+=1;
    myurl.visithistory.push({timestamp:thyme});
    myurl.last_visited = thyme;
    await myurl.save();

    res.status(308).redirect(myurl.longurl);
}

async function handlegetanalytics(req,res){
    const myurl = await table.findOne({
        shorturl:req.params.id
    })
    res.status(200).json({
        "times clicked":myurl.clicks,
        "last visited":myurl.last_visited,
        "visit history":myurl.visithistory
    });
}

module.exports = {
    handlepostlongurl,
    handlegeturl,
    handlegetanalytics
};