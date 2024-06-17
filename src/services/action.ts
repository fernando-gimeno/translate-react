export const translate = async (text: string, targetLang: string) => {
  if (!text) return;

  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${text}&langpair=${targetLang}`
    );  
    const data = await response.json();
  
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}