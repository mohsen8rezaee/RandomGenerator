export function getPage(allRecords, pageId, pageSize) {
  const totalPages = Math.ceil(allRecords.length / pageSize);
  // console.log(allRecords);
  // console.log(pageId);
  // console.log(pageSize);
  // console.log(totalPages);
  // console.log(typeof(pageSize));
  
  
  
  
  
  if (pageId < 1 || pageId > totalPages) {
    return null;
  }

  const start = (pageId - 1) * pageSize;
  const end = start + pageSize;

  const records = allRecords.slice(start, end);

  return records;
}
