export const getQuote = async () => {
  try {
    const response = await fetch(
      "https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/today")
    );
    const wrapped = await response.json();
    const data = JSON.parse(wrapped.contents);
    return data[0]; // { q, a }
  } catch (error) {
    console.error("Error fetching quote:", error);
    return null;
  }
};
