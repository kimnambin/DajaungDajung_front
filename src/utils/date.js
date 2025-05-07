export function getDaysAgo(postedAt) {
  // 1. 공백을 'T'로 바꿔 ISO 형식으로 변경 (브라우저 호환성 확보)
  const isoString = postedAt.replace(' ', 'T');
  const postDate = new Date(isoString);
  
  // 2. 현재 날짜를 구함
  const today = new Date();

  // 3. 시/분/초 제거해서 날짜만 비교
  const postDateOnly = new Date(postDate.getFullYear(), postDate.getMonth(), postDate.getDate());
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  // 4. 날짜 차이 계산
  const diffTime = todayOnly - postDateOnly;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // 5. 결과 반환
  if (diffDays === 0) return "오늘";
  if (diffDays === 1) return "어제";
  return `${diffDays}일 전`;
}