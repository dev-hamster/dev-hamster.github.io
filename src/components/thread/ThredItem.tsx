import React from 'react';

interface ThreadItemProps {
  children: React.ReactNode;
  isLast?: boolean;
}

const ThreadItem: React.FC<ThreadItemProps> = ({
  children,
  isLast = false,
}) => {
  return (
    <div className="thread-item relative pl-5 pb-2">
      {/* 트위터 스레드 연결선 */}
      {!isLast && (
        <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-gray-300" />
      )}

      {/* 내용 */}
      <div className="pt-1.5 text-gray-900 leading-relaxed">{children}</div>
    </div>
  );
};

export default ThreadItem;
