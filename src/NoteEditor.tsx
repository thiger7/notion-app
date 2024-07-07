import { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
  isPreviewMode: boolean;
  onContentChange: (content: string) => void;
};

export const NoteEditor: FC<Props> = ({
  content,
  isPreviewMode,
  onContentChange,
}) => {
  return isPreviewMode ? (
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  ) : (
    <textarea
      className="w-full h-[500px] p-2 border border-gray-300 rounded"
      value={content}
      onChange={e => onContentChange(e.target.value)}
    />
  );
};
