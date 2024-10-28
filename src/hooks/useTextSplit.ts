import { useMemo } from "react";

type SplitOptions = {
  splitBy?: "characters" | "words"; // Allow splitting by characters or words
  preserveWhitespace?: boolean; // Whether to keep whitespaces when splitting words
};

function useTextSplit(
  text: string,
  options: SplitOptions = { splitBy: "characters", preserveWhitespace: false },
) {
  const { splitBy = "characters", preserveWhitespace = false } = options;

  // Memoize the result to avoid re-computation
  const splitText = useMemo(() => {
    if (splitBy === "characters") {
      // Split by characters
      return Array.from(text); // Use Array.from instead of spread operator
    } else if (splitBy === "words") {
      // Split by words, depending on the preserveWhitespace option
      if (preserveWhitespace) {
        return text.split(/(\s+)/); // Keep whitespace as part of the array
      }
      return text.split(/\s+/); // Split by spaces, ignoring extra spaces
    }
    return [text]; // Fallback: return the entire text as a single string
  }, [text, splitBy, preserveWhitespace]);
  return splitText;
}

export default useTextSplit;
