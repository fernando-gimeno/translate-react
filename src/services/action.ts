export const translate = async (text: string, targetLang: string) => {
  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${text}&langpair=${targetLang}`
  );

  if (!response.ok) throw new Error("Failed to fetch");

  const data = await response.json();

  return data;
}