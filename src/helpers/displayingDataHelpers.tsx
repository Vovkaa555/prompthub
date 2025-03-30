// Function to detect and format code blocks
const formatMessage = (content: string) => {
  const codeRegex = /```(\w+)?\n([\s\S]+?)```/g;
  const parts = content.split(codeRegex);

  return parts.map((part, index) => {
    if (index % 3 === 2) {
      const language = parts[index - 1] || 'plaintext';
      return (
        <div key={index} className="relative my-2">
          <div className="absolute top-1 right-2 text-xs text-gray-400">
            {language}
          </div>
          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm font-mono">
            <code className="whitespace-pre-wrap">
              {part
                .trim()
                .split('\n')
                .map((line, i) => (
                  <div key={i} className="leading-relaxed">
                    {highlightCode(line)}
                  </div>
                ))}
            </code>
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(part.trim())}
            className="absolute bottom-2 right-2 text-xs bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-600 transition"
          >
            Copy
          </button>
        </div>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

// Improved syntax highlighting with Tailwind
const highlightCode = (line: string) => {
  return line
    .split(
      /(\b(?:function|const|let|var|return|class|interface|extends|implements|new|import|export|if|else|switch|case|break|default|for|while|do|try|catch|finally|async|await)\b|\b(?:string|number|boolean|void|any|unknown|never|null|undefined)\b|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\/\/.*|\b(?:map|split|onClick|setState|useEffect|useState|className|props|state)\b)/g
    )
    .map((segment, index) => {
      if (segment.trim() === '') {
        return <div key={index} className="h-2"></div>;
      }
      if (
        /^(function|const|let|var|return|class|interface|extends|implements|new|import|export|if|else|switch|case|break|default|for|while|do|try|catch|finally|async|await)$/.test(
          segment
        )
      ) {
        return (
          <span key={index} className="text-blue-400">
            {segment}
          </span>
        );
      }
      if (
        /^(string|number|boolean|void|any|unknown|never|null|undefined)$/.test(
          segment
        )
      ) {
        return (
          <span key={index} className="text-purple-400">
            {segment}
          </span>
        );
      }
      if (/^".*?"$|^'.*?'$/.test(segment)) {
        return (
          <span key={index} className="text-green-400">
            {segment}
          </span>
        );
      }
      if (segment.startsWith('//')) {
        return (
          <span key={index} className="text-gray-500">
            {segment}
          </span>
        );
      }
      if (
        /\b(map|split|onClick|setState|useEffect|useState|className|props|state)\b/.test(
          segment
        )
      ) {
        return (
          <span key={index} className="text-orange-400">
            {segment}
          </span>
        );
      }
      return segment;
    });
};
export default formatMessage;
