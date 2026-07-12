export const FuriganaText = ({ text }) => {
  if (!text) return null;

  // Regex matches Kanji followed by (kana) or （kana）
  // Actually, we need to match any sequence of characters followed by (kana).
  // But usually it's just the Kanji.
  // The Kuroshiro format is: 漢字(かんじ)
  // Let's split by regex: /([^\(（]+)[\(（]([^\)）]+)[\)）]/g
  // This will match any string of non-parentheses, followed by parentheses.
  // Wait, if text is "起(お)きます", `match[1]` is "起", `match[2]` is "お".
  // If text is "私（わたし）は", `match[1]` is "私", `match[2]` is "わたし".
  // What if text is "C4(しーふぉー)カルラ"? `match[1]` is "C4", `match[2]` is "しーふぉー".
  // This seems very robust.

  const parts = [];
  let lastIndex = 0;
  // Match one or more characters that are NOT parentheses, followed by parentheses
  const regex = /([^\(（]+?)[\(（]([^\)）]+)[\)）]/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    parts.push(
      <ruby key={match.index}>
        {match[1]}
        <rt className="text-[0.6em] text-muted-foreground/80 mb-1">{match[2]}</rt>
      </ruby>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  if (parts.length === 0) return text;

  return <>{parts}</>;
};
