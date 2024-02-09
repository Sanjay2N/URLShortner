const shortid = require("shortid");
const URL = require("../models/url");
exports.getShortURL = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ message: "url required" });

  const shortID = shortid(8);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
};

exports.getURL = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const entry = await URL.findOneAndUpdate(
    {
      shortId: id,
    },
    {
      $push: {
        visitHistory: { time: Date.now() },
      },
    }
  );
  console.log(entry);

  return res.status(200).json({ url: entry.redirectURL });
};

exports.getURLAnalytic = async (req, res) => {
  const id = req.params.id;
  const entry = await URL.findOne({ shortId: id });
  return res
    .status(200)
    .json({ attempts: entry.visitHistory.length, history: entry.visitHistory });
};
