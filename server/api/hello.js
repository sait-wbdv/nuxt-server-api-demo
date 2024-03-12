export default defineEventHandler((event) => {
  return {
    intro: "Hello World Message",
    welcomeMessage:
      "To add server routes without /api prefix, put them into ~/server/routes directory.",
  };
});
