module.exports = {
  port: process.env.NODE_ENV === "production" ? 80 : 8080,
  logo: {
    maxWidth: 128,
    maxHeight: 128,
    minWidth: 64,
    minHeight: 64
  }
};
