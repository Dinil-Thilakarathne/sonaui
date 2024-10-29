import fs from "fs";
import path from "path";

// Function to read the file content (in a server-side function like getStaticProps or getServerSideProps)
export const getFileSourceCode = (filePath: string) => {
  const fullPath = path.join(process.cwd(), filePath);
  const sourceCode = fs.readFileSync(fullPath, "utf-8");
  return sourceCode;
};
