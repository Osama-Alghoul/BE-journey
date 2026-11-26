import colors from "colors";

const logger = (req, res, next) => {
  const request = `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`;

  res.on("finish", () => {
    const status = String(res.statusCode);
    let coloredStatus = status;

    if (res.statusCode >= 500) {
      coloredStatus = colors.red(status);
    } else if (res.statusCode >= 400) {
      coloredStatus = colors.yellow(status);
    } else if (res.statusCode >= 300) {
      coloredStatus = colors.cyan(status);
    } else if (res.statusCode >= 200) {
      coloredStatus = colors.green(status);
    }

    console.log(`${request} ${coloredStatus}`);
  });

  next();
};

export default logger;
